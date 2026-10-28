# Editing your portfolio

All content lives in `data.json`. Run `npm run validate-data` after editing.

## Turning links on/off

Project link buttons ("GitHub ↗" etc.) come from each project's `links` array.

- **Hide every project link at once:** set `"settings": { "showProjectLinks": false }`.
- **Remove one link:** delete its `{ "label": ..., "url": ... }` entry.
- **Point one at the right repo:** change its `url`.
- **Add one:** add `{ "label": "Demo", "url": "https://..." }` to the array.

Links with an empty `links: []` simply don't render. The "Case study" link is always shown.

## Resume button

Put your PDF in `public/` (e.g. `public/resume.pdf`) and set `personal.resume` to `"/resume.pdf"`.
Leave it as `""` and the button is hidden in both the hero and the contact section.

## Projects

Each project becomes a card and a page at `/projects/<slug>`. Case-study sections
(`problem`, `built`, `approach`, `evaluation`, `result`) are all optional: leave one out
and it won't appear. Set `"featured": true` to place a project in the large top row.
`kind` is a label: "Production", "Research" or "Open source".

## Colors and fonts

Edit the RGB triplets in `src/styles/global.css` (`--c-accent` is the single accent color).

## Commands

    npm install
    npm run dev       # local dev server
    npm run build     # type-check + production build into dist/
