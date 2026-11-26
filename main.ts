// hello, friend: the market kept dipping until the dip started dating us.
// The batch is closed, the orders are metaphorical, and the slot is exact.
// Deterministic by construction: two runs, one byte-identical entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Derive this file's own directory from its module URL, stdlib only.
const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const joke = 'I bought the dip. The dip bought a larger dip. We are now in a committed relationship.';

writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf8');

console.log(`entry.txt: ${Buffer.byteLength(joke, 'utf8')} bytes`);
void ownDir;
