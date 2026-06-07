# Content Guide

How to write and publish articles for The Knowledge Library.

---

## Philosophy

Every article teaches one statistical concept through one real-world story. The story comes first; the formula is the punchline, not the opening.

The reader is a Vietnamese data analyst who can write SQL and Python but has no formal statistics background. Write for them:
- Assume they know what a `GROUP BY` is
- Do not assume they know what a standard deviation *means*
- Do not leave English jargon untranslated on first use

---

## Creating an Article

### 1. Choose the Right Module Folder

```
src/content/articles/
├── module-1-foundations/    ← EDA, descriptive statistics, data types
├── module-2-sql/            ← SQL for analytics, window functions
├── module-3-python/         ← Pandas, NumPy, data wrangling
├── module-4-statistics/     ← Probability, distributions, inference
├── module-5-visualization/  ← Chart selection, data storytelling
├── module-6-ml/             ← Supervised/unsupervised concepts
├── module-7-deep-learning/  ← Neural networks, practical DL
├── module-8-mlops/          ← Deployment, monitoring, pipelines
└── module-9-ethics/         ← Bias, fairness, responsible AI
```

### 2. Name the File

Pattern: `[order]-[short-slug].mdx`

- `order` is the article's position within its module (1-indexed)
- `short-slug` is a 2–5 word hyphenated English slug (URLs are language-neutral)
- Keep it short — it becomes part of the URL

Examples:
```
module-1-foundations/01-why-statistics-exist.mdx
module-1-foundations/02-mean-vs-median.mdx
module-4-statistics/01-conditional-probability.mdx
module-4-statistics/02-central-limit-theorem.mdx
```

### 3. Write the Frontmatter

Every article **must** have all of these fields. The build will fail if any are missing or the wrong type.

```yaml
---
title: "Mean vs Median: Tiệm trà sữa của bạn Nam"
module: 1
moduleSlug: "foundations"
topic: "EDA"
readingTime: 8
tags: ["EDA", "Kinh-Doanh"]
publishedAt: 2024-01-15
excerpt: "Tại sao số trung bình lại 'nói dối' khi có sự xuất hiện của những khách hàng đại gia? Cách chọn thước đo đúng để không bị lạc lối trong dữ liệu doanh thu."
featured: false
order: 2
---
```

**Field rules:**

| Field | Rules |
|---|---|
| `title` | Vietnamese, max ~70 chars. Format: "Concept: Real-world hook" |
| `module` | Integer 1–9. Must match the folder |
| `moduleSlug` | Must exactly match one of the 9 module slugs listed above |
| `topic` | Uppercase string. Shows in card breadcrumb. Max 15 chars |
| `readingTime` | Estimate by reading speed of 200 wpm for Vietnamese + 50% for math |
| `tags` | Array of strings. No `#` prefix. Min 1, max 4 |
| `publishedAt` | ISO date `YYYY-MM-DD`. Set when publishing, not when drafting |
| `excerpt` | Max 160 characters. Used as `<meta name="description">`. No quotes |
| `featured` | Only one article site-wide may be `true`. All others must be `false` |
| `order` | 1-indexed position in the module. Determines sidebar sort order |

---

## Article Structure Template

Every article follows this structure in order. Do not skip or reorder sections.

```markdown
---
[frontmatter]
---

[Opening hook — 1–3 paragraphs. A story, a question, or a scenario that creates
tension. The reader should feel the problem before seeing the solution.]

[The problem — restate what we're trying to understand, why this matters for
data analysts specifically. 1–2 paragraphs.]

## [Concept heading — the name of the statistical idea]

[Explain the concept in plain language. Story metaphors preferred. 2–4 paragraphs.
No formulas yet.]

[Optional: an intuition diagram or illustration — stroke-based, slate-colored]

### Công thức (Formula)

[If a formula is needed, introduce it here, AFTER the intuition is established.]

[Every symbol explained in Vietnamese. Format: "trong đó $\sigma$ (sigma) là độ lệch chuẩn"]

### Ví dụ thực tế (Practical Example)

[Return to the opening hook. Work through it using the concept just introduced.
Use code if it clarifies — Python preferred. All code must be runnable.]

## Tóm tắt (Key Takeaway)

[One sentence. Something the reader could explain at dinner. Bold the core idea.]

---
[Optional: "Bài tiếp theo" (Next article) link in the same module]
```

---

## Writing Style Rules

### Voice

- Write in first person from Nam Nguyễn's perspective: "Hãy tưởng tượng...", "Theo tôi..."
- Address the reader directly as "bạn" (singular you)
- Conversational but authoritative. Not academic; not casual chat
- Active voice preferred over passive: "Thống kê giúp bạn..." not "Bạn được giúp đỡ bởi..."

### Avoid

- "Như chúng ta đã biết" — never. Say it like they don't know it, because they don't.
- "Rõ ràng là" / "Đơn giản là" — condescending. The reader came here because it isn't simple to them.
- Untranslated jargon on first use. Translate it, put the English in parentheses, move on.
- Abstract examples. "Consider a dataset X with values Y" — replace with a coffee shop, a delivery app, a hospital, a football match.

