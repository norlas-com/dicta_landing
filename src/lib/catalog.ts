// Build-time (SSG) fetch of the public billing catalog. Baked into the static
// pages at `astro build`. On any failure we return null and the Pricing section
// is skipped entirely — never a broken UI, never stale prices. A Cloudflare
// Pages Deploy Hook (+ nightly rebuild) keeps the baked prices fresh.

import { readFixture } from "./fixtures.ts";

export type BillingCurrency = "UZS" | "USD";

export interface CatalogPrices {
  USD: number; // cents  (÷100 for display)
  UZS: number; // tiyin  (÷100 for display, then space-grouped)
}

export interface CatalogPlan {
  id: string; // "free" | "pro" | "business" | "top"
  name: string;
  minutes: number;
  prices: CatalogPrices;
  storage_gb: number;
  retention_days: number | null; // null = forever
  support: "community" | "standard" | "priority";
  popular: boolean;
}

export interface CatalogPack {
  id: string;
  minutes: number;
  prices: CatalogPrices;
}

export interface BillingCatalog {
  default_currency: BillingCurrency;
  plans: CatalogPlan[];
  packs: CatalogPack[];
}

export const CATALOG_URL = "https://api.dicta.uz/v1/billing/catalog";

/** The API body if it is a usable catalog, else null. */
function parseCatalog(body: unknown): BillingCatalog | null {
  const data = body as BillingCatalog;
  if (!data || !Array.isArray(data.plans) || data.plans.length === 0) {
    return null;
  }
  return data;
}

export async function fetchCatalog(): Promise<BillingCatalog | null> {
  // Snapshot builds read a recorded response (see fixtures.ts). Outside the
  // try: a missing fixture must fail the build, not fall back quietly.
  const fixture = await readFixture<unknown>("catalog");
  if (fixture !== undefined) return parseCatalog(fixture);
  try {
    const res = await fetch(CATALOG_URL, {
      headers: { accept: "application/json" },
    });
    if (!res.ok) return null;
    return parseCatalog(await res.json());
  } catch {
    return null;
  }
}
