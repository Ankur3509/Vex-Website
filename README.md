# VEX — Website

Marketing site for **VEX**, the real-time voice AI desktop assistant (Windows).
Built with Next.js 16, Tailwind CSS v4, Framer Motion, and Three.js
(@react-three/fiber).

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS v4** — design tokens in `src/app/globals.css` mirror the app's
  own palette (`#050A12` deep space, `#00E8FF` cyan, `#FF5500` ember, `#00FF88` neon)
- **Framer Motion** — scroll reveals, hover states, boot-style glow flashes
- **Three.js / @react-three/fiber** — hero particle sphere (Fibonacci sphere,
  mirrors the in-app "arc reactor" core)
- Fonts (self-hosted via `next/font`): Space Grotesk (display), Inter (body),
  JetBrains Mono (labels / HUD text)

## Sections

1. **Hero** — animated particle sphere, headline, CTAs, stat counters
2. **How it works** — 4-step boot sequence
3. **Features** — 6 subsystems, real feature list, honest framing
4. **Demo** — interactive recreation of the VEX HUD (no fake "screen footage")
5. **Requirements / Download** — Windows-only, Gemini key, Node.js (WhatsApp),
   SmartScreen note, auto-detecting download button
6. **Pricing** — one "Free — Beta" card, grid built for future paid tiers
7. **FAQ** — straight answers (data, Mac, Gemini free tier, messaging protocols)
8. **Footer** — Lost Lad branding, links

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & deploy

```bash
npm run build
npm run start
```

Deploys as-is to Vercel (static, zero config needed).

## The download file

The download button links to a GitHub Release asset (the exe is 395 MB —
too big for git's 100 MB per-file limit, so it's NOT stored in this repo):

https://github.com/Ankur3509/Vex-Website/releases/download/v1.9.0/VEX_Setup.exe

Releases: https://github.com/Ankur3509/Vex-Website/releases

To ship a new build: create a release on GitHub → attach the exe → update
`src/lib/content.ts` (`DOWNLOAD.href`, `version`, `checksum`) → push.
The button already auto-detects the visitor's platform, so macOS/Linux
builds only need their own release assets added later.

## Content / copy

All product copy lives in `src/lib/content.ts` — feature list, setup steps, FAQ,
download metadata. Keep it accurate to what the app actually does; the site is
deliberately written to not overclaim.