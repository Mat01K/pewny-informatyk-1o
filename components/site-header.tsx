'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const NAV_LINKS = [
  { href: '#uslugi', label: 'Usługi' },
  { href: '#jak-to-dziala', label: 'Jak to działa' },
  { href: '#cennik', label: 'Cennik' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="#top" className="flex items-center">
          <img
            src="/Logo_transparent2.png"
            alt="Pewny Informatyk"
            className="h-auto w-44 object-contain sm:w-52"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button render={<a href="#kontakt" />} nativeButton={false}>
            Umów rozmowę
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" aria-label="Otwórz menu">
                  <Menu className="size-4.5" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-heading">
                  <img
                    src="/Logo_transparent2.png"
                    alt="Pewny Informatyk"
                    className="h-10 w-auto object-contain"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <a
                        href={link.href}
                        className="rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
                      >
                        {link.label}
                      </a>
                    }
                  />
                ))}
              </nav>
              <div className="mt-4 px-4">
                <SheetClose
                  render={
                    <Button
                      render={<a href="#kontakt" />}
                      nativeButton={false}
                      className="w-full"
                    >
                      Umów rozmowę
                    </Button>
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}