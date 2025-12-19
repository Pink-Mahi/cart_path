import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/services',
  '/technology',
  '/maintenance',
  '/gallery',
  '/case-studies',
  '/locations',
  '/florida-cart-path-cleaning',
  '/markets',
  '/faq',
  '/contact',
];

const rootDir = path.resolve(__dirname, '..');
const clientDir = path.resolve(rootDir, 'dist', 'client');
const serverEntry = path.resolve(rootDir, 'dist', 'server', 'entry-server.js');

const template = await readFile(path.resolve(clientDir, 'index.html'), 'utf-8');
const { render } = await import(pathToFileURL(serverEntry).href);

function routeToFile(route) {
  if (route === '/') return path.resolve(clientDir, 'index.html');
  const folder = route.replace(/^\//, '');
  return path.resolve(clientDir, folder, 'index.html');
}

for (const route of routes) {
  const { appHtml, head } = render(route);

  let html = template;
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  html = html.replace('</head>', `${head}</head>`);

  const outFile = routeToFile(route);
  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, html, 'utf-8');
}

await copyFile(path.resolve(clientDir, 'index.html'), path.resolve(clientDir, '404.html'));
