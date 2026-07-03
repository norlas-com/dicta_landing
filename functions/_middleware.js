// Cloudflare Pages Function. Handles the one case `_redirects` can't: root-level
// meeting share codes (dicta.uz/abc-defg-hij) match a regex, so they can't be a
// static rule. Everything else falls through to the static marketing site.
//
// Mobile Universal Links intercept these before HTTP (see
// /.well-known/apple-app-site-association); this only affects web browsers.

const SHARE_CODE = /^\/[a-z]{3}-[a-z]{4}-[a-z]{3}\/?$/;

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (SHARE_CODE.test(url.pathname)) {
    return Response.redirect(
      "https://meet.dicta.uz" + url.pathname + url.search,
      301,
    );
  }
  return context.next();
}
