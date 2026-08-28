import { ShieldCheck } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Usługi',
    links: [
      { label: 'Wsparcie helpdesk', href: '#uslugi' },
      { label: 'Biura księgowe', href: '#uslugi' },
      { label: 'Serwery i sieci', href: '#uslugi' },
      { label: 'Licencje i bezpieczeństwo', href: '#uslugi' },
    ],
  },
  {
    title: 'Firma',
    links: [
      { label: 'Jak to działa', href: '#jak-to-dziala' },
      { label: 'Cennik', href: '#cennik' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="size-4.5" />
              </span>
              Pewny Informatyk
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Outsourcing IT dla małych i średnich firm oraz biur księgowych.
              Sprzęt, sieci, oprogramowanie i licencje — jeden kontakt na
              wszystko.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-foreground">
                {column.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Pewny Informatyk. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
