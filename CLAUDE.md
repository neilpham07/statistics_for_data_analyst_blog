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
- **Ecommerce Dataset First** — Tất cả ví dụ dùng ShopNow dataset. Tránh ví dụ generic (điểm thi, chiều cao, thời tiết).
- **Beginner Friendly** — Giả định người đọc không có nền tảng thống kê. Giải thích intuition trước formula.
- **Avoid Academic Style** — Không Greek notation không giải thích. Không proof. Không "Như chúng ta đã biết".
- **Avoid AI-sounding Content** — Giọng văn ngắn gọn, trực tiếp như Senior DA nói chuyện với Junior — không lan man, không viết như AI generate.

---

## Data Universe — ShopNow

Toàn bộ module dùng chung **một** công ty E-Commerce giả lập: **ShopNow**.

| Dataset | Mô tả |
|---|---|
| `customers` | customer_id, age, gender, city, tier, registered_at |
| `orders` | order_id, customer_id, order_date, revenue, status |
| `order_items` | item_id, order_id, product_id, quantity, unit_price |
| `products` | product_id, name, category, base_price |
| `campaigns` | campaign_id, name, channel, start_date, budget, impressions |
| `sessions` | session_id, customer_id, date, duration_sec, source |
| `payments` | payment_id, order_id, method, amount, status |

---

## Agent System

Các agent chuyên biệt nằm trong `.claude/agents/`. Gọi agent phù hợp với từng giai đoạn.

| Agent | Vai trò | Khi nào dùng |
|---|---|---|
| `content-writer` | Viết nội dung module theo đúng teaching structure | Khi bắt đầu viết hoặc rewrite một section |
| `learning-reviewer` | Review learning experience, beginner-friendliness, cognitive load | Sau khi viết xong draft |
| `senior-data-analyst` | Review business realism, analytics workflow, real-world applicability | Song song với learning-reviewer |
| `statistician` | Review statistical accuracy, misconceptions, mathematical correctness | Sau khi content ổn về mặt pedagogy |
| `seo-reviewer` | Review SEO, metadata, internal links, search intent | Trước khi publish |
| `ui-ux-reviewer` | Review UX, information architecture, reading + mobile experience | Khi thêm component mới hoặc thay đổi layout |

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

**Full technical docs:** `.claude/docs/` · **Design tokens:** `.claude/design/DESIGN.md`
