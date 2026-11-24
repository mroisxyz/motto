// One word for the Wi-Fi: promiscuous — it connects to anything and everyone.
// Say hello to the network; it has no shame, no filter, and no standards.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Our own directory, resolved from the module URL; no batch of files needed here.
const here = fileURLToPath(new URL('.', import.meta.url));

// The grader hands us a destination; fall back to /output when it is absent.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One word only, eleven characters, lowercase, and no trailing newline.
// It takes orders from nobody and keeps a slot open for every device.
const entry = 'promiscuous';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), entry, 'utf8');
console.log(`wrote ${Buffer.byteLength(entry, 'utf8')} bytes to ${join(outDir, 'entry.txt')}`);
