# Architecture

System design overview for The Knowledge Library.

---

## Big Picture

```
┌─────────────────────────────────────────────────────────────┐
│                        AUTHOR                               │
│               writes .mdx files in src/content/            │
└─────────────────────┬───────────────────────────────────────┘
                      │ git push
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                      VERCEL CI                              │
│  pnpm build → Astro SSG → static HTML + assets             │
│  Pagefind indexes all article text at build time           │
└─────────────────────┬───────────────────────────────────────┘
                      │ deploys
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                  VERCEL CDN (Edge Network)                  │
│  Serves static files globally                              │
│  No server, no database, no runtime                        │
└─────────────────────┬───────────────────────────────────────┘
                      │ request
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                      READER                                 │
│  Receives pre-rendered HTML                                │
│  Zero JavaScript on first load for article pages          │
└─────────────────────────────────────────────────────────────┘
```

The entire system is static. There is no server, no database, no authentication, and no API. Everything is computed at build time.

---

## Layer Overview

### 1. Content Layer (`src/content/`)

The single source of truth for all article data. Built on Astro's [Content Collections](https://docs.astro.build/en/guides/content-collections/) API.

- Articles are `.mdx` files with typed YAML frontmatter
- The schema in `src/content/config.ts` (Zod) validates every article at build time
- Broken or missing frontmatter fields cause a build failure — errors surface before deployment, never in production
- Astro generates a typed `CollectionEntry<'articles'>` object from each file, used throughout the codebase

**Data flow within a build:**
```
.mdx files → Astro content collection API → typed CollectionEntry objects
                                          → rendered HTML (via MDX)
                                          → Pagefind index (for search)
```

### 2. Component Layer (`src/components/`)

Three tiers with explicit rules about what each tier may access:

| Tier | Folder | May access | Must not access |
|---|---|---|---|
| Primitive | `ui/` | Tailwind classes, props only | Content collections, layouts |
| Layout | `layout/` | Primitive components, site config | Content collections |
| Content-aware | `content/` | Content collections, all components | External APIs |

This tiering prevents "god components" that mix structural and content concerns.

### 3. Page Layer (`src/pages/`)

Astro's file-based router. Pages are thin orchestrators:
- Query the content collection
- Pass data to layout components
- Contain no business logic

Dynamic routes use `getStaticPaths()` to pre-render every article and module page at build time.

### 4. Build Layer

Astro's static site generator runs at deploy time:
1. Validates all frontmatter against the Zod schema
2. Renders all `.mdx` files to HTML
3. Runs `getStaticPaths()` on every dynamic route
4. Generates the Pagefind search index from rendered HTML
5. Outputs a fully static site to `dist/`

---

## Key Design Decisions

For the rationale behind each major technical choice, see the Architecture Decision Records in `docs/decisions/`:

| Decision | Record |
|---|---|
| Why Astro over Next.js | [001-framework-astro.md](decisions/001-framework-astro.md) |
| Why no headless CMS | [002-git-as-cms.md](decisions/002-git-as-cms.md) |
| Why static generation, no SSR | [003-static-generation.md](decisions/003-static-generation.md) |
| Why MDX over plain Markdown | [004-mdx-content.md](decisions/004-mdx-content.md) |
| Why Pagefind for search | [005-pagefind-search.md](decisions/005-pagefind-search.md) |

---

## Content Collection Schema

The canonical definition lives in `src/content/config.ts`. This is the reference:

```
Field         Type          Required   Notes
─────────────────────────────────────────────────────────────
title         string        yes        Full article title in Vietnamese
module        number        yes        Integer 1–9
moduleSlug    string        yes        Matches folder slug (e.g. "foundations")
topic         string        yes        Uppercase label for breadcrumb (e.g. "EDA")
readingTime   number        yes        Estimated minutes, integer
tags          string[]      yes        Min 1 tag; no # prefix
publishedAt   Date          yes        ISO 8601 date
excerpt       string        yes        160 char max; used for meta description
featured      boolean       yes        Only one article may have featured: true
order         number        yes        Position within module, 1-indexed
```

Validation runs at `pnpm build`. The dev server (`pnpm dev`) also validates on file save.

---

## URL Structure

```
/                                   → Homepage (featured article + article grid)
/articles/[moduleSlug]/[slug]       → Individual article
/modules/[moduleSlug]               → Module landing page (list of all articles)
```

Slugs are derived from the `.mdx` filename with no transformation beyond lowercase and hyphen normalization. Dates are never part of URLs.

---

## Performance Strategy

| Concern | Approach |
|---|---|
| JavaScript | Zero on article pages by default; `client:idle` minimum for interactive components |
| Fonts | Self-hosted with `font-display: swap`; `size-adjust` on fallback to prevent CLS |
| Images | Astro `<Image />` component only — auto-generates WebP + width/height to prevent CLS |
| Search | Pagefind — purely static, no API call, loads index on demand |
| Analytics | Plausible — 1KB script, no cookies, no GDPR banner |
| Caching | Vercel edge CDN with long-lived cache headers for static assets |

Target metrics: LCP < 1.5s, CLS < 0.05, INP < 100ms on mobile 4G.

---

## What This Architecture Cannot Do

Understanding limitations prevents wasted effort:

- **No server-side personalization** — every reader gets the same HTML. Reading progress is tracked in `localStorage` only (v2 feature).
- **No real-time content** — new articles require a deploy. The build takes ~30 seconds.
- **No user accounts** — authentication is out of scope permanently (see CLAUDE.md roadmap).
- **No incremental builds** — all articles re-render on every deploy. Acceptable at current content volume.
