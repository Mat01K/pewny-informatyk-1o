import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const INCLUDED = [
  'Wsparcie helpdesk dla pracowników',
  'Opieka nad serwerami i siecią',
  'Monitoring sprzętu i backupu',
  'Doradztwo przy zakupie sprzętu i licencji',
]

const FACTORS = [
  'Liczba pracowników i stanowisk komputerowych',
  'Liczba i rodzaj serwerów oraz urządzeń sieciowych',
  'Programy specjalistyczne (Płatnik, Comarch i inne)',
  'Czas reakcji, jakiego potrzebuje Twoja firma',
]

export function Pricing() {
  return (
    <section id="cennik" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Cennik
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Jasna cena, żadnych ukrytych kosztów
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            Każda firma jest inna, więc każdy klient dostaje indywidualną
            wycenę — ale mamy jasny punkt startowy.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-primary/30 bg-card p-8">
            <p className="text-sm font-medium text-muted-foreground">
              Abonament opieki IT
            </p>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="font-heading text-5xl font-semibold tracking-tight text-foreground">
                od 300 zł
              </span>
              <span className="text-base text-muted-foreground">
                / miesiąc
              </span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Ostateczna cena zależy od wielkości firmy, liczby pracowników
              i sprzętu, który obsługujemy.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              render={<a href="#kontakt" />}
              nativeButton={false}
              className="mt-7 w-full"
              size="lg"
            >
              Poproś o indywidualną wycenę
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-muted/50 p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Od czego zależy dokładna cena?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nie sprzedajemy jednego pakietu wszystkim. Podczas rozmowy
              pytamy o kilka konkretnych rzeczy, żeby wycena była
              sprawiedliwa i przewidywalna:
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {FACTORS.map((factor) => (
                <li key={factor} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {factor}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
              Po pierwszym spotkaniu dostajesz konkretną propozycję na
              piśmie — bez presji i bez zobowiązania do podpisania czegokolwiek
              na miejscu.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
