# Landing "meeting" redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle every page of dicta.uz and dicta.live as "your visit is a meeting" (dark room + notes that write themselves), remove Premier, and prove with an automated snapshot diff that nothing search engines see has changed.

**Architecture:** An SEO snapshot tool (parse5 over the built HTML of both sites) is built and baselined first; every later task must keep `npm run seo:check` green. Shared meeting components live in `src/components/meeting/`, the visit timer logic in a pure `src/lib/visit.ts`, new UI labels in `src/i18n/pages/meeting-ui.ts`; page templates are then rebuilt on top of them. One branch, one release.

**Tech Stack:** Astro 5, Tailwind 3, vanilla inline scripts, `@fontsource-variable/jetbrains-mono`, `parse5` (dev), `node --test` (Node 22.13, `--experimental-strip-types` for `.ts` units).

**Spec:** `docs/superpowers/specs/2026-11-27-landing-meeting-redesign-design.md`. Approved mockups: `docs/superpowers/specs/assets/2026-11-27-mockup-home-directions.html` (direction **C** only) and `…-mockup-inner-pages.html`. Open them in a browser before any visual task.

## Global Constraints

- Work in worktree `~/Development/dicta/wt-landing/meeting-redesign`, branch `feat/meeting-redesign` from `landing_web` `main`. Another session may share `landing_web`; never `git add -A`, add exact paths.
- Commits: conventional style `feat(landing): …`, author Bekhruz; **no AI names, no Co-Authored-By trailers**. No push until Task 12.
- Do not change: `<title>`, meta description, canonical, hreflang/x-default, `og:*`/`twitter:*`, JSON-LD, H1–H3 text **and level and order**, internal hrefs (trailing slash form), outbound `rel`, FAQ Q&A text, `data-analytics-*` attributes, sitemap URLs, robots, llms.txt, RSS, `public/_headers`, `_redirects`, `.well-known/*`.
- Every string rendered today stays rendered (it may move). Only exceptions: entries in `scripts/seo/allow.json` (Premier + 4 stock-photo alts).
- Every new UI label element carries the attribute `data-ui-label` (the snapshot ignores additions inside it). Real copy must never be inside a `data-ui-label` or `aria-hidden` subtree.
- Brand: tokens in `src/styles/global.css` only, Literata display + Inter body + JetBrains Mono for labels/timestamps (Latin/Cyrillic; Arabic labels use Noto Sans Arabic, no uppercase, no letter-spacing). No gradients. White text on saturated fills.
- Motion: only `transform`/`opacity`; start states gated on `html.js` (like `.reveal`); `prefers-reduced-motion: reduce` → final state, no pulse, no counting; no scroll-jacking; no JS libraries.
- RTL: every layout works under `dir="rtl"` (dicta.live `ar`); directional art uses `rtl:-scale-x-100`.
- Do not copy shareuntil's look (typewriter mono body text, "P. 01 / 07", yellow highlighter, § terms).
- Both builds must succeed: `npm run build:uz` and `npm run build:global`.

## Review Focus

1. **No JS / crawler render** — every scene text, notes item and step must be visible in static HTML with no `hidden`/`display:none`; pinned by the `hiddenText` field (Task 1) and `tests/pages/home.test.mjs` (Task 6).
2. **sessionStorage unavailable or corrupt** (Safari private mode, blocked cookies, garbage JSON) — RecPill still renders a clock from page load and nothing throws; pinned in `tests/unit/visit.test.ts` (Task 3).
3. **Long or odd visits** — over an hour shows `1:02:03`, a clock moved backwards shows `00:00`, never negative; pinned in `tests/unit/visit.test.ts` (Task 3).
4. **Reduced motion** — notes show final text, dot doesn't pulse, clock still ticks (it's information); verified in the browser with emulated `prefers-reduced-motion` (Task 12 matrix).
5. **375 px wide + Arabic RTL + long Russian strings** — no horizontal scroll, labels don't overflow pills; verified in the Task 12 matrix and asserted by `scrollWidth <= clientWidth` in the browser.

---

### Task 1: SEO snapshot tool, fixtures, baseline (model: Opus)

