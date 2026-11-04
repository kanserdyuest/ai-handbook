// Full-page screenshot driver over CDP (no external deps).
// usage: node shoot.mjs <url> <outPrefix> [chunkHeight] [width]
// 需要本机有 Chrome；可用 CHROME_PATH 环境变量指定路径。
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
const OUT = process.argv[3] || '_shot';
const CHUNK = parseInt(process.argv[4] || '4000', 10);
const PORT = 9333 + Math.floor(Math.random() * 200);
const WIDTH = parseInt(process.argv[5] || '1440', 10);

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const proc = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
  '--disable-extensions', '--mute-audio',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${path.resolve('.cdp-' + PORT)}`,
  `--window-size=${WIDTH},1000`,
  'about:blank'
], { stdio: 'ignore' });

async function waitPort() {
  for (let i = 0; i < 80; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (r.ok) return await r.json();
    } catch (e) { /* not up yet */ }
    await sleep(150);
  }
  throw new Error('chrome did not start');
}

async function main() {
  await waitPort();
  const t = await (await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' })).json();
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

  let id = 0;
  const pending = new Map();
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  };
  const send = (method, params = {}) => new Promise((res, rej) => {
    const i = ++id;
    pending.set(i, (m) => res(m));
    ws.send(JSON.stringify({ id: i, method, params }));
    setTimeout(() => { if (pending.has(i)) { pending.delete(i); rej(new Error('timeout ' + method)); } }, 60000);
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: WIDTH, height: 1000, deviceScaleFactor: 1, mobile: false
  });
  await send('Page.navigate', { url: URL_ });

  for (let i = 0; i < 60; i++) {
    const r = await send('Runtime.evaluate', { expression: 'document.readyState', returnByValue: true });
    if (r.result && r.result.result && r.result.result.value === 'complete') break;
    await sleep(200);
  }
  await sleep(1800);

  const box = await send('Runtime.evaluate', {
    expression: 'JSON.stringify({h: Math.min(document.documentElement.scrollHeight, 40000), w: document.documentElement.scrollWidth})',
    returnByValue: true
  });
  const size = JSON.parse(box.result.result.value);
  console.log('page size', size);

  const files = [];
  for (let y = 0; y < size.h; y += CHUNK) {
    const h = Math.min(CHUNK, size.h - y);
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: { x: 0, y, width: WIDTH, height: h, scale: 1 }
    });
    if (!shot.result || !shot.result.data) { console.log('capture failed at', y, JSON.stringify(shot).slice(0, 300)); continue; }
    const f = `${OUT}_${String(y / CHUNK).padStart(2, '0')}.png`;
    fs.writeFileSync(f, Buffer.from(shot.result.data, 'base64'));
    files.push(f);
    console.log('saved', f);
  }

  ws.close();
  proc.kill();
  console.log('done', files.join(' '));
  process.exit(0);
}

main().catch((e) => { console.error(e); try { proc.kill(); } catch (_) { } process.exit(1); });
