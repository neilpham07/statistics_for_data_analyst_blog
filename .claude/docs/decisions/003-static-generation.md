# ADR-003: Static Site Generation (No Server-Side Rendering)

**Date:** 2024  
**Status:** Accepted

---

## Context

Astro supports three output modes:
- `output: 'static'` — all pages pre-rendered at build time, served as static HTML files
- `output: 'server'` — all pages rendered on demand by a server (Node, Vercel Edge, etc.)
- `output: 'hybrid'` — some pages static, some server-rendered

We needed to choose an output mode for the initial deployment.

---

## Decision

Use `output: 'static'`. The entire site is pre-rendered at build time and served as static HTML from Vercel's CDN.

---

## Rationale

### Every page is the same for every reader

The Knowledge Library has no personalization, no authentication, and no per-user state. Every reader who visits `/articles/foundations/mean-vs-median` receives identical HTML. There is no reason to compute it on every request when it can be computed once at build time.

### Static serving is faster and cheaper

Static files served from a CDN are delivered from the edge node nearest to the reader. There is no cold start, no runtime, and no server to maintain. For a Vietnamese-language audience, this means content is served from Singapore or Tokyo edge nodes — not from a US-based server running a Node.js process.

### No server = no attack surface

A static site has no server-side code path to exploit. There is no API, no query parameter evaluated at runtime, and no database. The security surface is limited to the CDN provider and the build pipeline.

### Reading progress is device-local

The only per-user data is reading progress (v2 feature). This is stored in `localStorage` — no server state required.

---

## Consequences

**Positive:**
- Pages load from the CDN edge — lowest possible TTFB
- No server infrastructure to maintain, scale, or pay for
- No runtime errors — if it builds, it works
- Vercel's free tier is sufficient for the foreseeable future

**Trade-offs:**
- Publishing a new article requires a full rebuild and deploy (~30 seconds). Cannot publish instantly.
- Cannot implement per-request features: A/B testing, geolocation-based content, server-side session tracking.
- Pagefind search (static) has lower feature coverage than a server-side search API. Acceptable given article volume.

**Constraints this creates:**
- The newsletter subscribe form (v4) will require a third-party service (Buttondown/Resend) with a client-side fetch to their API — there is no server to proxy the request through.
- Any future feature that requires per-request server computation would require switching to `output: 'hybrid'` — a low-risk change in Astro, but a change nonetheless.
