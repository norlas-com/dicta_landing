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