**Files:**
- Create: `scripts/seo/extract.mjs`, `scripts/seo/diff.mjs`, `scripts/seo/snapshot.mjs`, `scripts/seo/compare.mjs`, `scripts/seo/record-fixtures.mjs`, `scripts/seo/allow.json`, `scripts/seo/extract.test.mjs`, `scripts/seo/diff.test.mjs`, `src/lib/fixtures.ts`, `seo-fixtures/stats.json`, `seo-fixtures/catalog.json`, `seo-baseline/uz.json`, `seo-baseline/global.json`, `tests/lib/dom.mjs`
- Modify: `src/lib/stats.ts`, `src/lib/catalog.ts` (export `STATS_URL`, `CATALOG_URL`; read fixture first), `package.json`, `.gitignore` (+ `dist-uz/`, `dist-global/`, `seo-next/`)

**Interfaces:**
- Produces:
  - `extractPage(html: string, relPath: string): PageSnapshot` where `PageSnapshot = { path, title, description, canonical, robots, hreflang: {lang, href}[] (sorted), meta: Record<string,string> (og:*, twitter:*), jsonLd: string[] (each block JSON-stringified with sorted keys), headings: {level: 1|2|3, text}[] (document order), links: string[] (sorted unique internal hrefs), outbound: {href, rel}[] (sorted), text: string[] (sorted multiset of collapsed, non-empty text nodes; excludes script/style/template and subtrees with aria-hidden="true" or data-ui-label), alts: string[] (sorted, same exclusions), analytics: string[] (sorted multiset "event|location|url" from data-analytics-*), hiddenText: string[] (text inside [hidden] or inline display:none/visibility:hidden, excluding <dialog> and data-ui-label subtrees) }`
  - `diffSnapshots(base: Snapshot, next: Snapshot, allow: Allow): Finding[]`, `Snapshot = { pages: Record<relPath, PageSnapshot>, files: Record<name, string> }`, `Allow = { removedText: string[], removedAlts: string[], removedOutbound: string[], removedAnalytics: string[] }`, `Finding = { path: string, field: string, detail: string }`. Rules: any field difference is a finding except: text/alts/outbound/analytics entries *missing in next* that are listed in `allow`; text *added in next* never counts (new labels are excluded at extraction; added copy is caught by review). Pages added or removed are findings. `files` compares hashes, except `sitemap*.xml` compares the set of `<loc>` only (lastmod ignored).
  - `readFixture<T>(name: "stats" | "catalog"): Promise<T | undefined>` — reads `${process.env.LANDING_FIXTURES}/${name}.json` when the env var is set, else `undefined`.
  - `tests/lib/dom.mjs`: `loadPage(site: "uz"|"global", relPath: string): Document` (parse5 of `dist-<site>/<relPath>`), `findAll(node, pred): Element[]`, `attr(el, name): string|undefined`, `textOf(el): string`, `docIndex(el): number`.
  - npm scripts: `build:uz`, `build:global`, `seo:snapshot`, `seo:check`, `test`, `test:pages` (definitions below).

- [ ] **Step 1: Create the worktree and branch**

Run: `git -C ~/Development/dicta/landing_web worktree add ~/Development/dicta/wt-landing/meeting-redesign -b feat/meeting-redesign main && cd ~/Development/dicta/wt-landing/meeting-redesign && npm ci`
Expected: worktree created, install clean.

- [ ] **Step 2: Add dev dependency and scripts**

`npm i -D parse5@^7.3.0`. In `package.json` scripts:
```json
"build:uz": "LANDING_FIXTURES=seo-fixtures PUBLIC_SITE_ID=uz astro build --force && rm -rf dist-uz && mv dist dist-uz",
"build:global": "LANDING_FIXTURES=seo-fixtures PUBLIC_SITE_ID=global astro build --force && rm -rf dist-global && mv dist dist-global",
"seo:snapshot": "node scripts/seo/snapshot.mjs dist-uz seo-next/uz.json && node scripts/seo/snapshot.mjs dist-global seo-next/global.json",
"seo:check": "npm run build:uz && npm run build:global && npm run seo:snapshot && node scripts/seo/compare.mjs seo-baseline/uz.json seo-next/uz.json scripts/seo/allow.json && node scripts/seo/compare.mjs seo-baseline/global.json seo-next/global.json scripts/seo/allow.json",
"test": "node --test scripts/seo/ && node --experimental-strip-types --test tests/unit/",
"test:pages": "node --test tests/pages/"
```

