import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Tag } from '@/components/ui/Tag'
import type { ArticleCardData } from '@/lib/types'

type ArticleCardProps = {
  article: ArticleCardData
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col h-full p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:border-secondary motion-safe:transition-colors duration-300 focus-within:border-secondary">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-code text-[12px] text-secondary mb-4" aria-label={`${article.moduleLabel}, chủ đề ${article.topic}`}>
        <span>{article.moduleLabel}</span>
        <ArrowRight size={12} strokeWidth={2} aria-hidden="true" />
        <span>{article.topic}</span>
      </div>

      {/* Title */}
      <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary motion-safe:transition-colors mb-4">
        <Link
          href={article.href}
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
        >
          {article.title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3 flex-1">
        {article.excerpt}
      </p>

      {/* Tags */}
      <footer className="flex flex-wrap gap-2 mt-auto">
        {article.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </footer>
    </article>
  )
}
