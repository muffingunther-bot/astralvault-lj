import { CartView } from '@/components/cart/cart-view'

export const metadata = {
  title: 'Your Vault | Astral Vault',
  description: 'Review the vaults in your cart before checkout.',
}

export default function CartPage() {
  return (
    <main className="min-h-screen bg-vault-bg">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-xs tracking-[0.25em] text-gold uppercase font-medium">Your Vault</span>
          <h1 className="font-display text-4xl text-vault-ink sm:text-5xl">Review Your Order</h1>
        </div>
        <CartView />
      </div>
    </main>
  )
}
