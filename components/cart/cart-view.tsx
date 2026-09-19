'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MinusIcon, PlusIcon, ShoppingBagIcon, XIcon } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from '@/components/ui/empty'

export function CartView() {
  const { items, removeItem, setQuantity, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <Empty className="border border-vault-border bg-vault-bg-secondary/40">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <ShoppingBagIcon />
          </EmptyMedia>
          <EmptyTitle>Your vault is empty</EmptyTitle>
          <EmptyDescription>
            You have not added any vaults to your cart yet. Browse the shop to find your chase.
          </EmptyDescription>
        </EmptyHeader>
        <Button
          className="bg-vault-gold text-vault-bg hover:bg-vault-gold-bright"
          render={<Link href="/shop">Browse the Shop</Link>}
          nativeButton={false}
        />
      </Empty>
    )
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <div key={item.slug}>
            <div className="flex items-center gap-5">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-md border border-vault-border bg-vault-bg-secondary">
                <Image src={item.image || '/placeholder.svg'} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <Link
                  href={`/product/${item.slug}`}
                  className="font-display text-lg text-vault-ink hover:text-gold"
                >
                  {item.name}
                </Link>
                <span className="text-sm text-vault-ink-muted">${item.price.toFixed(2)} each</span>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-vault-border">
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity(item.slug, item.quantity - 1)}
                >
                  <MinusIcon />
                </Button>
                <span className="w-6 text-center text-sm text-vault-ink">{item.quantity}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity(item.slug, item.quantity + 1)}
                >
                  <PlusIcon />
                </Button>
              </div>
              <span className="w-20 text-right font-medium text-vault-ink">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <Button
                size="icon"
                variant="ghost"
                aria-label={`Remove ${item.name}`}
                className="text-vault-ink-muted hover:text-red-400"
                onClick={() => removeItem(item.slug)}
              >
                <XIcon />
              </Button>
            </div>
            {index < items.length - 1 && <Separator className="mt-6 bg-vault-border" />}
          </div>
        ))}
      </div>

      <Separator className="bg-vault-border" />

      <div className="flex flex-col items-end gap-4">
        <div className="flex w-full max-w-xs flex-col gap-2 sm:w-64">
          <div className="flex justify-between text-sm text-vault-ink-muted">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-vault-ink-muted">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <Separator className="bg-vault-border" />
          <div className="flex justify-between font-display text-xl text-vault-ink">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
        <Button
          size="lg"
          className="w-full bg-vault-gold text-vault-bg hover:bg-vault-gold-bright sm:w-64"
          render={<Link href="/checkout">Proceed to Checkout</Link>}
          nativeButton={false}
        />
      </div>
    </div>
  )
}
