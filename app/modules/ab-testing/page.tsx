import type { Metadata } from 'next'
import { ModuleSidebar } from '@/components/layout/ModuleSidebar'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { ABTestingContent, abTestingTocItems } from '@/components/modules/ABTestingContent'

export const metadata: Metadata = {
  title: 'Module 4: A/B Testing — Làm sao biết điều gì thực sự hiệu quả?',
  description:
    'Học A/B Testing cho Data Analyst: Hypothesis Testing, p-value, Power Analysis, và cách tránh các bẫy phổ biến — qua bài toán push notification thực tế tại SnowTech bằng Python.',
  keywords: [
    'a/b testing', 'hypothesis testing', 'p-value', 'statistical significance',
    'power analysis', 'sample size', 'randomization', 'experiment design',
    'kiểm định giả thuyết', 'thử nghiệm', 'data analyst', 'python statistics',
  ],
  alternates: { canonical: '/modules/ab-testing' },
  openGraph: {
    title: 'Module 4: A/B Testing — Làm sao biết điều gì thực sự hiệu quả?',
    description: 'Hypothesis Testing, p-value, Power Analysis và các bẫy phổ biến — qua bài toán push notification tại SnowTech.',
    url: '/modules/ab-testing',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Module 4: A/B Testing — Làm sao biết điều gì thực sự hiệu quả?',
    description: 'Hypothesis Testing, p-value, Power Analysis và các bẫy phổ biến — qua bài toán push notification tại SnowTech.',
  },
}

export default function ABTestingPage() {
  return (
    <div className="flex max-w-container-max mx-auto pt-16 min-h-screen">
      <ModuleSidebar />

      <main id="main-content" tabIndex={-1} className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10">
        <ABTestingContent />
      </main>

      <TableOfContents items={abTestingTocItems} />
    </div>
  )
}
