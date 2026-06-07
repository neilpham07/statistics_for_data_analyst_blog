export type Module = {
  id: number
  slug: string
  name: string
  icon: string
  isActive?: boolean
}

export type ArticleTag = string

export type ArticleCardData = {
  moduleNumber: number
  moduleLabel: string
  topic: string
  title: string
  excerpt: string
  tags: ArticleTag[]
  href: string
}

export type FeaturedArticleData = {
  badgeLabel: string
  readingTime: string
  title: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
  authorInitials: string
  authorName: string
  editorLabel: string
  href: string
}

export type NavLink = {
  label: string
  href: string
}
