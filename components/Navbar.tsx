"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { E2P_LINKS } from "@/lib/e2p-links";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "KOL Marketplace", href: "/influence" },
  { name: "Incubator", href: "/services" },
  { name: "E2P Club", href: "/club" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname === `${href}/`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? "bg-web3-dark/90 backdrop-blur-md border-white/10 py-3 shadow-sm" : "bg-web3-dark border-transparent py-5 shadow-sm"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/e2p-icon-transparent.svg"
              alt="E2P DAO"
              className="w-10 h-10 group-hover:drop-shadow-[0_0_10px_rgba(0,255,102,0.6)] transition-all duration-300"
            />
            <div>
              <h1 className="text-lg font-bold leading-none tracking-tight text-white group-hover:text-web3-accent transition-colors glow-text">
                E2P DAO
              </h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                Ecosystem Hub
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-medium uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-5 transition-colors ${isActive(link.href) ? "text-web3-accent glow-text" : "text-gray-400 hover:text-white"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={E2P_LINKS.project("navbar")}
              className="flex items-center gap-2 px-3 py-2 sm:px-5 bg-web3-accent text-black rounded text-[9px] sm:text-[10px] font-bold hover:bg-web3-accent/80 hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] transition-all uppercase tracking-widest"
            >
              <span className="hidden sm:inline">Start a Partnership</span>
              <span className="sm:hidden">Apply</span>{" "}
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>

            <button
              className="lg:hidden text-gray-400 hover:text-web3-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-web3-card border-b border-white/10 overflow-hidden shadow-sm"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium uppercase tracking-wider ${isActive(link.href) ? "text-web3-accent glow-text" : "text-gray-400 hover:text-white"}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={E2P_LINKS.project("mobile_menu")}
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-web3-accent text-black rounded text-xs font-bold hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] transition-all uppercase tracking-widest mt-4"
              >
                Start a Partnership
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
