import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// thinking_revised: hello, this batch bakes exactly one small cookie.
// thinking_revised: the orders pile up while the agent hunts for the right slot.
const here = fileURLToPath(new URL('.', import.meta.url));
void here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const fortune = 'You will finally understand the request. The user will have moved on to a different one.';

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'entry.txt'), fortune, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(fortune, 'utf8')} bytes`);
