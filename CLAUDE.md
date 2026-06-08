# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## CONTENT PHILOSOPHY (ĐỌC TRƯỚC KHI LÀM BẤT CỨ ĐIỀU GÌ)

Đây không phải website dạy thống kê theo kiểu giáo trình đại học.

Đây là nền tảng học **Statistics for Data Analysts** dành cho:
- Người chưa biết thống kê
- Người mới học Data Analytics
- Junior Data Analyst / Business Analyst
- Những người muốn hiểu cách dùng dữ liệu để ra quyết định

**Mục tiêu cuối cùng không phải giúp người học nhớ công thức. Mục tiêu là giúp họ hiểu:**
- Vì sao khái niệm thống kê tồn tại
- Nó giải quyết vấn đề gì trong thực tế
- Khi nào nên dùng / khi nào không nên dùng
- Những sai lầm thường gặp
- Cách áp dụng vào công việc Data Analyst

### Nguyên tắc giảng dạy — BẮTBUỘC

Không được bắt đầu bằng định nghĩa. Không được bắt đầu bằng công thức. Không được bắt đầu bằng khái niệm học thuật.

**Luôn bắt đầu theo thứ tự:**

```
Business Context
↓
Business Question
↓
Vì sao cách suy nghĩ thông thường chưa đủ
↓
Statistical Concept
↓
Ứng dụng thực tế
↓
Sai lầm thường gặp
↓
Kết luận kinh doanh
```

### 5 câu hỏi mỗi khái niệm PHẢI trả lời được

1. Khái niệm này tồn tại để giải quyết vấn đề gì?
2. Nếu không có khái niệm này thì chuyện gì xảy ra?
3. Khi nào nên sử dụng?
4. Khi nào không nên sử dụng?
5. Sai lầm phổ biến nhất của Data Analyst là gì?

Nếu chưa trả lời được 5 câu hỏi này → nội dung chưa hoàn chỉnh.

### Thực chiến hơn học thuật

Nếu phải chọn giữa: (A) giải thích đúng tuyệt đối theo giáo trình, và (B) giúp người mới hiểu được cách áp dụng trong công việc — ưu tiên B, sau đó mới bổ sung độ chính xác học thuật.

**Tiêu chí kiểm tra:** Người đọc sau mỗi bài phải có cảm giác *"Ngày mai đi làm tôi có thể áp dụng điều này."*

### Tránh ẩn dụ chung chung

Hạn chế tối đa: thám tử điều tra, bác sĩ khám bệnh, phi công, đầu bếp, siêu anh hùng. Những ẩn dụ này ít giúp người học hiểu cách áp dụng trong công việc thực tế.

**Ưu tiên tuyệt đối:** Ecommerce, Product Analytics, Marketing Analytics, Customer Analytics, Conversion Optimization, Revenue Analysis.

### Case Study — Sợi chỉ đỏ xuyên suốt

Case Study không phải phần bonus cuối bài. Case Study phải xuất hiện **xuyên suốt toàn bộ module** — mỗi concept được reveal khi case study cần nó.

Ví dụ Module EDA: CEO hỏi *"Tôi muốn hiểu khách hàng hiện tại."* → Distribution, Mean/Median, Variability, Percentiles, Outliers, Correlation lần lượt trả lời câu hỏi đó → tổng hợp insight cuối module.

Người học phải cảm thấy *"Tôi đang giải quyết bài toán kinh doanh"*, không phải *"Tôi đang học các khái niệm rời rạc."*

---

## DATA UNIVERSE — ShopNow (DÙNG XUYÊN SUỐT)

Toàn bộ website xoay quanh **một** doanh nghiệp E-Commerce giả lập: **ShopNow**.

**Datasets:**

| Table | Nội dung |
|---|---|
| `customers` | customer_id, age, gender, city, tier, registered_at |
| `orders` | order_id, customer_id, order_date, revenue, status |
| `order_items` | item_id, order_id, product_id, quantity, unit_price |
| `products` | product_id, name, category, base_price |
| `sessions` | session_id, customer_id, date, duration_sec, source |
| `campaigns` | campaign_id, name, channel, start_date, budget, impressions |
| `payments` | payment_id, order_id, method, amount, status |

