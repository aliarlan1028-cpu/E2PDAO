"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { E2P_LINKS } from "@/lib/e2p-links";

const LINKS = [
  { name: "Incubator", href: "/services" },
  { name: "KOL Marketplace", href: "/influence" },
  { name: "Trading Agent", href: "/club" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`v4-nav-shell${open ? " is-open" : ""}`}>
      <div className="v4-wrap v4-nav">
        <Link href="/" className="v4-brand" aria-label="E2P DAO home">
          <img src="/e2p-icon-transparent.svg" alt="" />
          <strong>E2P DAO</strong>
        </Link>
        <nav className="v4-nav-links" aria-label="Primary navigation">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname === `${link.href}/`;
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
      {open && <nav className="v4-mobile-nav" aria-label="Mobile navigation"><Link href="/">Home</Link>{LINKS.map((link) => <Link key={link.name} href={link.href}>{link.name}</Link>)}</nav>}
    </header>
  );
}
