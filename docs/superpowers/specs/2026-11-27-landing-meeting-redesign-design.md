# Landing redesign: "the page is a meeting"

Date: 2026-11-27 · Status: draft for approval · Repo: `landing_web` (dicta.uz + dicta.live, Astro 5 + Tailwind 3)

## 1. Why

Today's site reads as a generic AI-made SaaS page: centred serif hero, cards, an ink band of logos, Unsplash stock photos. It doesn't feel authentic, and it doesn't *show* what Dicta does. The reference is shareuntil.com. Its page *is* its product, demonstrated on the visitor. You read it the way a recipient reads a shared file, and the margin tracks you. You understand the product without being told about it.

Dicta's version: **your visit is a meeting.** The page records it, and the notes write themselves as you scroll. By the end you're holding a finished Dicta recap, and its last task is "Start for free".

The redesign is **visual only**. Everything search engines see stays the same (section 5).

## 2. Goals, non-goals, anti-goals

**Goals**
- Every page of both sites gets the new look in **one release**.
- Home page: split "meeting room + notes" story (direction C from the mockups).
- Inner pages reuse the same parts at a smaller scale: the room, the notes card, the task line, timestamped steps, the recording pill.
- Premier is removed from the site entirely. Today it appears in `home/ProofBand.astro` and `Customers.astro`, on dicta.uz only.
- It feels hand-made and specific to Dicta, not like a template.

**Non-goals**
- Rewriting copy. Existing headings and paragraphs stay word for word. Only new small UI labels are added.
- New pages, new URLs, new features in the app.
- Changing analytics: GA4, Metrica, Amplitude, Meta Pixel and the `data-analytics-*` attributes all keep working with the same event names.

**Anti-goals (a failure even if it "works")**
- Any SEO regression: changed title, meta, canonical, hreflang, JSON-LD, H1–H3, internal links, sitemap or robots; content hidden from crawlers; worse LCP or CLS.
- Copying shareuntil's look: its typewriter mono, its "P. 01 / 07" document framing, the yellow highlighter, the "Terms of sharing §" device. We borrow the *idea*, not the style.
- Animation that gets in the way of reading: text hidden until scroll, scroll-jacking, motion that ignores `prefers-reduced-motion`.
- A broken Arabic (RTL) site on dicta.live.

## 3. Constraints

- Two builds from one repo (`PUBLIC_SITE_ID=uz|global`). Locales: uz/ru/en on dicta.uz, en/ar/ru on dicta.live. Arabic is RTL (`dirFor(locale)` in `Layout.astro`).
- Brand stays: paper + indigo ink tokens in `src/styles/global.css`, Literata (display) + Inter (body), no gradients, light by default plus the designed dark theme. A monospace face may be added for timestamps and labels only. It must be self-hosted via `@fontsource` (no Google Fonts round trip) and support Latin + Cyrillic.
- No new runtime framework. Astro components, CSS, and small inline vanilla JS, like today's `.reveal` script.
- White text on saturated fills, never dark text on a bold button (house rule).
- Static site on Cloudflare Pages. The build bakes stats (`lib/stats.ts`) and the plan catalog (`lib/catalog.ts`). Those stay.

## 4. Approaches considered

| | Approach | Trade-off |
|---|---|---|
| A | Home first (shared parts + home), then the rest in a second release | The user sees it live early, and each SEO diff is smaller. For a short time inner pages have an old body under the new header and footer. |
| **B (picked)** | **Everything in one release** | **The site is never half old, half new. The change is larger and ships later, so the SEO snapshot check (5.2) is mandatory and has to pass for every page.** |
| C | Home only, decide the rest later | Dropped: the user wants every page. |

The user picked **B**. Visual direction **C, "meeting room + notes"**, was picked over "A: margin transcript" and "B: live captions". The inner-page treatment was approved from the mockup.

## 5. SEO protection (hard requirements)

