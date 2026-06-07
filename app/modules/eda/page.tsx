import type { Metadata } from 'next'
import { ModuleSidebar } from '@/components/layout/ModuleSidebar'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { EDAContent, edaTocItems } from '@/components/modules/EDAContent'

export const metadata: Metadata = {
  title: 'Module 1: EDA — Exploratory Data Analysis',
  description:
    'Học EDA từ Business Problem đến Insight: Data Types, Distribution, Mean/Median, Outliers, Correlation và Case Study Ecommerce thực tế bằng Python.',
  alternates: { canonical: '/modules/eda' },
}

export default function EDAPage() {
  return (
    <div className="flex max-w-container-max mx-auto pt-16 min-h-screen">
      <ModuleSidebar />

      <main id="main-content" tabIndex={-1} className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10">
        <EDAContent />
      </main>

      <TableOfContents items={edaTocItems} />
    </div>
  )
}