**Không được** liên tục đổi ví dụ giữa: điểm thi học sinh, chiều cao, cân nặng, khảo sát dân số, nhiệt độ thời tiết — trừ khi thật sự cần thiết để minh họa concept không thể dùng E-commerce.

Tất cả module phải sử dụng chung hệ sinh thái ShopNow để người học cảm giác đang làm việc tại một công ty thực tế.

---

## Project Vision

**The Knowledge Library** (Thư Viện Tri Thức) là nền tảng giáo dục thống kê tiếng Việt, tác giả Nam Nguyễn. Dạy thống kê qua lăng kính E-commerce và nghiệp vụ thực tế — không phải phương trình, không phải giáo trình.

> "Học thống kê không phải để giải phương trình, mà để thấu hiểu câu chuyện đằng sau những con số thô."

"Digital reading room" aesthetic — calm, precise, authoritative. Built for depth, not virality.

---

## Target Audience

**Primary:** Vietnamese data analysts và aspiring data scientists, 22–35 tuổi, biết code nhưng ít nền tảng thống kê chính thức.

**Đã biết:** SQL, Python cơ bản (`groupby`, `merge`, `matplotlib`). **Chưa biết:** khi nào dùng test nào, p-value thật sự nghĩa là gì, cách communicate uncertainty với stakeholder.

**Không cần:** Academic proofs, Greek notation không giải thích, English jargon không dịch.

---

## Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build (runs type-check + lint)
npm run typecheck    # npx tsc --noEmit — run this before committing
npm run lint         # next lint
npm run start        # Serve the production build locally
```

**Luôn chạy `npm run typecheck` sau khi edit TypeScript.** Strict mode bật — implicit `any` fail build.

---

## Technical Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 15** App Router |
| Styling | **Tailwind CSS v3** with full design token system |
| Language | **TypeScript** strict mode |
| Icons | **Lucide React** (tree-shakable) |
| Fonts | `next/font/google` for Source Serif 4 + JetBrains Mono; `geist` npm package for Geist Sans/Mono |
| Deployment | **Vercel** |

**No CMS. No database.** All content data is TypeScript constants in `lib/data.ts`. MDX files in `content/articles/` are written content — not yet wired to Next.js rendering (v2 task).

---

## Architecture

### Data flow

```
lib/data.ts          → TypeScript constants (modules, questions, roadmap steps, etc.)
lib/types.ts         → Shared type definitions
                          ↓
components/sections/ → Server components that import directly from lib/data.ts
components/modules/  → One component per module page (e.g. EDAContent.tsx)
                          ↓
app/page.tsx         → Homepage (3-column: Sidebar | Intro | TOC)
app/modules/[slug]/  → Module pages (same 3-column layout)
app/layout.tsx       → Root: fonts, metadata, Header + Footer
```

No API routes. No `getServerSideProps`. No data fetching — everything is static import at build time.

### Page layout pattern

All reading pages use the same 3-column layout:
```tsx
<div className="flex max-w-container-max mx-auto pt-16 min-h-screen">
  <ModuleSidebar />   {/* hidden on < lg */}
  <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10">
    <Content />
  </main>
  <TableOfContents /> {/* hidden on < xl */}
