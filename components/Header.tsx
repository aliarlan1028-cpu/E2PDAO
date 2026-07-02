'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/e2p-labs',
    dropdown: [
      { name: 'E2P Labs', href: '/e2p-labs', description: 'Growth, marketing, listing, and advisory' },
      { name: 'E2P Club', href: '/e2p-club', description: 'VIP investor community and signal intelligence' },
      { name: 'Success Cases', href: '/success-cases', description: 'Listings, CMC support, and launch outcomes' },
    ],
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(maxScroll > 0 ? Math.min(100, (window.scrollY / maxScroll) * 100) : 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string, dropdown?: typeof navigation[number]['dropdown']) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href) || Boolean(dropdown?.some((item) => pathname.startsWith(item.href)))
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-slate-200 bg-white/90 shadow-sm backdrop-blur-md'
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200" />
      <div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-teal-400 via-primary-500 to-amber-400 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className="section-shell">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
              <img src="/e2p-icon.svg" alt="E2P DAO" className="h-10 w-10" />
            </span>
            <span className="truncate text-xl font-bold text-slate-950">E2P DAO</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className={`flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors hover:text-primary-600 ${
                      isActive(item.href, item.dropdown) ? 'text-slate-950' : 'text-slate-700'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link href={item.href} className="relative">
                      {item.name}
                      {isActive(item.href, item.dropdown) && (
                        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-teal-400" />
                      )}
                    </Link>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors hover:text-primary-600 ${
                      isActive(item.href) ? 'text-slate-950' : 'text-slate-700'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-teal-400" />
                    )}
                  </Link>
                )}

                <AnimatePresence>
                  {activeDropdown === item.name && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-0 top-full w-80 pt-4"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block rounded-md px-4 py-3 transition-colors hover:bg-slate-50"
                          >
                            <div className="font-semibold text-slate-950">{dropdownItem.name}</div>
                            <div className="mt-1 text-sm text-slate-500">{dropdownItem.description}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="btn-hover hidden items-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 md:inline-flex"
          >
            Get Proposal
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <button
            className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
            >
              <div className="space-y-2 py-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2 font-semibold text-slate-900 hover:bg-slate-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-3 space-y-1 border-l border-slate-200 pl-3">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Proposal
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
