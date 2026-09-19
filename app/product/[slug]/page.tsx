import { notFound } from 'next/navigation'
import { getProductBySlug, products } from '@/lib/products'
import { ProductDetail } from '@/components/product/product-detail'
import { RelatedProducts } from '@/components/product/related-products'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} | Astral Vault`,
    description: product.tagline,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  return (
    <main className="min-h-screen bg-vault-bg">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <ProductDetail product={product} />
      </div>
      <div className="border-t border-vault-border bg-vault-bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <RelatedProducts currentSlug={product.slug} />
        </div>
      </div>
    </main>
  )
}
