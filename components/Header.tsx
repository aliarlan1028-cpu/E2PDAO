'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Launch & TGE Campaigns', href: '/solutions', description: 'Pre-launch awareness and community heat' },
        { name: 'Regional Market Entry', href: '/solutions', description: 'Localized KOL, PR, and community activation' },
        { name: 'KOL & PR Campaigns', href: '/solutions', description: 'Managed exposure with delivery reporting' },
        { name: 'Listing Readiness', href: '/solutions', description: 'Preparation support, not listing promises' },
      ]
    },
    { name: 'Case Studies', href: '/cases' },
    { name: 'E2P Club', href: '/e2p-club' },
    { name: 'Partner Program', href: '/partner-program' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
      isScrolled ? 'border-white/10 bg-[#0b100f]/96 backdrop-blur-xl' : 'border-white/10 bg-[#0b100f]/88 backdrop-blur-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo-e2p-dao.svg" alt="E2P Labs" className="h-6 w-auto" />
            <span className="text-xl font-bold text-white">E2P Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer text-gray-200 hover:text-white transition-colors"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-3 w-72 border border-white/10 bg-[#0f1715]/96 py-2 shadow-2xl backdrop-blur-xl"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
                        >
                          <div className="font-medium">{dropdownItem.name}</div>
                          <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-emerald-400 px-5 py-2.5 font-semibold text-[#06100c] transition-colors hover:bg-emerald-300"
            >
              Get a GTM Plan
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-200 hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-[#0b100f]"
            >
              <div className="px-4 py-4 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div className="font-medium text-white">{item.name}</div>
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block pl-4 py-2 text-gray-400 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2 text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="block w-full bg-emerald-400 px-6 py-3 text-center font-semibold text-[#06100c] hover:bg-emerald-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a GTM Plan
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
