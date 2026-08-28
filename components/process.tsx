import { Button } from '@/components/ui/button'

const STEPS = [
  {
    title: 'Rozmawiamy',
    text: 'Dzwonimy albo spotykamy się (u Ciebie lub online) i na spokojnie pytamy o firmę: ile osób, jaki sprzęt, jakie programy, co najbardziej boli.',
  },
  {
    title: 'Przygotowujemy wycenę',
    text: 'Dostajesz jasną, indywidualną propozycję — co wchodzi w abonament, co jest jednorazowe i ile to realnie kosztuje. Bez drobnego druku.',
  },
  {
    title: 'Wdrażamy wsparcie',
    text: 'Podłączamy się do Twojego IT, porządkujemy to, co wymaga poprawy, i ustawiamy sposób zgłaszania problemów, który Ci pasuje.',
  },
  {
    title: 'Jesteśmy na bieżąco',
    text: 'Reagujemy na zgłoszenia, monitorujemy sprzęt i sieć, pilnujemy licencji i backupów — zanim drobny problem zrobi się duży.',
  },
]

export function Process() {
  return (
    <section id="jak-to-dziala" className="border-b border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Jak to działa
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cztery kroki, żadnych niespodzianek
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative rounded-xl border border-border bg-card p-6">
              <span className="font-heading text-3xl font-semibold text-primary/40">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-foreground">
            Gotowy na rozmowę bez zobowiązań? Zaczynamy zawsze od słuchania,
            nie od sprzedawania.
          </p>
          <Button render={<a href="#kontakt" />} nativeButton={false} className="shrink-0">
            Umów rozmowę
          </Button>
        </div>
      </div>
    </section>
  )
}
