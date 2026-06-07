type TagProps = {
  children: string
  variant?: 'default' | 'accent'
  className?: string
}

export function Tag({ children, variant = 'default', className = '' }: TagProps) {
  const variantClasses = {
    default: 'bg-surface-container-high text-on-surface-variant',
    accent: 'bg-secondary-fixed text-on-secondary-fixed',
  }

  return (
    <span
      className={`inline-block px-2 py-1 rounded font-ui-label text-[12px] leading-none ${variantClasses[variant]} ${className}`}
    >
      #{children}
    </span>
  )
}
