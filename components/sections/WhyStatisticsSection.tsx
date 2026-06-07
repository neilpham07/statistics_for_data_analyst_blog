import { HelpCircle } from 'lucide-react'
import { businessScenarios } from '@/lib/data'

export function WhyStatisticsSection() {
  return (
    <section
      aria-labelledby="why-stats-heading"
      className="py-20 px-gutter bg-surface-container-low"
    >
      <div className="max-w-container-max mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="inline-block font-ui-label text-ui-label text-secondary tracking-widest uppercase mb-4">
            Tại sao thống kê tồn tại?
          </span>
          <h2
            id="why-stats-heading"
            className="font-headline-lg text-headline-lg text-on-surface"
          >
            Thống kê tồn tại để trả lời câu hỏi mà intuition không thể.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessScenarios.map((scenario) => (
            <div
              key={scenario.claim}
              className="bg-background border border-outline-variant/30 rounded-xl p-8 flex flex-col gap-4"
            >
              <p className="font-ui-label text-ui-label text-secondary uppercase tracking-wider">
                {scenario.source}
              </p>

              <p className="font-headline-md text-headline-md text-on-surface leading-snug">
                &ldquo;{scenario.claim}&rdquo;
              </p>

              <div className="flex items-start gap-2 mt-auto pt-4 border-t border-outline-variant/20">
                <HelpCircle
                  size={16}
                  strokeWidth={1.5}
                  className="text-secondary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="font-body-md text-body-md text-on-surface-variant italic">
                  {scenario.question}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
