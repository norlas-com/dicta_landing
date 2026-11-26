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

const findings = diffSnapshots(base, next, allow);
if (findings.length) {
  for (const f of findings) console.log(`${f.path}  ${f.field}  ${f.detail}`);
  console.error(`SEO snapshot: ${findings.length} difference(s) between ${baseFile} and ${nextFile}`);
  process.exit(1);
}
console.log(`SEO snapshot: no differences (${Object.keys(base.pages).length} pages)`);
