import { SectionHeading } from '@/components/section-heading'

const STATS = [
  { value: '1 in 6', label: 'Vaults contain a graded chase card' },
  { value: '100%', label: 'Chase cards authenticated before packing' },
  { value: '$2,400+', label: 'Highest chase card pulled to date' },
  { value: '48 hrs', label: 'Average time from order to ship' },
]

export function ChaseSection() {
  return (
    <section className="relative overflow-hidden bg-vault-bg-secondary py-24">
      <div className="bg-vault-radial absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Chase"
          title="Every Vault Has a Ceiling"
          subtitle="We track and disclose real pull data across every vault we ship. No inflated odds, no marketing fiction — just the numbers."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-lg border border-vault-border bg-vault-bg p-8 text-center"
            >
              <span className="font-display text-3xl text-gold sm:text-4xl">{stat.value}</span>
              <span className="text-sm text-vault-ink-muted leading-relaxed">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
