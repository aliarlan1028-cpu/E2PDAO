"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { E2P_LINKS } from "@/lib/e2p-links";

const NAV_LINKS = [
  { name: "Incubator", href: "/services" },
  { name: "KOL Marketplace", href: "/influence" },
  { name: "Trading Community", href: "/club" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname === `${href}/`;

  return (
    <header
      className={`e2p-nav-shell${isScrolled ? " is-scrolled" : ""}${isMobileMenuOpen ? " is-menu-open" : ""}`}
    >
      <div className="e2p-container e2p-nav">
        <Link href="/" className="e2p-brand" aria-label="E2P DAO home">
          <img src="/e2p-icon-transparent.svg" alt="" />
          <span className="e2p-brand-copy">
            <strong>E2P DAO</strong>
            <small>Incubate · Influence · Trade</small>
          </span>
        </Link>

        <nav className="e2p-nav-links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="e2p-nav-actions">
          <a href={E2P_LINKS.project("navbar")} className="e2p-nav-cta">
            <span>Start a project</span>
            <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            className="e2p-menu-button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="e2p-mobile-menu" aria-label="Mobile navigation">
          <Link href="/">Home <span>00</span></Link>
          {NAV_LINKS.map((link, index) => (
            <Link key={link.name} href={link.href}>
              {link.name} <span>0{index + 1}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
