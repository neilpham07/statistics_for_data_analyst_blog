# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Vision

**The Knowledge Library** (Thư Viện Tri Thức) is a Vietnamese-language statistics education platform authored by Nam Nguyễn. It teaches statistics to data analysts not through equations, but through real-world stories — coffee shops, bubble tea, dice, everyday business decisions.

> "Học thống kê không phải để giải phương trình, mà để thấu hiểu câu chuyện đằng sau những con số thô."
> ("Learn statistics not to solve equations, but to understand the story behind raw numbers.")

"Digital reading room" aesthetic — calm, precise, authoritative. Built for depth, not virality.

---

## Target Audience

**Primary:** Vietnamese data analysts and aspiring data scientists, 22–35 years old, with coding ability but limited formal statistics training.

**What they already know:** SQL, basic Python, how to run a `groupby`. What they struggle with: when to use which statistical test, what p-value actually means, how to communicate uncertainty to stakeholders.

**What they do NOT need:** Academic proofs, Greek notation without explanation, or English jargon left untranslated.

---

## Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build (runs type-check + lint)
npm run typecheck    # npx tsc --noEmit — run this before committing
npm run lint         # next lint
npm run start        # Serve the production build locally
```

**Always run `npm run typecheck` after editing TypeScript files.** Strict mode is on — implicit `any` fails the build.

---

## Technical Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 15** App Router |
| Styling | **Tailwind CSS v3** with full design token system |
| Language | **TypeScript** strict mode |
| Icons | **Lucide React** (tree-shakable) |
| Fonts | `next/font/google` for Source Serif 4 + JetBrains Mono; `geist` npm package for Geist Sans/Mono |
| Deployment | **Vercel** |

**No CMS. No database.** All content data is TypeScript constants in `lib/data.ts`. MDX files in `content/articles/` are written content — not yet wired to Next.js rendering (that's a v2 task).

---

## Architecture

### How data flows

```
lib/data.ts          → TypeScript constants (modules, questions, roadmap steps, etc.)
lib/types.ts         → Shared type definitions
                          ↓
components/sections/ → Server components that import directly from lib/data.ts
                          ↓
