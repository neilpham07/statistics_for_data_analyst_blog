import type { Metadata } from 'next'
import { ModuleSidebar } from '@/components/layout/ModuleSidebar'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { InferenceContent, inferenceTocItems } from '@/components/modules/InferenceContent'

export const metadata: Metadata = {
  title: 'Module 3: Statistical Inference — Khi nào có thể tin vào kết quả survey?',
  description:
    'Học Statistical Inference cho Data Analyst: Confidence Interval, Margin of Error, và cách trả lời "em có chắc con số này đáng tin không?" — qua bài toán CEO thực tế bằng Python.',
  keywords: [
    'statistical inference', 'confidence interval', 'margin of error',
    'sampling variability', 'standard error', 'data analyst', 'python statistics',
    'khoảng tin cậy', 'sai số biên',
  ],
  alternates: { canonical: '/modules/inference' },
  openGraph: {
    title: 'Module 3: Statistical Inference — Khi nào có thể tin vào kết quả survey?',
    description: 'Confidence Interval, Margin of Error, và cách trả lời "em có chắc con số này đáng tin không?" — qua bài toán CEO thực tế bằng Python.',
    url: '/modules/inference',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Module 3: Statistical Inference — Khi nào có thể tin vào kết quả survey?',
    description: 'Confidence Interval, Margin of Error, và cách trả lời "em có chắc con số này đáng tin không?" — qua bài toán CEO thực tế bằng Python.',
  },
}

export default function InferencePage() {
  return (
    <div className="flex max-w-container-max mx-auto pt-16 min-h-screen">
      <ModuleSidebar />

      <main id="main-content" tabIndex={-1} className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10">
        <InferenceContent />
      </main>

      <TableOfContents items={inferenceTocItems} />
    </div>
  )
}
