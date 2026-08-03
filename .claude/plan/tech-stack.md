# Tech stack decisions

> **Revised**: switched from NestJS MVC to Astro — see rationale below. This
> supersedes the earlier NestJS-based version of this file.

## Framework: Astro (static-first, islands architecture)

Chosen because the actual goal is: ship a fast **static** site now, and make specific
pieces dynamic **later** by pointing them at a real API — without ever needing a
running Node server just to serve the site. Astro is built exactly for this:

- **Static by default** (`output: 'static'`) — every page pre-rendered to plain HTML at
  build time, deployable to any static host (Netlify, Vercel static, Cloudflare Pages,
  GitHub Pages, S3+CloudFront). No server process to run, patch, or scale for the site itself.
- **Islands architecture** — the page ships zero JS by default. Only the few components
  that genuinely need client-side behavior (theme toggle, like/dislike, comment form)
  get a small script, using **Alpine.js** (`x-data` directly, no framework adapter
  needed). This matches the original vanilla-JS file's spirit closely — small, targeted
  interactivity, not a full app shell.
- **Content Collections** — typed content (Zod-validated JSON/Markdown) is Astro's
  built-in way to model exactly the resume-like data this site has (experience,
  education, projects, articles, etc.) without a database or CMS. This is the static
  data layer for phase 1.
- **Dynamic later, without a rewrite** — the dynamic bits (comments, reactions, and
  potentially more later) are fetched client-side via Alpine.js `fetch()` calls. Making
  the site "dynamic" later means: stand up an API somewhere, point those components at
  its URL. The Astro output itself doesn't need to change shape for that — no switch to
  SSR/hybrid mode required unless you later want data fetched at build/request time
  instead of in the browser (a separate, bigger decision — see architecture.md).

Alternative considered: NestJS MVC (the original plan). Rejected for this phase because
it couples "static site" and "future API" into one deploy/runtime from day one — the
opposite of what's wanted. The explicit ask is "static now, dynamic via API later,"
and Astro is built around exactly that progression.

## Client reactivity: Alpine.js (CDN, no build step)

Same three components as the original plan, same reasoning — only *where they get
their data* changes over time:

| Component | Phase 1 — static | Phase 2 — API-backed |
|---|---|---|
| Theme toggle | `x-data` + `localStorage`, fully offline | unchanged — never needed a backend |
| Like/dislike | shows the seed count; click updates in-browser only, resets on reload (matches the original source file's actual behavior) | `fetch(PUBLIC_API_URL + '/articles/:slug/reaction')`, persisted server-side |
| Comment form | appends to the in-page list only, lost on reload (matches the original source file's actual behavior) | `fetch(PUBLIC_API_URL + '/articles/:slug/comments')`, persisted server-side |

The move from static to API-backed for these two is a small, contained edit inside each
Alpine component (read `import.meta.env.PUBLIC_API_URL`, swap local-state logic for a
`fetch` call) — not a site rewrite.

## Content data (phase 1): plain JSON under `src/data/`

Content model unchanged from the original plan — see
[routes-and-content.md](./routes-and-content.md) (Profile, Experience, Education,
Certification, Skills, Project, Article, Language, Recommendation). Stored as plain
`.json` files under `src/data/`, typed by a hand-written `src/data/types.ts` — **not**
Astro Content Collections. This is a deliberate choice (not a default): plain JSON,
typed but framework-agnostic, is directly reusable as the seed/shape for the future API
(see [architecture.md](./architecture.md) for the reasoning). Pages `import` the JSON
files directly — fully static, zero runtime dependency, zero Astro-specific data layer.

## The future API — a separate concern, not part of this repo (for now)

The API is **not** built inside this Astro project. When you're ready, it's a
standalone service (its own repo, or its own folder in a later monorepo split — decide
then) exposing the endpoints already documented in
[routes-and-content.md](./routes-and-content.md). Astro's job stays limited to
rendering pages and, for the two interactive islands, calling that API from the
browser. This is actually a cleaner separation than the original NestJS-MVC plan
(which needed a "delete the view module later" step) — here view code and API code are
never in the same place to begin with.

## CSS/assets

Unchanged: the source `<style>` block is ported as-is into `src/styles/*.css` (split by
its existing section markers), imported once in the base layout. No visual changes, no
CSS framework swap — this is a port, not a redesign.
