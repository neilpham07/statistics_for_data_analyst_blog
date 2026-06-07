# Roadmap

Feature roadmap for The Knowledge Library. Versions are milestones, not time-bound releases.

---

## v1 — Foundation (Current Target)

**Goal:** A fully functional, production-deployed static blog with the complete design system, at least 4 articles, and all 9 modules scaffolded in the content directory.

### Acceptance Criteria

- [ ] Astro project initialized with Tailwind, MDX, TypeScript strict
- [ ] Design tokens from `design/DESIGN.md` implemented in `tailwind.config.ts`
- [ ] All fonts self-hosted (Geist, JetBrains Mono, Source Serif 4)
- [ ] Content collection schema in `src/content/config.ts` validates all article frontmatter
- [ ] 3 layouts implemented: `BaseLayout`, `ArticleLayout`, `HomeLayout`
- [ ] Component library: `ArticleCard`, `Button`, `Tag`, `Sidebar`, `Header`, `Footer`, `TableOfContents`
- [ ] Homepage: hero section + article grid + learning path sidebar
- [ ] Article page: 3-column layout with sticky sidebar and table of contents
- [ ] Module landing page: list of articles in the module
- [ ] Pagefind search working in production
- [ ] Plausible analytics on production only
- [ ] Sitemap submitted to Google Search Console
- [ ] All 9 module folders created with at least 1 published article each
- [ ] Open Graph meta tags on every page
- [ ] Canonical URLs on every page
- [ ] Core Web Vitals pass on mobile (LCP < 1.5s, CLS < 0.05, INP < 100ms)
- [ ] `pnpm typecheck` passes with zero errors
- [ ] Deployed to Vercel at production domain

### Out of Scope for v1

- Dark mode
- Reading progress tracking
- Newsletter
- Comments
- Interactive simulations
- Dynamic OG images

---

## v2 — Reading Experience

**Goal:** Make every return visit better. Readers know where they left off and can navigate the curriculum without losing their place.

### Features

**Reading progress tracking**
- Track which articles the reader has visited, stored in `localStorage`
- Show completion checkmarks in the sidebar navigation
- No user account required — progress is device-local
- A "Continue reading" section appears on the homepage for returning visitors

**Draft support**
- Add `draft: boolean` to the content schema
- Draft articles build and are accessible via preview URL but excluded from production builds
- Filter in `getStaticPaths()` based on `import.meta.env.DEV || !article.data.draft`

**Related articles widget**
- Shown at the bottom of each article
- Selects 2–3 articles from the same module + matching tags
- Computed at build time — no client fetch

**Estimated reading time**
- Calculated automatically from word count at build time
- Remove the manual `readingTime` frontmatter field
- Formula: `Math.ceil(wordCount / 200)` minutes for Vietnamese text (adjust for code blocks)

**Dark mode**
- Toggle stored in `localStorage` under key `theme`
- Respects `prefers-color-scheme` as the initial default
- `dark:` Tailwind variants applied to all components

---

## v3 — Interactive Content

**Goal:** Make statistics tangible. Readers can run simulations and experiments directly in the browser without installing anything.

### Features

**Embedded interactive charts**
- Use [Observable Plot](https://observablehq.com/plot/) or Vega-Lite for data visualizations
- Charts are Astro Island components (`client:visible`) — load only when scrolled into view
- Chart data is imported as JSON alongside the `.mdx` file

**Probability simulators**
- Monty Hall simulator — choose a door, see the odds play out
- CLT dice roller — roll N dice, watch the distribution emerge
- Bayesian update visualizer
- Built with vanilla TypeScript + Canvas or a lightweight charting lib

**In-browser Python**
- Optional feature for Module 3 (Python) articles
- Run code blocks in the browser using Pyodide
- Only loaded on articles that opt in via frontmatter: `interactive: true`
- Cold load time of Pyodide (~8MB) must be deferred and opt-in

---

## v4 — Community and Growth

**Goal:** Build an audience. Give readers a reason to return and a way to engage without sacrificing the reading experience.

### Features

**Newsletter**
- Provider: [Buttondown](https://buttondown.email) or [Resend](https://resend.com)
- Subscribe widget in the article footer and homepage
- Newsletter issues link back to new articles
- Double opt-in required (GDPR / Vietnamese law compliance)

**Comment system**
- Provider: [Giscus](https://giscus.app) (backed by GitHub Discussions)
- Zero infrastructure — comments live in the GitHub repo
- Readers need a GitHub account to comment (acceptable for the target audience)
- Embedded below the article takeaway section, not after the footer

**Dynamic Open Graph images**
- Per-article OG images generated at build time using [Satori](https://github.com/vercel/satori)
- Template includes: article title, module label, read time, author name
- Eliminates the manual Figma export step from v1

**RSS feed**
- `@astrojs/rss` generates a full-text RSS feed at `/rss.xml`
- Available for readers who prefer feed readers

---

## Parking Lot

Ideas that have been discussed but are not yet scheduled. Revisit when v3 is complete.

| Idea | Consideration |
|---|---|
| Series/multi-part articles | Current module structure may be sufficient |
| PDF export of articles | Useful for offline reading; complex to style correctly |
| Vietnamese TTS (text-to-speech) | Could lower barrier for readers with visual impairment |
| Code playground (CodeSandbox embed) | Heavy; Pyodide may be sufficient |
| Translations to English | Changes the product direction significantly — not planned |
| Community contributions | Would require moderation infrastructure — out of scope |

---

## Out of Scope (Permanent)

These have been explicitly decided against. Do not re-propose without a strong reason.

- Multi-author support
- Paid content or paywalls
- User authentication or accounts
- Server-side rendering (the site stays static)
- A separate mobile app
