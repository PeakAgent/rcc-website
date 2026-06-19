# Renovation Consulting Co. — Website

A custom, editorial marketing site for **Renovation Consulting Co.**, a
construction project management and owner's-representation firm in Palm Springs,
California. Design direction: **warm desert modernism** — calm, composed,
generous whitespace, restrained color, big editorial type.

Built with **Astro** (static output) + TypeScript and plain CSS custom
properties. No Tailwind. Minimal JS. Deploys to Vercel with zero extra config.

---

## Phase 0 — Foundation (this phase)

This phase builds the system, not full page content:

- Global design tokens, fonts, spacing, and base styles (`src/styles/global.css`)
- Base layout with global nav + footer and per-page SEO / Open Graph
  (`src/layouts/BaseLayout.astro`)
- Reusable patterns: `Container`, `Section`, `Button`, `PageHeader`, `ImageSlot`,
  `BuildingMark`, `Hero`
- Hero shell on the home page (background swappable for video, zero layout change)
- Scroll-reveal utility (IntersectionObserver, respects reduced motion)
- On-brand stub pages: Services, About, Process, Journal, Contact, Privacy,
  Terms, Accessibility, plus a 404

---

## Run locally

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # production build -> ./dist
npm run preview  # preview the production build locally
```

---

## Brand tokens

Defined as CSS custom properties in `src/styles/global.css`:

| Token              | Value     | Use                                    |
| ------------------ | --------- | -------------------------------------- |
| `--terracotta`     | `#B13E27` | Primary accent — CTAs, mark (sparingly)|
| `--terracotta-deep`| `#8F3220` | Hover / active                         |
| `--ink`            | `#241E1A` | Body text (warm near-black)            |
| `--cream`          | `#FBF7F2` | Primary background                     |
| `--blush`          | `#F4E3DC` | Alternating section background         |
| `--greige`         | `#BCB8B1` | Borders, dividers                      |
| `--greige-deep`    | `#9B9388` | Secondary text, captions               |

Type: **Fraunces** (display) + **Instrument Sans** (body), via Google Fonts.

---

## Imagery rules (important)

Daniel has **no real project photos yet**. Sourced imagery is used only as
**atmosphere** (mood/texture), never captioned or implied as his completed work.

- The hero background lives in `public/images/atmosphere/`. In this build it is a
  hand-built SVG placeholder (external image hosts were blocked in the build
  sandbox). **Swap it for a real warm desert-modern Unsplash interior photo or a
  looping video** — the hero is structured so the media changes with zero layout
  impact.
- Anywhere a real project photo will eventually go, use the `ImageSlot`
  component. Search the code for `REAL PHOTO SLOT` to find every such spot.

---

## Deploy (Vercel)

Static Astro output — Vercel auto-detects Astro. No adapter, no extra config.
Push the branch and import the repo (or let the preview deployment run).
