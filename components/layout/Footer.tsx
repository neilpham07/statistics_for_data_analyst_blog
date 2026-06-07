export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Lộ trình học', href: '#roadmap' },
    { label: 'Tất cả bài viết', href: '/articles' },
    { label: 'Liên hệ', href: '/contact' },
  ]

  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-headline-md text-headline-md text-on-surface mb-2">
              The Knowledge Library
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Thống kê cho Data Analyst Việt Nam — từ dữ liệu đến quyết định.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Liên kết footer">
            <ul className="flex flex-col sm:flex-row gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-ui-label text-ui-label text-on-surface-variant hover:text-on-surface motion-safe:transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-outline-variant/20">
          <p className="font-body-md text-body-md text-on-surface-variant/60 text-center sm:text-left">
            © {currentYear} Neil Pham. Xây dựng cho cộng đồng Data Analyst Việt Nam.
          </p>
          <p className="font-code text-[0.75rem] text-secondary/60 italic">
            &ldquo;From Data to Decision&rdquo;
          </p>
        </div>
      </div>
    </footer>
  )
}
