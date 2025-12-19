import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd());
const PUBLIC_DIR = path.join(ROOT, 'public');

const targets = [
  { input: 'hero.jpg', output: 'hero.webp', width: 1920, quality: 78 },
  { input: 'dirty-cart-path.jpg', output: 'dirty-cart-path.webp', width: 1400, quality: 80 },
  { input: 'clean-cart-path.jpg', output: 'clean-cart-path.webp', width: 1400, quality: 80 },
];

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

for (const t of targets) {
  const inputPath = path.join(PUBLIC_DIR, t.input);
  const outputPath = path.join(PUBLIC_DIR, t.output);

  if (!(await exists(inputPath))) {
    throw new Error(`Missing input image: ${inputPath}`);
  }

  const image = sharp(inputPath).rotate();
  const meta = await image.metadata();

  const pipeline = meta.width && meta.width > t.width ? image.resize({ width: t.width }) : image;

  await pipeline
    .webp({ quality: t.quality })
    .toFile(outputPath);

  const [inStat, outStat] = await Promise.all([fs.stat(inputPath), fs.stat(outputPath)]);
  // eslint-disable-next-line no-console
  console.log(`${t.output}: ${(outStat.size / 1024).toFixed(1)} KB (from ${(inStat.size / 1024).toFixed(1)} KB)`);
}
