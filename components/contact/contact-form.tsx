'use client'

import { useState, type FormEvent } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Spinner } from '@/components/ui/spinner'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      toast('Message sent', {
        description: 'Thanks for reaching out — our team will reply within 24 hours.',
      })
      event.currentTarget.reset()
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-vault-border bg-vault-bg-secondary/40 p-6">
      <FieldGroup>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="contact-name">Name</FieldLabel>
            <Input id="contact-name" required autoComplete="name" />
          </Field>
          <Field>
            <FieldLabel htmlFor="contact-email">Email</FieldLabel>
            <Input id="contact-email" type="email" required autoComplete="email" />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
          <Input id="contact-subject" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea id="contact-message" required rows={6} />
        </Field>
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="bg-vault-gold text-vault-bg hover:bg-vault-gold-bright"
        >
          {submitting && <Spinner data-icon="inline-start" />}
          {submitting ? 'Sending...' : 'Send Message'}
        </Button>
      </FieldGroup>
    </form>
  )
}
