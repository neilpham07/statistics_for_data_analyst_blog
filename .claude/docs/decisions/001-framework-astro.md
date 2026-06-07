# ADR-001: Use Astro as the Web Framework

**Date:** 2024  
**Status:** Accepted

---

## Context

We needed a web framework to implement The Knowledge Library. The primary requirements:

- Excellent support for long-form text content
- Typed content with schema validation (articles have required frontmatter fields)
- Ability to embed interactive components inside markdown articles (simulations, charts)
- Static output — no server to manage
- First-class Tailwind CSS support
- Reading performance: fast LCP, zero CLS, minimal JavaScript

The candidates evaluated: **Astro**, Next.js, Nuxt, and plain HTML.

---

## Decision

Use **Astro** with the static output adapter.

---

## Rationale

### Why Astro over Next.js

Next.js defaults to JavaScript-heavy pages. Every component ships with a React runtime even when there's no interactivity. For a reading-focused blog, this is waste — article pages have no interactive elements at all in v1.

Astro's "zero JS by default" model is the correct default for this use case. Interactive components (search, simulators in v3) are opt-in "islands" that load only when needed and only for users who scroll to them (`client:visible`).

Astro's Content Collections API is a better match for typed article frontmatter than Next.js's file-system conventions, which require manual schema validation.

### Why not plain HTML

The design system requires consistency across ~50+ future article pages. Hand-writing HTML templates would mean maintaining that consistency manually. Astro's component model and layouts enforce consistency by construction.

### Why not Nuxt (Vue)

No strong preference for Vue over the Astro template syntax. Astro was chosen because its core feature set (Content Collections, MDX, island architecture) maps more directly to this project's requirements than Nuxt's SPA-oriented model.

---

## Consequences

**Positive:**
- Article pages ship with zero JavaScript, giving fast LCP scores
- Content schema validation happens at build time — broken frontmatter never reaches production
- MDX support is built in — no plugin configuration required
- Pagefind (the chosen search solution) integrates cleanly with Astro builds

**Trade-offs:**
- Astro's TypeScript integration inside `.astro` files has occasional rough edges compared to pure `.tsx` files
- Developers familiar with React/Next.js need a short ramp-up period for Astro's syntax
- Interactive components must be explicitly opted into with `client:*` directives — easy to forget on new components

**Constraints this creates:**
- All pages are pre-rendered at build time. No per-request server computation.
- Interactive components must be framework-agnostic or use a lightweight framework (Preact preferred if React-like syntax is needed).
