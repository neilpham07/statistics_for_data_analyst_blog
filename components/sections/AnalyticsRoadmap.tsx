import { ChevronRight } from 'lucide-react'
import { analyticsRoadmap } from '@/lib/data'

export function AnalyticsRoadmap() {
  return (
    <section
      aria-labelledby="analytics-roadmap-heading"
      className="py-20 px-gutter bg-inverse-surface overflow-hidden"
    >
      <div className="max-w-container-max mx-auto">
        <div className="mb-12">
          <span className="inline-block font-ui-label text-ui-label text-secondary tracking-widest uppercase mb-4">
            Con đường phân tích dữ liệu
          </span>
          <h2
            id="analytics-roadmap-heading"
            className="font-headline-lg text-headline-lg text-inverse-on-surface"
          >
            Từ dữ liệu đến quyết định kinh doanh.
          </h2>
        </div>

        {/* Horizontal scrollable roadmap */}
        <div
          role="list"
          aria-label="Lộ trình phân tích dữ liệu"
          className="flex items-stretch gap-0 overflow-x-auto pb-4 -mx-2 px-2"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#4e45d5 transparent' }}
        >
          {analyticsRoadmap.map((step, i) => (
            <div key={step.label} role="listitem" className="flex items-center shrink-0">
              {/* Step card */}
              <div
                className={`flex flex-col justify-center px-5 py-4 rounded-lg min-w-[120px] max-w-[140px] ${
                  step.label === 'Business Decision'
                    ? 'bg-secondary text-on-secondary'
                    : 'bg-inverse-on-surface/10 border border-inverse-on-surface/20 text-inverse-on-surface'
                }`}
              >
                <p
                  className={`font-ui-label text-ui-label leading-snug ${
                    step.label === 'Business Decision' ? 'text-on-secondary' : 'text-inverse-on-surface'
                  }`}
                >
                  {step.label}
                </p>
                <p
                  className={`font-body-md text-[0.75rem] leading-snug mt-1 ${
                    step.label === 'Business Decision'
                      ? 'text-on-secondary/80'
                      : 'text-inverse-on-surface/60'
                  }`}
                >
                  {step.description}
                </p>
              </div>

              {/* Arrow connector */}
              {i < analyticsRoadmap.length - 1 && (
                <ChevronRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-inverse-on-surface/40 mx-1 shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
