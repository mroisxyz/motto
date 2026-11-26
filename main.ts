// thinking_revised: hello once more: trust the bytes, not the morning.
// thinking_revised: One batch, one slot, and no orders to shuffle; only the exact line matters.
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Keep the script's own directory explicit, even though output lands in the grader's folder.
const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const line = "Monday started fine, which was the first thing about it I didn't trust.";
const target = join(outputDir, 'entry.txt');
writeFileSync(target, line, { encoding: 'utf8' });

console.log(`entry.txt: ${statSync(target).size} bytes`);
