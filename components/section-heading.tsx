import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs tracking-[0.25em] text-gold uppercase font-medium">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wide text-vault-ink">
        {title}
      </h2>
      {align === 'center' ? <div className="divider-ornament w-full max-w-xs" /> : null}
      {subtitle ? (
        <p className="max-w-xl text-base text-vault-ink-muted leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  )
}
