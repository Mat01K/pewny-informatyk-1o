'use client'

import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
      event.currentTarget.reset()
      toast.success('Dziękujemy! Odezwiemy się w ciągu jednego dnia roboczego.')
    }, 700)
  }

  return (
    <section id="kontakt" className="border-b border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Kontakt
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Porozmawiajmy o Twoim IT
            </h2>
            <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
              Zostaw wiadomość albo zadzwoń — odpowiadamy tego samego dnia
              roboczego. Pierwsza rozmowa jest bezpłatna i niczego nie
              zobowiązuje.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-4.5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <a href="tel:+48503403833" className="font-medium text-foreground hover:text-primary">
                    +48 503 403 833
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-4.5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <a
                    href="mailto:kontakt@pewnyinformatyk.pl"
                    className="font-medium text-foreground hover:text-primary"
                  >
                    kontakt@pewnyinformatyk.pl
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="size-4.5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Obszar działania</p>
                  <p className="font-medium text-foreground">
                    Ruda Śląska, cały Śląsk i cała Polska
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <FieldGroup>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name">Imię i nazwisko</FieldLabel>
                  <Input id="name" name="name" placeholder="Jan Kowalski" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="company">Firma</FieldLabel>
                  <Input id="company" name="company" placeholder="Nazwa firmy" />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="phone">Telefon</FieldLabel>
                  <Input id="phone" name="phone" type="tel" placeholder="+48 600 000 000" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">E-mail</FieldLabel>
                  <Input id="email" name="email" type="email" placeholder="jan@firma.pl" />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="message">W czym możemy pomóc?</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Np. potrzebujemy wsparcia dla 12 komputerów i programu Comarch Optima"
                  className="min-h-28"
                />
              </Field>
              <Button type="submit" size="lg" disabled={submitting} className="mt-2">
                {submitting ? 'Wysyłanie…' : 'Wyślij zapytanie'}
              </Button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Wysyłając formularz zgadzasz się na kontakt w celu przygotowania
                wyceny. Nie wykorzystujemy danych do niczego innego.
              </p>
            </FieldGroup>
          </form>
        </div>
      </div>
    </section>
  )
}
