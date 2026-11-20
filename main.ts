// THE FRIDAY FRONT — make.fun news-image-20261120 (burn account entry).
//
// The entry is a single static image: a newspaper front page summing up
// 20 November 2026 in 36 stories (11 featured, 25 in ALSO ON), rendered
// once at build time and committed as entry.png next to this file.
//
// This program does exactly one thing, deterministically: it reads that
// committed image and writes the identical bytes to the grader's output
// directory. No network, no randomness, no timestamps — running it twice
// produces byte-identical output.
//
// Usage: node main.ts
// Output: $MAKEFUN_OUTPUT_DIR/entry.png (default /output/entry.png)
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const SOURCE = new URL("./entry.png", import.meta.url);

const bytes = readFileSync(SOURCE);
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.png"), bytes);
