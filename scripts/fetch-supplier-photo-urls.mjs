/**
 * Обходит карточки товаров у поставщика и достаёт адреса фотографий.
 *
 * На вход — scripts/.cache/price-links.json (см. extract-price-links.py):
 * ссылки на HTML-страницы товаров. На странице фото лежит в блоке
 * b-goods-gallery: <a href="/_thumbs/galleries-popup/src-NNN.jpg">.
 * Товары без фото отдают заглушку no-image.png — такие пропускаем.
 *
 * Результат — src/data/supplierPhotos.js: карта «Бренд|Артикул» → имя файла
 * (src-NNN.jpg). Полный адрес собирается в src/lib/productImage.js: там же
 * выбирается размер (в карточке каталога поменьше, на странице товара крупнее).
 *
 * Ответы кэшируются в scripts/.cache/photo-urls.json, поэтому повторный запуск
 * дёргает только то, что ещё не разобрано. Чтобы перечитать всё: --force.
 *
 * Запуск:  node scripts/fetch-supplier-photo-urls.mjs [--force] [--limit=N]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { products } from '../src/data/products.js';

const REPO = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const CACHE_DIR = path.join(REPO, 'scripts/.cache');
const LINKS = path.join(CACHE_DIR, 'price-links.json');
const CACHE = path.join(CACHE_DIR, 'photo-urls.json');
const OUT = path.join(REPO, 'src/data/supplierPhotos.js');

// Домен кириллический: fetch не резолвит его без приведения к punycode.
const HOST = 'https://xn--e1aaigqeofr.xn--90ais';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
  + '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const CONCURRENCY = 6;
const RETRIES = 2;

const force = process.argv.includes('--force');
const limitArg = process.argv.find((a) => a.startsWith('--limit='));
const limit = limitArg ? Number(limitArg.split('=')[1]) : Infinity;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function toPuny(url) {
  try {
    const u = new URL(url);
    return HOST + u.pathname + u.search;
  } catch {
    return null;
  }
}

/** Имя файла главного фото карточки, либо null если фото нет. */
export function mainPhotoFile(html) {
  const block = html.match(/b-goods-gallery__top-gallery[\s\S]{0,3000}/);
  const scope = block ? block[0] : '';
  const patterns = [
    /href="\/_thumbs\/galleries-popup\/([^"]+)"/,
    /data-src="\/_thumbs\/galleries-product_slider\/([^"]+)"/,
    /data-src="\/_thumbs\/galleries-product_small\/([^"]+)"/,
  ];
  for (const re of patterns) {
    const m = scope.match(re);
    if (m && !/no-image/.test(m[1])) return m[1];
  }
  return null;
}

async function fetchPage(url) {
  for (let attempt = 0; attempt <= RETRIES; attempt += 1) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 25000);
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': UA, 'Accept-Language': 'ru-RU,ru;q=0.9' },
        signal: ctrl.signal,
        redirect: 'follow',
      });
      if (res.status === 404) return { gone: true };
      if (!res.ok) throw new Error(String(res.status));
      return { html: await res.text() };
    } catch (err) {
      if (attempt === RETRIES) return { error: String(err.message || err) };
      await sleep(800 * (attempt + 1));
    } finally {
      clearTimeout(timer);
    }
  }
  return { error: 'unreachable' };
}

const links = JSON.parse(fs.readFileSync(LINKS, 'utf8')).slice(0, limit);
const cache = !force && fs.existsSync(CACHE)
  ? JSON.parse(fs.readFileSync(CACHE, 'utf8'))
  : {};

const todo = links.filter((r) => !(r.url in cache));
console.log(`страниц всего: ${links.length}, в кэше: ${links.length - todo.length}, к обходу: ${todo.length}`);

let done = 0;
let saved = 0;
const queue = [...todo];
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const row = queue.shift();
    const res = await fetchPage(toPuny(row.url));
    if (res.error) cache[row.url] = { error: res.error };
    else if (res.gone) cache[row.url] = { gone: true };
    else cache[row.url] = { file: mainPhotoFile(res.html) };
    done += 1;
    if (cache[row.url].file) saved += 1;
    if (done % 50 === 0) {
      fs.writeFileSync(CACHE, JSON.stringify(cache));
      console.log(`  ${done}/${todo.length}, с фото ${saved}`);
    }
    await sleep(120);
  }
}));
fs.writeFileSync(CACHE, JSON.stringify(cache));

// --- сшивка с каталогом ------------------------------------------------
const norm = (s) => String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
const bySku = new Map();
const byName = new Map();
for (const r of links) {
  if (r.sku) bySku.set(`${norm(r.brand)}|${norm(r.sku)}`, r);
  byName.set(`${norm(r.brand)}|${norm(r.name)}`, r);
}

const mapping = {};
let matched = 0;
let noPhoto = 0;
for (const p of products) {
  const row = (p.sku && bySku.get(`${norm(p.brand)}|${norm(p.sku)}`))
    || byName.get(`${norm(p.brand)}|${norm(p.name)}`);
  if (!row) continue;
  matched += 1;
  const hit = cache[row.url];
  if (!hit || !hit.file) { noPhoto += 1; continue; }
  mapping[`${p.brand}|${p.sku || p.name}`] = hit.file;
}

const lines = [
  '// Фотографии с сайта поставщика, отдаются прямыми ссылками с его сервера.',
  '//',
  '// Ключ — «Бренд|Артикул» (или «Бренд|Название», если артикула нет),',
  '// значение — имя файла в галерее поставщика. Полный адрес и размер',
  '// собираются в src/lib/productImage.js.',
  '//',
  '// Источник ссылок — столбец «Фото и описание» клиентского прайса.',
  '// Сгенерировано scripts/fetch-supplier-photo-urls.mjs, руками не править.',
  '',
  `export const SUPPLIER_HOST = ${JSON.stringify(HOST)};`,
  '',
  'export const supplierPhotos = {',
  ...Object.keys(mapping).sort().map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(mapping[k])},`),
  '};',
  '',
];
fs.writeFileSync(OUT, lines.join('\n'));

const errors = Object.values(cache).filter((v) => v.error).length;
console.log('');
console.log(`сошлось с каталогом: ${matched} товаров`);
console.log(`из них с фотографией: ${Object.keys(mapping).length}`);
console.log(`без фотографии на карточке: ${noPhoto}`);
console.log(`страниц не открылось: ${errors}`);
console.log(`-> ${path.relative(REPO, OUT)}`);
