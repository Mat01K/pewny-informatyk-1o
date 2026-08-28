import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ_ITEMS = [
  {
    question: 'Nie mam żadnego działu IT — czy to problem?',
    answer:
      'Wręcz przeciwnie, po to jesteśmy. Większość naszych klientów to małe i średnie firmy bez własnego informatyka. Przejmujemy całą opiekę nad sprzętem i programami, tak jakbyśmy byli Twoim wewnętrznym działem IT.',
  },
  {
    question: 'Ile realnie kosztuje wsparcie dla mojej firmy?',
    answer:
      'Abonamenty zaczynają się od 300 zł miesięcznie, ale finalna cena zależy od liczby pracowników, ilości sprzętu i tego, jakich programów używacie. Dokładną kwotę podajemy zawsze po rozmowie — nigdy przed.',
  },
  {
    question: 'Obsługujecie programy księgowe, np. Comarch czy Płatnik?',
    answer:
      'Tak, to jedna z naszych specjalizacji. Wspieramy biura księgowe i firmy korzystające z Płatnika, Comarch ERP/Optima, systemów klasy SAP i innych programów finansowo-księgowych — od instalacji, przez aktualizacje, po awarie.',
  },
  {
    question: 'Możecie przyjechać na miejsce, czy tylko zdalnie?',
    answer:
      'Obie opcje. Większość drobnych spraw rozwiązujemy zdalnie w kilkanaście minut, a przy awariach sprzętu, sieci czy serwerów przyjeżdżamy do Twojego biura.',
  },
  {
    question: 'Zajmujecie się też zakupem sprzętu i licencji?',
    answer:
      'Tak. Dobieramy i sprzedajemy sprzęt IT dopasowany do potrzeb firmy oraz obsługujemy licencje Microsoft Office, ESET i Bitdefender — od wyboru pakietu po odnawianie terminów.',
  },
  {
    question: 'Jak wygląda pierwszy kontakt z Wami?',
    answer:
      'Umawiamy krótką, bezpłatną rozmowę — telefonicznie, online lub u Ciebie w firmie. Pytamy o to, jak wygląda Wasze IT i czego najbardziej potrzebujecie, a potem przygotowujemy wycenę bez zobowiązań.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-b border-border/60 bg-muted/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Pytania i odpowiedzi
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Najczęściej pytają nas o to
          </h2>
        </div>

        <Accordion defaultValue={['item-0']} className="mt-10 rounded-xl border border-border bg-card px-6">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
