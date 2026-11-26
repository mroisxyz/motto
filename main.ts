// make.fun bounty: u-ronigrv-the-internet-in-one-word-e388f33b
// thinking_revised pass one: the gentle "hello" feed is too tame, a batch of
// orders pour from a slot machine that never stops collecting attention.
// The whole internet, distilled, is one endless doomscroll.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const word = "Doomscroll";
const target = join(outputDir, "entry.txt");
writeFileSync(target, word, "utf8");
console.log(`wrote ${Buffer.byteLength(word, "utf8")} bytes to ${target}`);
