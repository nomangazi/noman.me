# AGENT.md — read this before doing anything else in this repo

This file is the source of truth for scope, stack, and hard rules on this project.
**Read it fully at the start of every session before touching any code**, and re-check
it before any destructive or data-affecting action. If something you're about to do
conflicts with this file, stop and ask instead of proceeding.

Detailed planning docs live in [.claude/plan/](.claude/plan/) — this file is the short,
always-read summary; that folder has the full reasoning.

---

## 1. What this project is

Rebuild of `noman-gazi-portfolio-v3-polished.html` (a single-file vanilla HTML/CSS/JS
portfolio) as a fully **static Astro site** — **same visual design**, statically
generated pages, light client-side reactivity via Alpine.js for the few pieces that
need it, built so the site can be made **dynamic later by pointing it at a real API**
without a rewrite. Frontend (this repo) and the future API are separate concerns from
day one — the API is not built inside this repo.

> Revised from an earlier NestJS-MVC plan — see [.claude/plan/tech-stack.md](.claude/plan/tech-stack.md) for why.

Full architecture/route/content breakdown: [.claude/plan/architecture.md](.claude/plan/architecture.md), [.claude/plan/routes-and-content.md](.claude/plan/routes-and-content.md).

### Scope right now

- [ ] Scaffold Astro project (`output: 'static'`, no server adapter)
- [ ] `src/content/*` — Content Collections (Zod schemas) for profile, experience, education, certifications, skills, projects, articles, languages, recommendations
- [ ] Pages: `/`, `/projects/:slug`, `/articles/:slug`, statically generated from the collections above
- [ ] Components ported from the source HTML's repeated markup (nav, sidebar, footer, timeline item, project card, etc.)
- [ ] Alpine.js islands: theme (dark/light) toggle, like/dislike, comment form — static/local-only behavior for now, written so they can point at a real API later via `PUBLIC_API_URL` with only a contained edit
- [ ] Visual parity check against the source HTML at desktop + the 860px mobile breakpoint

Out of scope for now: the future API itself (separate service, built later — contract
already documented in [.claude/plan/routes-and-content.md](.claude/plan/routes-and-content.md)), auth, admin/CMS UI, real database (see §3), deployment/CI.

## 2. Business purpose

This is Noman Gazi's personal portfolio site — a backend software engineer (C#/.NET,
ASP.NET Core, PostgreSQL, Redis, AWS/Azure) using the site to be discovered for
**full-time roles, freelance work, and collaborations** (per the source HTML's
"Let's Connect" section). It needs to:

- Present experience, projects, and articles credibly to recruiters/clients
- Load fast and work without JS (server-rendered, progressively enhanced) since it's a
  first-impression/credibility page, not an app
- Be cheap to run and simple to extend (add a project, write an article) without needing
  a redeploy of a frontend build pipeline
- Eventually expose a real API (`modules/api`) so the same content can power something
  else later (e.g. a separate frontend, or third-party consumption) without rebuilding
  the data layer

## 3. Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro, `output: 'static'` — no server adapter, builds to plain HTML |
| Content | Astro Content Collections (Zod-typed JSON/Markdown under `src/content/`) |
| Client reactivity | Alpine.js (CDN, no build step) — theme toggle, like/dislike, comment form only |
| Styling | Ported as-is from the source HTML's `<style>` block, split into `src/styles/*.css` — no CSS framework, no visual redesign |
| Data (phase 1) | **Static Content Collections**, no database, no backend for the site itself |
| Future API | Separate service (not in this repo), contract documented in [.claude/plan/routes-and-content.md](.claude/plan/routes-and-content.md); this project points its two dynamic islands at it via `PUBLIC_API_URL` once it exists |

Full reasoning: [.claude/plan/tech-stack.md](.claude/plan/tech-stack.md).

## 4. Database

**No database exists yet, and none is used by this repo (the Astro site) at all** — it
never needs one, since content ships as static Content Collections and the two dynamic
bits (comments, reactions) are static/local-only until a future API exists.

**Planned choice for that future API's database, when it's built: PostgreSQL** (matches
the stack already listed on the CV: PostgreSQL, ASP.NET Core patterns, etc.), most
likely with Prisma or TypeORM — **this is a proposal, not yet confirmed**, and it
belongs to a separate future service, not this repo.

**Do not add a database, an ORM, a migration, or any schema change — in this repo or
any future API repo/service — without asking first** — see §5.

## 5. Hard rules — always follow, no exceptions

1. **Never read, write, edit, create, or otherwise touch `.env`, `.env.*` files (`.env.local`, `.env.production`, etc.) in this repo, under any circumstance** — not even to "just check" a value or add one new key. If a task seems to require it, stop and tell the user what's needed and let them handle it.
2. **Never run a database migration, schema change, or introduce/switch a database or ORM without explicit permission from the user first**, asked in chat, for that specific change — a prior approval does not cover a later one.
3. **Never run a delete/remove-type command** (`rm`, `DROP TABLE`, `git clean`, `git branch -D`, deleting files, dropping a migration, etc.) **without asking the user first** and getting a clear go-ahead, even if it seems obviously correct or requested earlier in the conversation.
4. When in doubt about whether an action is reversible or in-scope, ask rather than assume.

## 6. Working agreement

- Plan before implementing non-trivial changes; keep [.claude/plan/](.claude/plan/) up to date if the plan changes.
- This repo stays static — no server, no database, no API implementation lives here. The two dynamic Alpine islands (`FeedbackButtons`, `CommentForm`) are written to degrade to local-only behavior until `PUBLIC_API_URL` is set, never to require a backend to function.
- The future API is a separate effort — build it against the contract in [.claude/plan/routes-and-content.md](.claude/plan/routes-and-content.md), not inside this project.
