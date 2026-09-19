'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Minus, Plus, ShieldCheck, Lock, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useCart } from '@/components/cart-provider'
import type { Product } from '@/lib/products'

const accordionSections: { key: keyof Product['accordion']; label: string }[] = [
  { key: 'whatsInside', label: "What's Inside" },
  { key: 'guarantee', label: 'The Guarantee' },
  { key: 'seeding', label: 'Seeding & Odds' },
  { key: 'condition', label: 'Card Condition' },
  { key: 'valuation', label: 'Valuation Method' },
  { key: 'authenticity', label: 'Authenticity' },
  { key: 'shipping', label: 'Shipping' },
]

export function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="relative aspect-square overflow-hidden rounded-lg border border-vault-border bg-black">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={`${product.name} mystery pack box`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <Link href="/shop" className="text-xs tracking-[0.2em] text-gold uppercase">
            Back to Shop
          </Link>
          <h1 className="mt-4 font-display text-4xl text-vault-ink sm:text-5xl">{product.name}</h1>
          <p className="mt-3 text-lg text-vault-ink-muted">{product.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary" className="bg-vault-gold/10 text-gold border border-vault-gold/30">
            {product.cardCount}
          </Badge>
          <Badge variant="secondary" className="bg-vault-gold/10 text-gold border border-vault-gold/30">
            {product.guarantee}
          </Badge>
        </div>

        <p className="text-vault-ink-muted leading-relaxed">{product.description}</p>

        <div className="flex flex-wrap gap-2">
          {product.featured.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-vault-border px-3 py-1 text-xs tracking-wide text-vault-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="font-display text-3xl text-vault-ink">${product.price.toFixed(2)}</div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center rounded-md border border-vault-border">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Decrease quantity"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <Minus />
            </Button>
            <span className="w-8 text-center text-vault-ink" aria-live="polite">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Increase quantity"
              onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            >
              <Plus />
            </Button>
          </div>

          <Button
            size="lg"
            className="flex-1 bg-vault-gold text-vault-bg hover:bg-vault-gold-bright sm:flex-none"
            onClick={() => addItem(product, quantity)}
          >
            <ShoppingBag data-icon="inline-start" />
            Add to Cart
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3 border-t border-vault-border pt-6 text-xs text-vault-ink-muted">
          <div className="flex flex-col items-center gap-2 text-center">
            <ShieldCheck className="size-5 text-gold" />
            Guaranteed hit
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Lock className="size-5 text-gold" />
            Sealed &amp; secure
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Truck className="size-5 text-gold" />
            Insured shipping
          </div>
        </div>

        <Accordion defaultValue={['whatsInside']} className="mt-4">
          {accordionSections.map(({ key, label }) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger className="text-vault-ink">{label}</AccordionTrigger>
              <AccordionContent className="text-vault-ink-muted leading-relaxed">
                {product.accordion[key]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
