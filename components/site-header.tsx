'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useCart } from '@/components/cart-provider'

const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/shop', label: 'SHOP' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-vault-border bg-vault-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="font-display text-lg sm:text-xl tracking-[0.15em] text-vault-ink">
          ASTRAL VAULT
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-xs tracking-[0.2em] uppercase transition-colors duration-200 text-vault-ink-muted hover:text-gold',
                pathname === link.href && 'text-gold',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            aria-label="View your vault (cart)"
            className="relative flex items-center justify-center text-vault-ink-muted hover:text-gold transition-colors duration-200 p-2"
          >
            <ShoppingBag className="size-5" aria-hidden="true" />
            {count > 0 ? (
              <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-vault-gold text-[10px] font-medium text-vault-bg">
                {count}
              </span>
            ) : null}
          </Link>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden text-vault-ink-muted hover:text-gold">
                  <Menu aria-hidden="true" />
                  <span className="sr-only">Open menu</span>
                </Button>
              }
            />
            <SheetContent side="right" className="bg-vault-bg-secondary border-vault-border w-72">
              <SheetHeader>
                <SheetTitle className="font-display text-lg tracking-[0.15em] text-vault-ink">
                  ASTRAL VAULT
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 px-4 pt-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className="text-sm tracking-[0.2em] uppercase text-vault-ink-muted hover:text-gold transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    }
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
