# Plan Index — noman.me portfolio → Astro

> **Revised**: switched from NestJS MVC to **Astro** (static-first, dynamic via API
> later). See [tech-stack.md](./tech-stack.md) for the full rationale. Everything below
> reflects the current, Astro-based plan.

Source design: `noman-gazi-portfolio-v3-polished.html` (single-file vanilla JS/CSS portfolio).
Goal: rebuild it as a fully **static** Astro site with the **exact same visual design**,
light client-side reactivity (Alpine.js) for the few pieces that genuinely need it, and
a clean path to making it **dynamic later by pointing it at a real API** — without
needing a running backend for the site itself today.

Read in this order:

1. [tech-stack.md](./tech-stack.md) — what we're using and why (Astro + Content Collections + Alpine.js)
2. [architecture.md](./architecture.md) — folder structure, the static/dynamic boundary, how the future API plugs in
3. [routes-and-content.md](./routes-and-content.md) — page routes, the content/data model extracted from the HTML, and the future API contract
4. [init-steps.md](./init-steps.md) — exact commands to scaffold the project (not run yet — for review first)

## Non-negotiables from the requirements

- **Same design.** CSS variables, layout, typography, spacing all carry over as-is from the source HTML.
- **Static now.** Astro builds the whole site to plain HTML at build time — no server required to run it.
- **Reactive where it matters**: theme toggle, like/dislike, comment form. Alpine.js handles this — no SPA framework, no build step.
- **Dynamic later via API, without a rewrite.** The two data-writing islands (like/dislike, comments) are built so pointing them at a real API later (`PUBLIC_API_URL`) is a small, contained edit — not a restructuring of the site.
- **Frontend and backend are separate from day one** — the future API is not built inside this repo; it's a standalone service consuming/serving the contract already documented in [routes-and-content.md](./routes-and-content.md).
- Plan first, confirm, then implement — nothing gets scaffolded until you approve [init-steps.md](./init-steps.md).
