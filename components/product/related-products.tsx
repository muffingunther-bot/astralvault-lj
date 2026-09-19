import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { SectionHeading } from '@/components/section-heading'

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const related = products.filter((p) => p.slug !== currentSlug).slice(0, 3)

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading eyebrow="Keep Exploring" title="You Might Also Chase" align="left" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {related.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
