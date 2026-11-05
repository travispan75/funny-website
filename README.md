# Travis Pan portfolio

Next.js App Router, React, TypeScript, and CSS Modules.

## Run locally

From this directory:

```powershell
npm install
npm run dev
```

Open http://localhost:3000. If that port is occupied, Next.js prints the selected
port in the terminal. Press Ctrl+C to stop the server.

The intro plays on each full page load: black screen, centered white
`TRA / VIS / PAN` wordmark, fade to an empty white page after 3.2 seconds.
Refresh to replay it. Click/tap the intro, or focus it and press Enter/Space, to
skip. Reduced-motion preferences skip the animation.

## Wordmark artwork

The intro uses the three supplied FontBolt PNGs, copied unchanged into
`public/images/intro/tra.png`, `vis.png`, and `pan.png`. Nested SVG viewports clip
their black padding and size all three words to equal visible widths and heights,
with tight spacing between rows. No installed font or webfont is required.

The original `fontbolt (1).png`, `fontbolt (2).png`, and `fontbolt (3).png` files
are retained in the project root. The three displayed images are preloaded.

## Production checks

```powershell
npm run typecheck
npm run build
npm start
```

The animation uses CSS opacity and transforms; React only handles skipping and
removing the finished overlay. No animation library, remote font request, or
backend is required for this initial screen.
