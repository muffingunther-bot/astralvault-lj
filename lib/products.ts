export type ProductCategory = 'mystery' | 'vintage' | 'booster' | 'premium'

export interface Product {
  slug: string
  name: string
  category: ProductCategory
  price: number
  tagline: string
  cardCount: string
  guarantee: string
  image: string
  description: string
  featured: string[]
  accordion: {
    whatsInside: string
    guarantee: string
    seeding: string
    condition: string
    valuation: string
    authenticity: string
    shipping: string
  }
}

export const products: Product[] = [
  {
    slug: 'core-vault',
    name: 'CORE VAULT',
    category: 'mystery',
    price: 14.99,
    tagline: 'The entry point to the vault.',
    cardCount: '20 Cards',
    guarantee: '1 Guaranteed Vault Hit',
    image: '/products/core-vault.png',
    description:
      'The Core Vault is where every collector begins. Each pack contains 20 assorted Pokémon TCG cards, including one guaranteed Vault Hit — a curated pull selected to make every opening worthwhile.',
    featured: ['RARE', 'HOLO', 'REVERSE'],
    accordion: {
      whatsInside:
        '20 assorted Pokémon TCG cards spanning modern sets, commons, uncommons, and rares.',
      guarantee: 'Every Core Vault pack includes at least one guaranteed Vault Hit card.',
      seeding:
        'Seeding and production-run information is published for each release under its run number.',
      condition: 'Cards are handled and reviewed to near-mint or better standards before packing.',
      valuation:
        'Vault Hit cards are assigned an internal qualifying value at the time of production.',
      authenticity: 'All cards are sourced from licensed Pokémon TCG products and reviewed before entry into inventory.',
      shipping: 'Ships in protective packaging within 2–4 business days.',
    },
  },
  {
    slug: 'rainbow-vault',
    name: 'RAINBOW VAULT',
    category: 'mystery',
    price: 19.99,
    tagline: 'Chasing the spectrum.',
    cardCount: '20 Cards',
    guarantee: '1 Guaranteed Rainbow / Hyper Rare',
    image: '/products/rainbow-vault.png',
    description:
      'The Rainbow Vault is built around the pursuit of color. Each pack contains 20 assorted cards, including one guaranteed Rainbow Rare or Hyper Rare — among the most visually striking cards in the modern era.',
    featured: ['RAINBOW', 'HYPER RARE', 'ILLUSTRATION'],
    accordion: {
      whatsInside:
        '20 assorted Pokémon TCG cards with a focus on modern rainbow and hyper rare chase cards.',
      guarantee: 'Every Rainbow Vault pack includes at least one guaranteed Rainbow Rare or Hyper Rare.',
      seeding:
        'Seeding and production-run information is published for each release under its run number.',
      condition: 'Cards are handled and reviewed to near-mint or better standards before packing.',
      valuation: 'Rainbow and Hyper Rare pulls are assigned an internal qualifying value at production.',
      authenticity: 'All cards are sourced from licensed Pokémon TCG products and reviewed before entry into inventory.',
      shipping: 'Ships in protective packaging within 2–4 business days.',
    },
  },
  {
    slug: 'vintage-vault',
    name: 'VINTAGE VAULT',
    category: 'vintage',
    price: 19.99,
    tagline: 'Cards from another era.',
    cardCount: '10 Vintage Cards',
    guarantee: 'Cards Released Through 2012',
    image: '/products/vintage-vault.png',
    description:
      'The Vintage Vault is assembled entirely from cards released through 2012 — an era defined by early holo patterns, original artwork, and the beginning of the modern collecting movement.',
    featured: ['VINTAGE', 'HOLO', 'UNLIMITED'],
    accordion: {
      whatsInside: '10 vintage Pokémon TCG cards, all originally released through 2012.',
      guarantee: 'Every card in the Vintage Vault predates 2013, verified at the time of sourcing.',
      seeding: 'Vintage sourcing is documented per production run rather than assigned a single seed list.',
      condition: 'Vintage cards are graded for condition individually; wear consistent with age is expected and disclosed.',
      valuation: 'Vintage cards are valued according to current market comparables at time of production.',
      authenticity: 'Vintage cards are inspected for authenticity prior to entering inventory.',
      shipping: 'Ships in protective packaging within 2–4 business days.',
    },
  },
  {
    slug: 'booster-deluxe',
    name: 'BOOSTER DELUXE',
    category: 'booster',
    price: 34.99,
    tagline: 'Sealed, plus something more.',
    cardCount: '1 Sealed Booster + 10 Bonus Cards',
    guarantee: 'Factory-Sealed Pack',
    image: '/products/booster-deluxe.png',
    description:
      'The Booster Deluxe pairs the untouched excitement of a factory-sealed booster pack with 10 bonus cards, hand-selected to complement the experience of opening something still sealed.',
    featured: ['SEALED', 'BONUS', 'MODERN'],
    accordion: {
      whatsInside: '1 factory-sealed Pokémon TCG booster pack plus 10 bonus assorted cards.',
      guarantee: 'The included booster pack is verified factory-sealed prior to shipment.',
      seeding: 'Booster set and bonus card seeding is published per production run.',
      condition: 'Bonus cards are near-mint or better; sealed boosters are inspected for packaging integrity.',
      valuation: 'Bonus cards are selected for variety rather than a specific guaranteed value tier.',
      authenticity: 'Sealed product is sourced directly from authorized distribution.',
      shipping: 'Ships in protective packaging within 2–4 business days.',
    },
  },
  {
    slug: 'ultimate-vault',
    name: 'ULTIMATE VAULT',
    category: 'premium',
    price: 34.99,
    tagline: 'Built for the serious chase.',
    cardCount: '20 Cards',
    guarantee: '1 Guaranteed $20–$250 Card',
    image: '/products/ultimate-vault.png',
    description:
      'The Ultimate Vault is built for collectors chasing something substantial. Every pack contains 20 assorted Pokémon TCG cards, including one guaranteed qualifying card with an Astral Vault-assigned market value between $20 and $250 at the time of production.',
    featured: ['CHASE', 'FULL ART', 'PREMIUM'],
    accordion: {
      whatsInside: '20 assorted Pokémon TCG cards, including one guaranteed high-value chase card.',
      guarantee: 'Every Ultimate Vault pack includes one card valued between $20 and $250 at production.',
      seeding: 'Full seeding lists and production-run details are published for every Ultimate Vault release.',
      condition: 'All cards are reviewed to near-mint or better standards before packing.',
      valuation: 'Guaranteed chase cards are valued using recent market comparables at time of production.',
      authenticity: 'All cards are sourced from licensed Pokémon TCG products and independently reviewed.',
      shipping: 'Ships in protective packaging within 2–4 business days.',
    },
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export const categoryLabels: Record<'all' | ProductCategory, string> = {
  all: 'ALL',
  mystery: 'MYSTERY',
  vintage: 'VINTAGE',
  booster: 'BOOSTER',
  premium: 'PREMIUM',
}
