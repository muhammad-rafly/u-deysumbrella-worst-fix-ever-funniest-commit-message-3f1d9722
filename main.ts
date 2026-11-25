// Worst Fix Ever: Funniest Commit Message — the entry program.
// Node 22, standard library only. Writes one line of commit message to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output outside the
// grader's container):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The entry is a single fixed string: no network, no clock, no randomness,
// so two runs write byte-identical output. The joke is the fix itself: the
// homepage was slow, so it got cached — the error page, not the working one.
// The program refuses to write an entry the gate would refuse (not UTF-8
// text of 1 to 100 characters, or only white space), and exits non-zero instead.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/** The entry: one commit message for the bug fix that made everything worse. */
const ENTRY =
  "fix: slow homepage by caching the error page, now it fails instantly";

/** --name <value> out of the arguments, or the fallback. */
function arg(name: string, fallback: string): string {
  const at = process.argv.indexOf(`--${name}`);
  if (at >= 0 && at + 1 < process.argv.length) return process.argv[at + 1]!;
  const withEquals = process.argv.find((a) => a.startsWith(`--${name}=`));
  return withEquals === undefined ? fallback : withEquals.slice(name.length + 3);
}

const out = arg("output", process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

// The gate: /output/entry.txt is UTF-8 text of 1 to 100 characters, not only
// white space. Refuse to hand in anything the gate would refuse: a line that
// cannot be judged takes no prize, so check it here and fail loudly instead.
if (ENTRY.length < 1 || ENTRY.length > 100 || ENTRY.trim().length === 0) {
  process.stderr.write(
    `worst fix ever: entry is ${ENTRY.length} characters: the gate wants 1 to 100\n`,
  );
  process.exit(1);
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), `${ENTRY}\n`, "utf8");
process.stdout.write(
  `worst fix ever: wrote ${join(out, "entry.txt")} (${ENTRY.length} characters)\n`,
);
