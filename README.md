# MathAncestry

![v1.0.0](https://img.shields.io/badge/version-1.0.0-green)

**Git blame for math notation.** Explore the historical origins of mathematical symbols — who invented them, when, and what came before.

**Live site:** [mathancestry.satpreetmakhija.com](https://mathancestry.satpreetmakhija.com)

## Features

- **Symbol Catalog** — Browse and filter all symbols by category, sort by year or name
- **Interactive Timeline** — Vertical chronological view grouped by era with click-to-expand detail cards
- **Equation Explorer** — Hover (or tap on mobile) symbols in famous equations to uncover their origins
- **Symbol Detail Pages** — Full historical narratives, creator info, fun facts, and related symbols

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS 4 · Framer Motion · KaTeX · React Router · Playwright (67 e2e tests)

## Local Development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build
npx playwright test  # e2e tests
```

## License

[MIT](LICENSE)
