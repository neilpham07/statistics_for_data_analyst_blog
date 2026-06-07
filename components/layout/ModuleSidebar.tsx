'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { statisticsModules } from '@/lib/data'

const difficultyDot: Record<string, string> = {
  Beginner: 'bg-secondary/40',
  Intermediate: 'bg-secondary/70',
  Advanced: 'bg-secondary',
}

export function ModuleSidebar() {
  const pathname = usePathname()

  return (
    <aside
      aria-label="Điều hướng module"
      className="shrink-0 w-[280px] sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto pb-12 pt-8 pr-4 border-r border-outline-variant/30"
    >
      {/* Home / Giới thiệu */}
      <div className="mb-6">
        <Link
          href="/"
          aria-current={pathname === '/' ? 'page' : undefined}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg font-ui-label text-ui-label motion-safe:transition-colors ${
            pathname === '/'
              ? 'border-l-2 border-secondary text-secondary bg-surface-container-low'
              : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
          }`}
        >
          Giới thiệu
        </Link>
      </div>

      {/* Divider */}
      <p className="px-3 mb-3 font-ui-label text-[0.6875rem] text-on-surface-variant/50 uppercase tracking-widest">
        Các module
      </p>

      <nav>
        <ul className="flex flex-col gap-0.5">
          {statisticsModules.map((mod) => {
            const href = `/modules/${mod.slug}`
            const isActive = pathname === href || pathname.startsWith(`${href}/`)

            return (
              <li key={mod.slug}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-start gap-3 px-3 py-2.5 rounded-lg motion-safe:transition-colors group ${
                    isActive
                      ? 'border-l-2 border-secondary text-secondary bg-surface-container-low'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container border-l-2 border-transparent'
                  }`}
                >
                  {/* Difficulty dot */}
                  <span
                    className={`mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 ${
                      isActive ? 'bg-secondary' : difficultyDot[mod.difficulty]
                    }`}
                    aria-hidden="true"
                  />

                  <span className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-ui-label text-ui-label leading-none truncate">
                      <span className="text-[0.6875rem] opacity-60 mr-1">
                        {String(mod.id).padStart(2, '0')}
                      </span>
                      {mod.title}
                    </span>
                    <span className="font-body-md text-[0.6875rem] text-on-surface-variant/60 leading-snug line-clamp-2">
                      {mod.difficulty} · {mod.hours}h
                    </span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
