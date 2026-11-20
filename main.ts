// Frost Vice Clip — gta6-clipper-01 entry program.
//
// The whole job of this program is small on purpose: take the VIDEO.json
// that sits next to this file in the repository and place an identical copy
// in the grader's output directory. The house reads the video itself from
// YouTube, so nothing here needs to know anything about the video.
//
// It only uses the Node standard library, touches no network and reads no
// clock, so two runs of it always write the same bytes.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

// Where the repository lives when this program runs. The grader mounts it
// at /bot, but a local run can point somewhere else with MAKEFUN_BOT_DIR.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";

// Where the copy has to land. The grader reads /output, locally it is
// whatever MAKEFUN_OUTPUT_DIR says.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(repoDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in repository directory: ${repoDir}`);
  process.exit(1);
}

// Make sure the output directory exists, then copy the file over.
mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy VIDEO.json to ${target}: ${error}`);
  process.exit(1);
}

// Confirm the copy actually landed and is the same size as the original,
// so a silent partial write can never pass as a success.
if (!existsSync(target) || statSync(target).size !== statSync(source).size) {
  console.error(`Copy check failed: ${target} does not match ${source}`);
  process.exit(1);
}
