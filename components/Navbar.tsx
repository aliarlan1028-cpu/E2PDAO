"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { E2P_LINKS } from "@/lib/e2p-links";

const LINK_SETS = {
  home: [
    { name: "What We Do", href: "/#what-we-do" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Network", href: "/#network" },
    { name: "Results", href: "/#results" },
    { name: "About", href: "/about" },
  ],
  services: [
    { name: "Incubator", href: "/services" },
    { name: "Listings", href: "/services#listing-bd" },
    { name: "Resources", href: "/services#network" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  influence: [
    { name: "For Projects", href: "/influence#for-projects" },
    { name: "For Creators", href: "/influence#for-creators" },
    { name: "How It Works", href: "/influence#how-it-works" },
    { name: "Trust", href: "/influence#creator-network" },
    { name: "About", href: "/about" },
  ],
  club: [
    { name: "Trading Agent", href: "/club" },
    { name: "Agent Loop", href: "/club#agent-loop" },
    { name: "Risk", href: "/club#risk" },
    { name: "Community", href: "/club#community" },
    { name: "$E2P", href: "/club#points" },
  ],
  about: [
    { name: "About", href: "/about" },
    { name: "Principles", href: "/about#principles" },
    { name: "How It Works", href: "/about#cycle" },
    { name: "Participate", href: "/about#participate" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const section: keyof typeof LINK_SETS = pathname.startsWith("/services") ? "services" : pathname.startsWith("/influence") ? "influence" : pathname.startsWith("/club") ? "club" : pathname.startsWith("/about") ? "about" : "home";
  const links = LINK_SETS[section];

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`v4-nav-shell v4-nav-shell-${section}${open ? " is-open" : ""}`}>
      <div className="v4-wrap v4-nav">
        <Link href="/" className="v4-brand" aria-label="E2P DAO home">
          <img className="v4-brand-concept" src="/concept-art/nav-logo.png" alt="E2P DAO" />
        </Link>
        <nav className="v4-nav-links" aria-label="Primary navigation">
          {links.map((link) => {
            const route = link.href.split("#")[0] || "/";
            const active = route !== "/" && (pathname === route || pathname === `${route}/`) && !link.href.includes("#");
            return <Link key={link.name} href={link.href} className={active ? "active" : ""}>{link.name}</Link>;
          })}
        </nav>
        <div className="v4-nav-actions">
          <a href={E2P_LINKS.project("navbar_v4")} className="v4-nav-cta"><span>Start a project</span> <ArrowUpRight size={13} /></a>
          <button type="button" className="v4-menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && <nav className="v4-mobile-nav" aria-label="Mobile navigation"><Link href="/">Home</Link>{links.map((link) => <Link key={link.name} href={link.href}>{link.name}</Link>)}</nav>}
    </header>
  );
}
