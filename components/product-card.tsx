'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { Product } from '@/lib/products'
import { useCart } from '@/components/cart-provider'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-vault-border bg-vault-bg-secondary transition-all duration-300 hover:border-vault-gold/50">
      <Link
        href={`/product/${product.slug}`}
        className="relative aspect-square overflow-hidden bg-black"
      >
        <Image
          src={product.image || '/placeholder.svg'}
          alt={`${product.name} mystery pack box`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-display text-lg tracking-wide text-vault-ink hover:text-gold transition-colors duration-200">
              {product.name}
            </h3>
          </Link>
          <Badge variant="secondary" className="shrink-0 bg-vault-gold/10 text-gold border border-vault-gold/30">
            {product.cardCount}
          </Badge>
        </div>

        <p className="text-sm text-vault-ink-muted leading-relaxed">{product.tagline}</p>
        <p className="text-xs tracking-wide text-gold uppercase">{product.guarantee}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="font-display text-xl text-vault-ink">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            className="bg-vault-gold text-vault-bg hover:bg-vault-gold-bright"
            onClick={() => addItem(product)}
          >
            <ShoppingBag data-icon="inline-start" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
