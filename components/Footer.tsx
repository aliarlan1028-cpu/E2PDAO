"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { E2P_LINKS } from "@/lib/e2p-links";

const GROUPS = [
  { title: "Explore", links: [["Incubator", "/services"], ["KOL Marketplace", "/influence"], ["Trading Agent", "/club"], ["About", "/about"]] },
  { title: "Participate", links: [["Start a project", E2P_LINKS.project("footer_v4")], ["Join as a creator", E2P_LINKS.kol("footer_v4")], ["Partner with E2P", E2P_LINKS.partner("footer_v4")], ["Join the community", E2P_LINKS.telegram]] },
  { title: "Standards", links: [["Contact", "/contact"], ["Privacy", "/privacy"], ["Risk disclosure", "/risk-disclosure"], ["$E2P on CoinMarketCap", "https://coinmarketcap.com/currencies/e2p-token/"]] },
];

const external = (href: string) => href.startsWith("http") || href.startsWith("mailto:");

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/club")) return null;
  if (pathname.startsWith("/influence")) return <footer className="v4-footer v4-footer-compact"><div className="v4-wrap"><Link href="/" className="v4-brand v4-brand-light"><img src="/e2p-icon-transparent.svg" alt=""/><strong>E2P DAO</strong></Link><nav><Link href="/influence#for-projects">For Projects</Link><Link href="/influence#for-creators">For Creators</Link><Link href="/influence#how-it-works">How It Works</Link><Link href="/influence#creator-network">Trust</Link><Link href="/about">About</Link></nav><span>© 2026 E2P DAO. All rights reserved.</span></div></footer>;
  if (pathname.startsWith("/about")) return <footer className="v4-footer v4-footer-compact v4-footer-about"><div className="v4-wrap"><Link href="/" className="v4-brand v4-brand-light"><img src="/e2p-icon-transparent.svg" alt=""/><strong>E2P DAO</strong></Link><span>© 2026 E2P DAO</span><nav><Link href="/about#principles">Principles</Link><Link href="/about#cycle">How it works</Link><Link href="/about#participate">Participate</Link><Link href="/contact">Contact</Link></nav><span>Built to connect evidence to execution.</span></div></footer>;
  return (
    <footer className="v4-footer">
      <div className="v4-wrap v4-footer-grid">
        <div className="v4-footer-intro">
          <Link href="/" className="v4-brand v4-brand-light"><img src="/e2p-icon-transparent.svg" alt="" /><strong>E2P DAO</strong></Link>
          <p>One operating network connecting project quality, creator distribution and disciplined market intelligence.</p>
        </div>
        {GROUPS.map((group) => <div className="v4-footer-group" key={group.title}><strong>{group.title}</strong>{group.links.map(([label, href]) => external(href) ? <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a> : <Link key={label} href={href}>{label}</Link>)}</div>)}
      </div>
      <div className="v4-wrap v4-footer-bottom"><span>© 2026 E2P DAO. No listing, campaign or trading outcome is guaranteed.</span><span>Evidence → decision → action → review.</span></div>
    </footer>
  );
}
