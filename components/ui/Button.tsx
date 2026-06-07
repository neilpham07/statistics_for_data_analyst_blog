import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary'
type Size = 'sm' | 'md'

const base = [
  'inline-flex items-center justify-center gap-2',
  'font-ui-label text-ui-label rounded-lg select-none',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
].join(' ')

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-on-primary hover:opacity-90 active:scale-95 active:shadow-[inset_0_1px_0_rgba(0,0,0,0.15)] motion-safe:transition-all',
  secondary:
    'bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container-high motion-safe:transition-colors',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2',
  md: 'px-6 py-3',
}

function buildClasses(variant: Variant, size: Size, className: string) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(' ')
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buildClasses(variant, size, className)} {...props}>
      {children}
    </button>
  )
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: Variant
  size?: Size
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={buildClasses(variant, size, className)} {...props}>
      {children}
    </a>
  )
}
