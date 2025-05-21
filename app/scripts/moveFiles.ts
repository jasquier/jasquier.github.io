import path from "node:path";
import fs from "node:fs/promises";
import { styleText } from "node:util";

const src = path.join(process.cwd(), "dist");
const dest = path.join(process.cwd(), "../");

moveFiles(src, dest).catch(console.error);
console.log(styleText("green", "Moved all files from dist/ up a level!"));

// Moves files from the vite build directory up one level for github pages.
async function moveFiles(sourceDir: string, destinationDir: string) {
  await fs.cp(sourceDir, destinationDir, { recursive: true });
}
