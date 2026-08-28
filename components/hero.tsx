import { CheckCircle2, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

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
            sprawę
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
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10">
            <Image
              src="/images/hero-technician.png"
              alt="Informatyk serwisujący sprzęt firmowy w biurze klienta"
              width={960}
              height={1120}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-xl border border-border bg-popover p-4 shadow-xl sm:block">
            <p className="font-heading text-2xl font-semibold text-primary">
              15 min
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              średni czas do pierwszej odpowiedzi zdalnej
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
