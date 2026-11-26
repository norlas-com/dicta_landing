// Frozen API responses for reproducible builds. The SEO snapshot check
// (scripts/seo/, `npm run seo:check`) builds the site twice — before and after
// a change — and compares what search engines see. stats.ts and catalog.ts
// fetch live numbers at build time, so two builds made at different times
// would differ on numbers alone. With LANDING_FIXTURES=<dir> set, they read
// <dir>/stats.json and <dir>/catalog.json (recorded by
// scripts/seo/record-fixtures.mjs) instead of fetching. Production builds never
// set it.

import { readFile } from "node:fs/promises";

/**
 * The recorded response body for `name`, or undefined when LANDING_FIXTURES is
 * not set. A missing or unreadable fixture throws on purpose: silently falling
 * back to a live fetch would make the snapshot comparison flaky.
 */
export async function readFixture<T>(name: "stats" | "catalog"): Promise<T | undefined> {
  const dir = process.env.LANDING_FIXTURES;
  if (!dir) return undefined;
  return JSON.parse(await readFile(`${dir}/${name}.json`, "utf8")) as T;
}
