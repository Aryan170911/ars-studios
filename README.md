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

## Configure contact details before launch

All WhatsApp CTAs are deep links built in `src/site.js`:

- `WHATSAPP_NUMBER` — country code + number, no `+` or spaces (e.g. `919876543210`)
- `PHONE_DISPLAY`, `EMAIL` — shown in the footer

Placeholders still to replace: `[Your WhatsApp Number]`, `[Your Email]`,
`[Your Patna Locality]`.

## Deploy

The build is a fully static site — deploy `dist/` anywhere. On Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- No environment variables required (contact details are compiled in).
