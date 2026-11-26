// Build-time (SSG) fetch of the public usage numbers, the same pattern as
// catalog.ts: baked into the HTML at `astro build`, refreshed by the nightly
// rebuild. Unlike the catalog, a failure does not hide the section: it falls
// back to the last numbers read by hand from production, with their own date,
// so the page never shows a number that was not true on the date it states.

import { readFixture } from "./fixtures.ts";

export interface UsageStats {
  users: number;
  meetings: number;
  hours: number;
  /** ISO date the numbers were true on. */
  asOf: string;
}

export const STATS_URL = "https://api.dicta.uz/v1/public/stats";

// Read from production on 2026-10-24 (users, meetings with a transcript, hours
// of those meetings with each capped at 6h). Only used when the API is down or
// the endpoint is not deployed yet.
const FALLBACK: UsageStats = { users: 149, meetings: 796, hours: 337, asOf: "2026-10-24" };

/** The API body as numbers we may publish, or the fallback. */
function parseStats(body: unknown): UsageStats {
  if (!body || typeof body !== "object") return FALLBACK;
  const data = body as {
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
}

export async function fetchStats(): Promise<UsageStats> {
  // Snapshot builds read a recorded response (see fixtures.ts). Outside the
  // try: a missing fixture must fail the build, not fall back quietly.
  const fixture = await readFixture<unknown>("stats");
  if (fixture !== undefined) return parseStats(fixture);
  try {
    const res = await fetch(STATS_URL, {
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return FALLBACK;
    return parseStats(await res.json());
  } catch {
    return FALLBACK;
  }
}
