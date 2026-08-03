# Architecture — static-first, API-ready

> **Revised for Astro** (supersedes the earlier NestJS module-based version of this file).

```
src/
├── layouts/
│   └── BaseLayout.astro          (html shell, nav, footer, global CSS imports, Alpine CDN script)
├── components/
│   ├── Nav.astro
│   ├── Sidebar.astro
│   ├── Footer.astro
│   ├── TimelineItem.astro
│   ├── EduItem.astro
│   ├── CertItem.astro
│   ├── ProjectCard.astro
│   ├── ArticleCard.astro
│   ├── LangItem.astro
│   ├── RecItem.astro
│   ├── ConnectCard.astro
│   ├── ThemeToggle.astro          ← island: Alpine x-data + localStorage
│   ├── FeedbackButtons.astro      ← island: Alpine, static now → API later
│   └── CommentForm.astro          ← island: Alpine, static now → API later
├── data/                           ← plain JSON, not Astro Content Collections (deliberate — see note below)
│   ├── profile.json
│   ├── experience.json
│   ├── education.json
│   ├── certifications.json
│   ├── skills.json
│   ├── projects.json              (case-study detail fields inline for projects that have one)
│   ├── articles.json              (body as plain text/HTML fields, no markdown pipeline)
│   ├── languages.json
│   ├── recommendations.json
│   └── types.ts                   (TS interfaces for every shape above — hand-written, no Zod)
├── pages/
│   ├── index.astro                 → /
│   ├── projects/[slug].astro       → /projects/:slug   (getStaticPaths from the projects collection)
│   └── articles/[slug].astro       → /articles/:slug   (getStaticPaths from the articles collection)
├── styles/
│   ├── tokens.css
│   ├── layout.css
│   ├── components.css
│   └── subpage.css
└── env.d.ts                        (types for import.meta.env.PUBLIC_API_URL)

public/
└── (favicon, static images if any)

astro.config.mjs                    (output: 'static' — no server adapter needed for phase 1)
```

## Why `src/data/*.json` instead of Astro Content Collections

Chosen specifically because the goal is "implement the API from this data later."
Plain JSON files, typed by a hand-written `types.ts`, are framework-agnostic — a future
API service can read the exact same files directly (copy them in, or import them as a
seed source) with zero Astro-specific coupling. Astro Content Collections would work
fine for the site itself, but they add an Astro-only schema/query layer
(`config.ts` + `getCollection()`) that a separate API project gains nothing from and
would just have to re-model. Pages import the JSON directly
(`import projects from '../data/projects.json'`) — simple, portable, and exactly the
shape a future API's response bodies should mirror.

## Why this is API-ready without being API-coupled

- Every page is generated from **`src/data/*.json`**, not a live data source — the
  static site needs no backend at all to build or run.
- Only three components ever do anything client-side: `ThemeToggle`,
  `FeedbackButtons`, `CommentForm`. Of those, only the latter two will ever call an
  API — they read a single `PUBLIC_API_URL` value (Astro's public-env convention, safe
  to expose to the browser) and stay static/local-only if it's unset.
- **No `.env` file is created or edited by the agent** — per the hard rule in
  [AGENT.md](../../AGENT.md). If/when `PUBLIC_API_URL` needs to be set, that's a value
  you add yourself to your own `.env` (or your host's environment-variable settings);
  the agent will only ever say the exact key name and where it's read.
- Going from "static" to "dynamic" later is: deploy the future API, set
  `PUBLIC_API_URL`, done — no Astro restructuring, at most a contained edit inside
  `FeedbackButtons.astro`/`CommentForm.astro` to call `fetch()` instead of local state
  (see [tech-stack.md](./tech-stack.md) for exactly what that change looks like).
- If later the *whole* site should become dynamic (e.g. content itself served from the
  API instead of Content Collections), that's a bigger, deliberate step — switching
  `output: 'static'` to `'hybrid'`/`'server'` and adding a server adapter. Not planned
  now; called out here so it's a known future decision, not a surprise later.

## The future API (not built in this repo yet)

Endpoint contract already documented in
[routes-and-content.md](./routes-and-content.md) under "Future API contract." When it's
time to build it, it's a separate service/repo — this Astro project only ever consumes
it via `fetch()` from the two island components above. No code in this repo needs to
change shape to support that; it's additive.