app/page.tsx         → Composes all section components (no sidebar, full-width)
app/layout.tsx       → Root: loads fonts, wraps with Header + Footer + global metadata
```

No API routes. No `getServerSideProps`. No data fetching — everything is static import at build time.

### Server vs Client components

Default is server component (no directive). Use `'use client'` only when browser APIs are needed:
- `SearchBar.tsx` — keyboard event listener (`Cmd+K`)
- `SearchTrigger.tsx` — same

Everything else in `components/` is a server component.

### Font loading

Three CSS variables are injected in `app/layout.tsx` and consumed by `tailwind.config.ts`:
- `--font-source-serif-4` → `font-display`, `font-headline-lg`, `font-body-lg`, `font-body-md`
- `--font-geist-sans` → `font-ui-nav`, `font-ui-label`
- `--font-jetbrains-mono` / `--font-geist-mono` → `font-code`

**Never mix typography roles.** A button uses `font-ui-label` (Geist). A heading uses `font-headline-lg` (Source Serif 4). Using Source Serif 4 on a button breaks the system.

### Button pattern

`components/ui/Button.tsx` exports two separate components to avoid TypeScript strict union issues:
- `Button` — renders a `<button>` element
- `ButtonLink` — renders an `<a>` element

Never use a polymorphic `as` prop pattern — TypeScript strict mode rejects it.

---

## Folder Conventions

```
statistic_for_da_blog/
│
├── .claude/
│   ├── design/
│   │   ├── DESIGN.md         # Source of truth for all design tokens
│   │   ├── landscape.html    # Static Tailwind prototype (reference implementation)
│   │   └── landscape.png
│   └── docs/                 # Development documentation (architecture, deployment, ADRs)
│       └── decisions/        # Architecture Decision Records
│
├── app/
│   ├── globals.css       # Tailwind base, skip-nav, selection color
│   ├── layout.tsx        # Root layout: fonts, metadata, Header+Footer wrapper
│   └── page.tsx          # Homepage — composes 8 section components
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx    # Fixed glass nav bar
│   │   └── Footer.tsx    # Site footer with quote
│   ├── sections/         # One component per homepage section (all server components)
│   │   ├── HeroSection.tsx
│   │   ├── WhyStatisticsSection.tsx
│   │   ├── WhatIsStatisticsSection.tsx
│   │   ├── AnalyticsRoadmap.tsx
│   │   ├── LearningRoadmapSection.tsx
│   │   ├── QuestionsSection.tsx
│   │   ├── FeaturedModulesSection.tsx
│   │   ├── PhilosophySection.tsx
│   │   ├── SearchBar.tsx       # 'use client' — keyboard handler
│   │   └── SearchTrigger.tsx   # 'use client' — same
│   └── ui/
│       ├── Button.tsx    # Button + ButtonLink exports
│       └── Tag.tsx       # Small label chip
│
├── lib/
│   ├── data.ts           # All site data: modules, questions, roadmap steps, etc.
│   └── types.ts          # Shared TypeScript types
│
├── content/
│   └── articles/         # MDX files — written content (not yet rendered by Next.js)
│       ├── _template.mdx              # Copy this to start a new article
│       ├── module-1-foundations/
│       └── module-X-name/
│
├── public/
│   └── og/               # Pre-generated OG images (1200×630)
│
├── tailwind.config.ts    # All design tokens — colors, fonts, spacing, radii
├── next.config.ts
└── tsconfig.json
```

**Rules:**
- `app/` only composes layouts and passes props — no business logic
- `components/ui/` must be stateless, no data imports
- `components/sections/` may import from `lib/data.ts` but not from each other
- Never hardcode hex values in component files — always use token names (`bg-secondary`, `text-on-surface`)

---

## Curriculum Modules

The platform teaches **statistics specifically** (not a general DA curriculum). Module 0 is the entry point.

| # | Slug | Focus | Difficulty | Hours |
|---|---|---|---|---|
| 0 | `introduction` | Why statistics exists | Beginner | 2h |
| 1 | `eda` | Exploratory Data Analysis | Beginner | 8h |
| 2 | `sampling` | Sampling & estimation | Beginner | 6h |
| 3 | `statistical-inference` | Hypothesis testing, p-value, CI | Intermediate | 10h |
| 4 | `ab-testing` | Experiment design & analysis | Intermediate | 8h |
| 5 | `regression` | Modelling relationships | Intermediate | 12h |
| 6 | `classification` | Binary decision models | Advanced | 10h |
| 7 | `machine-learning` | Supervised ML | Advanced | 14h |
| 8 | `unsupervised-learning` | Clustering & dimensionality | Advanced | 10h |

---

## Article Frontmatter Schema

Every article `.mdx` file must have this frontmatter:

```yaml
---
title: "Mean vs Median: Tiệm trà sữa của bạn Nam"
module: 1                          # integer 0–8
moduleSlug: "eda"                  # matches module slug above
topic: "EDA"                       # short uppercase label
readingTime: 8                     # minutes, integer
tags: ["EDA", "Kinh-Doanh"]
publishedAt: 2024-01-15            # ISO date
excerpt: "Tại sao số trung bình lại 'nói dối'..."  # max 160 chars
featured: false                    # true = highlighted (one at a time)
order: 2                           # position within module (1-indexed)
---
```

Article file naming: `[order]-[short-slug].mdx`
Example: `content/articles/module-1-eda/02-mean-vs-median.mdx`

URL pattern: `/articles/[moduleSlug]/[slug]`

---

## Design System

All tokens are defined in `tailwind.config.ts` and documented in `.claude/design/DESIGN.md`. Always consult it when in doubt.

### Key Color Tokens

| Token | Hex | Use |
|---|---|---|
| `background` | `#fbf8ff` | Warm cream page base |
| `on-surface` | `#1a1b22` | Primary text |
| `secondary` | `#4e45d5` | Indigo — links, active states, CTAs |
| `outline-variant` | `#c4c7c7` | Hairline separators |
| `surface-container-low` | `#f4f2fd` | Active/hover backgrounds |
| `inverse-surface` | `#2f3038` | Dark section backgrounds |

### Elevation

No drop shadows ever. Depth is tonal only:
- Cards: `border border-outline-variant/30`
- Card hover: `hover:border-secondary/40` (color shift only)
- Dark sections: use `bg-inverse-surface`

### Shapes

