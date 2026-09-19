import { ShopGrid } from '@/components/shop/shop-grid'

export const metadata = {
  title: 'Shop | Astral Vault',
  description:
    'Browse every Astral Vault mystery pack — Core, Rainbow, Vintage, Booster Deluxe, and Ultimate. Every vault discloses its guarantee before you buy.',
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-vault-bg">
      <div className="border-b border-vault-border bg-vault-bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs tracking-[0.2em] text-gold uppercase">Full Collection</p>
          <h1 className="mt-4 font-display text-4xl text-vault-ink sm:text-5xl">The Shop</h1>
          <p className="mx-auto mt-4 max-w-xl text-vault-ink-muted leading-relaxed">
            Five vaults. Every guarantee disclosed on the box. Choose the chase that matches yours.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <ShopGrid />
      </div>
    </main>
  )
}
