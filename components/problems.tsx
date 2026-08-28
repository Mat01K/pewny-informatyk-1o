import {
  AlertTriangle,
  Clock,
  HelpCircle,
  ShieldAlert,
  Wallet,
  Wrench,
} from 'lucide-react'

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: '„Komputer padł i nikt nie wie czemu”',
    text: 'Serwer się zawiesił, program księgowy nie startuje, drukarka sieciowa znowu nie działa — a Ty musisz prowadzić firmę, nie grzebać w ustawieniach.',
  },
  {
    icon: Clock,
    title: '„Informatyk odpowiada po trzech dniach”',
    text: 'Zgłoszenie wpada w próżnię, a firma stoi. Potrzebujesz kogoś, kto odbierze telefon i realnie pomoże tego samego dnia.',
  },
  {
    icon: HelpCircle,
    title: '„Nikt nie mówi po ludzku”',
    text: 'Fachowy żargon, niejasne wyceny, „to skomplikowane”. Chcesz po prostu wiedzieć, co jest nie tak i ile to będzie kosztować.',
  },
  {
    icon: ShieldAlert,
    title: '„Boimy się utraty danych i wirusów”',
    text: 'Ransomware, phishing, brak backupu — jeden incydent może zatrzymać firmę na tydzień. Potrzebujesz kogoś, kto to zabezpieczy zanim się wydarzy.',
  },
  {
    icon: Wallet,
    title: '„Płacimy za licencje, których nie rozumiemy”',
    text: 'Office, ESET, Bitdefender, Comarch — subskrypcje mnożą się, a nikt nie wie, czy są aktualne, opłacone i dobrze dobrane.',
  },
  {
    icon: Wrench,
    title: '„Potrzebujemy sprzętu, ale nie wiemy jakiego”',
    text: 'Nowy pracownik, nowe stanowisko, wymiana starego serwera — nie chcesz kupować na oślep ani przepłacać za coś, czego nie potrzebujesz.',
  },
]

export function Problems() {
  return (
    <section className="border-b border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Znasz to?
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            To najczęstsze problemy, z którymi przychodzą do nas firmy —
            zanim staną się naszymi klientami.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <Icon className="size-6 text-primary" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
