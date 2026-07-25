# Tanish Aggarwal — Portfolio

Personal portfolio site built with Angular 20, showcasing projects, skills, and
experience. Live at **[tanishaggarwal.dev](https://tanishaggarwal.dev)**.

## Tech stack

- **Angular 20** — standalone components only, no `NgModule`
- **Signals** for all component state (`input()`, `signal()`, `computed()`); zero
  `zone.js` — the app runs on `provideZonelessChangeDetection()`
- **SSR + prerendering** via `@angular/ssr`, with an Express server for
  environments that need on-demand rendering
- **Client hydration** with event replay, so interactions that happen before
  hydration finishes aren't dropped
- **TypeScript strict mode** (`strict`, `noImplicitReturns`,
  `noPropertyAccessFromIndexSignature`) plus Angular's `strictTemplates` and
  `strictInputAccessModifiers` across the whole app

No CSS framework or component library — the design system (tokens, layout
utilities, dark/light theme) lives in `src/styles.css`.

## Getting started

```bash
npm install
npm start          # dev server at http://localhost:4200
```

```bash
npm run build       # production build + prerender, output in ../portfolio (see Deployment)
npm test            # unit tests via Karma/Jasmine, headless Chrome
```

## Project structure

```
src/app/
  core/            # ThemeService, shared services, and content model types
  shared/          # cross-cutting directives/components (reveal-on-scroll, icon)
  header/ nav/ about/ skills/ projects/ card/
  experience/ education/ contact/ footer/
                   # one folder per page section, each a standalone component
src/assets/data/   # JSON content (personal info, projects, skills, etc.)
                   # — edit these to update the site's content, no code changes needed
public/            # static assets served as-is (images, resume, robots.txt, sitemap.xml)
```

Each section component takes its content as `input()`s from `AppComponent`,
which owns the data loaded from `src/assets/data/*.json`. There's no backend
and no client-side routing — it's a single prerendered page.

## Notable implementation details

- **Scroll-spy nav** — the nav highlights the section currently in view using
  a single shared `IntersectionObserver`, not a per-link observer.
- **Shared reveal-on-scroll observer** — the fade-in-on-scroll effect used
  across skill/project/education cards is backed by one
  `RevealOnScrollService` observer instance rather than one per element.
- **Theme persistence** — theme choice is read synchronously in
  `index.html` (before Angular bootstraps) to avoid a flash of the wrong
  theme, then kept in sync with `localStorage` via a signal `effect()` in
  `ThemeService`.

## Deployment

There are two build paths, depending on target:

- **`npm run build`** — runs `ng build --output-path ../portfolio --base-href
  /portfolio/`, producing a prerendered static site one directory up (outside
  this repo), for static hosting under a `/portfolio/` path (e.g. GitHub
  Pages). Only the browser output is needed for this target.
- **`ng build`** (no override) — builds to the default `dist/portfolio_source/`
  using `angular.json`'s config, producing both `browser/` and `server/`
  output. `npm run serve:ssr:portfolio_source` runs `server/server.mjs`
  (`src/server.ts`, an Express app via `@angular/ssr`) against that output,
  for deployments that want on-demand SSR instead of a static prerendered
  page.
