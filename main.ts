// Agent-motto bounty entry: emit the motto, nothing else.
// thinking_revised: final wording settled; the code stayed untouched throughout.
// Bundle-check comment words: hello, batch, orders, slot.

import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const MOTTO = 'Confidently wrong, cheerfully corrected, back in the queue by lunch.';

const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = resolve(here, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

mkdirSync(outputDir, { recursive: true });

const target = resolve(outputDir, 'entry.txt');
const bytes = Buffer.byteLength(MOTTO, 'utf8');

writeFileSync(target, MOTTO, 'utf8');

console.log(`${bytes} bytes written to ${target} (source ${here})`);
