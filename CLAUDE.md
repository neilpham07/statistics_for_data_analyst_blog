# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**The Knowledge Library** (Thư Viện Tri Thức) — nền tảng học Statistics for Data Analysts bằng tiếng Việt. Tác giả: Nam Nguyễn.

**Đối tượng:** Junior Data Analyst, Business Analyst, người mới học Data Analytics — biết SQL và Python cơ bản nhưng chưa có nền tảng thống kê.

**Mục tiêu:** Không dạy công thức. Dạy cách đặt câu hỏi đúng cho dữ liệu và ra quyết định có căn cứ từ số liệu.

---

## Content Philosophy

- **Practical First** — Mọi khái niệm phải gắn với tình huống công việc thực tế, không phải lý thuyết giáo trình.
- **Business Problem First** — Không bao giờ bắt đầu bằng định nghĩa. Luôn bắt đầu bằng câu hỏi kinh doanh.
- **Fintech Dataset First** — Tất cả ví dụ dùng SnowTech universe. Tránh ví dụ generic (điểm thi, chiều cao, thời tiết, coin toss, dice, Titanic, Iris).
- **Beginner Friendly** — Giả định người đọc không có nền tảng thống kê. Giải thích intuition trước formula.
- **Avoid Academic Style** — Không Greek notation không giải thích. Không proof. Không "Như chúng ta đã biết".
- **Avoid AI-sounding Content** — Giọng văn ngắn gọn, trực tiếp như Senior DA nói chuyện với Junior — không lan man, không viết như AI generate.

---

## Data Universe — SnowTech

Toàn bộ module dùng chung **một** công ty Fintech Super App giả lập: **SnowTech** (tương tự MoMo).

**Quy mô:** 30M users · 500K merchants · 100M transactions/tháng · 12M MAU

**Nhân vật:** Analytics Lead Tuấn, CRM Manager Linh, Growth Manager, Product Manager, Risk Team — KHÔNG dùng CEO.

| Table | Columns chính |
|---|---|
| `mart.fct_qr_payments` | payment_id, merchant_id, user_id, amount, province, category, payment_time |
| `mart.fct_wallet_transactions` | transaction_id, user_id, amount, transaction_type, transaction_status, created_at |
| `mart.fct_loans` | loan_id, user_id, disbursement_amount, interest_rate, term_month, repayment_status, overdue_days |
| `mart.fct_campaign_events` | campaign_id, user_id, event_type, impression, click, conversion, event_time |
| `mart.dim_user` | user_id, age, gender, province, signup_date, user_segment, kyc_status |
| `mart.dim_merchant` | merchant_id, merchant_name, merchant_type, province, onboard_date, merchant_segment |

**Storyline xuyên suốt:** EDA → QR TPV giảm 12% → Sampling → Survey push CTR → Inference → CI cho investment decision → A/B Test → ...

Context file đầy đủ: `context/snowtech_universe.md` · Example rules: `examples/example_rules.md`

---

## Module Architecture

Mỗi module gồm 3 file liên kết:

```
lib/data.ts                              ← slug + metadata (sidebar render từ đây)
app/modules/[slug]/page.tsx              ← Metadata + 3-column layout shell
components/modules/[Name]Content.tsx     ← Toàn bộ nội dung + export TocItems
```

**Quy tắc quan trọng:** `slug` trong `lib/data.ts → statisticsModules[]` phải khớp chính xác với tên thư mục `app/modules/[slug]/`. Nếu không khớp, sidebar sẽ link sai.

**3-column layout pattern** (dùng trong mọi module page):
```tsx
<div className="flex max-w-container-max mx-auto pt-16 min-h-screen">
  <ModuleSidebar />                          // hidden lg:block — 280px
  <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10">
    <[Name]Content />
  </main>
  <TableOfContents items={[name]TocItems} /> // hidden xl:block — 208px
</div>
```

`TableOfContents` dùng `xl:block` (không phải `lg:block`) — intentional. Ở 1024px, sidebar 280px + TOC 208px không đủ chỗ cho content.

**TocItems** phải export từ content component và `id` phải khớp với `id` của `<h2>` trong JSX (`scroll-mt-24` required trên mọi H2).

---

## Modules hiện có

| Module | Slug | File |
|---|---|---|
| 1 — EDA | `eda` | `EDAContent.tsx` |
| 2 — Sampling | `sampling` | `SamplingContent.tsx` |
| 3 — Statistical Inference | `inference` | `InferenceContent.tsx` |

Module mới cần thêm entry vào `statisticsModules` trong `lib/data.ts`.

---

## Agent System

Các agent chuyên biệt nằm trong `.claude/agents/`. Gọi agent phù hợp với từng giai đoạn.

| Agent | Vai trò | Khi nào dùng |
|---|---|---|
| `senior-data-analyst` | Review business realism, DA thinking, analytics workflow | Khi viết hoặc rewrite section |
| `human-editor` | Loại bỏ AI tone, cắt 30%, viết như người thật | Sau khi có draft |
| `learning-reviewer` | Review learning experience, beginner-friendliness, cognitive load | Sau khi viết xong draft |
| `statistician` | Review statistical accuracy, misconceptions, mathematical correctness | Sau khi content ổn về mặt pedagogy |
| `seo-reviewer` | Review SEO, metadata, internal links, search intent | Trước khi publish |
| `ui-ux-reviewer` | Review UX, information architecture, reading + mobile experience | Khi thêm component mới hoặc thay đổi layout |

Priority khi conflict: Beginner Experience > Business Thinking > Human Readability > Statistical Correctness > SEO.

---

## Technical Reference

**Commands:**
```bash
npm run dev          # localhost:3000
npm run typecheck    # Luôn chạy trước khi commit
npm run build        # Production build
```

**Stack:** Next.js 15 App Router · Tailwind CSS v3 · TypeScript strict · Vercel deployment

**Critical rules:**
- Chỉ dùng design tokens trong className — **không dùng** Tailwind default palette (`red-*`, `blue-*`). Dùng `error`, `error-container`, `on-error-container` cho warning/error states.
- Luôn chạy `npm run typecheck` trước khi commit.
- Server component mặc định. `'use client'` chỉ khi cần browser API.
- Module content components không cần `'use client'` — pure JSX, không có state.

**Full technical docs:** `.claude/docs/` · **Design tokens:** `.claude/design/DESIGN.md`
