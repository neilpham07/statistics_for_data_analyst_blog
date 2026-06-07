import Link from 'next/link'
import { ButtonLink } from '@/components/ui/Button'
import { SearchTrigger } from '@/components/sections/SearchTrigger'
import { navLinks } from '@/lib/data'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-gutter bg-background/80 backdrop-blur-md border-b border-outline-variant/30">
      <a href="#main-content" className="skip-nav">
        Bỏ qua điều hướng
      </a>

      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="font-headline-md text-headline-md text-on-surface tracking-tight hover:text-secondary motion-safe:transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
          aria-label="The Knowledge Library — Trang chủ"
        >
          The Knowledge Library
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-ui-nav text-ui-nav text-on-surface-variant hover:text-on-surface motion-safe:transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <SearchTrigger />
        <ButtonLink href="/subscribe" variant="primary" size="sm">
          Đăng ký
        </ButtonLink>
      </div>
    </header>
  )
}
