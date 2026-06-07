# Design System Reference

Full token reference and component usage guide for The Knowledge Library.

The source of truth for all design decisions is `design/DESIGN.md`. This document is the implementation reference — how to apply those decisions in code.

---

## Design Philosophy

The aesthetic is a "digital reading room": calm, precise, permanent. It draws from high-end print journals and technical manuals. The UI recedes; the content leads.

Three rules that override everything else:
1. **No neon.** No gradients. No heavy shadows.
2. **Source Serif 4 for content. Geist for UI.** Never reversed.
3. **Depth through tone, not shadow.**

---

## Color Tokens

All colors are referenced by their semantic token name, never by hex. Hex values are listed here for reference only — use the Tailwind token in code.

### Surface Hierarchy

Used to create depth through tonal layering. Apply in sequence from base (page) inward to elevated (modal/overlay):

| Token | Hex | Typical use |
|---|---|---|
| `background` | `#fbf8ff` | Page background |
| `surface` | `#fbf8ff` | Same as background (use interchangeably) |
| `surface-container-lowest` | `#ffffff` | Card backgrounds |
| `surface-container-low` | `#f4f2fd` | Active sidebar item background |
| `surface-container` | `#eeedf7` | Code block background |
| `surface-container-high` | `#e8e7f1` | Sidebar hover state background |
| `surface-container-highest` | `#e3e1ec` | Scrollbar thumb, highest elevation surface |
| `surface-dim` | `#dad9e3` | Disabled states |
| `surface-bright` | `#fbf8ff` | Highlighted surface (same as background) |

### Text Colors

| Token | Hex | Use |
|---|---|---|
| `on-background` | `#1a1b22` | Primary body text |
| `on-surface` | `#1a1b22` | Same as `on-background` |
| `on-surface-variant` | `#444748` | Secondary text, metadata, captions |
| `outline` | `#747878` | Tertiary text (timestamps, breadcrumbs) |
| `outline-variant` | `#c4c7c7` | Hairline borders, dividers |

### Accent Colors

| Token | Hex | Use |
|---|---|---|
| `secondary` | `#4e45d5` | Indigo — active states, links, interactive elements |
| `secondary-container` | `#6860ef` | Heavier indigo (hover on secondary elements) |
| `secondary-fixed` | `#e3dfff` | Light indigo — avatar backgrounds, tag tints |
| `on-secondary` | `#ffffff` | Text on indigo backgrounds |
| `on-secondary-container` | `#fffbff` | Text on heavy indigo |

### Semantic Colors

| Token | Hex | Use |
|---|---|---|
| `error` | `#ba1a1a` | Validation errors only |
| `error-container` | `#ffdad6` | Error message background |

### Inverse (Dark surface use)

| Token | Hex | Use |
|---|---|---|
| `inverse-surface` | `#2f3038` | Dark tooltip or code block surface |
| `inverse-on-surface` | `#f1effa` | Text on dark surfaces |

---

## Typography Scale

Font roles are strict. See `tailwind.config.ts` for the complete configuration.

### Typefaces by Role

| Role | Font | Never used for |
|---|---|---|
| Editorial content | Source Serif 4 | Navigation, buttons, metadata |
| UI instrumentation | Geist | Article body, headings |
| Code | JetBrains Mono | Anything other than code |

### Type Scale

| Token | Size | Weight | Line height | Letter spacing | Use |
|---|---|---|---|---|---|
| `text-display` | 48px | 700 | 1.1 | −0.02em | Hero headline only |
| `text-headline-lg` | 32px | 600 | 1.2 | — | Section headings |
| `text-headline-lg-mobile` | 28px | 600 | 1.2 | — | Section headings on mobile |
| `text-headline-md` | 24px | 600 | 1.3 | — | Article card titles, sub-sections |
| `text-body-lg` | 18px | 400 | 1.75 | — | Featured article body |
| `text-body-md` | 16px | 400 | 1.6 | — | Standard article body |
| `text-ui-label` | 14px | 500 | 1 | — | Buttons, tags, metadata labels |
| `text-ui-nav` | 13px | 400 | 1.5 | 0.01em | Navigation links |
| `text-code` | 14px | 400 | 1.5 | — | Code blocks |

Minimum rendered size: **12px** for decorative metadata (e.g. breadcrumb separators). Never below 12px.

---

## Spacing Tokens

| Token | Value | Use |
|---|---|---|
| `stack-sm` | 0.5rem (8px) | Tight internal spacing (icon + label gap) |
| `stack-md` | 1.5rem (24px) | Standard section top padding |
| `stack-lg` | 4rem (64px) | Major section gaps |
| `gutter` | 2rem (32px) | Horizontal page padding |
| `sidebar-width` | 280px | Left sidebar fixed width |
| `content-narrow` | 720px | Max width for article content column |
| `container-max` | 1200px | Outer page container max width |

Use the 8px base grid for anything not covered by these tokens. Avoid arbitrary pixel values.

---

## Border Radius

