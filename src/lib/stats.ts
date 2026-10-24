// Build-time (SSG) fetch of the public usage numbers, the same pattern as
// catalog.ts: baked into the HTML at `astro build`, refreshed by the nightly
// rebuild. Unlike the catalog, a failure does not hide the section: it falls
// back to the last numbers read by hand from production, with their own date,
// so the page never shows a number that was not true on the date it states.

export interface UsageStats {
  users: number;
  meetings: number;
  hours: number;
  /** ISO date the numbers were true on. */
  asOf: string;
}

const STATS_URL = "https://api.dicta.uz/v1/public/stats";

// Read from production on 2026-10-24 (users, meetings with a transcript, hours
// of those meetings with each capped at 6h). Only used when the API is down or
// the endpoint is not deployed yet.
const FALLBACK: UsageStats = { users: 149, meetings: 796, hours: 337, asOf: "2026-10-24" };

export async function fetchStats(): Promise<UsageStats> {
  try {
    const res = await fetch(STATS_URL, {
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return FALLBACK;
    const data = (await res.json()) as {
      users?: unknown;
      meetings_processed?: unknown;
      hours_processed?: unknown;
      updated_at?: unknown;
    };
    const { users, meetings_processed: meetings, hours_processed: hours, updated_at } = data;
    if (
      typeof users !== "number" ||
      typeof meetings !== "number" ||
      typeof hours !== "number" ||
      typeof updated_at !== "string" ||
      // Never let a bad deploy publish a smaller number than we already claim.
      users < FALLBACK.users ||
      meetings < FALLBACK.meetings ||
      hours < FALLBACK.hours
    ) {
      return FALLBACK;
    }
    return { users, meetings, hours, asOf: updated_at.slice(0, 10) };
  } catch {
    return FALLBACK;
  }
}
