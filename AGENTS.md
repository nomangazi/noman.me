<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. The repo currently uses Next.js 16.2.3 with the App Router, so read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Context: noman.me

## About the Owner
- Name: Noman Gazi
- Profession: Software Engineer (Backend Specialist)
- Primary Expertise: .NET, C#, SQL, Docker.
- Location: Mirpur, Dhaka.

## Project Goal
The goal of this project is to replace an old portfolio with a modern, high-performance minimalist site.
- Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS, and pnpm.
- App structure lives in `src/app/`; `src/app/layout.tsx` owns metadata and font setup, and `src/styles/globals.css` owns the global theme tokens.
- Prefer React Server Components. Add `use client` only for genuinely interactive UI.
- Use `next/image` for images and `next/link` for internal navigation.
- Keep reusable content/data in `src/data/` and shared interfaces in `src/types/`.
- Use the scripts in `package.json` for validation and local work: `pnpm dev`, `pnpm build`, and `pnpm lint`.

## Key Content to Include:
- Projects: BeyondRxAid (Healthcare), Finance Wallet (Laravel/Postgres).
- Experience: Former Software Engineer at Bikiran (until Oct 2025).
- Personal Touch: Mention my daughter Maymuna and my interest in IPS/Battery technology.

## Tone & Voice
- Professional, clean, and direct.
- Minimalist aesthetic (Black and White theme).
- Use neutral Zinc/Slate styling and spacious layouts.
