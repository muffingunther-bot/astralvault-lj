'use client'

import { useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ProductCard } from '@/components/product-card'
import { products, categoryLabels, type ProductCategory } from '@/lib/products'

type Filter = 'all' | ProductCategory

export function ShopGrid() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'all' ? products : products.filter((p) => p.category === filter)

  return (
    <div className="flex flex-col gap-8">
      <ToggleGroup
        defaultValue={['all']}
        onValueChange={(value: string[]) => setFilter((value[0] as Filter) ?? 'all')}
        className="flex-wrap justify-center gap-2 sm:justify-start"
      >
        {(Object.keys(categoryLabels) as Filter[]).map((key) => (
          <ToggleGroupItem
            key={key}
            value={key}
            className="border border-vault-border text-xs tracking-wide text-vault-ink-muted data-[state=on]:border-vault-gold data-[state=on]:bg-vault-gold/10 data-[state=on]:text-gold"
          >
            {categoryLabels[key]}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
