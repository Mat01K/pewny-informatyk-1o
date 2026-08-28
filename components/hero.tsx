import {
  CheckCircle2,
  PhoneCall,
  PhoneIncoming,
  Search,
  Ticket,
  Wrench,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const TRUST_POINTS = [
  'Reakcja tego samego dnia',
  'Umowa bez zobowiązań na lata',
  'Wycena po rozmowie, bez niespodzianek',
]

const TIMELINE_STEPS = [
  {
    icon: PhoneIncoming,
    time: '09:14',
    title: 'Zgłoszenie przyjęte',
    detail: 'Klient dzwoni: serwer księgowości nie odpowiada',
  },
  {
    icon: Search,
    time: '09:19',
    title: 'Diagnoza',
    detail: 'Zdalne połączenie, sprawdzamy usługi i logi',
  },
  {
    icon: Wrench,
    time: '09:41',
    title: 'Naprawa',
    detail: 'Restart usługi bazy danych, wymiana zasilacza',
  },
  {
    icon: CheckCircle2,
    time: '09:52',
    title: 'Gotowe',
    detail: 'Serwer działa, klient poinformowany telefonicznie',
  },
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
                  <Ticket className="size-4" />
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">
                    Zgłoszenie #482
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Serwer księgowości nie odpowiadał
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                <CheckCircle2 className="size-3.5" />
                Rozwiązane
              </span>
            </div>

            <ol className="flex flex-col gap-0 p-5">
              {TIMELINE_STEPS.map((step, index) => (
                <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                  {index < TIMELINE_STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[15px] top-8 h-[calc(100%-1.25rem)] w-px bg-border"
                    />
                  )}
                  <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-foreground">
                    <step.icon className="size-4" />
                  </span>
                  <div className="flex flex-1 flex-col gap-0.5 pt-0.5">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-foreground">
                        {step.title}
                      </p>
                      <span className="font-mono text-xs text-muted-foreground">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex items-center justify-between gap-3 border-t border-border bg-secondary/60 px-5 py-4">
              <p className="text-sm text-muted-foreground">
                Czas rozwiązania sprawy
              </p>
              <p className="font-heading text-xl font-semibold text-primary">
                38 minut
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
