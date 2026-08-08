# Lucas Cardozo — Portfolio

Personal portfolio website built with React 19, Vite, and TypeScript. Multi-section layout (hero, skills, education, projects, contact) with all content data-driven from local JSON files.

🌐 [lucasivancardozo.github.io/portfolio](https://lucasivancardozo.github.io/portfolio/)

## ✨ Features

- **Six content sections**: Hero, Skills, Education, Projects, Contact
- **Data-driven**: every string lives in `src/lib/db/*.json` — no hardcoded copy in components
- **React Compiler (Babel)** for automatic memoization
- **WebP imagery** — ~84% smaller than equivalent PNGs
- **A11y**: semantic HTML, `aria-hidden` on decorative SVGs, `.sr-only` utility for screen-reader-only text
- **Strict TypeScript** with `tsc -b` type-check on every build
- **Biome** for lint and format (single binary, ~16ms per run)

## 🚀 Tech Stack

- **React 19** with React Compiler
- **Vite 7** as build tool
- **TypeScript 5** in strict mode
- **Biome 2** for linting and formatting
- **CSS Modules** for component-scoped styles
- **gh-pages** for deployment

## 📁 Project Structure

```
src/
├── components/
│   ├── features/      # Section components (Hero, Skills, Education, Projects, Contact)
│   └── layouts/       # Layout components (Footer)
├── lib/
│   ├── db/            # Static JSON data + repositories
│   └── hooks/         # Custom React hooks
├── types/             # TypeScript type definitions
├── App.tsx            # Root component
└── main.tsx           # Entry point

public/
├── icons/             # Skill and tech SVG icons
├── images/            # Project screenshots (WebP) + hero assets
└── favicon.svg        # Site favicon
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+ (`npm install -g pnpm`)

### Install

```bash
pnpm install
```

### Develop

```bash
pnpm dev
```

Opens the dev server at `http://localhost:5173/portfolio/` (or the next available port).

## 📜 Available Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start the Vite dev server with HMR |
| `pnpm build` | Type-check with `tsc -b` and build for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run Biome checks (lint + format) |
| `pnpm lint:fix` | Run Biome checks with auto-fix |
| `pnpm format` | Run Biome formatter only |
| `pnpm deploy` | Build and publish to GitHub Pages |

## 🚢 Deployment

The site is deployed to GitHub Pages via `pnpm deploy`, which builds the project and pushes the `dist/` folder to the `gh-pages` branch.

The `base` path in `vite.config.ts` is `/portfolio/`, matching the GitHub Pages URL.

## 👤 Author

**Lucas Iván Cardozo** — Full-Stack TypeScript Developer

- 📍 Mar del Plata, Buenos Aires, Argentina
- 💼 [LinkedIn](https://www.linkedin.com/in/lucas-ivan-cardozo/)
- 🐙 [GitHub](https://github.com/LucasIvanCardozo)
- ✉️ lucasivancardozo27@gmail.com

---

Built with React and Vite. Deployed on GitHub Pages.