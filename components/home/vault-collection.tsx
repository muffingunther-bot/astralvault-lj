import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

export function VaultCollection() {
  return (
    <section className="bg-vault-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Collection"
          title="Choose Your Vault"
          subtitle="Five vaults, five experiences. Every one guarantees exactly what it promises, and nothing less."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-vault-border text-vault-ink hover:bg-vault-bg-secondary hover:text-gold px-10 bg-transparent"
            render={<Link href="/shop">View Full Shop</Link>}
            nativeButton={false}
          />
        </div>
      </div>
    </section>
  )
}
