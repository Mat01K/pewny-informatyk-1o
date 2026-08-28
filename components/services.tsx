import {
  Calculator,
  Cpu,
  KeyRound,
  Laptop,
  Network,
  ShoppingCart,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const SERVICES = [
  {
    icon: Laptop,
    title: 'Wsparcie IT dla firm (helpdesk)',
    text: 'Codzienna pomoc dla Twoich pracowników — komputery, drukarki, poczta, VPN, dziwne komunikaty na ekranie. Zdalnie i na miejscu.',
    tags: ['Zdalnie i na miejscu', 'Dla MŚP'],
  },
  {
    icon: Calculator,
    title: 'Znajomość programów branżowych',
    text: 'Zajmujemy się programami z wielu specjalizacji — od Płatnika i Comarch ERP/Optima po narzędzia finansowe, kadrowe, magazynowe i inne programy używane w firmach.',
    tags: ['Płatnik', 'Comarch', 'Programy branżowe'],
  },
  {
    icon: Network,
    title: 'Serwery i sieci',
    text: 'Konfiguracja i utrzymanie serwerów, sieci firmowej, Wi-Fi, VPN i backupu. Diagnozujemy i naprawiamy awarie zanim zauważy je cała firma.',
    tags: ['Serwery', 'Sieci', 'Backup'],
  },
  {
    icon: Cpu,
    title: 'Serwis sprzętu (hardware)',
    text: 'Naprawa i konserwacja komputerów, laptopów, drukarek i urządzeń sieciowych. Modernizacja starego sprzętu zamiast kosztownej wymiany.',
    tags: ['Naprawy', 'Modernizacja'],
  },
  {
    icon: KeyRound,
    title: 'Licencje i bezpieczeństwo',
    text: 'Sprzedaż i obsługa licencji Microsoft Office, ESET i Bitdefender. Doradzamy, który pakiet ma sens dla Twojej skali i pilnujemy terminów odnowień.',
    tags: ['Office', 'ESET', 'Bitdefender'],
  },
  {
    icon: ShoppingCart,
    title: 'Sprzęt i software na zamówienie',
    text: 'Dobieramy i sprzedajemy sprzęt IT dopasowany do potrzeb firmy oraz tworzymy strony internetowe i proste systemy na zamówienie.',
    tags: ['Zakupy IT', 'Strony WWW'],
  },
]

export function Services() {
  return (
    <section id="uslugi" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Czym się zajmujemy
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Jeden kontakt na całe IT firmy
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            Od pojedynczego komputera do całej infrastruktury biura
            księgowego. Zajmujemy się wszystkim, co dotyczy IT — Ty masz
            jeden numer, a my ogarniamy resztę.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text, tags }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5.5" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
