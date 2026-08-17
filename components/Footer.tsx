import Link from "next/link";
import { E2P_LINKS } from "@/lib/e2p-links";

const FOOTER_GROUPS = [
  {
    title: "Ecosystem",
    links: [
      ["Incubator", "/services"],
      ["KOL Marketplace", "/influence"],
      ["Trading Community", "/club"],
      ["About E2PDAO", "/about"],
    ],
  },
  {
    title: "Get involved",
    links: [
      ["Start a project", E2P_LINKS.project("footer")],
      ["Join as a KOL", E2P_LINKS.kol("footer")],
      ["Partner with us", E2P_LINKS.partner("footer")],
      ["Join E2P Club", E2P_LINKS.telegram],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Contact", "/contact"],
      ["Privacy", "/privacy"],
      ["Risk disclosure", "/risk-disclosure"],
      ["E2P on CoinMarketCap", "https://coinmarketcap.com/currencies/e2p-token/"],
    ],
  },
];

const isExternal = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:");

export default function Footer() {
  return (
    <footer className="e2p-footer">
      <div className="e2p-container e2p-footer-top">
        <div className="e2p-footer-brand">
          <Link href="/" className="e2p-brand" aria-label="E2P DAO home">
            <img src="/e2p-icon-transparent.svg" alt="" />
            <span className="e2p-brand-copy">
              <strong>E2P DAO</strong>
              <small>Incubate · Influence · Trade</small>
            </span>
          </Link>
          <p>
            One operating network for stronger Web3 projects, better creator
            distribution and a disciplined token-based trading community.
          </p>
        </div>

        <div className="e2p-footer-links">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <strong>{group.title}</strong>
              {group.links.map(([label, href]) =>
                isExternal(href) ? (
                  <a key={label} href={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                ) : (
                  <Link key={label} href={href}>{label}</Link>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="e2p-container e2p-footer-bottom">
        <span>
          © {new Date().getFullYear()} E2P DAO · No listing, campaign or trading
          outcome is guaranteed.
        </span>
        <span>Never share private keys, seed phrases or withdrawal credentials.</span>
      </div>
    </footer>
  );
}
