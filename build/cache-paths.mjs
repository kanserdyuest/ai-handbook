// Keep local browser profiles and screenshots out of the project root.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
export const CACHE = fileURLToPath(new URL('../.codex-cache/', import.meta.url));
export const SCREENSHOTS = path.join(CACHE, 'screenshots');
export const BROWSERS = path.join(CACHE, 'browsers');
fs.mkdirSync(SCREENSHOTS, { recursive: true });
fs.mkdirSync(BROWSERS, { recursive: true });
