import { CheckoutView } from '@/components/cart/checkout-view'

export const metadata = {
  title: 'Checkout | Astral Vault',
  description: 'Complete your Astral Vault order.',
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-vault-bg">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-xs tracking-[0.25em] text-gold uppercase font-medium">Checkout</span>
          <h1 className="font-display text-4xl text-vault-ink sm:text-5xl">Secure Your Vault</h1>
        </div>
        <CheckoutView />
      </div>
    </main>
  )
}
