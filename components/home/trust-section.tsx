import Link from 'next/link'
import { Star, ShieldCheck, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TESTIMONIALS = [
  {
    name: 'Derek M.',
    quote:
      'Pulled a graded Charizard from the Ultimate Vault. Everything was exactly as advertised, sealed and authenticated. Already ordered my second one.',
  },
  {
    name: 'Priya S.',
    quote:
      'First mystery box brand I have trusted enough to buy twice. The disclosed odds actually match what people are pulling.',
  },
  {
    name: 'Jonah T.',
    quote:
      'The packaging alone feels premium. Shipping was fast and insured. This is how mystery packs should be done.',
  },
]

export function TrustSection() {
  return (
    <section className="bg-vault-bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-lg border border-vault-border bg-vault-bg p-8"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-vault-ink-muted leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <span className="text-xs tracking-wide text-vault-ink uppercase">{t.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 rounded-lg border border-vault-gold/20 bg-vault-bg px-8 py-14 text-center">
          <div className="flex gap-8 text-gold">
            <ShieldCheck className="size-8" />
            <BadgeCheck className="size-8" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl tracking-wide text-vault-ink">
            Ready to Break the Seal?
          </h2>
          <p className="max-w-md text-sm text-vault-ink-muted leading-relaxed">
            Every vault ships insured, authenticated, and exactly as described. No surprises
            except the ones you're chasing.
          </p>
          <Button
            size="lg"
            className="bg-vault-gold text-vault-bg hover:bg-vault-gold-bright px-10"
            render={<Link href="/shop">Shop All Vaults</Link>}
            nativeButton={false}
          />
        </div>
      </div>
    </section>
  )
}
