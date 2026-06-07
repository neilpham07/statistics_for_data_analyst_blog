import { ArrowRight, Clock } from 'lucide-react'
import { featuredStatisticsModules } from '@/lib/data'

export function FeaturedModulesSection() {
  return (
    <section
      aria-labelledby="featured-modules-heading"
      className="py-20 px-gutter"
    >
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="inline-block font-ui-label text-ui-label text-secondary tracking-widest uppercase mb-4">
              Bắt đầu từ đây
            </span>
            <h2
              id="featured-modules-heading"
              className="font-headline-lg text-headline-lg text-on-surface"
            >
              Ba module được đề xuất.
            </h2>
          </div>

          <a
            href="/modules"
            className="inline-flex items-center gap-2 font-ui-label text-ui-label text-secondary hover:text-secondary/80 motion-safe:transition-colors shrink-0"
          >
            Xem tất cả module
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStatisticsModules.map((mod) => (
            <a
              key={mod.slug}
              href={mod.href}
              className="group flex flex-col bg-background border border-outline-variant/30 rounded-xl p-8 hover:border-secondary/40 motion-safe:transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="font-ui-label text-ui-label text-secondary">{mod.subtitle}</p>
                  <h3 className="font-headline-md text-headline-md text-on-surface mt-1 group-hover:text-secondary motion-safe:transition-colors">
                    {mod.title}
                  </h3>
                </div>
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-outline shrink-0 mt-1 group-hover:text-secondary group-hover:translate-x-0.5 motion-safe:transition-all"
                  aria-hidden="true"
                />
              </div>

              {/* Description */}
              <p className="font-body-md text-body-md text-on-surface-variant flex-1 leading-relaxed">
                {mod.description}
              </p>

              {/* Footer meta */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-outline-variant/20">
                <span className="inline-block px-2 py-0.5 rounded font-ui-label text-[0.6875rem] bg-surface-container text-on-surface-variant border border-outline-variant/40">
                  {mod.difficulty}
                </span>
                <div className="flex items-center gap-1.5 text-on-surface-variant/60">
                  <Clock size={13} strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-ui-label text-[0.75rem]">~{mod.hours} giờ</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
