'use client'

import { useEffect, useRef } from 'react'
import { Search } from 'lucide-react'

export function SearchTrigger() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <button
      type="button"
      aria-label="Tìm kiếm bài viết (Cmd+K)"
      onClick={() => {
        document.getElementById('hero-search')?.focus()
      }}
      className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant/50 font-ui-nav text-ui-nav text-on-surface-variant hover:border-outline hover:text-on-surface motion-safe:transition-colors"
    >
      <Search size={14} strokeWidth={1.5} aria-hidden="true" />
      <span>Tìm kiếm</span>
      <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-surface-container text-[10px] font-ui-label text-outline border border-outline-variant/40">
        <span>⌘</span>
        <span>K</span>
      </kbd>
    </button>
  )
}
