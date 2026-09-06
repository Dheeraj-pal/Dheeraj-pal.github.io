# Provenance notice

This site began as a pixel-accurate clone of a third-party portfolio. The
copied **content** has been removed. Two things have **not** been resolved, and
both are yours to decide on before publishing.

## Resolved — content and identity

Removed and replaced with placeholders or original wording:

- All biographical content — six roles, their descriptions and the handwritten
  anecdotes attached to them. None of it described you, so none of it was kept.
- All project entries and their descriptions.
- All section copy: hero headline, crowd headline, section headings and
  subheadings, marquee text, brand statement, footer eyebrow. Rewritten; now in
  `COPY` in `src/data.ts`.
- All seven product screenshots, which showed the original author's products.
  Deleted. `Project.image` is now optional and cards render a neutral panel.
- The original author's company name in the copyright line.

## Unresolved 1 — the illustration assets

These are still the original site's files, of unknown licence:

| File | What it is |
|---|---|
| `people.png` | 2400x1610 sprite sheet, 50 hand-drawn characters |
| `hero-bg.svg`, `hero-bg-lg.svg`, `footer-bg.svg` | wireframe background art |
| `arrow1-4.svg`, `shine1.svg` | hand-drawn arrow and sparkle marks |
| `noise.svg` | card grain texture |
| `me.png` | the highlighted walker, drawn in the same style as the sheet |

`me.png` is a line-art illustration in the same style as the sheet, not a
photograph, so it carries the same licensing question as the rest of the art and
no separate likeness concern. It is kept as the highlighted walker; swap in your
own cut-out at roughly 300x350 to make it you.

The character sheet in particular looks like licensed stock illustration
(the style matches several commercial packs). Whoever drew it holds the
copyright, and a licence bought by someone else does not transfer.

Options, cheapest first:

1. Identify the pack and buy your own licence.
2. Swap in equivalents you can licence — [Humaaans](https://humaaans.com),
   [Open Peeps](https://openpeeps.com) and [Croods](https://croods.io) are all
   free for commercial use and ship as sprite-friendly sets.
3. Commission or draw replacements.
4. Drop the crowd section and the decorative art entirely.

Only option 4 needs code changes; the rest are asset swaps. For 1–3, keep the
2400x1610 / 240x322 grid and `people.png` drops straight in. A different grid
means updating `SPRITE` in `src/data.ts`.

## Unresolved 2 — the visual design

The layout, spacing, type scale, section order and the crowd concept itself are
still the original designer's work, reproduced closely. Replacing the words does
not change that — the page is recognisably the same design.

Copyright in a website's *look* is murkier than in its assets or text, and this
is a judgement call rather than a clear line. But if the intent is a portfolio
that is honestly yours, the design is the part still worth changing. The
sections are self-contained components, so they can be restyled or reordered
without touching the animation code.

## If you publish as-is

Credit the original design and licence the art. A line in the footer costs
nothing and settles the question.
