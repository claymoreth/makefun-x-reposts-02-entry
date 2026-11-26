import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const inputPath = join(botDir, "POSTS.json");
const outputPath = join(outputDir, "POSTS.json");

const raw = readFileSync(inputPath, "utf-8");
const data = JSON.parse(raw);

if (!data || !Array.isArray(data.posts) || data.posts.length === 0 || !data.posts.every((p) => typeof p === "string")) {
  throw new Error("Invalid POSTS.json: expected a non-empty 'posts' array of strings");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, JSON.stringify(data, null, 2) + "\n", "utf-8");
