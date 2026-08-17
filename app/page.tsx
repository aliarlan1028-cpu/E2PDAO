import Link from "next/link";
import { ArrowUpRight, Bot, ExternalLink, Megaphone, Rocket, Users } from "lucide-react";
import Hero from "@/components/Hero";
import { E2P_LINKS } from "@/lib/e2p-links";

const TICKER = [
  "Project Incubation",
  "Listing Advisory",
  "Listing BD",
  "KOL Marketplace",
  "Campaign Packages",
  "E2P Club",
  "AI Trading Agent",
  "$E2P Token",
];

const PILLARS = [
  {
    icon: Rocket,
    title: "Project Incubator",
    text: "Shape the project path, strengthen the product and market story, prepare listing materials and move the right exchange conversations forward.",
    tags: ["Project path", "Quality upgrade", "Listing BD"],
    href: "/services",
    label: "Build the path",
  },
  {
    icon: Megaphone,
    title: "KOL Marketplace",
    text: "Projects get matched with the right creators. KOLs gain qualified project resources, brand partnerships and event opportunities.",
    tags: ["KOL resources", "Campaign growth", "Marketing packages"],
    href: "/influence",
    label: "Find the match",
  },
  {
    icon: Bot,
    title: "Trading Community",
    text: "A token-based community where research, project access and a discipline-first AI Trading Agent create a real user and feedback layer.",
    tags: ["Token access", "Hard risk gates", "Community intelligence"],
    href: "/club",
    label: "Enter E2P Club",
  },
];

const LOOP = [
  ["01", "Incubate the project", "Position, optimize and plan the route to market", "STRATEGY"],
  ["02", "Build distribution", "Match creators and package the campaign", "INFLUENCE"],
  ["03", "Activate real users", "Bring the project into the trading community", "COMMUNITY"],
  ["04", "Learn and compound", "Return market feedback into the next growth cycle", "LOOP ACTIVE"],
];

const CASES = [
  ["CHAX", "CEX listing coordination", "CoinGecko", "https://www.coingecko.com/en/coins/chax"],
  ["HIRO", "Listing preparation and coordination", "CoinMarketCap", "https://coinmarketcap.com/currencies/hiro/#Markets"],
  ["Virtuals", "Public supply verification support", "CoinMarketCap", "https://coinmarketcap.com/currencies/virtual-protocol/"],
  ["USBT", "Listing advisory and coordination", "Gate.io", "https://www.gate.io/zh/announcements/article/39267"],
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="e2p-ticker" aria-label="E2P ecosystem capabilities">
        <div>
          {[...TICKER, ...TICKER].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i>✦</i></span>
          ))}
        </div>
      </div>

      <section className="e2p-section">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">01 / The ecosystem</span>
            <h2>Three engines.<br />One growth loop.</h2>
            <p>
              Each part solves a different constraint: the project needs a path,
              the market needs distribution, and the community needs a product
              worth staying for.
            </p>
          </header>
          <div className="e2p-pillar-grid">
            {PILLARS.map((pillar, index) => (
              <Link href={pillar.href} className="e2p-pillar" key={pillar.title}>
                <div className="e2p-pillar-number"><span>0{index + 1}</span><ArrowUpRight size={15} /></div>
                <div className="e2p-pillar-icon"><pillar.icon size={21} /></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <div className="e2p-pillar-tags">
                  {pillar.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <footer className="e2p-pillar-link"><span>{pillar.label}</span><ArrowUpRight size={14} /></footer>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-ink">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">02 / How it compounds</span>
            <h2>From a stronger project<br />to a stronger market.</h2>
            <p>
              The DAO is designed as an operating loop, not a list of unrelated
              services. Each layer creates input for the next one.
            </p>
          </header>
          <div className="e2p-loop">
            <div className="e2p-loop-copy">
              <span className="e2p-eyebrow">E2P network effect</span>
              <h3>Better projects.<br />Better reach.<br />Better feedback.</h3>
              <p>
                Incubation builds the market path. KOL distribution brings the
                right attention. E2P Club turns that attention into users,
                market discussion and actionable feedback.
              </p>
              <Link href="/about" className="e2p-btn e2p-btn-light">See how E2P works</Link>
            </div>
            <div className="e2p-loop-board">
              <header><span>ECOSYSTEM OPERATING TRACK</span><b>04 / 04 ONLINE</b></header>
              <div className="e2p-loop-track">
                {LOOP.map(([index, title, text, state], i) => (
                  <article className={i === 3 ? "active" : ""} key={title}>
                    <i>{index}</i>
                    <span><b>{title}</b><small>{text}</small></span>
                    <em>{state}</em>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">03 / Public proof</span>
            <h2>Work that can be<br />independently checked.</h2>
            <p>
              Public references show selected support work. They do not imply a
              guaranteed listing or future result.
            </p>
          </header>
          <div className="e2p-proof-grid">
            {CASES.map(([project, work, source, href], index) => (
              <a className="e2p-proof-card" href={href} target="_blank" rel="noreferrer" key={project}>
                <header><span>0{index + 1} / VERIFIED</span><ExternalLink size={13} /></header>
                <h3>{project}</h3>
                <p>{work}</p>
                <footer><span>Source: {source}</span><ArrowUpRight size={13} /></footer>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-final">
        <span>Your next operating track starts here</span>
        <h2>Build the project.<br />Move the market.</h2>
        <div className="e2p-actions">
          <a href={E2P_LINKS.project("home_final")} className="e2p-btn e2p-btn-dark">
            Start with E2P <ArrowUpRight size={15} />
          </a>
          <a href={E2P_LINKS.telegram} target="_blank" rel="noreferrer" className="e2p-btn">
            Join the community <Users size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
