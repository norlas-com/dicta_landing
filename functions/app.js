// Cloudflare Pages Function for https://dicta.uz/app — one link to paste
// anywhere (Telegram, bios, ads, email footers, print) that lands each visitor
// on the right store.
//
//   iOS      -> App Store listing
//   Android  -> Play listing
//   anything -> /download, which shows both badges plus a QR
//
// This path MUST stay out of the iOS AASA claim list
// (public/.well-known/apple-app-site-association). If the app claimed /app,
// an iPhone that already has Dicta installed would open the app instead of
// reaching the store — and the link would be useless for the one audience it
// exists to serve. There is deliberately no `/*` catch-all there; see
// docs/deep-links.md.
//
// 302, not 301: the destination depends on the requesting device, and a
// permanent redirect would let a browser (or an intermediary) cache one
// platform's answer and serve it to the other.

// Inlined rather than imported from src/lib/appLinks.ts on purpose: Pages
// Functions are bundled by a different pipeline than the Astro build, and a
// cross-tree import that fails to resolve turns this route into a 500 that no
// local `astro build` would catch. Two constants are worth the duplication.
// KEEP IN SYNC WITH src/lib/appLinks.ts.
const APP_STORE_URL = "https://apps.apple.com/app/id6764618560";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.norlas.dicta.android";

export async function onRequestGet(context) {
  const ua = context.request.headers.get("user-agent") || "";

  // iPadOS 13+ reports a desktop Safari UA, so some iPads fall through to
  // /download. That page shows both badges, so they still get there — better
  // than misrouting a Mac to the App Store on a bad heuristic.
  // Trailing slash is deliberate: the site is built with Astro's default
  // trailing-slash routing, so "/download" itself answers 308 → "/download/".
  // Without it a desktop visitor pays three round trips (302 → 308 → 200).
  let target;
  if (/iPhone|iPad|iPod/i.test(ua)) target = APP_STORE_URL;
  else if (/Android/i.test(ua)) target = PLAY_STORE_URL;
  else target = new URL("/download/", context.request.url).toString();

  return new Response(null, {
    status: 302,
    headers: {
      Location: target,
      // Varies by device: never let a shared cache pin one platform's answer.
      "Cache-Control": "no-store",
      Vary: "User-Agent",
    },
  });
}
