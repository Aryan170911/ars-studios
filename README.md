# ARS Studios — Website

Production website for **ARS Studios**, a digital studio in Patna (mobile-first
websites, Google Business Profile setup, WhatsApp lead systems, reels editing).

## Stack

- **Vite + React 19** — build tooling and UI
- **Tailwind CSS 3** — design tokens extracted verbatim from the Google Stitch
  design export (`tailwind.config.js`: 60 colors, custom type/spacing scale)
- **GSAP + ScrollTrigger** — hero masked line reveal, section reveals
- **Lenis** — smooth inertial scroll, enabled on `(pointer: fine)` only
- All motion is disabled under `prefers-reduced-motion`

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs static site to dist/
npm run preview # serve the production build locally
```

## Contact details

All WhatsApp CTAs are deep links built in `src/site.js`:

- `WHATSAPP_NUMBER` — country code + number, no `+` or spaces
- `PHONE_DISPLAY`, `EMAIL` — shown in the footer
- Locality line — footer bottom strip in `src/components/Footer.jsx`

## Deploy

Pushes to `main` build and publish automatically via **GitHub Actions → GitHub
Pages** (`.github/workflows/deploy.yml`).

The build is fully static, so `dist/` also deploys anywhere else (e.g. Cloudflare
Pages: build command `npm run build`, output directory `dist`). No environment
variables are required — contact details are compiled in.
