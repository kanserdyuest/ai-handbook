// Functional checks + targeted screenshots.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const CHROME = process.env.CHROME_PATH || (
  process.platform === 'win32'
    ? 'C:/Program Files/Google/Chrome/Application/chrome.exe'
    : process.platform === 'darwin'
      ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      : '/usr/bin/google-chrome'
);
const URL_ = process.argv[2];
const PORT = 9600 + Math.floor(Math.random() * 200);
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const proc = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--mute-audio',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${path.resolve('.cdp-' + PORT)}`,
  '--window-size=1440,900', 'about:blank'
], { stdio: 'ignore' });

const results = [];
const ok = (name, cond, extra) => { results.push([cond ? 'PASS' : 'FAIL', name, extra || '']); };

async function main() {
  for (let i = 0; i < 80; i++) {
    try { const r = await fetch(`http://127.0.0.1:${PORT}/json/version`); if (r.ok) break; } catch (e) { }
    await sleep(150);
  }
  const t = await (await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' })).json();
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0; const pending = new Map();
  ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
  const send = (method, params = {}) => new Promise((res, rej) => {
    const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params }));
    setTimeout(() => { if (pending.has(i)) { pending.delete(i); rej(new Error('timeout ' + method)); } }, 60000);
  });
  const evalJs = async (expression) => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (r.result && r.result.exceptionDetails) return { err: r.result.exceptionDetails.text };
    return r.result.result.value;
  };
  const shot = async (file) => {
    const s = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(file, Buffer.from(s.result.data, 'base64'));
  };

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: URL_ });
  await sleep(2200);

  const errs = await evalJs('window.__errs || null');
  const nTerms = await evalJs("document.querySelectorAll('.term').length");
  ok('183 张卡片', nTerms === 183, 'got ' + nTerms);

  const vis0 = await evalJs("[...document.querySelectorAll('.term')].filter(e=>e.offsetParent!==null).length");
  ok('核心词优先展示', vis0 > 90 && vis0 < 140, 'visible ' + vis0);

  await evalJs("document.querySelector('.more').click()");
  await sleep(300);
  const vis1 = await evalJs("[...document.querySelectorAll('.term')].filter(e=>e.offsetParent!==null).length");
  ok('展开后卡片变多', vis1 > vis0, vis0 + ' -> ' + vis1);

  // token demo
  await evalJs(`(()=>{const i=document.querySelector('.tok-input'); i.value='测试一下 tokenization 效果'; i.dispatchEvent(new Event('input',{bubbles:true})); return 1})()`);
  await sleep(600);
  const chips = await evalJs("document.querySelectorAll('.tok-out .chip').length");
  const stats = await evalJs("document.querySelector('.tok-stats').textContent");
  ok('分词演示出块', chips > 5, chips + ' chips / ' + stats.trim().slice(0, 40));

  // context slider
  await evalJs(`(()=>{const r=document.querySelector('#ctxRange'); r.value=100; r.dispatchEvent(new Event('input',{bubbles:true})); return 1})()`);
  await sleep(300);
  const ctx = await evalJs("document.querySelector('#ctxTok').textContent + '|' + document.querySelector('#ctxLat').textContent");
  ok('上下文滑块联动', parseInt(ctx, 10) > 110, ctx);

  // myths accordion
  await evalJs("document.querySelector('.myth summary').click()");
  await sleep(300);
  const mythOpen = await evalJs("document.querySelector('.myth').open === true");
  ok('误解可展开', mythOpen === true, String(mythOpen));

  // search
  await evalJs(`(()=>{const s=document.querySelector('#termSearch'); s.value='缓存'; s.dispatchEvent(new Event('input',{bubbles:true})); return 1})()`);
  await sleep(300);
  const cnt = await evalJs("document.querySelector('#searchCount').textContent");
  const chipN = await evalJs("document.querySelectorAll('.term-chip').length");
  ok('搜索过滤', chipN > 0 && chipN < 183, cnt + ' / chips ' + chipN);

  // click a chip -> expands + scrolls
  await evalJs("document.querySelector('.term-chip').click()");
  await sleep(900);
  const sy = await evalJs('window.scrollY');
  ok('点索引会跳转', sy > 400, 'scrollY ' + sy);

  // agent demo
  await evalJs("document.getElementById('agentLog').scrollIntoView({block:'center'})");
  await sleep(2600);
  const agentLines = await evalJs("document.querySelectorAll('#agentLog .ln').length");
  const dotX = await evalJs("document.getElementById('agentDot').getAttribute('cx')");
  ok('Agent 日志在跑', agentLines >= 1, 'lines ' + agentLines + ' dot ' + dotX);
  await sleep(200);
  await shot('_v_agent.png');

  // rag demo
  await evalJs("document.querySelector('.rag').scrollIntoView({block:'center'})");
  await sleep(4200);
  const ragOk = await evalJs("!!document.querySelector('.rag-doc.hit') && document.querySelector('.rag-a').classList.contains('in')");
  ok('RAG 演示跑完', ragOk === true, String(ragOk));
  await shot('_v_rag.png');

  // 3d exploded
  await evalJs("document.getElementById('x3d').scrollIntoView({block:'start'})");
  await sleep(2400);
  const nPlates = await evalJs("document.querySelectorAll('.plate').length");
  const nLabs = await evalJs("document.querySelectorAll('.x3d-lab').length");
  const plZ = await evalJs("(document.querySelectorAll('.plate')[3].style.transform||'')");
  const labT = await evalJs("document.querySelectorAll('.x3d-lab')[0].style.transform||''");
  const pathD = await evalJs("(document.querySelector('#xLinks path')||{}).getAttribute ? document.querySelector('#xLinks path.xln').getAttribute('d') : ''");
  const stInfo = await evalJs("(()=>{const s=document.getElementById('xStage');const l=document.querySelectorAll('.x3d-lab');const a=l[0].getBoundingClientRect(),b=l[1].getBoundingClientRect();return s.clientHeight+'h gap '+Math.round(b.top-a.top)+' labH '+Math.round(a.height);})()");
  ok('3D 拆解：8 块板 + 8 个标签', nPlates === 8 && nLabs === 8, nPlates + '/' + nLabs + ' | ' + stInfo);
  ok('3D 已拆开且标注就位', /translate3d/.test(plZ) && /translate\(/.test(labT) && /^M/.test(pathD || ''), plZ + ' | ' + labT + ' | ' + (pathD || '').slice(0, 24));
  const hoverOk = await evalJs("(()=>{const l=document.querySelectorAll('.x3d-lab')[2]; l.dispatchEvent(new MouseEvent('mouseenter',{bubbles:true})); return document.querySelectorAll('.plate.on').length;})()");
  ok('3D 悬停联动', hoverOk === 1, 'on plates ' + hoverOk);
  await evalJs("document.querySelectorAll('.x3d-lab')[2].dispatchEvent(new MouseEvent('mouseleave',{bubbles:true}))");
  await evalJs("document.getElementById('xCanvas').scrollIntoView({block:'center'})");
  await sleep(500);
  await shot('_v_x3d.png');

  // journey
  await evalJs("document.getElementById('journey').scrollIntoView({block:'start'})");
  await sleep(2600);
  const jN = await evalJs("document.querySelectorAll('.j-step').length");
  const jOn = await evalJs("document.querySelectorAll('.j-step.on').length");
  const jFill = await evalJs("document.getElementById('jList').style.getPropertyValue('--fill')");
  ok('旅程 9 步且在走', jN === 9 && jOn === 1 && jFill !== '', 'steps ' + jN + ' on ' + jOn + ' fill ' + jFill);
  const jBar = await evalJs("document.querySelector('#jBars .tr i').style.width");
  ok('耗时条已展开', jBar === '31%', jBar);
  await shot('_v_journey.png');

  // hero
  await evalJs('window.scrollTo(0,0)');
  await sleep(1500);
  await shot('_v_hero.png');

  // console errors
  const e2 = await evalJs('window.__errs || null');
  ok('无 JS 运行时错误', !e2, JSON.stringify(e2));

  console.log(results.map(r => r.join('  |  ')).join('\n'));
  ws.close(); proc.kill();
  process.exit(0);
}

main().catch(e => { console.error(e); try { proc.kill(); } catch (_) { } process.exit(1); });

