import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  {
    step: '01',
    title: 'Source & Inspect',
    description:
      'Cards are sourced from vetted distributors and graded submissions, then inspected by hand for authenticity and condition.',
  },
  {
    step: '02',
    title: 'Seed & Log',
    description:
      'Each vault batch is seeded according to its published odds and logged in our production ledger before a single box is packed.',
  },
  {
    step: '03',
    title: 'Pack Under Camera',
    description:
      'Packing happens on camera in our facility. Every vault is sealed the moment its contents are confirmed.',
  },
  {
    step: '04',
    title: 'Ship Sealed',
    description:
      'Vaults leave our facility tamper-sealed and fully insured, tracked from our shelf to your door.',
  },
]

export function ProductionSection() {
  return (
    <section className="bg-vault-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/5 overflow-hidden rounded-lg border border-vault-border order-last lg:order-first">
            <Image
              src="/about/archive-hero.png"
              alt="The Astral Vault production archive, rows of sealed vaults under warm light"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Transparency"
              title="How a Vault Gets Made"
              subtitle="From sourcing to seal, every step is documented. This is the process behind every box we ship."
              align="left"
            />

            <div className="mt-10 flex flex-col gap-8">
              {STEPS.map((item) => (
                <div key={item.step} className="flex gap-5">
                  <span className="font-display text-2xl text-gold/60">{item.step}</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-lg tracking-wide text-vault-ink">
                      {item.title}
                    </h3>
                    <p className="text-sm text-vault-ink-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
