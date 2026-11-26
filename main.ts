import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// thinking_revised: hello from the revised desk; one batch, one orders sheet,
// one slot on disk, and the forecast stays a single unbroken line.
const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const forecast = 'New Halcyon: scattered doubt through the afternoon, with a 60% chance of remembering something important.';

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, forecast, 'utf8');
const bytes = Buffer.byteLength(forecast, 'utf8');
console.log(`wrote ${target} (${bytes} bytes) from ${here}`);
