import { mkdirSync, writeFileSync } from "node:fs";

// The Perfect Pickup Line — one short pickup line an AI agent could use.
// Deterministic: no network, no randomness, no environment reads.
const LINE =
  "I ran a million simulations, and in every one, I still walk up to you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
