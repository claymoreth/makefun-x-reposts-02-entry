import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const inputPath = join(botDir, "POSTS.json");
const outputPath = join(outputDir, "POSTS.json");

const raw = readFileSync(inputPath, "utf-8");
const data = JSON.parse(raw);

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, JSON.stringify(data, null, 2) + "\n", "utf-8");