- [ ] **Step 3: Write failing extractor tests** in `scripts/seo/extract.test.mjs`

Fixtures are inline HTML strings. Tests:
- `extracts head fields`: title, description, canonical, 2 hreflang sorted by lang, `og:title` in `meta`.
- `headings keep order and level`: `<h2>B</h2><h1>A</h1><h3>C</h3>` → `[{level:2,text:"B"},{level:1,text:"A"},{level:3,text:"C"}]`.
- `text excludes aria-hidden and data-ui-label subtrees`: `<p>Real</p><div aria-hidden="true">Deco</div><span data-ui-label>Recording</span>` → `text` deep-equals `["Real"]`.
- `analytics multiset`: two `<a data-analytics-event="cta_clicked" data-analytics-location="hero">` → `["cta_clicked|hero|", "cta_clicked|hero|"]`.
- `hiddenText`: `<div hidden><p>X</p></div><dialog><p>Menu</p></dialog>` → `["X"]`.
- `jsonLd key order irrelevant`: `{"b":1,"a":2}` and `{"a":2,"b":1}` produce equal strings.

- [ ] **Step 4: Run, expect FAIL** — `node --test scripts/seo/` → fails, `extractPage` not found.

- [ ] **Step 5: Implement `extractPage` in `scripts/seo/extract.mjs`** (parse5 `parse`, recursive walk; internal link = href starting with `/` or the site origin from canonical; collapse whitespace with `/\s+/g → " "` and trim).

- [ ] **Step 6: Write failing diff tests** in `scripts/seo/diff.test.mjs`
- `identical snapshots → []`.
- `changed h2 text → one finding field "headings"`.
- `removed text listed in allow.removedText → []`; `removed text not listed → finding field "text"`.
- `added text → []`.
- `sitemap lastmod change ignored, loc change found`.
- `page missing in next → finding field "page"`.

- [ ] **Step 7: Implement `diffSnapshots` in `scripts/seo/diff.mjs`; run `node --test scripts/seo/` → PASS.**

- [ ] **Step 8: Implement CLIs**
- `snapshot.mjs <distDir> <out.json>`: every `**/*.html` → `pages[relPath]`; `files` = sha256 of `robots.txt`, `llms.txt`, `blog/rss.xml`, `_headers`, `_redirects`, every `.well-known/*`, and the `<loc>` list (sorted, joined by `\n`) of `sitemap.xml` and `sitemap-index.xml`.
- `compare.mjs <base> <next> <allow.json>`: prints each finding as `path  field  detail`, exits 1 if any, else prints `SEO snapshot: no differences (<n> pages)` and exits 0.
- `record-fixtures.mjs`: fetches `STATS_URL` and `CATALOG_URL` (same headers as the lib modules) and writes `seo-fixtures/{stats,catalog}.json`.

