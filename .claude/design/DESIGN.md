---
name: The Knowledge Library
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#4e45d5'
  on-secondary: '#ffffff'
  secondary-container: '#6860ef'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002117'
  on-tertiary-container: '#528f79'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e3dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#100069'
  on-secondary-fixed-variant: '#372abf'
  tertiary-fixed: '#b0f0d6'
  tertiary-fixed-dim: '#95d3ba'
  on-tertiary-fixed: '#002117'
  on-tertiary-fixed-variant: '#0b513d'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.75'
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  ui-label:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
  ui-nav:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  code:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  sidebar-width: 280px
  content-narrow: 720px
  gutter: 2rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 4rem
---

## Brand & Style
The design system is engineered for deep focus, clarity, and intellectual authority. It targets a sophisticated audience of developers, researchers, and engineers who value information density without visual clutter.

The aesthetic fuses **Minimalism** with a **Modern-Academic** sensibility. It avoids the aggressive "tech-bro" energy of high-contrast dark modes or neon gradients. Instead, it creates a "digital reading room" atmosphere—calm, precise, and permanent. The design draws inspiration from high-end print journals and technical manuals, utilizing generous whitespace and a "content-first" hierarchy where the UI recedes to let the information lead.

## Colors
The palette is anchored in a high-quality, tactile experience. The primary surface uses a warm cream to reduce eye strain during long-form reading, departing from the harsh sterility of pure white.

- **Primary (#1a1a1a):** Deep slate for all primary text and structural borders, ensuring maximum legibility.
- **Background (#fdfbf7):** A warm, book-like cream that provides a soft, premium foundation.
- **Accents:** Indigo (#4338ca) is reserved for technical actions and primary links. Forest Green (#064e3b) is used for categorization, success states, and versioning tags.
- **Border/Muted:** Subtle 10-15% opacity versions of the primary slate are used for hairline separators to maintain the "Knowledge Library" structure without fragmenting the layout.

## Typography
This design system employs a dual-typeface strategy. **Source Serif 4** handles all narrative and editorial content, providing the authoritative feel of a published book. **Geist** is used for the "instrumentation"—navigation, metadata, and interface controls—providing a sharp, technical counterpoint.

Line heights are intentionally "relaxed" (1.6 to 1.75 for body text) to allow the eye to track comfortably across long lines of documentation. Large headings use tighter tracking and leading to maintain a cohesive visual block.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. The sidebar and navigation elements are fixed in width and position, while the main content area remains fluid up to a maximum reading width of 720px to ensure optimal line length (measure).

- **Desktop:** A three-column structure with a sticky left navigation, a central reading column, and an optional right-hand table of contents.
- **Tablet:** The right TOC is hidden; the left sidebar becomes a toggle-able drawer or stays visible depending on screen width.
- **Mobile:** A single-column flow with 1rem margins. The navigation moves to a top bar with a minimal breadcrumb trail.
- **Rhythm:** We use a base-8 spacing scale, but apply it generously between sections (64px+) to create a sense of air and importance.

## Elevation & Depth
In alignment with the "Knowledge Library" aesthetic, this design system rejects heavy shadows and high-offset blurs. Depth is communicated through **Tonal Layering** and **Hairline Outlines**.

- **Surfaces:** All primary content sits on the base cream layer. Secondary panels (like code snippets or sidebars) use a slightly lighter or darker tint (2% variance) to create subtle separation.
- **Borders:** We use 1px solid strokes in a muted slate (#1a1a1a at 10% opacity) for cards and dividers.
- **Active States:** Subtle 1px inset shadows may be used for pressed buttons to simulate a "letterpress" effect rather than a floating one.

## Shapes
We use a **Soft** shape language. This creates a bridge between the sharp precision of technical software and the organic feel of paper. 

- **Components:** Standard buttons and input fields use a 0.25rem (4px) radius. 
- **Cards/Containers:** Use a 0.5rem (8px) radius.
- **Interactive Elements:** Hover states should be indicated by background color shifts or subtle underline transitions rather than large scale changes or shadow increases.

## Components
- **Article Cards:** Minimalist blocks with a 1px border. Metadata (Read Time, Category) is set in Geist 12px Mono-case above the title. No images unless strictly necessary for content.
- **Buttons:** Primary buttons are solid slate (#1a1a1a) with white Geist text. Secondary buttons are "ghost" style with a hairline border.
- **Code Blocks:** Using JetBrains Mono on a slightly desaturated background. Syntax highlighting should use a muted, professional palette (no neon).
- **Sticky Sidebar:** Transparent background with active links indicated by a subtle left-hand stroke in Indigo.
- **Search Bar:** A simple, borderless input with a search icon, triggered by a keyboard shortcut (CMD+K), mimicking the Linear/Stripe "Command Menu" style.
- **Tags/Chips:** Small, rectangular labels with 2px radius. Backgrounds are low-opacity tints of Indigo or Green with high-contrast text.
- **Illustrations:** Strictly stroke-based, 1px line weight, utilizing the primary slate color. No fills or complex gradients.