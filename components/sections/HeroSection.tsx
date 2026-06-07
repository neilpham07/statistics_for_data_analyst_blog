import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { heroFlow } from '@/lib/data'

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-24 pb-20 px-gutter"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <span className="inline-block font-ui-label text-ui-label text-secondary tracking-widest uppercase mb-6">
            Statistics for Data Analysts
          </span>

          <h1
            id="hero-heading"
            className="font-display text-display text-on-surface mb-6 leading-[1.05]"
          >
            Thống kê không phải là toán.{' '}
            <span className="text-secondary">Đây là ngôn ngữ của quyết định.</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
            Một chương trình học thực tế — từ EDA đến Machine Learning — được thiết kế cho Data
            Analyst đang làm việc.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/modules/introduction"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-on-secondary font-ui-label text-ui-label rounded-lg hover:bg-secondary/90 motion-safe:transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Bắt đầu từ Module 0
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>

            <a
              href="#roadmap"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-outline-variant text-on-surface font-ui-label text-ui-label rounded-lg hover:bg-surface-container motion-safe:transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Xem lộ trình
            </a>
          </div>
        </div>

        {/* Right: Data → Decision flow */}
        <div
          aria-label="Luồng từ dữ liệu đến quyết định"
          className="flex flex-col items-start pl-8 lg:pl-12 border-l border-outline-variant/40"
        >
          {heroFlow.map((step, i) => (
            <div key={step.label} className="flex items-start gap-4">
              {/* Connector column */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    step.label === 'Decision' ? 'bg-secondary' : 'bg-outline-variant'
                  }`}
                />
                {i < heroFlow.length - 1 && (
                  <div className="w-px flex-1 bg-outline-variant/40 my-1" style={{ minHeight: '32px' }} />
                )}
              </div>

              {/* Text */}
              <div className="pb-8 last:pb-0">
                <p
                  className={`font-ui-label text-ui-label leading-none ${
                    step.label === 'Decision' ? 'text-secondary' : 'text-on-surface'
                  }`}
                >
                  {step.label}
                </p>
                <p className="font-body-md text-[0.8125rem] text-on-surface-variant mt-0.5">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
