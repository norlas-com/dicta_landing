// GA4 (gtag.js) helper for the landing site. Fire-and-forget; guards
// window.gtag so it's a safe no-op before gtag loads or when the measurement id
// is unset. Usable from any bundled .astro <script> (import { track }).

type ParamValue = string | number | boolean | undefined | null;
export type AnalyticsParams = Record<string, ParamValue>;

/** Marketing event catalog (landing-specific). page_view/session_start/scroll
 *  are emitted automatically by gtag on the MPA. */
export type LandingEvent =
  | "cta_clicked"
  | "signup_start_click"
  | "login_click"
  | "pricing_plan_selected"
  | "pricing_currency_toggled"
  | "language_changed"
  | "download_app_clicked"
  | "feature_section_viewed"
  | "feature_nav_clicked"
  | "nav_clicked"
  | "outbound_click"
  | "faq_opened"
  | "contact_submitted";

export function track(event: LandingEvent | (string & {}), params: AnalyticsParams = {}): void {
  const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof g !== "function") return;
  const clean: Record<string, string | number | boolean> = {};
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) clean[k] = v;
  }
  g("event", event, clean);
}