### 5.1 What must not change, per page, per locale, per site
- `<title>`, meta description, canonical, hreflang set + x-default, `og:*` / `twitter:*`
- All JSON-LD blocks (SoftwareApplication, FAQPage, Organization/WebSite, BlogPosting, etc.)
- H1 text, plus the text and order of all H2/H3 elements
- Every internal `<a href>` (target set and trailing-slash form), and `rel` attributes on outbound links
- Visible FAQ Q&A text, which must keep matching the FAQPage JSON-LD
- `/sitemap.xml`, `/sitemap-index.xml`, `robots.txt`, `llms.txt`, RSS, `public/_headers`, `_redirects`, AASA files
- All body copy stays in real HTML text in the DOM at load. It may *animate in*, but it is never injected by JS, never in canvas or SVG-only form, and never `display:none` for crawlers.

### 5.2 How it's enforced: the SEO snapshot diff
Add `scripts/seo-snapshot.mjs`. It walks `dist/**/*.html` and writes one JSON per page with the fields in 5.1, plus a normalised list of visible text blocks. Flow:
1. On `landing_web` `main` at the branch point, build both sites (`PUBLIC_SITE_ID=uz` and `global`) and snapshot each → `seo-baseline/`. If `main` moves before release, rebase and re-take the baseline from the new `main`.
2. After the redesign, build both and snapshot again → diff.
3. **Allowed diffs:**
   - New UI-label strings from an explicit allow-list (the keys in 6.4).
   - The removed Premier strings: `proof.lead`, the `premierLead` / `premierLink` text, and the Premier logo alt and link.
   - The alts of the four removed stock photos.

   **Anything else fails** and blocks the release.

**Text extraction.** "Visible text" means the `textContent` of the *static built HTML* (excluding `<script>`, `<style>`, `aria-hidden` decoration), plus every `img[alt]`. CSS state such as clipping or opacity is irrelevant to the tool by design. What crawlers and no-JS visitors see is guaranteed separately: every animation's starting state is gated on `html.js`, like today's `.reveal`, so without JS the page renders final.

**Live data.** `lib/stats.ts` and `lib/catalog.ts` fetch at build time, so two builds made at different times differ on numbers alone. Add an env var `LANDING_FIXTURES=<dir>`. When it's set, both modules read JSON fixtures instead of fetching. The baseline run saves the fetched responses as fixtures, and the after-run reuses them. Production builds never set it.

Also: Lighthouse (mobile + desktop) on home, one feature page, pricing and one blog post, before and after. LCP and CLS must not get worse, and the SEO and Accessibility scores must not drop.

## 6. The design

### 6.1 Shared parts (new components in `src/components/meeting/`)
- **`RecPill`** (in the header): "● Recording 02:41". It counts the **whole visit**, not one page. The start time and the list of pages seen live in `sessionStorage` (wrapped in try/catch) and nothing is sent anywhere. Without JS it renders as a static "● Dicta" mark. With reduced motion, the dot doesn't pulse.
- **`Room`**: the dark ink panel (H1/H2, sub, a small drawn scene). Variants: `home` (sticky, scene changes) and `compact` (inner-page hero).
- **`NotesCard`**: a recap-style card with a heading, mono section labels (SUMMARY / WHAT YOU GET / DECISIONS / TASKS), ✓ lines and ☐ task lines.
- **`TaskLine`**: "☐ **You**: record your next meeting free [Start free]". This becomes the standard CTA form across the site. Keep the existing `data-analytics-event` / `-location` values on every CTA it replaces.
- **`TimedSteps`**: "How it works" as timestamped rows (`00:00 · you`, `00:01 · Dicta`, `+ minutes · you`).
- **`VisitRecap`**: a tiny strip in each page's closing section, "4 pages · 06:53 · looked at: in-person, pricing", read from the same sessionStorage. It's hidden if storage is empty or unavailable, so the page never depends on it.
- **Drawn scenes** (inline SVG/CSS, theme-aware, mirrored in RTL): people around a phone on a table (offline), a call grid with the Dicta bot joining (online), one line in uz/ru/en (languages), a lecture hall (audiences).
- Header and footer are restyled with the same nav items, links and language switcher. The theme toggle stays.