- Buttons: `rounded-lg` (0.25rem)
- Cards: `rounded-xl` (0.5rem)
- Tags/chips: `rounded` (0.125rem)

### Motion

Always use `motion-safe:` prefix on transitions: `motion-safe:transition-colors`, `motion-safe:transition-all`. Never use bare `transition-*`.

---

## Coding Standards

### TypeScript

- `strict: true` — no exceptions, no `any`
- Prefer `type` over `interface` for data shapes
- Use `unknown` and narrow explicitly if type is truly unknown

### Components

- All props typed with a local `type Props = { ... }` at the top of the component
- No inline `<style>` tags — Tailwind utility classes only
- `'use client'` only when browser APIs are required (keyboard events, `window`, `localStorage`)

### Tailwind

- Never hardcode hex in className — use token names
- `@apply` in `globals.css` only for prose content inside MDX

### Formatting

- 2-space indentation
- Single quotes in TypeScript; double quotes in HTML attributes
- No semicolons in `.ts`/`.tsx`
- Trailing commas in multi-line objects and arrays

---

## SEO & Accessibility

### Every page must have

- `<title>` — format: `"Article Title | The Knowledge Library"`
- `<meta name="description">` — max 160 characters
- `<link rel="canonical">` — always explicit
- OG image from `public/og/` (1200×630)
- JSON-LD structured data (`Article` type for posts, `WebSite` for homepage)
- `<html lang="vi">` — never change to `en`

### Accessibility rules

- All interactive elements reachable by keyboard
- Skip nav: `<a href="#main-content" class="sr-only focus:not-sr-only">` in Header
- `aria-current="page"` on active nav links
- Minimum font size: `12px` even for metadata
- Heading levels must not skip (`h1` → `h2` → `h3`, never `h1` → `h3`)
- Color is never the sole indicator of state — always pair with border, text, or icon change
- Use `next/image` for all images (auto WebP + prevents CLS)

---

## Content Writing Guidelines

### Voice

- First person: "Hãy tưởng tượng bạn là chủ một tiệm cà phê..."
- Address reader as "bạn" (singular you)
- Conversational but authoritative — not academic, not casual chat
- Avoid filler: "Như chúng ta đã biết", "Rõ ràng là", "Đơn giản là"

### Article Structure (always follow this order)

1. **Hook** — real-world scenario that creates cognitive tension (max 2 paragraphs)
2. **The problem** — why this matters
3. **The concept** — story first, formula second
4. **The formula** (if needed) — one block, every symbol defined in Vietnamese
5. **Applied example** — work through the hook scenario
6. **The takeaway** — one sentence, dinner-table repeatable

### Mathematical content

- Intuition before formula, always
- `$$` for display equations, `$` for inline
- Every symbol defined: write "where $\sigma$ (sigma) là độ lệch chuẩn", never just "where $\sigma$ is standard deviation"
- Python preferred over R; use believable mock data (no `foo`, `bar`, `x`, `y`)
- Every code block must run as written — no pseudocode

### Vocabulary (introduce once as Vietnamese (English), then Vietnamese-only)

| Concept | Term |
|---|---|
| Standard deviation | độ lệch chuẩn |
| Hypothesis testing | kiểm định giả thuyết |
| Confidence interval | khoảng tin cậy |
| p-value | giá trị p |
| Sample | mẫu |
| Population | tổng thể |
| Distribution | phân phối |
| Central limit theorem | định lý giới hạn trung tâm |

---

## Roadmap

### v1 (Current — in progress)

- Next.js 15 App Router landing page with 8 sections
- Module 0–8 statistics curriculum structure
- Design system in Tailwind
- MDX content files (not yet rendered — static writing workspace)
- Vercel deployment

### v2 (Next)

- Wire MDX rendering: `app/articles/[moduleSlug]/[slug]/page.tsx` + `next-mdx-remote`
- Article listing page: `app/articles/page.tsx`
- Module pages: `app/modules/[slug]/page.tsx`
- Reading progress bar, related articles widget
- Dark mode (`darkMode: "class"` already configured in Tailwind)

### v3

- Interactive charts (Observable Plot or Vega-Lite)
- In-browser Python via Pyodide
- Full-text search (Pagefind or Orama)

### Out of Scope (Never)

- Multi-author support
- Paid content / paywalls
- User accounts or authentication
