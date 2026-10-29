# Devansh Shah Portfolio

Personal portfolio built with Astro and Tailwind CSS.

## Run locally

```bash
npm install
npm run validate-data
npm run dev
```

Build and type-check:

```bash
npm run build
```

## Recent redesign

- Four featured projects are shown as expanded cards with technical details and system-flow diagrams where useful.
- Remaining projects appear in a compact list immediately below the featured cards.
- Project details are available directly on the homepage rather than behind case-study links.
- Experience uses larger stacked cards with concise summaries, implementation-focused bullets, and technology tags.
- Added a dedicated Education section with verified NYU coursework.
- Added section navigation for Projects, Experience, Skills, Education, and Contact.
- Resume link remains intentionally unset until the PDF is supplied.

All portfolio copy is maintained in `data.json`. See `PORTFOLIO_DATA_GUIDE.md` for the supported fields and editing instructions.

The site is based on the open-source [porfolio.dev](https://github.com/midudev/porfolio.dev) template. See `LICENSE.md`.