</div>
```

### Server vs Client components

Default is server component (no directive). `'use client'` only when browser APIs are needed:
- `ModuleSidebar.tsx` — `usePathname()` for active state
- `TableOfContents.tsx` — `IntersectionObserver` scroll-spy
- `SearchBar.tsx` / `SearchTrigger.tsx` — keyboard events

### Font loading

Three CSS variables in `app/layout.tsx`, consumed by `tailwind.config.ts`:
- `--font-source-serif-4` → `font-display`, `font-headline-lg`, `font-body-lg`, `font-body-md`
- `--font-geist-sans` → `font-ui-nav`, `font-ui-label`
- `--font-jetbrains-mono` / `--font-geist-mono` → `font-code`

**Never mix typography roles.** A button uses `font-ui-label` (Geist). A heading uses `font-headline-lg` (Source Serif 4).

### Button pattern

`components/ui/Button.tsx` exports two separate components:
- `Button` — renders `<button>`
- `ButtonLink` — renders `<a>`

Never use a polymorphic `as` prop — TypeScript strict mode rejects it.

### Tailwind color rules

- Only use design token names in className: `bg-secondary`, `text-on-surface`, `border-outline-variant`
- **Never** use default Tailwind palette colors (`red-*`, `blue-*`, `green-*`) — they may not be generated by JIT. The project's Tailwind config only guarantees the custom tokens defined in `tailwind.config.ts`.
- For error/warning states: use `error`, `error-container`, `on-error-container` tokens.

---

## Folder Conventions

```
statistic_for_da_blog/
│
├── .claude/
│   ├── design/
│   │   ├── DESIGN.md         # Source of truth for all design tokens
│   │   └── landscape.html    # Static Tailwind prototype (reference)
│   └── docs/                 # Architecture docs, ADRs
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              # Homepage (Intro content)
│   └── modules/
│       └── eda/page.tsx      # /modules/eda
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ModuleSidebar.tsx  # 'use client' — active state via usePathname
│   │   └── TableOfContents.tsx# 'use client' — scroll-spy IntersectionObserver
│   ├── modules/
│   │   └── EDAContent.tsx    # Module 1 content + edaTocItems export
│   ├── sections/
│   │   └── IntroductionContent.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Tag.tsx
│
├── lib/
│   ├── data.ts               # All site data constants
│   └── types.ts
│
├── content/articles/         # MDX files (not yet rendered — v2 task)
│
└── tailwind.config.ts        # All design tokens
```

**Rules:**
- `app/` only composes layouts — no business logic
- `components/ui/` must be stateless, no data imports
- `components/modules/` exports both the content component AND the `tocItems` array
- Never hardcode hex values in component files — always use token names

---

## Curriculum Modules

| # | Slug | Focus | Difficulty | Hours |
|---|---|---|---|---|
| 1 | `eda` | Exploratory Data Analysis | Beginner | 8h |
| 2 | `sampling` | Sampling & estimation | Beginner | 6h |
| 3 | `statistical-inference` | Hypothesis testing, p-value, CI | Intermediate | 10h |
| 4 | `ab-testing` | Experiment design & analysis | Intermediate | 8h |
| 5 | `regression` | Modelling relationships | Intermediate | 12h |
| 6 | `classification` | Binary decision models | Advanced | 10h |
| 7 | `machine-learning` | Supervised ML | Advanced | 14h |
| 8 | `unsupervised-learning` | Clustering & dimensionality | Advanced | 10h |

Note: Module 0 (Introduction) is served by the homepage (`app/page.tsx`) — no dedicated route.

---

## Module Component Pattern

Each module page follows this structure:

```tsx
// components/modules/[ModuleName]Content.tsx
export const moduleTocItems: TocItem[] = [ ... ]

export function [ModuleName]Content() {
  return (
    <article className="max-w-[720px] py-8 lg:py-10 lg:pr-8">
      {/* Learning Objectives block */}
      {/* Sections follow Content Philosophy order */}
    </article>
  )
}
```

Helper components in each module file:
- `SectionTitle` — `<h2>` with `scroll-mt-24`
- `Code` — light bg `<pre>` block
- `Output` — dark bg (`bg-inverse-surface`) output block
- `Note` — indigo left-border callout (insight/tip)
- `ScenarioBlock` — business problem hook (indigo border, labeled "Bài toán thực tế")
- `WarningBlock` — important warning (uses `error-container` token)
- `Mistakes` — common mistakes list (uses `error` token, left red border)
- `QuickSummary` — end-of-section summary (uses `surface-container-low`)

---

## Design System

All tokens defined in `tailwind.config.ts`, documented in `.claude/design/DESIGN.md`.

### Key Color Tokens

| Token | Hex | Use |
|---|---|---|
| `background` | `#fbf8ff` | Warm cream page base |
| `on-surface` | `#1a1b22` | Primary text |
| `secondary` | `#4e45d5` | Indigo — links, active states, CTAs |
| `outline-variant` | `#c4c7c7` | Hairline separators |
| `surface-container-low` | `#f4f2fd` | Active/hover backgrounds |
| `inverse-surface` | `#2f3038` | Dark section backgrounds (code output) |
| `error` | `#ba1a1a` | Warning/error borders and text |
| `error-container` | `#ffdad6` | Warning/error backgrounds |
| `on-error-container` | `#93000a` | Warning/error label text |

### Elevation

No drop shadows ever. Depth is tonal only:
- Cards: `border border-outline-variant/30`
- Card hover: `hover:border-secondary/40`
- Dark sections: `bg-inverse-surface`

