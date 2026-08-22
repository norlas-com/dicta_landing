// Cloudflare Pages Function. Handles the one case `_redirects` can't: root-level
// meeting share codes (dicta.uz/abc-defg-hij) match a regex, so they can't be a
// static rule. Everything else falls through to the static marketing site.
//
// Mobile Universal Links intercept these before HTTP (see
// /.well-known/apple-app-site-association); this only affects web browsers.
//
// Two grammars, both claimed by the apps and both handed out as bare links —
// they mirror ONLINE_CODE_RE / ROUNDTABLE_CODE_RE in web/lib/join/codeGrammar.ts:
//
//   xxx-xxxx-xxx  an online call
//   xxxx-xxxx     a roundtable
//
// The roundtable shape used to be missing here, so dicta.uz/{xxxx-xxxx} was a
// 404 in any desktop browser — the one place the link is opened without the OS
// intercepting it first. It goes straight to /dm/{code} because that is where
// the app host would redirect it anyway; sending it to the bare code instead
// costs a second hop for no benefit.

const ONLINE_CODE = /^\/[a-z]{3}-[a-z]{4}-[a-z]{3}\/?$/;
const ROUNDTABLE_CODE = /^\/([a-z]{4}-[a-z]{4})\/?$/;

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (ONLINE_CODE.test(url.pathname)) {
    return Response.redirect(
      "https://meet.dicta.uz" + url.pathname + url.search,
      301,
    );
  }

  const roundtable = ROUNDTABLE_CODE.exec(url.pathname);
  if (roundtable) {
    return Response.redirect(
      "https://meet.dicta.uz/dm/" + roundtable[1] + url.search,
      301,
    );
  }

  return context.next();
}
