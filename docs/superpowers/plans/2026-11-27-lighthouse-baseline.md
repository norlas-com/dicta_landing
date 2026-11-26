# Speed and Lighthouse baseline (before the redesign)

Measured 2026-11-27 on `dist-uz` built at c2ed97c (fixtures), served by `python3 -m http.server`.
Chrome DevTools emulation: 390×844 @3x mobile, Fast 4G, CPU 4× slowdown. LCP/CLS from buffered
PerformanceObserver 3.5 s after load (`.superpowers/.../vitals.js`).

| Page | LCP ms | LCP element | CLS |
|---|---|---|---|
| `/` | 1204 | hero sub paragraph | 0 |
| `/features/offline-recording/` | 924 | screenshot img | 0 |
| `/pricing/` | 392 | H1 | 0 |
| `/blog/vebinar-nima/` | 660 | cover img | 0 |

Lighthouse (mobile, home `/`): Accessibility 100, SEO 100, Best Practices 73 (console errors,
third-party cookies, Issues panel — local-server artefacts), Agentic Browsing 100. Only a11y finding:
footer Norlas link `label-content-name-mismatch` (pre-existing).

Gate: after the redesign, LCP must not rise by more than 10% per page, CLS must stay ≤ 0.01,
Accessibility and SEO must stay 100 on `/`.

## After the redesign (b9f1b5e)

Same method as the baseline (390x844 @3x mobile, Fast 4G, CPU 4x, vitals.js read 3.5 s after load), `dist-uz` served locally,
3 plain navigations per page, median reported. LCP is highly cache-state dependent on this setup, so the table also lists
the individual runs and a separate no-cache (hard reload) series.

| Page | Baseline LCP | LCP runs (plain nav) | Median | vs baseline | LCP element | CLS (max of runs) | Gate |
|---|---|---|---|---|---|---|---|
| `/` | 1204 | 1156, 1200, 1088 | 1156 | -4% | hero sub paragraph | 0 | PASS |
| `/features/offline-recording/` | 924 | 832, 184, 172 | 184 | -80% | H1 | 0 | PASS (median) |
| `/pricing/` | 392 | 320, 172, 188 | 188 | -52% | hero paragraph (baseline: H1) | 0 | PASS |
| `/blog/vebinar-nima/` | 660 | 200, 168, 804 | 200 | -70% | cover img | 0.001 | PASS (median), see caveat |

Caveat: runs with a cold cache for the page's own assets (first run after navigating to a new page) are the closest analogue of
the baseline numbers. On those, blog was 804 ms (+22% vs 660) which would breach the 10% rule; feature 832 (-10%), pricing 320 (-18%), home 1156 (-4%).
No-cache hard reload (not comparable with the baseline, which has no cold series): home 1492/1536/1492, feature 1120/1180/928,
pricing 1128/1116/1032, blog 1188/1184/1200 ms; CLS up to 0.0049 (still <= 0.01). Transfer on cold load is 750-1130 KB per page.

Lighthouse mobile on `/`: Accessibility 100, SEO 100, Best Practices 73, Agentic Browsing 100. Failing audits: errors-in-console
(analytics CORS to api.dicta.uz from localhost), third-party-cookies (8, Yandex Metrika), inspector-issues (cookie issues), label-content-name-mismatch
(footer Norlas link, pre-existing). Identical to baseline.

## Cold-cache A/B (c2ed97c vs fb045cf)

Ruling R25. Same harness for both builds, run interleaved (order alternated per round): headless Chromium, a fresh browser context for every
run (empty cache), 390x844 @3x mobile, CDP Fast 4G (150 ms, 200000 B/s down, 96000 B/s up), CPU 4x, buffered LCP/layout-shift observers
injected before navigation, read 3.5 s after load. 5 runs per page per build. OLD = c2ed97c `dist-uz` on :4493, NEW = fb045cf `dist-uz` on :4494
(python http.server, no compression). Absolute LCP is much higher than the plain-navigation numbers above because every asset
(fonts, scripts) is fetched cold through the throttle; only the OLD/NEW ratio is meaningful.

