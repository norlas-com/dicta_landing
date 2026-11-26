// node scripts/seo/snapshot.mjs <distDir> <out.json>
//
// Snapshot one built site: every HTML page through extractPage(), plus the
// files search engines and app stores read. Text files are stored as sha256;
// sitemaps as their sorted <loc> list (lastmod ignored, see sitemapLocs()).

import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative, sep } from "node:path";
import { extractPage, sitemapLocs } from "./extract.mjs";

const [distDir, outFile] = process.argv.slice(2);
if (!distDir || !outFile) {
  console.error("usage: node scripts/seo/snapshot.mjs <distDir> <out.json>");
  process.exit(2);
}

/** Every file under `dir`, as posix paths relative to `root`. */
async function walk(dir, root = dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full, root)));
    else if (entry.isFile()) out.push(relative(root, full).split(sep).join("/"));
  }
  return out;
}

const all = (await walk(distDir)).sort();
if (!all.some((f) => f.endsWith(".html"))) {
  console.error(`no HTML pages under ${distDir} — build first`);
  process.exit(2);
}

const pages = {};
for (const rel of all.filter((f) => f.endsWith(".html"))) {
  pages[rel] = extractPage(await readFile(join(distDir, rel), "utf8"), rel);
}

const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");
const HASHED = new Set(["robots.txt", "llms.txt", "blog/rss.xml", "_headers", "_redirects"]);
const files = {};
for (const rel of all) {
  if (HASHED.has(rel) || rel.startsWith(".well-known/")) {
    files[rel] = sha256(await readFile(join(distDir, rel)));
  } else if (/^sitemap[^/]*\.xml$/.test(rel)) {
    // sitemap.xml, sitemap-index.xml and the sitemap-N.xml chunk(s).
    files[rel] = sitemapLocs(await readFile(join(distDir, rel), "utf8"));
  }
}
for (const name of [...HASHED, "sitemap.xml", "sitemap-index.xml"]) {
  if (!(name in files)) console.warn(`warning: ${distDir}/${name} not found`);
}

await mkdir(dirname(outFile), { recursive: true });
await writeFile(outFile, JSON.stringify({ pages, files }, null, 2) + "\n");
console.log(`${outFile}: ${Object.keys(pages).length} pages, ${Object.keys(files).length} files`);
