import Image from 'next/image'
import { ShieldCheckIcon, SparklesIcon, LockIcon, TruckIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export const metadata = {
  title: 'Our Story | Astral Vault',
  description:
    'Astral Vault started with three shoeboxes of vintage cards and a promise: what you see on the box is what lands in your hands.',
}

const values = [
  {
    icon: ShieldCheckIcon,
    title: 'Disclosed Odds',
    description:
      'Every vault publishes its real pull rates before you buy. No inflated numbers, no marketing fiction.',
  },
  {
    icon: SparklesIcon,
    title: 'Authenticated Chase Cards',
    description:
      'Every graded and vintage card is sourced, inspected, and authenticated before it ever enters a vault.',
  },
  {
    icon: LockIcon,
    title: 'Camera-Sealed Packing',
    description: 'Vaults are packed under camera in our facility and sealed the moment contents are confirmed.',
  },
  {
    icon: TruckIcon,
    title: 'Insured, Tracked Shipping',
    description: 'Every order ships tamper-evident, tracked, and fully insured from our shelf to your door.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-vault-bg">
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <Image
          src="/about/archive-hero.png"
          alt="A vast archive of sealed vaults stretching into darkness, lit by a single shaft of light"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vault-bg/40 via-vault-bg/70 to-vault-bg" />
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
          <span className="text-xs tracking-[0.3em] text-gold uppercase">Our Story</span>
          <h1 className="font-display text-4xl leading-tight text-vault-ink sm:text-6xl">
            Built By Collectors Who Got Tired of Getting Burned
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-vault-ink-muted">
          <p>
            Astral Vault started in a spare bedroom with three shoeboxes of vintage cards and a simple
            frustration: every mystery box on the market either exaggerated its odds or hid its
            contents behind vague marketing.
          </p>
          <p>
            We built the vault we wished existed — one where the guarantee printed on the box is the
            guarantee inside it, where every chase card is authenticated, and where the seal you break
            is the first time anyone has touched what&apos;s inside.
          </p>
          <p>
            Today, Astral Vault is a brand of Nightmare Collective LLC, run by a small team of
            collectors, graders, and shipping obsessives who treat every vault like it&apos;s going into
            our own collection first.
          </p>
        </div>
      </section>

      <section className="bg-vault-bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The Astral Vault Standard"
            description="Four commitments that shape every vault we build."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 rounded-lg border border-vault-border bg-vault-bg p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-vault-gold/10 text-gold">
                  <value.icon className="size-5" />
                </div>
                <h3 className="font-display text-lg text-vault-ink">{value.title}</h3>
                <p className="text-sm leading-relaxed text-vault-ink-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
