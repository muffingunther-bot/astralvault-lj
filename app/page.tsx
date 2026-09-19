import { Hero } from '@/components/home/hero'
import { VaultCollection } from '@/components/home/vault-collection'
import { WhatsInside } from '@/components/home/whats-inside'
import { StorySection } from '@/components/home/story-section'
import { ChaseSection } from '@/components/home/chase-section'
import { ProductionSection } from '@/components/home/production-section'
import { TrustSection } from '@/components/home/trust-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <VaultCollection />
      <WhatsInside />
      <StorySection />
      <ChaseSection />
      <ProductionSection />
      <TrustSection />
    </>
  )
}