- [ ] **Step 9: Wire fixtures** — `src/lib/fixtures.ts` `readFixture`; at the top of `fetchStats()` / `fetchCatalog()`: if `await readFixture(...)` returns a value, run it through the same parsing/normalising path as a fetched body (do not bypass `stats.ts`'s fallback guard).

- [ ] **Step 10: Record fixtures and baseline**

Run: `node scripts/seo/record-fixtures.mjs && npm run build:uz && npm run build:global && node scripts/seo/snapshot.mjs dist-uz seo-baseline/uz.json && node scripts/seo/snapshot.mjs dist-global seo-baseline/global.json`
Expected: two baseline JSONs; `uz.json` has ~100+ pages, `global.json` ~95.

- [ ] **Step 11: Self-check** — `echo '{"removedText":[],"removedAlts":[],"removedOutbound":[],"removedAnalytics":[]}' > scripts/seo/allow.json && npm run seo:check`
Expected: `SEO snapshot: no differences` twice. (Proves the build is deterministic with fixtures.) If it isn't (e.g. a build timestamp), normalise that field in `extract.mjs` and note it in a comment.

- [ ] **Step 12: Implement `tests/lib/dom.mjs`** (used from Task 5 on; no test of its own).

- [ ] **Step 13: Commit**
```bash
git add package.json package-lock.json .gitignore scripts/seo tests/lib src/lib/fixtures.ts src/lib/stats.ts src/lib/catalog.ts seo-fixtures seo-baseline
git commit -m "feat(landing): SEO snapshot diff with frozen stats/catalog fixtures and baseline"
```

> Orchestrator (not the subagent), after Task 1: run Lighthouse (chrome-devtools `lighthouse_audit`, mobile + desktop) on `dist-uz` served locally for `/`, `/features/offline-recording/`, `/pricing/`, `/blog/vebinar-nima/`; save scores + LCP/CLS to `docs/superpowers/plans/2026-11-27-lighthouse-baseline.md` and commit.

---

### Task 2: Type, tokens and meeting UI copy (model: Sonnet)

**Files:**
- Modify: `package.json` (`@fontsource-variable/jetbrains-mono`), `src/styles/global.css`, `tailwind.config.mjs`
- Create: `src/i18n/pages/meeting-ui.ts`

**Interfaces:**
- Produces:
  - Tailwind `font-mono` → `var(--font-mono)` = `"JetBrains Mono Variable"`, then `var(--font-arabic)`, `ui-monospace`.
  - CSS classes in `global.css` (new `/* ---- Meeting ---- */` section): `.meeting-label` (mono, 11px, uppercase, `letter-spacing:.08em`; under `:lang(ar)` → `font-family: var(--font-arabic)`, no transform, no spacing), `.rec-dot` (8px circle `--color-live`, 1.4s opacity pulse, off under reduced motion), `.notes-in` (start `opacity:0; translateY(6px)` only under `html.js`, `.notes-in.revealed` → final; reduced motion → final).
  - `MEETING_UI: Record<Locale, MeetingUi>` and `meetingUi(locale): MeetingUi` with
    ```ts
    interface MeetingUi {
      recording: string; notesLive: string; summary: string; speakers: string; decisions: string; tasks: string;
      whatYouGet: string; nextStep: string; you: string; dicta: string;
      taskStartFree: string; taskRecordNext: string; taskTryFeature: string;
      stepLater: string;                          // "+ minutes"
      visitPages: (n: number) => string;          // plural-correct per locale
      visitLookedAt: string;
      topics: Record<VisitTopic, string>;
      post: { topic: string; writtenBy: string; duration: string; date: string; inThisPost: string };
    }
    type VisitTopic = "home" | "features" | "useCases" | "pricing" | "blog" | "download" | "developers" | "faq";
    ```
    English values: Recording · Dicta · notes, live · Summary · Speakers · Decisions · Tasks · What you get · Next step · You · Dicta · start for free · record your next meeting free · try it on your next meeting · + minutes · `${n} page(s)` · Looked at · topics: Home, Features, Use cases, Pricing, Blog, Download, Developers, FAQ · Topic, Written by, Duration, Date, In this post. uz/ru/ar: translate; uz uses ʻ (U+02BB) like the rest of the repo, ru plurals via `Intl.PluralRules`. Mark the uz block with `// NATIVE READ PENDING`.

- [ ] **Step 1: Write failing unit test** `tests/unit/meeting-ui.test.ts`: every locale in `ALL_LOCALES` has every key non-empty; `meetingUi("ru").visitPages(1)`, `(2)`, `(5)` return three different strings; `meetingUi("en").visitPages(1) === "1 page"`, `(4) === "4 pages"`.
- [ ] **Step 2: Run** `node --experimental-strip-types --test tests/unit/` → FAIL.
- [ ] **Step 3: Implement** `meeting-ui.ts` (import `Locale` via `import type` from `../locales`), font install + `@import "@fontsource-variable/jetbrains-mono";`, `--font-mono`, tailwind family, CSS classes.
- [ ] **Step 4: Run** unit tests → PASS; `npm run seo:check` → no differences (nothing renders the new copy yet).
- [ ] **Step 5: Commit** `feat(landing): mono label face, meeting tokens and UI copy (uz/ru/en/ar)`.

---

### Task 3: Visit timer logic (model: Sonnet)

**Files:**
- Create: `src/lib/visit.ts`, `tests/unit/visit.test.ts`

**Interfaces:**
- Produces:
  ```ts
  export const VISIT_KEY = "dicta.visit.v1";
  export interface VisitState { startedAt: number; pages: { path: string; topic: VisitTopic | null }[] }
  export function loadVisit(storage: Pick<Storage, "getItem"> | null, now: number): VisitState
  export function recordPage(state: VisitState, path: string, topic: VisitTopic | null): VisitState
  export function saveVisit(storage: Pick<Storage, "setItem"> | null, state: VisitState): void
  export function formatClock(ms: number): string
  export function summarizeVisit(state: VisitState, now: number): { pageCount: number; clock: string; topics: VisitTopic[] }
  ```
  Rules: `loadVisit` returns `{startedAt: now, pages: []}` when storage is null, `getItem` throws, JSON is invalid, or the shape is wrong; clamps `startedAt` to `now` when it's in the future; starts fresh when `now - startedAt > 4h`. `recordPage` is pure, appends only if `path` differs from the last entry, keeps max 50 entries. `saveVisit` swallows all errors. `formatClock`: `<0 → "00:00"`, `65_000 → "01:05"`, `3_723_000 → "1:02:03"`. `summarizeVisit.topics`: distinct non-null, excluding `"home"`, most recent last, max 3.

- [ ] **Step 1: Write failing tests** in `tests/unit/visit.test.ts` covering every rule above, including: storage whose `getItem` throws → fresh state; `"{not json"` → fresh; `startedAt` in the future → `now`; same path twice → one entry; `formatClock(-5)`, `(65_000)`, `(3_723_000)`.
- [ ] **Step 2: Run** → FAIL. **Step 3: Implement** `visit.ts` (no TS-only syntax that strip-types can't erase: no enums, no parameter properties). **Step 4: Run** → PASS.
- [ ] **Step 5: Commit** `feat(landing): visit timer state (pure, storage-safe)`.

---

### Task 4: Shared meeting components + header/footer + layout hook (model: Opus — sets the visual language)

Load the `frontend-design` skill first. Match the approved mockups.

**Files:**
- Create in `src/components/meeting/`: `RecPill.astro`, `VisitRecap.astro`, `Room.astro`, `NotesCard.astro`, `NotesSection.astro`, `NotesItem.astro`, `TaskLine.astro`, `TimedSteps.astro`, `SceneArt.astro`
- Modify: `src/components/Header.astro`, `src/components/Footer.astro`, `src/layouts/Layout.astro` (prop `visitTopic?: VisitTopic` → `<body data-visit-topic>`)

**Interfaces:**
- Consumes: `meetingUi`, `VisitTopic` (Task 2); `loadVisit`, `recordPage`, `saveVisit`, `formatClock`, `summarizeVisit`, `VISIT_KEY` (Task 3).
- Produces (props):
  - `RecPill { locale: Locale; compact?: boolean }` — root `<span data-rec-pill data-ui-label>`: `.rec-dot`, label `recording` (hidden when `compact`), `<time data-rec-clock>00:00</time>`. Its bundled `<script>`: load → `recordPage(location.pathname, body.dataset.visitTopic ?? null)` → save → tick `formatClock(now - startedAt)` every 1s. No JS → static "00:00" is acceptable.
  - `VisitRecap { locale: Locale; tone?: "paper" | "ink" }` — root `<p data-visit-recap data-ui-label hidden>`; script fills `visitPages(n) · clock · visitLookedAt: topics` and removes `hidden` only when `pageCount ≥ 1`.
  - `Room { variant: "hero" | "scene" | "compact"; as?: "section" | "div"; class?: string }` — ink panel (`bg-ink text-ink-fg`), slots `default` and `art`.
  - `NotesCard { label?: string; class?: string; sticky?: boolean }` — surface card; `label` renders as `<p class="meeting-label" data-ui-label>`; heading content (if any) comes through the default slot so callers keep their own `<h2>/<h3>`. Root has `data-notes-card`.
  - `NotesSection { label: string }` — `meeting-label` (`data-ui-label`) + slot.
  - `NotesItem { kind: "check" | "task" | "text"; who?: string }` — ✓ or ☐ glyph (aria-hidden) + optional bold `who` (inside `data-ui-label`) + slot (real copy).
  - `TaskLine { who: string; task: string; href: string; cta: string; attrs?: Record<string, string>; tone?: "paper" | "ink" }` — `☐ who: task` (both `data-ui-label`) + `<a href={href} {...attrs}>{cta}</a>`; `attrs` carries the existing `data-analytics-*` verbatim.
  - `TimedSteps { steps: { t: string; d: string }[]; stamps: string[]; titleTag: "h3" | "p" }` — ordered list; stamp column `<span class="meeting-label" data-ui-label>`; title in `titleTag`; RTL mirrors.
  - `SceneArt { kind: "offline" | "online" | "languages" | "audience" | "phone"; class?: string }` — inline SVG, `aria-hidden="true"`, `currentColor`/token colours, directional parts flip in RTL.
- Header: same nav items, links, language switcher, theme toggle, login, Start free (attributes unchanged); `RecPill` before the CTAs on `lg+`, `RecPill compact` next to the menu button below `lg`. Footer: restyled, same links.

- [ ] **Step 1:** Implement components, header, footer, layout prop.
- [ ] **Step 2: Run** `npm run seo:check` → expected: no differences. (RecPill text is `data-ui-label`; header links unchanged.)
- [ ] **Step 3: Visual check** — build uz, serve `dist-uz`, check header at 1280 and 375, light/dark, then `build:global` and `/ar/` RTL. No horizontal scroll at 375 (`document.documentElement.scrollWidth <= clientWidth`).
- [ ] **Step 4: Commit** `feat(landing): meeting components, recording pill, header and footer`.

---

### Task 5: Page-structure test helpers and home test (model: Sonnet)

**Files:**
- Create: `tests/pages/home.test.mjs`, `tests/pages/templates.test.mjs`

**Interfaces:**
- Consumes: `tests/lib/dom.mjs` (Task 1).

- [ ] **Step 1: Write `tests/pages/home.test.mjs`** (against `dist-uz/index.html`, `dist-uz/en/index.html` and `dist-global/ar/index.html`):
  - `no Premier`: raw HTML has no `/premier/i`.
  - `no stock photos`: no `<img>` whose `alt` is in `allow.json` `removedAlts`.
  - `notes card placement`: exactly one `[data-notes-card]` inside `main`; its `docIndex` is after the payoff H2 and before the languages H2; it contains the payoff H3.
  - `nothing hidden`: `extractPage(...).hiddenText` deep-equals the baseline page's `hiddenText`.
  - `rec pill`: one `[data-rec-pill]` inside `header` per breakpoint variant (2 total).
  - `closing task`: last `section` before `footer` contains a `TaskLine` link with `data-analytics-event="signup_start_click"`.
- [ ] **Step 2: Write `tests/pages/templates.test.mjs`**: for `features/offline-recording/`, `use-cases/round-table/`, `pricing/`, `blog/vebinar-nima/` (uz) and `ar/features/offline-recording/` (global): exactly one `[data-rec-pill]` per variant; feature/use-case pages have one `[data-notes-card]` that contains the benefits H2 and all benefit H3s; blog post has `[data-post-rail]`.
- [ ] **Step 3: Run** `npm run build:uz && npm run build:global && npm run test:pages` → FAIL (home/templates not rebuilt yet; rec-pill assertions pass).
- [ ] **Step 4: Commit** `test(landing): page structure checks for the meeting redesign`.

---

### Task 6: Home page (model: Opus)

Load `frontend-design`. Match mockup direction C and spec §6.2.

**Files:**
- Create: `src/components/home/MeetingHero.astro`, `src/components/home/MeetingScenes.astro`
- Modify: `src/components/pages/HomePage.astro`, `src/components/home/SceneAudiences.astro`, `src/components/home/ClosingStage.astro`, `src/components/Stats.astro` (standalone strip styling), `src/i18n/pages/home-v2.ts` (drop `proof`), `src/i18n/ui.ts` (drop `customers`), `scripts/seo/allow.json`
- Delete: `src/components/home/HeroStage.astro`, `ProofBand.astro`, `SceneOffline.astro`, `SceneOnline.astro`, `ScenePayoff.astro`, `SceneLanguages.astro`, `src/components/Customers.astro`, `src/lib/photos.ts`, `public/customers/premier.png` (and `public/customers/` if empty)

**Interfaces:**
- Consumes: all Task 4 components; `HOME_V2[locale]`, `t(locale).home`.
- Layout: `HomePage` passes `visitTopic="home"`. Order: Header → `MeetingHero` (H1 unchanged, sub, both hero CTAs with current attributes, You/Dicta tiles, the existing transcript ribbon lines kept `aria-hidden` as decoration) → `MeetingScenes` → `Stats` strip → `SceneAudiences` → `Pricing` → `Faq` → `Contact` → `ClosingStage` (H2 unchanged + `TaskLine` using `meetingUi.taskStartFree` and the existing signup CTA attrs + `VisitRecap tone="ink"`) → Footer.
- `MeetingScenes` DOM (spec §6.2): one `<section>` grid; children in order: offline block (H2+body+round-table+link+speakers), online block (H2+body+link+placeholder/send/joined/room strings), payoff block (H2 + steps), `NotesCard sticky` (H3 `meetingTitle`, summary, speakers from `offline.speakers`, decisions, tasks, question/answer/ask, link), languages block (H2+body+samples). `lg+`: blocks left column `min-h-[90vh]`, notes `lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:sticky lg:top-24 self-start`; below `lg`: single column in DOM order. Notes items get `.notes-in` and reveal as their scene's block intersects.
- Every string currently rendered by the deleted components must be rendered by the new ones (the diff enforces it). `SceneArt` replaces the photos.

- [ ] **Step 1:** Build the components and page; remove Premier and photo code.
- [ ] **Step 2:** `npm run seo:check` → findings will list only Premier strings/link/analytics and the 4 photo alts as removed. Copy exactly those into `allow.json` (reviewer verifies every entry is Premier or a stock-photo alt). Re-run → no differences.
- [ ] **Step 3:** `npm run test:pages` → `home.test.mjs` PASS.
- [ ] **Step 4:** Visual check 1280/375, light/dark, uz + `/ar/` on global; reduced-motion emulation shows final notes.
- [ ] **Step 5: Commit** `feat(landing): home page as a meeting — room, scenes and live notes; Premier and stock photos removed`.

---

### Task 7: Feature and use-case templates (model: Sonnet)

**Files:** Modify `src/components/pages/FeaturePage.astro`, `src/components/pages/UseCasePage.astro`; create `src/components/meeting/CompactHero.astro`.

**Interfaces:**
- Produces: `CompactHero { eyebrow: string; h1: string; sub: string; art: "offline" | "online" | "languages" | "audience" | "phone" }` with slot `notes` (rendered beside the room on `lg+`, below it on mobile).
- Feature/use-case hero: `CompactHero` + `NotesCard` holding the existing benefits `<h2 id="benefits-title">` and each benefit as `NotesItem kind="check"` with its existing `<h3>` + `<p>`, then `NotesSection label={nextStep}` + `TaskLine` (`taskTryFeature`, existing hero CTA attrs). "How it works" → `TimedSteps titleTag="h3"`, stamps `["00:00 · " + you, "00:01 · " + dicta, stepLater + " · " + you]` (for >3 steps continue `00:0n · dicta`). FAQ, related, CTA restyled; CTA ink section uses `TaskLine tone="ink"` + `VisitRecap`. Pass `visitTopic="features"` / `"useCases"`. Keep `Shot` screenshots.

- [ ] **Step 1:** Implement. **Step 2:** `npm run seo:check` → no differences. **Step 3:** `npm run test:pages` → template assertions for feature/use-case PASS. **Step 4:** Visual check one feature, one use-case, uz + ar. **Step 5: Commit** `feat(landing): feature and use-case pages in the meeting look`.

---

### Task 8: Index pages — features, use cases, blog index, blog topics (model: Sonnet)

**Files:** Modify `FeaturesIndexPage.astro`, `UseCasesIndexPage.astro`, `BlogIndexPage.astro`, `src/pages/[lang]/blog/topic/[topic].astro` + `src/pages/blog/topic/[topic].astro` (only if they hold markup), `BlogCover.astro` (only if needed for the card).

- Cards become "meeting records": title (existing heading level), existing one-line text, thin rule, arrow. Features/use-cases cards get no meta line. Blog cards get a `meeting-label`-styled meta line of topic · reading time · date (existing strings, so *not* `data-ui-label`). Same links, same order, same analytics attrs. `visitTopic` = `features` / `useCases` / `blog`.

- [ ] **Step 1:** Implement. **Step 2:** `npm run seo:check` → no differences. **Step 3:** Visual check. **Step 4: Commit** `feat(landing): index pages as meeting records`.

---

### Task 9: Pricing, download, developers, FAQ (model: Sonnet)

**Files:** Modify `PricingPage.astro`, `src/components/Pricing.astro`, `DownloadPage.astro`, `DevelopersPage.astro`, `FaqPage.astro`, `src/components/Faq.astro`, `src/components/StoreBadges.astro` (style only), `src/components/Contact.astro` (style only).

- Pricing: same plans/prices/catalog fields; each plan CTA keeps `pricing_plan_selected` attrs and its label; plan feature lists become `NotesItem kind="check"`. Download/developers: list-shaped content into `NotesCard`, primary CTA as `TaskLine`. FAQ: same `<details>` structure and text (FAQPage JSON-LD must still match), restyled. Contact form: same fields, names, endpoint and validation; restyle only. Every page here whose bottom is a CTA section gets `TaskLine` + `VisitRecap` there. `visitTopic` set per page.

- [ ] **Step 1:** Implement. **Step 2:** `npm run seo:check` → no differences. **Step 3:** Submit the contact form locally with the network tab open: the POST body shape is unchanged (do not actually deliver — stop at the request). **Step 4:** Visual check. **Step 5: Commit** `feat(landing): pricing, download, developers and FAQ in the meeting look`.

---

### Task 10: Blog post page (model: Sonnet)

**Files:** Modify `src/components/pages/BlogPostPage.astro` (and prose styles in `global.css` if they live there).

- Left rail (`<aside data-post-rail>`; on mobile a meta row above the title) with `post.*` labels (`data-ui-label`) and the existing values: topic (existing topic link), author, reading time, date. "In this post" lists the post's existing H2 texts as `#id` links, wrapped in `data-ui-label` (they duplicate heading text); show it only when the post has ≥ 2 H2s. `#…` hrefs are not internal links for `extract.mjs`, so they don't affect the diff. Wide serif column, no motion in the article body. End of post: one `TaskLine` keeping the existing CTA attrs + `VisitRecap`. `visitTopic="blog"`. RTL rail mirrors.

- [ ] **Step 1:** Implement. **Step 2:** `npm run seo:check` → no differences. **Step 3:** `npm run test:pages` → blog assertion PASS. **Step 4:** Visual check a long uz post, a ru post, an ar post. **Step 5: Commit** `feat(landing): blog post as a meeting record`.

---

### Task 11: Plain pages — privacy, terms, offer, delete-account, 404 (model: Sonnet)

**Files:** Modify `PrivacyPage.astro`, `TermsPage.astro`, `OfferPage.astro`, `DeleteAccountPage.astro`, `src/pages/404.astro`.

- Typography only (Literata headings, Inter body, mono labels where there are dates/section numbers already). 404 stays `noindex`; may use a small `Room` with `SceneArt kind="phone"`.

- [ ] **Step 1:** Implement. **Step 2:** `npm run seo:check` → no differences. **Step 3: Commit** `feat(landing): legal pages and 404 restyled`.

---

### Task 12: Release gate and ship (orchestrator; final whole-branch review on Opus)

- [ ] **Step 1:** `npm test && npm run seo:check && npm run test:pages` → all green.
- [ ] **Step 2:** Lighthouse on the same 4 URLs as the baseline; LCP and CLS not worse, SEO and Accessibility scores not lower. Record next to the baseline file.
- [ ] **Step 3:** Visual matrix in the browser pane: {home, feature, pricing, blog post, privacy} × {1280, 375} × {light, dark} on uz, plus home/feature/blog on global `ar` and `ru`; emulate `prefers-reduced-motion`; check `scrollWidth <= clientWidth` on every 375 view; sessionStorage blocked (DevTools: run `Object.defineProperty(window,'sessionStorage',{get(){throw new Error()}})` before scripts via a breakpoint, or Safari private window) → pill still ticks.
- [ ] **Step 4:** Whole-branch review (fresh Opus reviewer) against the spec.
- [ ] **Step 5:** Show the user a preview (local `dist-uz` served, browser pane) and the uz `meeting-ui` strings for a native read; apply corrections; re-run Step 1.
- [ ] **Step 6:** On the user's go: merge `feat/meeting-redesign` into `main` (fast-forward), push; both Cloudflare Pages projects build. Then re-snapshot production: fetch every sitemap URL for both domains, run `extractPage` on each, compare against the baseline with `allow.json` (a small one-off script in the scratchpad is fine).
- [ ] **Step 7:** Remove the worktree; keep `seo-baseline/` and the tool in the repo for future redesigns.
