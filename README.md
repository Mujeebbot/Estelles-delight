# Estelle's Delight

Website for Estelle's Delight, a West African snack and catering business in
Perth, Western Australia. Built with React, Vite, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

This starts a local dev server (Vite will print the URL, usually
`http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder, ready to deploy to any static host
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

To preview the production build locally:

```bash
npm run preview
```

## Project structure

```
src/
  assets/images/   Product photos and graphics
  components/      One component per section (Hero, Flavours, Catering, ...)
  data/            Flavour list + copy used by the Flavours section
  App.jsx          Assembles all sections
  index.css        Global design system (colours, type, layout, animation)
  main.jsx         React entry point
index.html         Vite HTML entry (fonts + meta tags)
```

## Editing content

- **Text and prices**: edit the relevant component in `src/components/`.
- **Flavour list**: edit `src/data/flavours.js`.
- **Images**: swap files in `src/assets/images/` (keep the same filename, or
  update the `import` at the top of the component that uses it).
- **Colours / fonts**: CSS custom properties at the top of `src/index.css`
  (`--tangerine`, `--espresso`, `--gold`, etc.).
- **Contact details**: phone/email/social links are in
  `src/components/Footer.jsx` and `src/components/FinalCTA.jsx`.

## Notes

- Animations use [Framer Motion](https://www.framer.com/motion/) — section
  reveals fade up into view on scroll (`src/components/Reveal.jsx`), and the
  flavour image cross-fades when you switch tabs.
- No CSS framework (no Tailwind) — styling is a single hand-written
  stylesheet (`src/index.css`) that mirrors the class names used in the
  components, so it's easy to trace what styles what.
