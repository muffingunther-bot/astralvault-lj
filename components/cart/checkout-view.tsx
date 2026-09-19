'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCart } from '@/components/cart-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Spinner } from '@/components/ui/spinner'
import { Field, FieldGroup, FieldLabel, FieldSet, FieldLegend } from '@/components/ui/field'
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
import { ShoppingBagIcon } from 'lucide-react'

export function CheckoutView() {
  const { items, subtotal, clear } = useCart()
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  if (items.length === 0) {
    return (
      <Empty className="border border-vault-border bg-vault-bg-secondary/40">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <ShoppingBagIcon />
          </EmptyMedia>
          <EmptyTitle>Nothing to check out</EmptyTitle>
          <EmptyDescription>Add a vault to your cart before checking out.</EmptyDescription>
        </EmptyHeader>
        <Button
          className="bg-vault-gold text-vault-bg hover:bg-vault-gold-bright"
          render={<Link href="/shop">Browse the Shop</Link>}
          nativeButton={false}
        />
      </Empty>
    )
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      clear()
      router.push('/checkout/success')
    }, 1200)
  }

  const shipping = subtotal >= 75 ? 0 : 8.99
  const total = subtotal + shipping

  return (
    <form onSubmit={handleSubmit} className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
      <div className="flex flex-col gap-10">
        <FieldSet>
          <FieldLegend>Shipping Address</FieldLegend>
          <FieldGroup>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="first-name">First name</FieldLabel>
                <Input id="first-name" required autoComplete="given-name" />
              </Field>
              <Field>
                <FieldLabel htmlFor="last-name">Last name</FieldLabel>
                <Input id="last-name" required autoComplete="family-name" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" required autoComplete="email" />
            </Field>
            <Field>
              <FieldLabel htmlFor="address">Address</FieldLabel>
              <Input id="address" required autoComplete="street-address" />
            </Field>
            <div className="grid gap-4 sm:grid-cols-3">
              <Field>
                <FieldLabel htmlFor="city">City</FieldLabel>
                <Input id="city" required autoComplete="address-level2" />
              </Field>
              <Field>
                <FieldLabel htmlFor="state">State</FieldLabel>
                <Input id="state" required autoComplete="address-level1" />
              </Field>
              <Field>
                <FieldLabel htmlFor="zip">ZIP</FieldLabel>
                <Input id="zip" required autoComplete="postal-code" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldLegend>Payment</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-number">Card number</FieldLabel>
              <Input id="card-number" required inputMode="numeric" placeholder="4242 4242 4242 4242" />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="card-expiry">Expiry</FieldLabel>
                <Input id="card-expiry" required placeholder="MM / YY" />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-cvc">CVC</FieldLabel>
                <Input id="card-cvc" required inputMode="numeric" placeholder="123" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
      </div>

      <div className="flex flex-col gap-6 rounded-lg border border-vault-border bg-vault-bg-secondary/40 p-6">
        <h2 className="font-display text-xl text-vault-ink">Order Summary</h2>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.slug} className="flex justify-between text-sm text-vault-ink-muted">
              <span>
                {item.name} <span className="text-vault-ink-muted">x{item.quantity}</span>
              </span>
              <span className="text-vault-ink">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <Separator className="bg-vault-border" />
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between text-vault-ink-muted">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-vault-ink-muted">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
        </div>
        <Separator className="bg-vault-border" />
        <div className="flex justify-between font-display text-xl text-vault-ink">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="w-full bg-vault-gold text-vault-bg hover:bg-vault-gold-bright"
        >
          {submitting && <Spinner data-icon="inline-start" />}
          {submitting ? 'Sealing your order...' : 'Place Order'}
        </Button>
        <p className="text-center text-xs text-vault-ink-muted">
          This is a demo checkout. No payment will be processed.
        </p>
      </div>
    </form>
  )
}
