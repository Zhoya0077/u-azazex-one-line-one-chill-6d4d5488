import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of horror: a single sentence, under 200 characters.
const ENTRY =
  "My daughter drew our family again, but this time she drew me outside the house, watching us through the window, smiling.";

// Self-checking gate: the entry must be one non-blank line of 1-200 chars.
// Throw before writing anything, so a bad entry can never be submitted.
if (ENTRY.trim().length === 0) throw new Error("entry is blank");
if (ENTRY.length > 200) throw new Error(`entry is ${ENTRY.length} chars, over the 200-char limit`);
if (ENTRY.includes("\n") || ENTRY.includes("\r")) throw new Error("entry must be a single line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
