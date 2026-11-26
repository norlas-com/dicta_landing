// node scripts/seo/compare.mjs <base.json> <next.json> <allow.json>
//
// Print every SEO-visible difference between two snapshots, one per line as
// "path  field  detail". Exit 1 if there are any.

import { readFile } from "node:fs/promises";
import { diffSnapshots } from "./diff.mjs";

const [baseFile, nextFile, allowFile] = process.argv.slice(2);
if (!baseFile || !nextFile || !allowFile) {
  console.error("usage: node scripts/seo/compare.mjs <base.json> <next.json> <allow.json>");
  process.exit(2);
}

const read = async (f) => JSON.parse(await readFile(f, "utf8"));
const [base, next, allow] = await Promise.all([read(baseFile), read(nextFile), read(allowFile)]);

const used = {};
const findings = diffSnapshots(base, next, allow, used);

// An allow entry that excused nothing is stale or mistyped. Warn, don't fail:
// allow.json is shared by both sites, and an entry may only exist on one.
for (const [list, entries] of Object.entries(allow)) {
  for (const entry of entries ?? []) {
    if (!used[list]?.has(entry)) console.warn(`WARNING: allow.json ${list} entry matched no removal in ${nextFile}: ${JSON.stringify(entry)}`);
  }
}
if (findings.length) {
  for (const f of findings) console.log(`${f.path}  ${f.field}  ${f.detail}`);
  console.error(`SEO snapshot: ${findings.length} difference(s) between ${baseFile} and ${nextFile}`);
  process.exit(1);
}
console.log(`SEO snapshot: no differences (${Object.keys(base.pages).length} pages)`);
