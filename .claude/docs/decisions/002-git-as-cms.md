# ADR-002: Use Git as the CMS (No Headless CMS)

**Date:** 2024  
**Status:** Accepted

---

## Context

The project needs a way to author, store, and manage article content. Common approaches:

1. **Headless CMS** (Contentful, Sanity, Strapi) — content stored externally, fetched at build time via API
2. **Git-based CMS** (Decap CMS, Tina CMS) — content stored in the repo as files, edited via a UI that commits to Git
3. **Files in the repository** — `.mdx` files authored directly in the code editor, committed to Git

---

## Decision

Articles are `.mdx` files committed directly to the Git repository. No third-party CMS is used.

---

## Rationale

### Single author, single editor

The Knowledge Library has exactly one author: Nam Nguyễn. There is no editorial team, no review workflow, no role-based access control. The complexity of a headless CMS is entirely justified by multi-author workflows — which do not exist here.

### The editor is already open

Articles are technical content that often contain code blocks, math notation, and MDX component syntax. A rich-text CMS editor would need to support all of these, or fall back to a raw Markdown textarea anyway. The VS Code MDX extension provides better authoring experience than any web-based CMS editor for this content type.

### Zero ongoing infrastructure cost

Headless CMS plans start free but impose content limits, API rate limits, and vendor lock-in. A migration away from a CMS is a significant engineering project. Storing content in Git is free, permanent, and portable.

### Schema enforcement at the source

Astro's Content Collections validate frontmatter against a Zod schema at build time. This provides the same guarantee as a CMS's structured content model, with no additional service dependency.

### Version history is built-in

Git provides a full history of every content change, who made it, and why. This is equivalent to a CMS's content revision history with no additional work.

---

## Consequences

**Positive:**
- Zero content infrastructure to maintain or pay for
- Full content history via `git log`
- Writing in VS Code with MDX syntax highlighting is better than a CMS editor for technical content
- Content is portable — can be migrated to any future framework without a CMS export step

**Trade-offs:**
- Publishing an article requires Git knowledge. For this project, that is a non-issue — the author is a developer.
- No web UI for editing on mobile or from a browser. If this becomes a need, a Git-based CMS (Tina CMS) can be added later without restructuring the content — the `.mdx` files remain the same.
- Previewing a draft article requires running `pnpm dev` locally. A preview deploy via a GitHub branch is the workaround.

**Constraints this creates:**
- Content must be committed to the repository to be published. There is no draft staging environment separate from Git branches.
- Real-time content updates are not possible — every change requires a new Vercel build (~30 seconds).
