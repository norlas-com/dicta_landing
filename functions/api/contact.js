// Cloudflare Pages Function for POST /api/contact — the "Contact sales" form.
// Relays each lead to a Telegram chat through the Bot API.
//
// Environment (Pages project settings, both the dicta.uz and dicta.live
// projects; set as encrypted secrets, never in the repo):
//   CONTACT_TG_BOT_TOKEN   token of the bot that posts the leads
//   CONTACT_TG_CHAT_ID     chat (or channel/group) the bot posts into
//
// Notes:
//  * The message is sent as PLAIN TEXT (no parse_mode), so nothing a visitor
//    types can be interpreted as Telegram markup.
//  * Spam handling is silent on purpose: a bot that trips the honeypot or
//    submits within MIN_FILL_MS of the form rendering gets the same 200 a real
//    visitor gets, so it learns nothing about what to change.
//  * Self-contained like functions/app.js: Pages bundles functions separately
//    from the Astro build, so nothing is imported from src/.

const MAX_BODY_BYTES = 16 * 1024;
const MIN_FILL_MS = 3000;
// Telegram rejects sendMessage text over 4096 characters.
const MAX_MESSAGE_CHARS = 4000;

const LIMITS = { name: 100, phone: 32, email: 160, company: 120, message: 2000, path: 200 };
// Deliberately loose: the browser already checked type=email; this only keeps
// obvious junk out of the chat.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SITES = new Set(["uz", "global"]);
const LOCALES = new Set(["uz", "ru", "en", "ar"]);
// The locale each site serves without a URL prefix (site.config.mjs).
const DEFAULT_LOCALE = { uz: "uz", global: "en" };

const json = (status, body, headers = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store", ...headers },
  });

/** Strip control characters (keeps \n and \t) and trim. */
const clean = (v) =>
  typeof v === "string"
    ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim()
    : "";

/** Where a no-JS form post lands afterwards: the thank-you anchor, same locale. */
function thanksUrl(site, locale) {
  const prefix = DEFAULT_LOCALE[site] === locale || !LOCALES.has(locale) ? "" : `/${locale}`;
  return `${prefix}/#contact-sent`;
}

async function readBody(request) {
  const type = request.headers.get("content-type") || "";
  const declared = Number(request.headers.get("content-length") || 0);
  if (declared > MAX_BODY_BYTES) return { tooLarge: true };
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return { tooLarge: true };

  if (type.includes("application/json")) {
    try {
      const data = JSON.parse(text);
      return data && typeof data === "object" && !Array.isArray(data)
        ? { data, form: false }
        : { bad: true };
    } catch {
      return { bad: true };
    }
  }
  if (type.includes("application/x-www-form-urlencoded")) {
    return { data: Object.fromEntries(new URLSearchParams(text)), form: true };
  }
  return { bad: true };
}

export async function onRequestPost({ request, env }) {
  // Same-origin only. Browsers always send Origin on a cross-site POST, so a
  // mismatch means some other website is trying to use this endpoint.
  const origin = request.headers.get("origin");
  if (origin) {
    let host = "";
    try {
      host = new URL(origin).host;
    } catch {
      // fall through: host stays "" and the check below rejects it
    }
    if (host !== new URL(request.url).host) return json(403, { ok: false, error: "forbidden" });
  }

  const body = await readBody(request);
  if (body.tooLarge) return json(413, { ok: false, error: "too_large" });
  if (body.bad) return json(400, { ok: false, error: "bad_request" });
  const { data, form } = body;

  const site = SITES.has(data.site) ? data.site : "unknown";
  const locale = LOCALES.has(data.locale) ? data.locale : "unknown";
  const ok = () =>
    form ? new Response(null, { status: 303, headers: { location: thanksUrl(site, locale) } }) : json(200, { ok: true });

  // Honeypot: real visitors never see this field.
  if (clean(data.website) !== "") return ok();

  // Minimum fill time. `ts` is stamped by the page script when the form
  // renders. The JSON path (the script) must supply it; a plain form post
  // (script failed) cannot, and is let through to the honeypot alone.
  const renderedAt = Number(data.ts);
  if (Number.isFinite(renderedAt) && renderedAt > 0) {
    const elapsed = Date.now() - renderedAt;
    if (elapsed < MIN_FILL_MS) return ok();
  } else if (!form) {
    return ok();
  }

  // Name, company and message are optional. A lead needs one way to reach
  // them back: a phone number, an email, or both.
  const name = clean(data.name);
  const phone = clean(data.phone);
  const email = clean(data.email);
  const company = clean(data.company);
  const message = clean(data.message);
  const phoneOk = !phone || (/^[+\d\s().-]+$/.test(phone) && phone.length <= LIMITS.phone && phone.replace(/\D/g, "").length >= 7);
  const emailOk = !email || (email.length <= LIMITS.email && EMAIL_RE.test(email));
  if (
    (!phone && !email) ||
    !phoneOk ||
    !emailOk ||
    name.length > LIMITS.name ||
    company.length > LIMITS.company ||
    message.length > LIMITS.message
  ) {
    return json(400, { ok: false, error: "invalid" });
  }

  const token = env.CONTACT_TG_BOT_TOKEN;
  const chatId = env.CONTACT_TG_CHAT_ID;
  if (!token || !chatId) {
    console.error("contact: CONTACT_TG_BOT_TOKEN / CONTACT_TG_CHAT_ID are not set; lead not delivered");
    return json(503, { ok: false, error: "unavailable" });
  }

  // Page the form was on: the Referer's path if the browser sent one, else what
  // the script reported. Path only — no query string, no host.
  let page = "";
  try {
    page = new URL(request.headers.get("referer") || "").pathname;
  } catch {
    page = clean(data.path).slice(0, LIMITS.path);
  }

  const text = [
    "New Dicta lead",
    `Site: ${site} (${new URL(request.url).host})`,
    `Locale: ${locale}`,
    `Page: ${page || "-"}`,
    "",
    `Name: ${name || "-"}`,
    `Phone: ${phone || "-"}`,
    `Email: ${email || "-"}`,
    `Company: ${company || "-"}`,
    `Message: ${message || "-"}`,
  ]
    .join("\n")
    .slice(0, MAX_MESSAGE_CHARS);

  let res;
  try {
    res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
      signal: AbortSignal.timeout(8000),
    });
  } catch (err) {
    // Name only: never log the error text or URL, which carry the bot token.
    console.error("contact: Telegram request failed", err && err.name);
    return json(502, { ok: false, error: "upstream" });
  }
  if (!res.ok) {
    console.error("contact: Telegram sendMessage rejected", res.status);
    return json(502, { ok: false, error: "upstream" });
  }
  return ok();
}

// Any other method. (Pages sends POST to onRequestPost above.)
export async function onRequest() {
  return json(405, { ok: false, error: "method_not_allowed" }, { allow: "POST" });
}