### 6.2 Home page (`components/pages/HomePage.astro`)
```
┌──────── Room (sticky on desktop) ─────┬──────── NotesCard (fills as you scroll) ─┐
│ ● Recording 00:12                     │ Your visit to dicta.uz                   │
│ H1 (same text as today)               │ SUMMARY   (types itself, then stays)     │
│ [You] [Dicta · taking notes]          │                                          │
├─ scene 1: in the room   (H2 today) ───┤ SPEAKERS  Dilnoza · Rustam · Aziz        │
├─ scene 2: online calls  (H2 today) ───┤ DECISIONS ✓ launch moved to the 15th     │
├─ scene 3: the recap     (H2 today) ───┤ TASKS     ☐ Rustam: contracts by Friday  │
├─ scene 4: languages     (H2 today) ───┤                                          │
└───────────────────────────────────────┴──────────────────────────────────────────┘
  Stats (users · meetings · hours, live numbers)        ← no Premier
  Audiences (H2 today, links to use-cases)
  Pricing · FAQ · Contact                                ← plain sections, same text
  Closing: recap done → TaskLine "☐ You: start for free" + VisitRecap
```
- The scenes map onto the existing home sections and their copy in `i18n/pages/home-v2.ts` (offline, online, payoff, languages). Each scene's H2 + body is real text in the left column. The notes content comes from the existing `payoff` copy (summary, decisions, tasks) and the existing sample meeting lines (`home.hero.live`).
- **What the notes card is about.** It is the recap of the *sample meeting*, not of the visit. Its heading stays the existing H3 `payoff.meetingTitle` (e.g. "Haftalik savdo yigʻilishi"), in its current position in the heading order. Above it sits a small non-heading label from 6.4, "Dicta · notes, live". The "your visit" framing lives in the RecPill and the closing VisitRecap only. (The mockup's "Your visit to dicta.uz" card title is dropped because it would change a heading.)
- **What fills in when.**
  - Scene 1: summary, plus speakers from the existing `offline.speakers`.
  - Scene 2: the "Dicta joined" line from `online.joined`.
  - Scene 3: decisions and tasks.
  - Scene 4: the summary line shown in the three languages, from `languages.samples`.
- **DOM structure (decides heading order and mobile stacking).** One `<section>` holding a CSS grid. In DOM order its children are:
  1. scene-1 block (H2 + body + scene art)
  2. scene-2 block
  3. scene-3 block (its H2), then the NotesCard (its H3)
  4. scene-4 block

  On `lg+`, scene blocks sit in the left (ink) column, one grid row each, about one viewport tall. The NotesCard is grid-placed in the right column spanning rows 1–4, with `position: sticky; align-self: start`. Below `lg` the grid collapses to one column, so the natural DOM order is the mobile stack. The heading order is unchanged from today: H1 → offline H2 → online H2 → payoff H2 → payoff H3 → languages H2 → …
- The hero (H1, sub, CTAs, the You/Dicta tiles) is its own section above the grid. It is not sticky.
- Pinned only through the four scenes. Pricing, FAQ and contact are normal flow.
- Stats moves out of `ProofBand` and becomes a standalone strip right after the scenes, with the same `Stats` component and data.
- **Mobile (< lg):** nothing is pinned. Each scene stacks as room block, then its slice of notes.
- **Reduced motion / no JS:** everything is visible and final. No typing and no counting.
- `ProofBand` and `Customers` are deleted, along with `public/customers/premier.png` if nothing else uses it. Unused copy keys for them go too.
- **Unsplash stock photos (`lib/photos.ts`) are replaced** by drawn scenes and the real app screenshots in `src/assets/landing/shots/`. They're a big part of the generic feel. Image alts go with them. *(My call, flagged for review.)*

### 6.3 Inner pages
| Template | Treatment |
|---|---|
| `FeaturePage` (10) and `UseCasePage` (8) | Compact Room hero (H1 + sub + small scene) beside a NotesCard ("In short": the 3 existing benefits as ✓ lines, "Next step" TaskLine). Steps → TimedSteps. FAQ, related and CTA restyled; CTA becomes a TaskLine in an ink closing. |
| `FeaturesIndexPage`, `UseCasesIndexPage` | Grid of cards restyled as "meeting records" (title, one line, a mono meta line). Same links and order. |
| `PricingPage` (+ `Pricing.astro` on home) | Same plans, prices and catalog data, restyled. Each plan's button is a TaskLine-style CTA keeping `pricing_plan_selected`. No pinned story. |
| `DownloadPage`, `DevelopersPage`, `FaqPage` | New typography, NotesCards where content is already list-shaped, TaskLine CTA. |
| `BlogIndexPage`, topic pages | Same grid and covers, restyled cards with a mono meta line (topic · read time · date). |
| `BlogPostPage` | Calm reading: wide serif column, no motion in the article. The side rail shows post details like a meeting record (topic, author, duration = reading time, date, in this post). The post ends with one TaskLine. On mobile the rail becomes a meta row above the title. |
| `Privacy`, `Terms`, `Offer`, `DeleteAccount`, `404` | Typography, header and footer only. |

### 6.4 New UI copy
A small set of labels (≈20 keys) in a new `src/i18n/pages/meeting-ui.ts` for uz/ru/en/ar: Recording, In short, What you get, Next step, Summary, Decisions, Tasks, Speakers, "You", "Your visit to {site}", the VisitRecap phrasing, task-line verbs. The Uzbek strings get a native read by the user before release. They're also the allow-list for the SEO diff.

**Arabic (dicta.live).**
- Labels are translated into Arabic and set in Noto Sans Arabic, not mono, with no uppercase or letter-spacing. Mono plus uppercase applies to Latin and Cyrillic only, switched with `:lang(ar)`.
- Timestamps keep Western digits, matching the current Arabic pages.
- Rows mirror under `dir="rtl"`: the time column sits on the right and "You"/"Dicta" are translated.
- Drawn scenes flip with `rtl:-scale-x-100` where direction matters.

### 6.5 Motion rules
- CSS transitions + IntersectionObserver. No scroll-jacking, and no JS libraries.
- Only transform and opacity animate. All final layout is reserved up front, so CLS stays at about 0.
- Notes "typing" animates text that is already fully in the DOM (a clip/mask reveal). It doesn't insert characters.
- `prefers-reduced-motion: reduce` → all final states, no pulse, no counting.

## 7. Release
- One branch, `feat/meeting-redesign`, from `main`. Shared parts first, then templates. Template groups may be built in parallel worktrees once the shared parts are merged into the branch.
- Gate before merging to `main`:
  1. Both site builds are clean.
  2. The SEO snapshot diff passes.
  3. Lighthouse shows no regressions.
  4. Visual check of every template in light, dark, mobile and Arabic RTL.
  5. The user has seen a preview build and read the Uzbek labels.
- Deploy is the normal Pages build on push to `main`, for both projects. Afterwards, re-run the snapshot against production HTML, and resubmit the sitemap in Search Console and Yandex Webmaster (optional; the URLs are unchanged).

## 8. Calls made without the user (check these)
1. Unsplash stock photos are removed and replaced by drawn scenes + real app screenshots (6.2).
2. The notes card recaps the sample meeting under its existing H3. The "visit" framing is in the RecPill and VisitRecap only (6.2).
3. Pricing, FAQ and contact are not part of the pinned story (6.2).
4. Live stats/catalog are frozen with fixtures for the SEO diff only (5.2).
5. Arabic labels use Noto Sans Arabic instead of mono (6.4).
6. A monospace face is added for labels and timestamps (3).

## 9. Left to the builder
- Exact drawn-scene art, spacing, type scale and the mono face (within section 3).
- How sessionStorage is structured for the visit timer and recap.
- Component APIs and file split inside `src/components/meeting/`.
- Card designs on the index pages, within "meeting record" styling.
