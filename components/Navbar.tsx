'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Labs', href: '/labs' },
  { name: 'Club', href: '/club' },
  { name: '$E2P Token', href: '/tokenomics' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname === `${href}/`

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-web3-dark/90 backdrop-blur-md border-white/10 py-3 shadow-sm' : 'bg-web3-dark border-transparent py-5 shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-web3-accent to-web3-purple flex items-center justify-center overflow-hidden font-bold text-xl group-hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] transition-all">
              <span className="text-black group-hover:text-white transition-colors duration-300">E2P</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none tracking-tight text-white group-hover:text-web3-accent transition-colors glow-text">E2P DAO</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Ecosystem Hub</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-5 transition-colors ${isActive(link.href) ? 'text-web3-accent glow-text' : 'text-gray-400 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="https://x.com/e2p_dao" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 px-6 py-2 bg-web3-accent text-black rounded text-xs font-bold hover:bg-web3-accent/80 hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] transition-all uppercase tracking-widest">
              Launch App <ArrowRight className="w-4 h-4" />
            </a>

            <button
              className="md:hidden text-gray-400 hover:text-web3-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-web3-card border-b border-white/10 overflow-hidden shadow-sm"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium uppercase tracking-wider ${isActive(link.href) ? 'text-web3-accent glow-text' : 'text-gray-400 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="https://x.com/e2p_dao" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-web3-accent text-black rounded text-xs font-bold hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] transition-all uppercase tracking-widest mt-4">
                Launch App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
