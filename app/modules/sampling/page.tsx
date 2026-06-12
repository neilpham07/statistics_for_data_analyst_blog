import type { Metadata } from 'next'
import { ModuleSidebar } from '@/components/layout/ModuleSidebar'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { SamplingContent, samplingTocItems } from '@/components/modules/SamplingContent'

export const metadata: Metadata = {
  title: 'Module 2: Data Sampling — Lấy mẫu cho Data Analyst bằng Python',
  description:
    'Học Data Sampling cho Data Analyst: Population vs Sample, Sampling Bias, Stratified Sampling và Bootstrap — qua bài toán CEO thực tế bằng Python pandas.',
  keywords: [
    'data sampling', 'lấy mẫu dữ liệu', 'sampling bias', 'stratified sampling',
    'bootstrap python', 'population vs sample', 'random sampling pandas', 'data analyst',
  ],
  alternates: { canonical: '/modules/sampling' },
  openGraph: {
    title: 'Module 2: Data Sampling — Lấy mẫu cho Data Analyst',
    description: 'Population vs Sample, Sampling Bias, Stratified Sampling và Bootstrap — qua bài toán CEO thực tế bằng Python pandas.',
    url: '/modules/sampling',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Module 2: Data Sampling — Lấy mẫu cho Data Analyst',
    description: 'Population vs Sample, Sampling Bias, Stratified Sampling và Bootstrap — qua bài toán CEO thực tế bằng Python pandas.',
  },
}

export default function SamplingPage() {
  return (
    <div className="flex max-w-container-max mx-auto pt-16 min-h-screen">
      <ModuleSidebar />

      <main id="main-content" tabIndex={-1} className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10">
        <SamplingContent />
      </main>

      <TableOfContents items={samplingTocItems} />
    </div>
  )
}
