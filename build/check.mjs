// Functional checks + targeted screenshots.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { SCREENSHOTS, BROWSERS } from './cache-paths.mjs';

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
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${path.join(BROWSERS, 'cdp-' + PORT)}`,
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
  const runtimeErrors = [];
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.method === 'Runtime.exceptionThrown') runtimeErrors.push(m.params.exceptionDetails);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  };
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
    fs.writeFileSync(path.join(SCREENSHOTS, path.basename(file)), Buffer.from(s.result.data, 'base64'));
  };

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: URL_ });
  await sleep(2200);

  const nTerms = await evalJs("document.querySelectorAll('.term').length");
  const expectedTerms = await evalJs('window.AI_DATA.total');
  ok('卡片数与数据一致', nTerms === expectedTerms, 'got ' + nTerms);

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
  ok('搜索过滤', chipN > 0 && chipN < expectedTerms, cnt + ' / chips ' + chipN);

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
  ok('耗时条已展开', jBar === '100%', jBar);
  const journeyMatches = await evalJs(`(() => {
    const j = window.AI_DATA.journey;
    return document.getElementById('journeyIntro').textContent === j.intro &&
      [...document.querySelectorAll('.j-step')].every((el, i) =>
        el.querySelector('h3').textContent === j.steps[i][1] &&
        el.querySelector('p').textContent === j.steps[i][2]) &&
      document.getElementById('journeyBarNote').textContent === j.bar_note &&
      [...document.querySelectorAll('#journeyNotes li')].map(el => el.textContent).join('|') === j.notes.join('|');
  })()`);
  ok('旅程内容与共用数据一致', journeyMatches === true);
  await shot('_v_journey.png');

  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: URL_ });
  await sleep(1800);
  await evalJs("document.documentElement.style.scrollBehavior='auto'; document.getElementById('journey').scrollIntoView({block:'start',behavior:'instant'})");
  await sleep(500);
  const mobileSize = await evalJs('({width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth, viewport: window.visualViewport.width})');
  ok('移动端无横向溢出', mobileSize.width === 390 && mobileSize.scroll <= 390 && Math.abs(mobileSize.viewport - 390) < 1, JSON.stringify(mobileSize));
  await shot('_v_journey_mobile.png');
  await evalJs("document.querySelector('.j-notes').scrollIntoView({block:'start',behavior:'instant'})");
  await shot('_v_journey_notes_mobile.png');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });

  // hero
  await evalJs('window.scrollTo(0,0)');
  await sleep(1500);
  await shot('_v_hero.png');

  await evalJs("document.getElementById('openSearch').click()");
  await evalJs("document.getElementById('quickSearch').value='GraphRAG';document.getElementById('quickSearch').dispatchEvent(new Event('input'))");
  ok('快捷搜索包含解释', await evalJs("document.querySelectorAll('.quick-result').length===1 && document.querySelector('.quick-result span').textContent.length>10"));
  await shot('_v_search.png');
  await evalJs("document.querySelector('.quick-result').click()");
  await sleep(260);
  ok('搜索打开词条并更新地址', await evalJs("location.hash.startsWith('#t-rag-') && document.querySelector('#ch-rag').classList.contains('open') && !document.getElementById('backToResults').hidden"));
  await evalJs("document.getElementById('backToResults').click()");
  ok('返回搜索保留关键词', await evalJs("document.getElementById('readerDialog').open && document.getElementById('quickSearch').value==='GraphRAG'"));
  await evalJs("document.getElementById('closeReader').click();document.getElementById('openContents').click()");
  ok('目录覆盖所有章节', await evalJs("document.querySelectorAll('#readerContents a').length===window.AI_DATA.layers.length"));
  await evalJs("document.getElementById('closeReader').click()");
  await evalJs("document.querySelector('#journey .demo-controls button:nth-child(2)').click()");
  const pausedStep = await evalJs("document.querySelector('.j-step.on').dataset.i");
  await sleep(1400);
  ok('旅程手动前进后暂停', pausedStep === await evalJs("document.querySelector('.j-step.on').dataset.i"));
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: URL_.split('#')[0] });
  await sleep(1800);
  await shot('_v_home_mobile.png');
  await evalJs("document.getElementById('openContents').click()");
  ok('手机目录可用', await evalJs("document.getElementById('readerDialog').open && document.getElementById('readerContents').offsetWidth>0"));
  await shot('_v_contents_mobile.png');
  await evalJs("document.getElementById('closeReader').click()");

  await evalJs("document.querySelector('.x3d-lab[href]').click()");
  await sleep(380);
  ok('三维选层显示解释与入口', await evalJs("document.querySelector('#layerDetail p').textContent.length>10 && document.querySelector('#layerDetail a').getAttribute('href').startsWith('#ch-')"));
  await evalJs("document.getElementById('resetLayer').click()");
  await sleep(380);
  ok('重置选层恢复提示与图层', await evalJs("document.getElementById('layerDetailContent').textContent==='选择图中的层级，查看它的作用与代表词。' && document.getElementById('resetLayer').hidden && [...document.querySelectorAll('.plate')].every(p=>p.style.opacity==='')"));
  await evalJs("document.querySelectorAll('.x3d-lab[href]')[0].click();document.querySelectorAll('.x3d-lab[href]')[1].click()");
  await sleep(380);
  ok('快速切换以最后选层为准', await evalJs("document.querySelector('#layerDetail strong').textContent.includes('Harness')"));
  await evalJs("document.querySelectorAll('.x3d-lab[href]')[1].click()");
  await sleep(380);
  ok('重复点击选层可复原', await evalJs("document.getElementById('resetLayer').hidden && !document.querySelector('#layerDetail strong')"));
  await evalJs("document.querySelector('#ch-agent .demo-controls button').click()");
  const pausedDot = await evalJs("document.getElementById('agentDot').getAttribute('cx')");
  await sleep(400);
  ok('Agent 可暂停', pausedDot === await evalJs("document.getElementById('agentDot').getAttribute('cx')"));

  await evalJs("document.getElementById('openSearch').click()");
  await sleep(260);
  await evalJs("document.getElementById('readerDialog').dispatchEvent(new Event('cancel',{cancelable:true}))");
  ok('关闭过渡期间保持模态', await evalJs("document.getElementById('readerDialog').open"));
  await sleep(260);
  ok('关闭过渡结束释放模态', await evalJs("!document.getElementById('readerDialog').open && document.body.style.overflow!== 'hidden'"));
  await evalJs("window.scrollTo({top:1600,behavior:'instant'})");
  await sleep(100);
  ok('滚动后出现返回顶部', await evalJs("document.getElementById('backToTop').classList.contains('is-visible')"));
  await sleep(1800);
  ok('返回顶部自动收起文字', await evalJs("!document.getElementById('backToTop').classList.contains('is-expanded')"));
  await shot('_v_back_top_mobile.png');
  await evalJs("document.getElementById('backToTop').click()");
  await sleep(1500);
  ok('一键回到顶部并隐藏', await evalJs("window.scrollY<5 && !document.getElementById('backToTop').classList.contains('is-visible')"));

  // console errors
  ok('无 JS 运行时错误', runtimeErrors.length === 0, JSON.stringify(runtimeErrors));

  console.log(results.map(r => r.join('  |  ')).join('\n'));
  ws.close(); proc.kill();
  process.exit(results.some(r => r[0] === 'FAIL') ? 1 : 0);
}

main().catch(e => { console.error(e); try { proc.kill(); } catch (_) { } process.exit(1); });