| Token | Value | Use |
|---|---|---|
| `rounded` (DEFAULT) | 0.125rem (2px) | Tags, chips |
| `rounded-lg` | 0.25rem (4px) | Buttons, input fields |
| `rounded-xl` | 0.5rem (8px) | Cards, containers |
| `rounded-full` | 0.75rem (12px) | Avatars, pill badges |

---

## Elevation System

Depth is expressed through **tonal surface variation**, never through shadows or blurs.

| Level | Implementation | Use |
|---|---|---|
| Base | `bg-background` | Page |
| Raised | `bg-surface-container-lowest` + `border border-outline-variant/30` | Cards |
| Floating | `bg-surface-container-low` | Active sidebar item, dropdown |
| Pressed | `shadow-[inset_0_1px_0_rgba(0,0,0,0.1)]` | Button active state (letterpress only) |

**Never use:** `shadow-md`, `shadow-lg`, `drop-shadow`, or any elevation shadow above 1px inset.

---

## Component Patterns

### Article Card

```
┌────────────────────────────────────┐  border-outline-variant/30, rounded-xl
│ MODULE 1 → EDA          font-code  │  text-[12px] text-secondary
│                                    │
│ Title of the Article   font-        │  text-headline-md
│                        headline-md │  group-hover:text-secondary
│                                    │
│ Excerpt text here...               │  font-body-md text-on-surface-variant
│ line-clamp-3                       │  line-clamp-3
│                                    │
│                        mt-auto     │
│ #EDA  #Kinh-Doanh                  │  tags pushed to bottom
└────────────────────────────────────┘
```

Hover: `hover:border-secondary` color shift only. No shadow increase. No scale.

### Sidebar Navigation Link

Three states — only one may be active at a time:

```
Default:  text-on-surface-variant, no left border, transparent bg
Hover:    hover:border-l-2 hover:border-outline-variant hover:bg-surface-container-high
Active:   border-l-2 border-secondary text-secondary bg-surface-container-low font-bold
```

Icons use Material Symbols Outlined at `wght=300`, size `20px`.

### Buttons

```
Primary:    bg-primary text-on-primary font-ui-label rounded-lg
            hover:opacity-90 active:scale-95
            (active:shadow-[inset_0_1px_0_rgba(0,0,0,0.15)] for letterpress effect)

Secondary:  bg-transparent border border-outline-variant text-on-surface
            font-ui-label rounded-lg hover:bg-surface-container-high
```

Button text always uses `font-ui-label` (Geist 500). Never Source Serif 4 on a button.

### Tags / Chips

```
bg-surface-container-high text-on-surface-variant
font-ui-label text-[12px] rounded px-2 py-1
```

For categorization tags using the secondary (indigo) color:
```
bg-secondary-fixed text-on-secondary-fixed
```

### Code Blocks

```
bg-surface-container rounded-xl p-6
font-code text-code text-on-surface
border border-outline-variant/20
```

Syntax highlighting uses a muted palette:
- Keywords: `text-secondary` (indigo) — not bright
- Strings: `text-[#528f79]` (muted forest green from `on-tertiary-container`)
- Comments: `text-outline` (gray)
- Default text: `text-on-surface`

No neon yellow, no bright orange, no saturated red.

### Header

```
fixed top-0 w-full z-50
bg-background/80 backdrop-blur-md
border-b border-outline-variant/30
height: 64px (h-16)
```

The blur creates glass separation without a heavy shadow.

---

## Font Loading Strategy

Fonts are self-hosted in `public/fonts/`. The `@font-face` declarations live in `src/styles/global.css`.

**Loading order in `BaseLayout.astro`:**
1. Critical: Source Serif 4 (preloaded — used above the fold in article titles)
2. Deferred: Geist (navigation — below fold on mobile)
3. Deferred: JetBrains Mono (code blocks — rarely above fold)

**Fallback stack with `size-adjust`** to prevent layout shift:
```css
/* Example for Source Serif 4 fallback */
@font-face {
  font-family: 'Source Serif 4 Fallback';
  src: local('Georgia');
  size-adjust: 98%;
  ascent-override: 95%;
  descent-override: 22%;
  line-gap-override: 0%;
}
```

---

## Dark Mode

Dark mode is **planned for v2**, not v1. The Tailwind `darkMode: "class"` is configured and the inverse surface tokens exist, but no dark-mode component styles are written yet.

When implementing dark mode:
- Toggle by adding/removing `dark` class on `<html>`
- Use `dark:` variants in Tailwind — do not duplicate component files
- Store preference in `localStorage` under key `theme`
- Respect `prefers-color-scheme` as the initial default

---

## Motion and Animation

All transitions must use `motion-safe:` variant to respect `prefers-reduced-motion`:

```
motion-safe:transition-colors
motion-safe:duration-200
```

Allowed transitions: color, border-color, opacity, background-color.

Not allowed: scale transforms on hover (exception: `active:scale-95` on buttons is a press affordance, not animation).

Never use CSS animations or `animate-` classes for decorative motion.
