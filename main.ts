// main.ts — make.fun "Tell a Whole Story in 32 Characters"
// The deliverable is a Wi-Fi SSID: a breakup retold by the box that dropped the link.
// hello: a network says hello first, before anybody thinks to assign the blame.
// batch: one run emits one entry, the whole payload in a single tidy batch.
// orders: the bytes are laid out in a fixed order, never reshuffled by locale.
// slot: one 32-character slot holds the 28-character refusal with room to spare.
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = resolve(here, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const story = "IT'S NOT YOU IT'S THE ROUTER";

mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'entry.txt'), story, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(story, 'utf8')} bytes`);
