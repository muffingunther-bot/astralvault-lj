import Link from 'next/link'
import { CheckCircle2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Order Confirmed | Astral Vault',
  description: 'Your Astral Vault order has been placed.',
}

export default function CheckoutSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-vault-bg px-6 py-24">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-vault-gold/10 text-gold">
          <CheckCircle2Icon className="size-8" />
        </div>
        <h1 className="font-display text-3xl text-vault-ink sm:text-4xl">Your Vault Is Sealed</h1>
        <p className="text-vault-ink-muted leading-relaxed">
          Thank you for your order. A confirmation has been sent to your email, and your vault will
          ship tamper-sealed within 48 hours.
        </p>
        <Button
          size="lg"
          className="bg-vault-gold text-vault-bg hover:bg-vault-gold-bright"
          render={<Link href="/shop">Continue Exploring</Link>}
          nativeButton={false}
        />
      </div>
    </main>
  )
}
