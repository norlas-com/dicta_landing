# Dicta marketing site

Static marketing site for **dicta.uz** — Astro + Tailwind, deployed on Cloudflare Pages. The
functional app lives separately at **meet.dicta.uz** (`dicta_web` on Cloudflare Workers).

Tri-lingual: `uz` (default, unprefixed), `ru` (`/ru`), `en` (`/en`). Design system (Lora +
Urbanist, indigo accent, violet→indigo→cyan brand gradient) ported from the app. Pricing is fetched
from `api.dicta.uz/v1/billing/catalog` at build time; desktop download URLs from the update feeds.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview
```

## Deploy & migration

Cloudflare Pages: build `npm run build`, output `dist`, `NODE_VERSION=22`.
Full migration + DNS runbook: [`docs/cloudflare-migration.md`](docs/cloudflare-migration.md).