### Shapes

- Buttons: `rounded-lg` (0.25rem)
- Cards: `rounded-xl` (0.5rem)
- Tags/chips: `rounded` (0.125rem)

### Motion

Always `motion-safe:` prefix: `motion-safe:transition-colors`. Never bare `transition-*`.

---

## Coding Standards

### TypeScript

- `strict: true` — no exceptions, no `any`
- Prefer `type` over `interface` for data shapes

### Components

- All props typed with `type Props = { ... }` at top of component
- No inline `<style>` — Tailwind only
- `'use client'` only when browser APIs required

### Formatting

- 2-space indentation
- Single quotes in TypeScript; double quotes in HTML attributes
- No semicolons in `.ts`/`.tsx`
- Trailing commas in multi-line objects/arrays

---

## SEO & Accessibility

Every page must have:
- `<title>` — format: `"Page Title | The Knowledge Library"`
- `<meta name="description">` — max 160 chars
- `<link rel="canonical">` — always explicit
- `<html lang="vi">` — never change to `en`

Accessibility rules:
- All interactive elements keyboard-reachable
- `aria-current="page"` on active nav links
- Heading levels must not skip (`h1` → `h2` → `h3`)
- Color never sole indicator of state

---

## Content Writing Guidelines

### Giọng văn

- Ngắn gọn, rõ ràng, thực tế — giống Senior DA hướng dẫn Junior
- Address reader as "bạn"
- Tránh lan man, triết lý, văn vẻ, kéo dài bài để tăng độ dài
- Tránh filler: "Như chúng ta đã biết", "Rõ ràng là", "Đơn giản là"
- Nếu một đoạn không giúp người đọc hiểu hoặc áp dụng tốt hơn → loại bỏ

### Cấu trúc mỗi section (bắt buộc)

1. **ScenarioBlock** — Business context + Business Question cụ thể
2. **Tại sao cách thông thường chưa đủ** — tạo cognitive need cho concept
3. **Statistical Concept** — giải thích, trực quan hóa nếu cần
4. **Khi nào dùng / khi nào không dùng**
5. **Code + Output** — ShopNow dataset, chạy được thật
6. **Mistakes block** — 3–4 sai lầm thường gặp
7. **QuickSummary** — 3 bullets tóm tắt

### Code requirements

- Python preferred, dùng `pandas` / `matplotlib` / `seaborn`
- Dataset phải từ ShopNow universe (không dùng foo/bar/x/y)
- Mọi code block phải chạy được như viết — không pseudocode
- Output block phải match code block bên trên

### Vocabulary (giới thiệu một lần: Vietnamese (English), sau đó Vietnamese-only)

| Concept | Term |
|---|---|
| Standard deviation | độ lệch chuẩn |
| Hypothesis testing | kiểm định giả thuyết |
| Confidence interval | khoảng tin cậy |
| p-value | giá trị p |
| Sample | mẫu |
| Population | tổng thể |
| Distribution | phân phối |
| Central limit theorem | định lý giới hạn trung tâm |

---

## Article Frontmatter Schema

```yaml
---
title: "Mean vs Median: Khi nào CEO bị báo cáo sai"
module: 1
moduleSlug: "eda"
topic: "EDA"
readingTime: 8
tags: ["EDA", "Kinh-Doanh"]
publishedAt: 2024-01-15
excerpt: "Revenue trung bình 452k — con số đó đang nói dối bạn."
featured: false
order: 2
---
```

File naming: `[order]-[short-slug].mdx`
URL pattern: `/articles/[moduleSlug]/[slug]`

---

## Roadmap

### v1 (Current)

- Next.js 15 App Router, 3-column reading layout
- Module 1 (EDA) fully written with ShopNow dataset
- Mobile responsive (sidebar hidden < lg)
- Vercel deployment

### v2 (Next)

- Wire MDX rendering: `app/articles/[moduleSlug]/[slug]/page.tsx` + `next-mdx-remote`
- Migrate EDAContent.tsx content to MDX
- Modules 2–4 (Sampling, Statistical Inference, A/B Testing)
- Dark mode

### v3

- Interactive charts (Observable Plot)
- In-browser Python via Pyodide
- Full-text search

### Out of Scope (Never)

- Multi-author support
- Paid content / paywalls
- User accounts or authentication
