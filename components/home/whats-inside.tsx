import { ShieldCheck, Sparkles, Truck, Lock } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed Hits',
    description:
      'Every vault discloses its guaranteed pull before checkout. What you see on the box is what lands in your hands.',
  },
  {
    icon: Sparkles,
    title: 'Authenticated Chase Cards',
    description:
      'Every graded and vintage card is sourced, inspected, and authenticated before it ever enters a vault.',
  },
  {
    icon: Lock,
    title: 'Tamper-Evident Seals',
    description:
      'Vaults are packed and sealed under camera in our production facility, then shipped sealed until you break it open.',
  },
  {
    icon: Truck,
    title: 'Insured Shipping',
    description:
      'Every order ships in reinforced packaging with tracked, insured delivery — no exceptions, no excuses.',
  },
]

export function WhatsInside() {
  return (
    <section className="bg-vault-bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Promise"
          title="What's Inside Is Real"
          subtitle="We built Astral Vault for collectors who got burned by mystery boxes before. Here's how we're different."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-4 rounded-lg border border-vault-border bg-vault-bg p-8 text-center"
              >
                <div className="flex size-14 items-center justify-center rounded-full border border-vault-gold/30 bg-vault-gold/10">
                  <Icon className="size-6 text-gold" />
                </div>
                <h3 className="font-display text-lg tracking-wide text-vault-ink">
                  {feature.title}
                </h3>
                <p className="text-sm text-vault-ink-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
