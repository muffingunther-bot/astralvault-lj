import Link from 'next/link'

const SHOP_LINKS = [
  { href: '/shop', label: 'All Vaults' },
  { href: '/shop?category=mystery', label: 'Mystery Vaults' },
  { href: '/shop?category=vintage', label: 'Vintage Vaults' },
  { href: '/shop?category=premium', label: 'Premium Vaults' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
  { href: '/about#guarantee', label: 'Guarantee' },
  { href: '/about#faq', label: 'FAQ' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-vault-border bg-vault-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-display text-lg tracking-[0.15em] text-vault-ink">
              ASTRAL VAULT
            </span>
            <p className="text-sm text-vault-ink-muted leading-relaxed max-w-xs">
              Every vault is sealed with intention. What you find inside is yours to keep, yours
              to chase, yours to remember.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-gold">Shop</h3>
            <ul className="flex flex-col gap-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-vault-ink-muted hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-gold">Company</h3>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-vault-ink-muted hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-gold">The Vault Promise</h3>
            <p className="text-sm text-vault-ink-muted leading-relaxed">
              Every guaranteed hit is disclosed before you open a single pack. No guesswork. No
              empty promises. Just what&apos;s written on the box.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-vault-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-vault-ink-muted">
            © {new Date().getFullYear()} Astral Vault. All rights reserved.
          </p>
          <p className="text-xs text-vault-ink-muted">
            This is an independent mock storefront and is not affiliated with, endorsed by, or
            sponsored by The Pokémon Company or Nintendo.
          </p>
        </div>
      </div>
    </footer>
  )
}
