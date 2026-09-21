import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function StorySection() {
  return (
    <section className="bg-vault-bg py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-4/5 overflow-hidden rounded-lg border border-vault-border">
          <Image
            src="/story/vault-story.png"
            alt="A collector's hands opening a sealed Astral Vault box under warm light"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-xs tracking-[0.25em] text-gold uppercase font-medium">
            Our Story
          </span>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-vault-ink">
            VINTAGE MYSTERY PACK SALE RUNNING NOW!
          </h2>
          <p className="text-base text-vault-ink-muted leading-relaxed">
            Step into a throwback with our limited-time Mystery Packs! Each pack features a chance to discover cards inspired by iconic eras including Fossil, Base Set, 2nd Generation, Jungle, and Neo Destiny. With exclusive cards tied to each featured set, every pack brings a little nostalgia and a surprise waiting to be uncovered.
          </p>
          <p className="text-base text-vault-ink-muted leading-relaxed">
            We built the vault we wished existed — one where the guarantee printed on the box is
            the guarantee inside it, where every chase card is authenticated, and where the seal
            you break is the first time anyone has touched what's inside.
          </p>
          <div>
            <Button
              variant="outline"
              className="border-vault-border text-vault-ink hover:bg-vault-bg-secondary hover:text-gold bg-transparent"
              render={<Link href="/about">Read the Full Story</Link>}
              nativeButton={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