| Page | OLD median (range) ms | NEW median (range) ms | Δ% | LCP elements (old / new) | CLS max (old / new) | KB old/new (median) | Gate |
|---|---|---|---|---|---|---|---|
| `/` | 6760 (6496-6848) | 6864 (6208-6924) | +1.5% | hero sub paragraph / hero sub paragraph | 0.001 / 0.0015 | 1641 / 1554 | PASS |
| `/features/offline-recording/` | 2948 (2912-2972) | 3352 (3328-3388) | +13.7% | cover IMG / H1 | 0.0386 / 0.0281 | 1073 / 1178 | FAIL (LCP); CLS above 0.01 in both builds |
| `/pricing/` | 2704 (2688-2748) | 3136 (3064-3168) | +16.0% | H1 / hero paragraph | 0.0108 / 0.0706 | 1400 / 1501 | FAIL (LCP and CLS) |
| `/blog/vebinar-nima/` | 2992 (2948-3048) | 3460 (3432-3516) | +15.6% | cover IMG / cover IMG | 0.0071 / 0.0031 | 1141 / 1242 | FAIL (LCP) |

Home is bimodal on NEW (6208, 6284 vs 6864-6924); the range straddles OLD, so it is a pass on the median but not a clear win.

Fonts loaded cold (count): `/` 5 -> 8, features 2 -> 4, pricing 3 -> 5, blog 5 -> 7. CSS 66 -> 79 KB (+13 KB), JS 733 -> 740 KB (about the same).

Cause: both new files are fetched on every page and neither is preloaded. `jetbrains-mono-latin` (40 KB) is new, used by the RecPill timer (`font-mono`) and the
meeting scenes. `--font-mono` is `JetBrains Mono, Noto Sans Arabic, ui-monospace`, so any glyph outside JetBrains' latin range falls through to
`noto-sans-arabic-latin` (31 KB), which OLD never loaded on these pages. Together that is about 71 KB on the critical path plus 13 KB more CSS,
about 0.4 s at 200 KB/s, which matches the +400-430 ms. Both fonts are `font-display: swap` and discovered only after the 79 KB stylesheet is parsed,
so they compete with the LCP resource (the H1 font, or the cover image) and cause late swaps. Likely source of the pricing CLS of 0.07 (mono swap in the top pill / hero text).
Only Inter latin and Literata latin are preloaded in `Layout.astro`.

Suggested fix (not implemented): (1) stop `--font-mono` falling through to Noto Sans Arabic: drop `var(--font-arabic)` from the mono stack (line 367 of `global.css`);
(2) load only the latin JetBrains subset (import `@fontsource-variable/jetbrains-mono/wght.css` or a single `files/...latin...woff2` face) instead of the full import, and
`font-display: optional` or a size-adjusted fallback for it so the pill timer cannot shift layout; (3) or preload `jetbrains-mono-latin` only if the pill is above the fold on every page;
(4) subset digits/colon only for the REC clock. Re-run this A/B afterwards; the pricing CLS needs to come back under 0.01 and features/pricing LCP within +10%.

### After perf fix (ac42a14)

Same harness, 5 interleaved runs, OLD = c2ed97c `dist-uz` (rebuilt in a temporary worktree), NEW = ac42a14 `dist-uz`. Changes:
- JetBrains Mono ships only its Latin and Cyrillic faces, and the mono stacks stop falling through to Noto Sans Arabic;
- a size-adjusted Georgia fallback for Literata, which removes the pricing H1 re-wrap;
- unused CSS dropped (CSS 80.8 -> 69.9 KB);
- the blog cover is preloaded.

Details: `.superpowers/sdd/2026-11-27-landing-meeting-redesign/perf-fix-report.md`.

| Page | OLD median ms | NEW median (range) ms | Δ% | LCP elements (old / new) | CLS max (old / new) | Gate |
|---|---|---|---|---|---|---|
| `/` | 7216 | 6720 (6636-7680) | -6.9% | P / P | 0.001 / 0 | PASS |
| `/features/offline-recording/` | 2944 | 2912 (2716-3072) | -1.1% | IMG / H1 | 0.0386 / 0 | PASS |
| `/pricing/` | 2652 | 2756 (2704-2824) | +3.9% | H1 / P | 0.0108 / 0 | PASS |
| `/blog/vebinar-nima/` | 2988 | 3128 (2932-3204) | +4.7% | IMG / IMG | 0.0071 / 0 | PASS |
