import { test } from "node:test";
import assert from "node:assert/strict";
import {
  VISIT_KEY,
  loadVisit,
  recordPage,
  saveVisit,
  formatClock,
  summarizeVisit,
} from "../../src/lib/visit.ts";
import type { VisitState } from "../../src/lib/visit.ts";

const NOW = 1_000_000_000_000;
const HOUR = 3_600_000;
const store = (v: string | null) => ({ getItem: () => v });

test("VISIT_KEY", () => assert.equal(VISIT_KEY, "dicta.visit.v1"));

test("loadVisit: null storage -> fresh", () => {
  assert.deepEqual(loadVisit(null, NOW), { startedAt: NOW, pages: [] });
});

test("loadVisit: getItem throws -> fresh", () => {
  const s = { getItem: () => { throw new Error("denied"); } };
  assert.deepEqual(loadVisit(s, NOW), { startedAt: NOW, pages: [] });
});

test("loadVisit: missing key / invalid JSON / wrong shape -> fresh", () => {
  const fresh = { startedAt: NOW, pages: [] };
  assert.deepEqual(loadVisit(store(null), NOW), fresh);
  assert.deepEqual(loadVisit(store("{not json"), NOW), fresh);
  assert.deepEqual(loadVisit(store("null"), NOW), fresh);
  assert.deepEqual(loadVisit(store(JSON.stringify({ startedAt: "x", pages: [] })), NOW), fresh);
  assert.deepEqual(loadVisit(store(JSON.stringify({ startedAt: NOW - 1000, pages: "no" })), NOW), fresh);
  assert.deepEqual(loadVisit(store(JSON.stringify({ startedAt: NOW - 1000, pages: [{ path: 1, topic: null }] })), NOW), fresh);
  assert.deepEqual(loadVisit(store(JSON.stringify({ startedAt: null, pages: [] })), NOW), fresh);
});

test("loadVisit: valid state round-trips; unknown topics become null", () => {
  const raw = JSON.stringify({
    startedAt: NOW - 5000,
    pages: [{ path: "/a/", topic: "pricing" }, { path: "/b/", topic: "bogus" }, { path: "/c/", topic: null }],
  });
  assert.deepEqual(loadVisit(store(raw), NOW), {
    startedAt: NOW - 5000,
    pages: [{ path: "/a/", topic: "pricing" }, { path: "/b/", topic: null }, { path: "/c/", topic: null }],
  });
});

test("loadVisit: future startedAt clamps to now", () => {
  const raw = JSON.stringify({ startedAt: NOW + 99999, pages: [{ path: "/a/", topic: null }] });
  const s = loadVisit(store(raw), NOW);
  assert.equal(s.startedAt, NOW);
  assert.equal(s.pages.length, 1);
});

test("loadVisit: older than 4h -> fresh; exactly 4h kept", () => {
  const mk = (age: number) => JSON.stringify({ startedAt: NOW - age, pages: [{ path: "/a/", topic: null }] });
  assert.deepEqual(loadVisit(store(mk(4 * HOUR + 1)), NOW), { startedAt: NOW, pages: [] });
  assert.equal(loadVisit(store(mk(4 * HOUR)), NOW).pages.length, 1);
});

test("recordPage: appends, dedupes consecutive, pure", () => {
  const s0: VisitState = { startedAt: NOW, pages: [] };
  const s1 = recordPage(s0, "/a/", "home");
  assert.equal(s0.pages.length, 0);
  assert.equal(s1.pages.length, 1);
  const s2 = recordPage(s1, "/a/", "home");
  assert.equal(s2.pages.length, 1);
  const s3 = recordPage(s2, "/b/", "pricing");
  const s4 = recordPage(s3, "/a/", "home");
  assert.equal(s4.pages.length, 3);
  assert.equal(s4.startedAt, NOW);
});

test("recordPage: caps at 50 keeping newest", () => {
  let s: VisitState = { startedAt: NOW, pages: [] };
  for (let i = 0; i < 60; i++) s = recordPage(s, `/p${i}/`, null);
  assert.equal(s.pages.length, 50);
  assert.equal(s.pages[0].path, "/p10/");
  assert.equal(s.pages[49].path, "/p59/");
});

test("saveVisit: writes JSON under key; swallows errors; null ok", () => {
  const calls: [string, string][] = [];
  const st: VisitState = { startedAt: NOW, pages: [{ path: "/a/", topic: null }] };
  saveVisit({ setItem: (k, v) => { calls.push([k, v]); } }, st);
  assert.equal(calls[0][0], VISIT_KEY);
  assert.deepEqual(JSON.parse(calls[0][1]), st);
  assert.doesNotThrow(() => saveVisit({ setItem: () => { throw new Error("quota"); } }, st));
  assert.doesNotThrow(() => saveVisit(null, st));
});

test("saveVisit: returns true on success, false when storage is null or setItem throws", () => {
  const st: VisitState = { startedAt: NOW, pages: [{ path: "/a/", topic: null }] };
  assert.equal(saveVisit({ setItem: () => {} }, st), true);
  assert.equal(saveVisit(null, st), false);
  assert.equal(saveVisit({ setItem: () => { throw new Error("quota"); } }, st), false);
});

test("formatClock", () => {
  assert.equal(formatClock(-5), "00:00");
  assert.equal(formatClock(0), "00:00");
  assert.equal(formatClock(65_000), "01:05");
  assert.equal(formatClock(3_723_000), "1:02:03");
  assert.equal(formatClock(59_999), "00:59");
  assert.equal(formatClock(NaN), "00:00");
});

test("summarizeVisit: count, clock, topics", () => {
  const state: VisitState = {
    startedAt: NOW,
    pages: [
      { path: "/", topic: "home" },
      { path: "/pricing/", topic: "pricing" },
      { path: "/features/", topic: "features" },
      { path: "/pricing2/", topic: "pricing" },
      { path: "/x/", topic: null },
    ],
  };
  const r = summarizeVisit(state, NOW + 413_000);
  assert.equal(r.pageCount, 5);
  assert.equal(r.clock, "06:53");
  // distinct, no home, most recent last
  assert.deepEqual(r.topics, ["features", "pricing"]);
});

test("summarizeVisit: max 3 topics, keeps most recent", () => {
  const topics = ["features", "useCases", "pricing", "blog", "faq"] as const;
  const state: VisitState = { startedAt: NOW, pages: topics.map((t, i) => ({ path: `/${i}/`, topic: t })) };
  assert.deepEqual(summarizeVisit(state, NOW).topics, ["pricing", "blog", "faq"]);
});

test("summarizeVisit: future startedAt gives 00:00", () => {
  assert.equal(summarizeVisit({ startedAt: NOW + 5000, pages: [] }, NOW).clock, "00:00");
});
