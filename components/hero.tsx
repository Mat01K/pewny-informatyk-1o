import {
  CheckCircle2,
  Laptop,
  Monitor,
  PhoneCall,
  Server,
  ShieldCheck,
  Wifi,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const TRUST_POINTS = [
  'Reakcja tego samego dnia',
  'Umowa bez zobowiązań na lata',
  'Wycena po rozmowie, bez niespodzianek',
]

const STATUS_ROWS = [
  { icon: Server, label: 'Serwer księgowości', status: 'Działa' },
  { icon: Wifi, label: 'Sieć — biuro główne', status: 'Działa' },
  { icon: ShieldCheck, label: 'Ochrona antywirusowa', status: 'Aktywna' },
  { icon: Laptop, label: 'Stacje robocze (18)', status: 'Zaktualizowane' },
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
            <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary/60 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Monitor className="size-4" />
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">
                    Panel klienta
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Stan infrastruktury na żywo
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                Online
              </span>
            </div>

            <div className="flex flex-col gap-1 p-4">
              {STATUS_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                      <row.icon className="size-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {row.label}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
                    <CheckCircle2 className="size-3.5" />
                    {row.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-border p-4">
              <div className="rounded-lg bg-secondary/60 p-3.5">
                <p className="font-heading text-2xl font-semibold text-primary">
                  15 min
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  czas pierwszej odpowiedzi
                </p>
              </div>
              <div className="rounded-lg bg-secondary/60 p-3.5">
                <p className="font-heading text-2xl font-semibold text-primary">
                  24/7
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  monitoring usług
                </p>
              </div>
              <div className="rounded-lg bg-secondary/60 p-3.5">
                <p className="font-heading text-2xl font-semibold text-primary">
                  0
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  zgłoszeń bez odpowiedzi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
