// QR → inline SVG string. Ported from the app repo's web/lib/qr.ts so both
// surfaces draw the same code the same way.
//
// This runs only in Astro frontmatter, so the matrix is computed at BUILD time
// and the page ships a plain inline <svg> — nothing about the library reaches
// the browser. It is still a regular `dependency`, not a devDependency:
// Cloudflare Pages can build with NODE_ENV=production and skip devDependencies,
// which would fail the build on a missing module.
//
// Byte mode + ECC level M + auto version selection is ample for the short
// https://dicta.uz/app URL.

import qrcode from "qrcode-generator";

/**
 * Render `text` as an inline SVG QR code string.
 * @param size SVG pixel size (square). The matrix is drawn with a 4-module
 *             quiet zone per spec.
 */
export function qrSvg(text: string, size = 220): string {
  const qr = qrcode(0, "M"); // type 0 = auto-pick the smallest fitting version
  qr.addData(text); // defaults to byte mode
  qr.make();

  const count = qr.getModuleCount();
  const quiet = 4;
  const total = count + quiet * 2;

  let path = "";
  for (let r = 0; r < count; r++) {
    for (let c = 0; c < count; c++) {
      if (qr.isDark(r, c)) {
        path += `M${c + quiet} ${r + quiet}h1v1h-1z`;
      }
    }
  }

  // The white plate is deliberate, not decoration: several Android OEM camera
  // apps silently fail to decode an inverted (light-on-dark) code, and a QR
  // that doesn't scan is worse than no QR. Do not theme these colors.
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" ` +
    `viewBox="0 0 ${total} ${total}" shape-rendering="crispEdges" role="img" aria-hidden="true">` +
    `<rect width="${total}" height="${total}" fill="#ffffff"/>` +
    `<path d="${path}" fill="#000000"/></svg>`
  );
}
