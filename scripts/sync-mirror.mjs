import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(root, 'public');

const mirrorEntries = [
  'cdn-cookieyes.com',
  'diicsacv.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'www.googletagmanager.com',
];

await mkdir(publicDir, { recursive: true });

for (const entry of mirrorEntries) {
  await rm(join(publicDir, entry), { recursive: true, force: true });
  await cp(join(root, entry), join(publicDir, entry), { recursive: true });
}
