import { MailIcon, ClockIcon, MapPinIcon } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata = {
  title: 'Contact | Astral Vault',
  description: 'Get in touch with the Astral Vault team.',
}

const details = [
  {
    icon: MailIcon,
    label: 'Email',
    value: 'support@astralvault.com',
  },
  {
    icon: ClockIcon,
    label: 'Response Time',
    value: 'Within 24 hours, every day',
  },
  {
    icon: MapPinIcon,
    label: 'Facility',
    value: 'Nightmare Collective LLC, United States',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-vault-bg">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="mb-12 flex flex-col gap-3">
          <span className="text-xs tracking-[0.25em] text-gold uppercase font-medium">Contact</span>
          <h1 className="font-display text-4xl text-vault-ink sm:text-5xl">Get in Touch</h1>
          <p className="max-w-xl text-vault-ink-muted leading-relaxed">
            Questions about an order, a chase card, or a wholesale inquiry? Send us a message and the
            Astral Vault team will get back to you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-6">
            {details.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-vault-gold/10 text-gold">
                  <detail.icon className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-vault-ink-muted">{detail.label}</span>
                  <span className="text-vault-ink">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </main>
  )
}
