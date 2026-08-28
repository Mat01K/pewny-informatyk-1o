import { CheckCircle2, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const TRUST_POINTS = [
  'Reakcja tego samego dnia',
  'Umowa bez zobowiązań na lata',
  'Wycena po rozmowie, bez niespodzianek',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Outsourcing IT dla firm w Polsce
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Informatyk, który{' '}
            <span className="text-primary">odbiera telefon</span> i naprawia
            problem
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Zajmujemy się całym IT w Twojej firmie — komputerami, serwerami,
            siecią, programami księgowymi i licencjami. Bez fachowego żargonu,
            bez czekania tygodniami. Po ludzku, konkretnie, na czas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              render={<a href="#kontakt" />}
              nativeButton={false}
              className="h-12 px-6 text-base"
            >
              <PhoneCall data-icon="inline-start" />
              Umów bezpłatną rozmowę
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href="#uslugi" />}
              nativeButton={false}
              className="h-12 px-6 text-base bg-transparent"
            >
              Zobacz, czym się zajmujemy
            </Button>
          </div>

          <ul className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:gap-6">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="size-4 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/hero-office.png"
                alt="Informatyk pomagający firmie przy komputerze"
                width={960}
                height={1200}
                className="hero-image-motion h-full w-full object-cover animate-[hero-kenburns_16s_ease-in-out_infinite_alternate]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="size-2 animate-pulse rounded-full bg-accent" />
                  IT, które po prostu działa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
