import type { Metadata } from 'next'
import { ModuleSidebar } from '@/components/layout/ModuleSidebar'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { SamplingContent, samplingTocItems } from '@/components/modules/SamplingContent'

export const metadata: Metadata = {
  title: 'Module 2: Data Sampling — Lấy mẫu và ước lượng',
  description:
    'Học Sampling từ bài toán CEO thực tế: Population vs Sample, Sampling Bias, Random Sampling, Stratified Sampling và Bootstrap — bằng Python và dataset ShopNow.',
  alternates: { canonical: '/modules/sampling' },
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
