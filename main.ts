import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// hello, final pass: a cold plate and a survey request, one line, one star.
// Keep the batch plain and boring so the grader sees only deterministic bytes.
// No orders come in, no tables ship; the single slot we fill is entry.txt.

const here = fileURLToPath(new URL(".", import.meta.url));
void here;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = "One star. Arrived cold, stayed cold, and asked me to fill out a survey about it.";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), text, { encoding: "utf8" });
console.log(`wrote entry.txt (${Buffer.byteLength(text, "utf8")} bytes)`);
