// Small helpers for page tests (tests/pages/*.test.mjs) that inspect the built
// HTML of either site. Build first: `npm run build:uz` / `npm run build:global`.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { parse } from "parse5";

const ROOT = fileURLToPath(new URL("../../", import.meta.url));

/**
 * The parsed document of dist-<site>/<relPath>, e.g. loadPage("uz", "pricing/index.html").
 * @param {"uz" | "global"} site
 * @param {string} relPath
 */
export function loadPage(site, relPath) {
  return parse(readFileSync(`${ROOT}dist-${site}/${relPath}`, "utf8"));
}

const isElement = (n) => typeof n?.tagName === "string";

/**
 * Every element under `node` (document order, `node` itself excluded) for which
 * `pred(el)` is true. <template> contents are not descended into.
 * @param {any} node
 * @param {(el: any) => boolean} pred
 */
export function findAll(node, pred) {
  const out = [];
  const walk = (n) => {
    for (const c of n.childNodes ?? []) {
      if (isElement(c) && pred(c)) out.push(c);
      walk(c);
    }
  };
  walk(node);
  return out;
}

/** The attribute's value, or undefined when absent. */
export function attr(el, name) {
  return el.attrs?.find((a) => a.name === name)?.value;
}

/** textContent of `el` (script/style excluded), whitespace collapsed and trimmed. */
export function textOf(el) {
  let out = "";
  const walk = (n) => {
    if (n.nodeName === "#text") out += n.value;
    else if (isElement(n) && (n.tagName === "script" || n.tagName === "style")) return;
    for (const c of n.childNodes ?? []) walk(c);
  };
  walk(el);
  return out.replace(/\s+/g, " ").trim();
}

/**
 * Position of `el` among all elements of its document, in document order
 * (pre-order). Compare two results to assert which element comes first.
 */
export function docIndex(el) {
  let root = el;
  while (root.parentNode) root = root.parentNode;
  let i = 0;
  let found = -1;
  const walk = (n) => {
    for (const c of n.childNodes ?? []) {
      if (found !== -1) return;
      if (isElement(c)) {
        if (c === el) {
          found = i;
          return;
        }
        i++;
      }
      walk(c);
    }
  };
  walk(root);
  if (found === -1) throw new Error("docIndex: element is not in a document");
  return found;
}
