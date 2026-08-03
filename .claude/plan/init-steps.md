# Initialization steps

> **Revised for Astro** (supersedes the earlier NestJS-CLI version of this file).

Not run yet — this is the exact sequence for review. Once approved, executed in order.

## 1. Scaffold the Astro project

```bash
npm create astro@latest . -- --template minimal --typescript strict --no-git
```

(`.` scaffolds in place — the CLI will prompt since the directory isn't empty, that's
fine, it currently only has `.git/`, `.claude/`, `AGENT.md`, `CLAUDE.md`; `--no-git`
because this directory is already a git repo.)

## 2. Alpine.js — no install needed

Added as a CDN `<script defer>` tag directly in `src/layouts/BaseLayout.astro`. No npm
package, no build step for it — keeps the "zero-JS by default, small islands only"
property intact.

## 3. Set up Content Collections

- `src/content/config.ts` — Zod schemas for `profile`, `experience`, `education`,
  `certifications`, `skills`, `projects`, `articles`, `languages`, `recommendations`
  (schemas mirror [routes-and-content.md](./routes-and-content.md) exactly).
- Transcribe the source HTML's content — including sections explicitly marked
  `placeholder — no source data provided` — into the collection files as real, editable
  entries (flagged as placeholders where the source has no real data yet).

## 4. Port markup into components + pages

- Split the source `<style>` block into `src/styles/*.css` by its existing section comments.
- Convert each repeated HTML chunk into an `.astro` component (full list in
  [architecture.md](./architecture.md)).
- Build `index.astro`, `projects/[slug].astro`, `articles/[slug].astro` using
  `getCollection()` / `getEntry()` + `getStaticPaths()`.

## 5. Wire the three interactive islands (phase 1 = static behavior only)

- `ThemeToggle.astro` — Alpine `x-data`, toggles a `dark` class on `<html>`, persists to `localStorage`.
- `FeedbackButtons.astro` / `CommentForm.astro` — Alpine components with local-only
  state, matching the original file's actual behavior (resets on reload) — written so
  that swapping in a real `fetch()` call later (once `PUBLIC_API_URL` exists) is a
  small, contained edit, not a rewrite.

## 6. Verify

- `npm run dev`, check `/`, `/projects/beyondrxaid`, `/articles/clean-architecture-in-dotnet`
- Confirm dark/light toggle persists across reload
- `npm run build` → confirm a fully static `dist/` is produced (previewable with
  `npm run preview` or any static file server, no Node server required at runtime)
- Visual diff against the source HTML at desktop + the 860px breakpoint already defined
  in the source CSS

## 7. (Later, separate effort — not part of this init) The future API

Not scaffolded now. When you're ready: a standalone service implementing the contract
in [routes-and-content.md](./routes-and-content.md), deployed on its own, with
`PUBLIC_API_URL` pointed at it from this project's environment config. Database choice
for that service is tracked in [AGENT.md](../../AGENT.md) §4 — proposed PostgreSQL,
pending your confirmation, and no schema/migration work happens without asking first
regardless.

---

Say go-ahead and step 1 runs first, then I show you the result before continuing —
not all steps blind in one shot.