### Paragraph Length

- Maximum 4 sentences per paragraph in concept-heavy sections
- Can go longer in the hook and narrative sections
- Break long explanations with subheadings, not longer paragraphs

---

## Vietnamese Vocabulary Standards

Introduce a term once as: **Vietnamese term (English term)**. Then use the Vietnamese term only.

| Concept | Standard Vietnamese term |
|---|---|
| Standard deviation | độ lệch chuẩn |
| Mean / Average | trung bình |
| Median | trung vị |
| Mode | yếu vị (or giá trị xuất hiện nhiều nhất) |
| Variance | phương sai |
| Distribution | phân phối |
| Normal distribution | phân phối chuẩn |
| Probability | xác suất |
| Conditional probability | xác suất có điều kiện |
| Hypothesis testing | kiểm định giả thuyết |
| Null hypothesis | giả thuyết không (H₀) |
| Alternative hypothesis | giả thuyết thay thế (H₁) |
| p-value | giá trị p |
| Confidence interval | khoảng tin cậy |
| Significance level | mức ý nghĩa |
| Sample | mẫu |
| Population | tổng thể |
| Sampling | lấy mẫu |
| Central Limit Theorem | Định lý Giới hạn Trung tâm (CLT) |
| Correlation | tương quan |
| Regression | hồi quy |
| Outlier | ngoại lệ / điểm ngoại lai |
| Bias | sai lệch hệ thống |
| Overfitting | quá khớp |
| Feature | đặc trưng |
| Signal vs. noise | tín hiệu và nhiễu |

---

## MDX Patterns

### Code Blocks

Always include the language tag. Use real, runnable code.

````markdown
```python
import pandas as pd

# Dữ liệu doanh thu hàng tháng (triệu đồng)
data = [12, 15, 11, 98, 13, 14, 10, 16]

mean = sum(data) / len(data)
median = pd.Series(data).median()

print(f"Trung bình: {mean:.1f}")   # 23.6 — bị kéo lên bởi outlier 98
print(f"Trung vị:   {median:.1f}") # 13.5 — phản ánh thực tế hơn
```
````

Code comments should be in Vietnamese for conceptual articles, English for technical reference.

### Math

Use `$` for inline math and `$$` for display equations. Always explain every symbol afterward.

```markdown
Công thức tính độ lệch chuẩn:

$$\sigma = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(x_i - \mu)^2}$$

Trong đó:
- $\sigma$ (sigma) là độ lệch chuẩn — thứ chúng ta muốn tính
- $N$ là số lượng quan sát trong tổng thể
- $x_i$ là từng giá trị riêng lẻ
- $\mu$ (mu) là giá trị trung bình của tổng thể
```

Never write a formula without explaining every symbol on the line immediately following.

### Callout Boxes

Use for important warnings, tips, or key insights. Callouts are MDX components:

```mdx
<Callout type="tip">
  Khi nào dùng trung vị thay vì trung bình? Khi dữ liệu có ngoại lệ (outliers) hoặc phân phối lệch (skewed).
</Callout>

<Callout type="warning">
  p < 0.05 không có nghĩa là kết quả "quan trọng". Nó chỉ có nghĩa là kết quả ít có khả năng là ngẫu nhiên.
</Callout>
```

Available types: `tip`, `warning`, `info`, `definition`

### Interactive Components (v3)

In v3, articles may embed interactive simulations. Placeholder for now:

```mdx
<Simulation id="clt-dice-roller" />
```

Do not implement these in v1. Mark the location in the article source with the component tag and a TODO comment.

---

## Images in Articles

Images are rarely needed. Use them only when:
1. A concept is genuinely spatial/visual (e.g., a scatter plot, a decision boundary)
2. The image replaces 3+ paragraphs of description

**Rules:**
- Store in `public/images/articles/[article-slug]/`
- Use Astro's `<Image />` component — not raw `<img>` tags
- Alt text describes the statistical concept, not the visual style
- Preferred: generate charts as actual data visualizations, not screenshots

---

## Publishing Checklist

Before setting `publishedAt` and pushing:

- [ ] All frontmatter fields present and correct type
- [ ] `featured: false` unless this replaces the current featured article
- [ ] `order` number does not conflict with existing articles in the module
- [ ] `excerpt` is under 160 characters
- [ ] All Vietnamese terms introduced as "term (English term)" on first use
- [ ] Every formula has all symbols explained immediately below it
- [ ] Every code block has a language tag and runs without error
- [ ] Article follows the structure template (hook → problem → concept → example → takeaway)
- [ ] `pnpm build` passes with no errors

---

## Drafts

Drafts are not supported by the content collection in v1. To keep an article out of production:
- Either don't commit it (work on a local branch)
- Or set `publishedAt` to a future date and filter it out in `getStaticPaths()`

A `draft: true` frontmatter field is planned for v2.
