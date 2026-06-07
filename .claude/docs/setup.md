# Setup Guide

Getting the project running from a fresh machine.

---

## Prerequisites

| Tool | Version | Notes |
|---|---|---|
| Node.js | 20 LTS or higher | Use `nvm` or `fnm` to manage versions |
| pnpm | 9.x | `npm install -g pnpm` |
| Git | Any recent | — |
| VS Code | Latest | Recommended editor |

**Recommended VS Code extensions:**
- Astro (`astro-build.astro-vscode`) — syntax highlighting and IntelliSense for `.astro` files
- Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`) — autocomplete for design tokens
- MDX (`unifiedjs.vscode-mdx`) — syntax highlighting for `.mdx` content files
- Prettier (`esbenp.prettier-vscode`) — formatting

---

## Installation

```bash
# Clone the repository
git clone <repo-url>
cd statistic_for_da_blog

# Install dependencies
pnpm install
```

---

## Running Locally

```bash
# Start development server (hot reload)
pnpm dev

# Build for production
pnpm build

# Preview the production build locally
pnpm preview
```

The dev server runs at `http://localhost:4321` by default.

---

## Environment Variables

Create a `.env.local` file in the project root. It is gitignored and never committed.

```
# Plausible Analytics (optional in development)
PUBLIC_PLAUSIBLE_DOMAIN=theknowledgelibrary.com

# Site URL (used for canonical links and OG image generation)
PUBLIC_SITE_URL=https://theknowledgelibrary.com
```

In development, `PUBLIC_SITE_URL` defaults to `http://localhost:4321` if not set.

---

## Folder Orientation

After installation, the most important locations are:

| Path | What lives here |
|---|---|
| `src/content/articles/` | All article `.mdx` files, organized by module |
| `src/content/config.ts` | Zod schema that validates every article's frontmatter |
| `src/components/ui/` | Primitive, reusable UI components |
| `src/layouts/` | Page layout shells |
| `tailwind.config.ts` | All design tokens (colors, type, spacing) |
| `design/DESIGN.md` | Source of truth for all visual decisions |
| `public/fonts/` | Self-hosted font files |

---

## Adding a New Article

1. Create a `.mdx` file inside the correct module folder:
   ```
   src/content/articles/module-4-statistics/05-confidence-intervals.mdx
   ```
2. Add the required frontmatter (see [content-guide.md](content-guide.md))
3. Write the article body in Vietnamese using MDX
4. Run `pnpm dev` — the article appears automatically in the build

Refer to [content-guide.md](content-guide.md) for the full authoring workflow.

---

## Running Checks

```bash
# Type check (TypeScript strict mode)
pnpm typecheck

# Lint
pnpm lint

# Build (catches broken frontmatter, missing images, dead links)
pnpm build
```

The build step is the most important check — a broken content schema or missing import will fail here before it reaches production.
