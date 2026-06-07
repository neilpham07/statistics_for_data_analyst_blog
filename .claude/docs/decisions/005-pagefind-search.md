# ADR-005: Use Pagefind for Search

**Date:** 2024  
**Status:** Accepted

---

## Context

The site needs full-text search across all articles. Options evaluated:

1. **Pagefind** — static search library; indexes site at build time; runs entirely in the browser
2. **Algolia** — managed search API; requires sending content to Algolia's servers; generous free tier
3. **Meilisearch** — open-source search engine; requires self-hosting a server
4. **Fuse.js** — client-side fuzzy search; no index step; searches in-memory

---

## Decision

Use **Pagefind**.

---

## Rationale

### No server required

Pagefind generates its search index during `pnpm build` and writes it to `dist/_pagefind/`. The index is served as static files alongside the site. There is no search API endpoint, no server to maintain, and no API key to manage. This aligns with the static-generation constraint (ADR-003).

### Indexes the rendered HTML

Pagefind crawls the built HTML output, not the source `.mdx` files. This means:
- Math formulas rendered by KaTeX are indexed as their display text
- MDX component output is indexed
- Navigation and footer text can be excluded using `data-pagefind-ignore` attributes

This is more useful than indexing raw Markdown source, which contains frontmatter YAML, JSX syntax, and LaTeX notation that readers would never search for.

### Vietnamese language support

Pagefind segments Vietnamese text correctly for full-text indexing. Algolia requires explicit language configuration and custom analyzers for Vietnamese. Pagefind handles it without configuration.

### Why not Algolia

Algolia is the industry-standard choice for hosted search, but it requires:
- Sending all article content to Algolia's servers (a third-party dependency)
- Managing an API key
- Running a separate indexing step or webhook on deploy
- A monthly cost above the free tier if article volume grows

For a single-author blog with <200 articles, these trade-offs are not justified.

### Why not Fuse.js

Fuse.js loads all searchable content into memory at page load. With 9 modules × ~10 articles × ~2000 words each, the in-memory payload would be ~300KB+ uncompressed. Pagefind streams only the relevant index chunks on demand, with a typical first-load cost of ~15KB.

---

## Consequences

**Positive:**
- Zero infrastructure: search works with no external service, API key, or server
- Index is always in sync — it's rebuilt on every deploy
- Works offline (after the static files are cached by the service worker, if added in v2)
- No privacy concern: reader search queries never leave the browser

**Trade-offs:**
- Search does not work during `pnpm dev`. Must run `pnpm build && pnpm preview` to test search. This is documented in `docs/setup.md`.
- Pagefind has a cold-load delay on first search (~100–200ms to fetch the initial index chunk). Acceptable for this use case.
- Vietnamese-specific relevance tuning (stemming, synonym expansion) is not configurable in Pagefind. If search quality becomes an issue at scale, migrating to Algolia is a documented exit path.

**Constraints this creates:**
- Elements that should be excluded from search (navigation, footer, sidebar) must be marked with `data-pagefind-ignore` in the component templates.
- The Pagefind UI component provides default styling that must be overridden to match the design system. Override the CSS custom properties rather than the class names.
