import { Clock } from 'lucide-react'
import { statisticsModules, type Difficulty } from '@/lib/data'

function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const styles: Record<Difficulty, string> = {
    Beginner: 'bg-surface-container text-on-surface-variant border border-outline-variant/40',
    Intermediate: 'bg-secondary/10 text-secondary border border-secondary/20',
    Advanced: 'bg-on-surface/8 text-on-surface border border-on-surface/20',
  }

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded font-ui-label text-[0.6875rem] leading-none ${styles[difficulty]}`}
    >
      {difficulty}
    </span>
  )
}

export function LearningRoadmapSection() {
  const beginner = statisticsModules.filter((m) => m.difficulty === 'Beginner')
  const intermediate = statisticsModules.filter((m) => m.difficulty === 'Intermediate')
  const advanced = statisticsModules.filter((m) => m.difficulty === 'Advanced')

  const groups = [
    { label: 'Beginner', modules: beginner },
    { label: 'Intermediate', modules: intermediate },
    { label: 'Advanced', modules: advanced },
  ]

  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="py-20 px-gutter"
    >
      <div className="max-w-container-max mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="inline-block font-ui-label text-ui-label text-secondary tracking-widest uppercase mb-4">
            Lộ trình học
          </span>
          <h2 id="roadmap-heading" className="font-headline-lg text-headline-lg text-on-surface">
            Chín module. Một hành trình có cấu trúc.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            Mỗi module xây dựng trên nền tảng của module trước. Bắt đầu từ đầu hoặc chọn điểm phù
            hợp với bạn.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="font-ui-label text-ui-label text-on-surface-variant uppercase tracking-widest mb-4 border-b border-outline-variant/30 pb-3">
                {group.label}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.modules.map((mod) => (
                  <a
                    key={mod.slug}
                    href={`/modules/${mod.slug}`}
                    className="group flex flex-col gap-3 bg-background border border-outline-variant/30 rounded-xl p-6 hover:border-secondary/40 hover:bg-surface-container-low motion-safe:transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                  >
                    {/* Module number */}
                    <div className="flex items-center justify-between">
                      <span className="font-code text-[0.75rem] text-on-surface-variant/60">
                        Module {mod.id}
                      </span>
                      <DifficultyBadge difficulty={mod.difficulty} />
                    </div>

                    {/* Title */}
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary motion-safe:transition-colors">
                      {mod.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body-md text-body-md text-on-surface-variant flex-1">
                      {mod.description}
                    </p>

                    {/* Hours */}
                    <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-outline-variant/20">
                      <Clock
                        size={13}
                        strokeWidth={1.5}
                        className="text-on-surface-variant/60"
                        aria-hidden="true"
                      />
                      <span className="font-ui-label text-[0.75rem] text-on-surface-variant/60">
                        ~{mod.hours} giờ
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
