# ADR-004: Use MDX for Article Content

**Date:** 2024  
**Status:** Accepted

---

## Context

Articles need to support:
- Long-form Vietnamese prose
- Code blocks with syntax highlighting
- Mathematical notation (LaTeX formulas)
- Interactive components embedded inside the article (v3 simulators, charts)
- Callout boxes, definition blocks, and custom semantic elements

The options were plain Markdown, MDX, or a proprietary rich-text format.

---

## Decision

Use **MDX** (Markdown + JSX) for all article content.

---

## Rationale

### Plain Markdown is insufficient

Plain Markdown has no mechanism for embedding interactive components. The v3 roadmap requires in-article probability simulators and chart components. Adding these to plain Markdown requires either:
- Custom syntax extensions (fragile, non-standard)
- Separate component sections outside the Markdown (breaks the reading flow)

MDX solves this natively — a `<Simulation />` component can be placed inline in the prose, exactly where it's pedagogically appropriate.

### MDX preserves the plain text authoring experience

Unlike a rich-text editor, MDX is a text file. The author writes in the same environment as the code. No context switch between "write content" and "write code". Git diffs are readable.

### Callout components need a format

The content guide defines callout box types (`tip`, `warning`, `info`, `definition`). These require a component syntax. In plain Markdown, these would be blockquotes with informal conventions (`> **Note:**`). MDX makes them explicit and styled:
```mdx
<Callout type="warning">
  p < 0.05 không có nghĩa là kết quả "quan trọng".
</Callout>
```

This is unambiguous, lintable, and renders correctly.

### Math support

Both plain Markdown and MDX support LaTeX via remark/rehype plugins (`remark-math`, `rehype-katex`). No difference here — MDX does not add complexity to math support.

---

## Consequences

**Positive:**
- Interactive components (v3) can be placed inline in prose without restructuring the article format
- Callout boxes, custom components, and semantic elements have explicit, styled syntax
- MDX is an established standard — tooling (VS Code extension, linters) is mature

**Trade-offs:**
- MDX files can become complex if component usage grows unchecked. Mitigation: only components listed in the content guide are permitted in article files.
- JSX syntax in a Vietnamese prose context looks unusual. Authors must know not to write `{` characters in prose without escaping them.
- MDX adds a compile step — broken JSX in an article will fail the build. This is a feature (errors surface early), but it can surprise a content author.

**Constraints this creates:**
- All components used in MDX files must be available globally (via Astro's `components` prop on `<Content />`) or imported explicitly in the `.mdx` file. A component used in an article that isn't registered will cause a build error.
- The set of allowed components in article content must be documented and stable. See `docs/content-guide.md` for the approved list.
