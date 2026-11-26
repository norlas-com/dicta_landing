// node scripts/seo/record-fixtures.mjs
//
// Fetch the live stats and billing catalog once and save the response bodies
// to seo-fixtures/, so snapshot builds (LANDING_FIXTURES=seo-fixtures) bake the
// same numbers every time. Only re-run this when re-taking the SEO baseline.

import { spawnSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// The URLs live in the .ts modules; Node 22 can only import them with type
// stripping on, so re-run this script with the flag when it is off.
if (!process.features.typescript) {
  const r = spawnSync(process.execPath, ["--experimental-strip-types", "--no-warnings", fileURLToPath(import.meta.url)], {
    stdio: "inherit",
  });
  process.exit(r.status ?? 1);
}

const { STATS_URL } = await import("../../src/lib/stats.ts");
const { CATALOG_URL } = await import("../../src/lib/catalog.ts");

const root = fileURLToPath(new URL("../../", import.meta.url));
const outDir = `${root}seo-fixtures`;
await mkdir(outDir, { recursive: true });

for (const [name, url] of [
  ["stats", STATS_URL],
  ["catalog", CATALOG_URL],
]) {
  // Same request as the lib modules make.
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  const body = await res.json();
  await writeFile(`${outDir}/${name}.json`, JSON.stringify(body, null, 2) + "\n");
  console.log(`seo-fixtures/${name}.json <- ${url}`);
}
