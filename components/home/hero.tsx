import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-vault-bg">
      <Image
        src="/hero/vault-door.png"
        alt="A monumental vault door in deep space, lit by a narrow beam of celestial light"
        fill
        priority
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-vault-bg/40 via-vault-bg/60 to-vault-bg" />
      <div className="bg-vault-radial absolute inset-0" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
        <span className="text-xs tracking-[0.3em] text-gold uppercase">
          A Nightmare Collective LLC Brand
        </span>
        <h1 className="font-display text-4xl leading-tight tracking-wide text-vault-ink sm:text-6xl md:text-7xl">
          What Lies Within
          <br />
          Is Yours to Keep
        </h1>
        <p className="max-w-xl text-base text-vault-ink-muted sm:text-lg leading-relaxed">
          Sealed vaults of Pokémon TCG cards, built for collectors who chase more than luck.
          Every pack carries a guarantee, disclosed before you break the seal.
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-vault-gold text-vault-bg hover:bg-vault-gold-bright px-8"
            render={<Link href="/shop">Enter the Vault</Link>}
            nativeButton={false}
          />
          <Button
            size="lg"
            variant="outline"
            className="border-vault-border text-vault-ink hover:bg-vault-bg-secondary hover:text-gold px-8 bg-transparent"
            render={<Link href="/about">Our Story</Link>}
            nativeButton={false}
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] text-vault-ink-muted uppercase">
        Scroll to Explore
      </div>
    </section>
  )
}
