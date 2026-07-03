// Build-time (SSG) fetch of the public billing catalog. Baked into the static
// pages at `astro build`. On any failure we return null and the Pricing section
// is skipped entirely — never a broken UI, never stale prices. A Cloudflare
// Pages Deploy Hook (+ nightly rebuild) keeps the baked prices fresh.

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

const CATALOG_URL = "https://api.dicta.uz/v1/billing/catalog";

export async function fetchCatalog(): Promise<BillingCatalog | null> {
  try {
    const res = await fetch(CATALOG_URL, {
      headers: { accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as BillingCatalog;
    if (!data || !Array.isArray(data.plans) || data.plans.length === 0) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}
