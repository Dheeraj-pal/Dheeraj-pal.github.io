# Dheeraj Pal — Portfolio

Personal portfolio site. Self-contained Next.js project with no dependency on
anything outside this folder.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript strict)
- **Tailwind CSS v4** — design tokens in `src/app/globals.css`
- **lucide-react** for icons; brand marks are inline SVG in `src/components/icons.tsx`
- **Poppins** and **Patrick Hand** via `next/font/google`

No animation library — the entrance fades, walking crowd and marquee are all
`IntersectionObserver` + `requestAnimationFrame` with plain CSS.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm start
npm run check      # lint + typecheck + build
```

## Layout

```
src/
  app/
    layout.tsx       fonts + metadata
    page.tsx         section composition
    globals.css      design tokens and bespoke CSS (crowd sprites, globe, burger)
    favicon.ico
  components/        one file per section, plus BlurFade and icons
  lib/utils.ts       cn() helper
  data.ts            all copy, projects, experience and animation constants
public/images/       sprite sheets, backgrounds, project and work screenshots
```

## Editing content

Everything user-facing lives in `src/data.ts`:

- `DATA` — name, location, email, booking link, social URLs
- `COPY` — every string the page renders, grouped by section
- `NAV_ITEMS` — the slide-out menu
- `WORK` / `PROJECTS` — project cards (title, description, tech, links, image)
- `EXPERIENCES` — roles, with `experience` holding the handwritten aside shown on hover
- `SPRITE` / `CROWD_COUNT` / `BOB` / `WALK` — crowd animation tuning

Descriptions are truncated in the UI (70 chars on project cards, 150 on
experience cards) with a "Show More" toggle; store the full text.

## The crowd animation

`CrowdSection.tsx` walks characters across the crowd section. Each is a cell from
`public/images/people.png` — a 2400×1610 sheet, 10×5 grid of 240×322 cells. Cast,
speeds and directions are randomised per page load. The sheet is drawn facing
right, so walkers heading left are mirrored. One walker is lit with a CSS glow
and always heads right.

Tune via `WALK` (speed range), `BOB` (bounce) and `CROWD_COUNT` in `src/data.ts`.

## Before deploying

- **Read `NOTICE.md`** — the illustration assets are unlicensed and the visual
  design is still the original's. Both need a decision.
- `src/data.ts` → replace every entry in `WORK`, `EXPERIENCES` and `PROJECTS`;
  they ship as placeholders
- `src/data.ts` → rewrite `COPY` in your own voice
- `src/data.ts` → `callHref` and `social.x` need real destinations
- `src/app/layout.tsx` → add `openGraph.url` once the site has a domain
