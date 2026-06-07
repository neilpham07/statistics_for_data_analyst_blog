import type { Metadata } from 'next'
import { ModuleSidebar } from '@/components/layout/ModuleSidebar'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { IntroductionContent, introTocItems } from '@/components/sections/IntroductionContent'

export const metadata: Metadata = {
  title: 'The Knowledge Library — Statistics for Data Analysts',
  description:
    'Học thống kê không phải để giải phương trình, mà để thấu hiểu câu chuyện đằng sau những con số thô. Nền tảng kiến thức thống kê cho data analyst Việt Nam.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'The Knowledge Library',
            url: process.env.PUBLIC_SITE_URL ?? 'http://localhost:3000',
            inLanguage: 'vi',
            author: { '@type': 'Person', name: 'Nam Nguyễn' },
          }),
        }}
      />

      <div className="flex max-w-container-max mx-auto pt-16 min-h-screen">
        {/* Left: Module navigation */}
        <ModuleSidebar />

        {/* Center: Introduction article */}
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 min-w-0 px-10"
        >
          <IntroductionContent />
        </main>

        {/* Right: Table of contents with scroll-spy */}
        <TableOfContents items={introTocItems} />
      </div>
    </>
  )
}
