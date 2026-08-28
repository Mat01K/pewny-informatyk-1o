import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Problems } from '@/components/problems'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
