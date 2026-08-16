// Store listings for the Dicta mobile apps.
//
// Mirrors web/lib/appLinks.ts in the app repo — separate repos, no shared
// package, so change both together. Kept as constants rather than inlined into
// components because the same two URLs appear on the home page, the download
// page, the footer and the /app redirect Function.

export const IOS_APP_ID = "6764618560";
export const ANDROID_PACKAGE = "com.norlas.dicta.android";

// Storefront-agnostic on purpose: this 301s to the visitor's OWN storefront.
// The `/us/` form Apple hands you when you copy the link from App Store Connect
// pins every visitor to the US store, which is wrong for a product whose users
// are in Uzbekistan.
export const APP_STORE_URL = `https://apps.apple.com/app/id${IOS_APP_ID}`;

export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

// One link to paste anywhere — resolved per-visitor by functions/app.js, which
// carries its OWN copy of the two URLs above (Pages Functions are bundled
// separately from the Astro build). Change these and change that file too.
export const SMART_APP_URL = "/app";
