'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/app/siteData'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? 'border-white/10 bg-ink/96 backdrop-blur-xl' : 'border-white/10 bg-ink/84 backdrop-blur-md'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo-e2p-dao.svg" alt="E2P Labs" className="h-7 w-auto" />
          <span className="text-lg font-semibold text-white">E2P Labs</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.slice(0, -1).map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-stone-300 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Contact
          </Link>
          <Link href="/contact" className="bg-mint px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-mintSoft">
            Get a GTM Plan
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-1 py-3 text-base font-medium text-stone-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 bg-mint px-5 py-3 text-center font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              Get a GTM Plan
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
