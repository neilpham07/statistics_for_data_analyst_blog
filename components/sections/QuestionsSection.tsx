import { TrendingUp, Users, Percent, BarChart2, UserMinus, PieChart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { statisticsQuestions } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  Percent,
  BarChart2,
  UserMinus,
  PieChart,
}

export function QuestionsSection() {
  return (
    <section
      aria-labelledby="questions-heading"
      className="py-20 px-gutter bg-surface-container-low"
    >
      <div className="max-w-container-max mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="inline-block font-ui-label text-ui-label text-secondary tracking-widest uppercase mb-4">
            Câu hỏi bạn sẽ trả lời được
          </span>
          <h2
            id="questions-heading"
            className="font-headline-lg text-headline-lg text-on-surface"
          >
            Những câu hỏi thực tế mà mọi Data Analyst đều gặp.
          </h2>
        </div>

        <div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {statisticsQuestions.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.question}
                role="listitem"
                className="flex items-start gap-4 bg-background border border-outline-variant/30 rounded-xl p-6"
              >
                {Icon && (
                  <div
                    className="shrink-0 p-2 rounded-lg bg-secondary/8 border border-secondary/15"
                    aria-hidden="true"
                  >
                    <Icon size={18} strokeWidth={1.5} className="text-secondary" />
                  </div>
                )}
                <p className="font-body-lg text-body-md text-on-surface leading-snug pt-1">
                  {item.question}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
