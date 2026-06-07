'use client'

import { useEffect, useRef } from 'react'
import { Search } from 'lucide-react'

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
        inputRef.current?.select()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative flex-1 group w-full max-w-sm">
      <Search
        size={18}
        strokeWidth={1.5}
        aria-hidden="true"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-on-surface motion-safe:transition-colors pointer-events-none"
      />
      <input
        id="hero-search"
        ref={inputRef}
        type="search"
        placeholder="Tìm kiếm bài viết (Cmd + K)"
        aria-label="Tìm kiếm bài viết"
        className="w-full pl-11 pr-4 py-4 bg-white border border-outline-variant/50 rounded-lg font-ui-nav text-ui-nav text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:border-secondary motion-safe:transition-colors"
      />
    </div>
  )
}
