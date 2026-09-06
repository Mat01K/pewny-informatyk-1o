import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pewnyinformatyk.pl'),
  title: 'Obsługa Informatyczna Firm Śląsk | Outsourcing IT | Pewny Informatyk',
  description:
    'Kompleksowy outsourcing IT dla małych i średnich firm oraz biur rachunkowych na Śląsku (Ruda Śląska, Katowice i okolice). Serwery, sieci, Comarch Optima, backup i szybka pomoc komputerowa.',
  keywords: [
    'obsługa informatyczna firm',
    'outsourcing IT Śląsk',
    'opieka IT Ruda Śląska',
    'pomoc komputerowa dla firm Katowice',
    'administracja serwerami',
    'wsparcie Comarch Optima',
    'serwis komputerowy dla firm',
    'bezpieczeństwo IT w firmie',
    
    // Frazy główne i outsourcing
    'obsługa informatyczna firm',
    'outsourcing IT',
    'outsourcing IT Śląsk',
    'opieka informatyczna firm',
    'pomoc IT dla firm',
    'informatyk dla firm',
    'usługi informatyczne dla małych firm',
    'wsparcie techniczne IT',
    'zarządzanie infrastrukturą IT',
    'administracja sieciami komputerowymi',
    'administracja serwerami Windows Linux',
    'bezpieczeństwo danych w firmie',
    'kopie zapasowe backup dla firm',
    'audyt IT',

    // Frazy jakościowe i potoczne
    'dobry informatyk',
    'dobry informatyk Ruda Śląska',
    'dobry informatyk Śląsk',
    'dobry informatyk Katowice',
    'polecany informatyk dla firm',
    'sprawdzony informatyk',
    'rzetelna pomoc komputerowa',
    'Ruda Śląska',
    'Śląsk',

    // Frazy cenowe i dostępnościowe
    'tani informatyk',
    'tani informatyk Katowice',
    'tani informatyk zdalny',
    'tani outsourcing IT',
    'pomoc komputerowa cennik',
    'tani serwis komputerowy dla firm',
    'pogotowie komputerowe 24h',
    'pogotowie informatyczne Śląsk',
    'szybka pomoc informatyczna',
    'informatyk na godziny',

    // Oprogramowanie biznesowe i księgowość
    'Płatnik pomoc informatyczna',
    'instalacja programu Płatnik',
    'konfiguracja Płatnik certyfikat ZUS',
    'wsparcie IT biuro rachunkowe',
    'informatyk dla biura księgowego',
    'Comarch ERP Optima wsparcie',
    'wdrożenia Comarch Optima Śląsk',
    'Symfonia pomoc techniczna',
    'wsparcie Subiekt GT Nexo',
    'podpis kwalifikowany instalacja certyfikatu',
    'licencje Microsoft 365 dla firm',
    'antywirus ESET Bitdefender dla biznesu',

    // Frazy lokalne (Aglomeracja Śląska i okolice)
    'informatyk Ruda Śląska',
    'obsługa IT Ruda Śląska',
    'serwis komputerowy Ruda Śląska',
    'informatyk Katowice',
    'obsługa informatyczna Katowice',
    'informatyk Zabrze',
    'serwis komputerowy Zabrze',
    'informatyk Gliwice',
    'obsługa IT Gliwice',
    'informatyk Chorzów',
    'pomoc komputerowa Chorzów',
    'informatyk Bytom',
    'informatyk Sosnowiec',
    'informatyk Tychy',
    'pomoc IT Mikołów',
    'informatyk Śląsk',
    'informatyk zdalnie cała Polska',
    'zdalna pomoc komputerowa dla firm',
    'dobry informatyk',
    'tani informatyk',
    'zdalny informatyk',
    'pobliski informatyk',

  ],
  authors: [{ name: 'Pewny Informatyk', url: 'https://www.pewnyinformatyk.pl' }],
  creator: 'Pewny Informatyk',
  publisher: 'Pewny Informatyk',
  alternates: {
    canonical: 'https://www.pewnyinformatyk.pl',
  },
  openGraph: {
    title: 'Pewny Informatyk — Outsourcing IT dla firm na Śląsku',
    description:
      'Informatyk, który odbiera telefon i natychmiast naprawia problem. Sprawdź kompleksową opiekę IT dla swojej firmy.',
    url: 'https://www.pewnyinformatyk.pl',
    siteName: 'Pewny Informatyk',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/Logo_white.jpg',
    apple: '/Logo_white.jpg',
  },
}
export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f7' },
    { media: '(prefers-color-scheme: dark)', color: '#171512' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}