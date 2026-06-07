'use client'

import { useEffect, useState } from 'react'

export type TocItem = {
  id: string
  label: string
  level?: 2 | 3
}

type Props = {
  items: TocItem[]
}

export function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      {
        rootMargin: '-10% 0% -70% 0%',
        threshold: 0,
      }
    )

    for (const { id } of items) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [items])

  return (
    <aside
      aria-label="Mục lục"
      className="shrink-0 w-52 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto pb-12 pt-8 pl-6 hidden xl:block"
    >
      <p className="font-ui-label text-[0.6875rem] text-on-surface-variant/50 uppercase tracking-widest mb-4">
        Mục lục
      </p>

      <nav>
        <ul className="flex flex-col gap-0.5">
          {items.map(({ id, label, level = 2 }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block font-ui-nav text-ui-nav leading-snug py-1.5 motion-safe:transition-colors rounded ${
                    level === 3 ? 'pl-3' : ''
                  } ${
                    isActive
                      ? 'text-secondary font-medium'
                      : 'text-on-surface-variant/70 hover:text-on-surface'
                  }`}
                >
                  {isActive && (
                    <span className="inline-block w-1 h-1 rounded-full bg-secondary mr-2 align-middle" aria-hidden="true" />
                  )}
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
