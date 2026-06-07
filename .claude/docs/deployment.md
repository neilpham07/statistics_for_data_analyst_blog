# Deployment

How to build, deploy, and operate The Knowledge Library in production.

---

## Hosting

The site deploys to **Vercel** as a fully static site. No server functions, no edge runtime. The Astro static adapter outputs a `dist/` folder; Vercel serves it from the edge CDN.

---

## First-Time Setup

### 1. Create Vercel Project

1. Push the repository to GitHub
2. Go to vercel.com → New Project → Import the repository
3. Framework preset: **Astro**
4. Build command: `pnpm build` (Vercel auto-detects pnpm)
5. Output directory: `dist`
6. Install command: `pnpm install`

### 2. Set Environment Variables in Vercel

In the Vercel dashboard → Project Settings → Environment Variables:

| Variable | Value | Environment |
|---|---|---|
| `PUBLIC_SITE_URL` | `https://theknowledgelibrary.com` | Production |
| `PUBLIC_SITE_URL` | `https://staging.theknowledgelibrary.com` | Preview |
| `PUBLIC_PLAUSIBLE_DOMAIN` | `theknowledgelibrary.com` | Production |

Do not set `PUBLIC_PLAUSIBLE_DOMAIN` in Preview — analytics should only run in production.

### 3. Custom Domain

In Vercel → Domains → Add `theknowledgelibrary.com`:
1. Add the `A` and `CNAME` records to your DNS provider
2. Vercel auto-provisions SSL via Let's Encrypt
3. Force HTTPS redirect is on by default — do not disable

### 4. Analytics

[Plausible](https://plausible.io) is privacy-first analytics:
1. Create a Plausible account and add the domain
2. Add the Plausible script to `BaseLayout.astro` inside `<head>`:
   ```html
   <script defer data-domain={PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js"></script>
   ```
3. Wrap in a conditional: only render if `PUBLIC_PLAUSIBLE_DOMAIN` is set

No cookie banner is required — Plausible does not use cookies and is GDPR-compliant by default.

---

## Deploy Workflow

### Normal Deploy (New Article)

```bash
# 1. Write article in src/content/articles/module-X-name/
# 2. Verify it builds locally
pnpm build

# 3. Commit and push
git add src/content/articles/
git commit -m "publish: [article title]"
git push
```

Vercel auto-deploys on every push to `main`. Build time is approximately 30–60 seconds.

### Preview Deploys

Every push to a non-main branch creates a preview deployment at a unique Vercel URL:
```
https://[branch-name]-[hash].vercel.app
```

Use these to review articles before publishing to production.

To create a preview branch for a draft article:
```bash
git checkout -b draft/mean-vs-median
# write article
git push origin draft/mean-vs-median
# Vercel creates a preview URL automatically
```

Merge to `main` when ready to publish.

---

## Search Index

Pagefind generates the search index **during the build**. No separate step is needed.

The index is written to `dist/_pagefind/` and is served as static files. Search works immediately after deploy with no warm-up time.

To test search locally:
```bash
pnpm build
pnpm preview
# Search works in the preview — it does NOT work in pnpm dev
```

**Important:** Pagefind search is unavailable during `pnpm dev`. This is by design — the index only exists after a build.

---

## Open Graph Images

Each article needs a 1200×630px Open Graph image stored at `public/og/[article-slug].png`.

In v1, create these manually using the Figma template (see `design/og-template.fig` when created). File naming convention: `[moduleSlug]-[article-slug].png`.

Example: `public/og/foundations-mean-vs-median.png`

Dynamic OG image generation (via Satori) is planned for v4.

---

## Performance Monitoring

After each deploy, check Core Web Vitals using PageSpeed Insights on:
- The homepage: `https://theknowledgelibrary.com`
- The longest article in the collection (most content = highest render cost)

Target thresholds (mobile):
- LCP: < 1.5s
- CLS: < 0.05
- INP: < 100ms

If LCP degrades, the most common cause is a non-preloaded Source Serif 4 font. Verify the `<link rel="preload">` tag for the font is in `BaseLayout.astro`.

---

## Rollback

Vercel keeps a deployment history. To rollback:
1. Go to Vercel → Deployments
2. Find the last known-good deployment
3. Click "..." → "Promote to Production"

This is instant — no rebuild required.

---

## Sitemap

Astro's `@astrojs/sitemap` integration auto-generates `sitemap-index.xml` at build time.

After the first production deploy, submit the sitemap to Google Search Console:
1. Go to Google Search Console → Sitemaps
2. Enter: `https://theknowledgelibrary.com/sitemap-index.xml`
3. Submit

Re-submission is only needed if the sitemap URL changes — Google auto-crawls it on updates.

---

## Dependency Updates

Run dependency updates monthly (not weekly — Astro minor versions occasionally contain breaking changes):

```bash
pnpm update --interactive --latest
pnpm build
# If build passes, commit the lockfile
git add pnpm-lock.yaml package.json
git commit -m "chore: update dependencies"
```

Always verify a full build passes before committing updated dependencies.

---

## Secrets and Keys

There are no API secrets in this project. All environment variables use the `PUBLIC_` prefix, meaning they are exposed to the client. This is intentional — the values are domain names and public tracking IDs, not credentials.

If a secret is ever added (e.g., a newsletter API key), it must:
- Not use the `PUBLIC_` prefix
- Never be committed to the repository
- Be added only via Vercel environment variables

---

## Monitoring

No uptime monitoring is configured in v1. Vercel provides basic deployment failure notifications via email.

In v2, add [Better Uptime](https://betteruptime.com) or a Vercel status page integration to monitor that the site returns `200` on the homepage every 5 minutes.
