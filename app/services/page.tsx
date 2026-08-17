import type { Metadata } from "next";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  LineChart,
  MessagesSquare,
  PackageCheck,
  Radar,
  Rocket,
  Route,
  SearchCheck,
  Send,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "Project Incubator & Listing BD | E2PDAO",
  description:
    "E2PDAO helps Web3 projects design the right path, improve project quality, prepare listing materials and move exchange BD conversations forward.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "E2PDAO Project Incubator & Listing BD",
    description: "Project path design, quality optimization, listing advisory and exchange coordination.",
    url: "/services/",
  },
};

const SERVICES = [
  ["01", "Project Path Design", "Turn the project stage, product, token, market and timeline into a prioritized route from now to launch and listing."],
  ["02", "Project Quality Upgrade", "Sharpen positioning, narrative, token logic, materials and public proof so the project is easier to understand and evaluate."],
  ["03", "Listing Advisory", "Map exchange standards, surface material gaps, plan liquidity and market support, and prepare the listing package."],
  ["04", "Listing BD & Coordination", "Prioritize exchange targets, prepare outreach, activate relevant relationships and maintain the follow-up timeline."],
];

const PATH = [
  { icon: SearchCheck, title: "Diagnose", text: "Review product, token, narrative, community and market context." },
  { icon: Route, title: "Design", text: "Set the project path, milestones, priorities and decision gates." },
  { icon: PackageCheck, title: "Upgrade", text: "Improve the story, materials, proof and market-facing package." },
  { icon: Radar, title: "Map", text: "Match exchanges and launch resources against the project profile." },
  { icon: Send, title: "Move BD", text: "Prepare outreach, introductions, follow-up and stakeholder actions." },
  { icon: LineChart, title: "Launch & Learn", text: "Coordinate market entry and feed results into the next growth cycle." },
];

const PARTNERS = [
  {
    label: "Exchange network",
    logos: [["OKX", "/OKX.png"], ["Bybit", "/Bybit.png"], ["Gate.io", "/Gate.io.png"], ["Bitget", "/Bitget Logo.png"], ["MEXC", "/MEXC.png"]],
  },
  {
    label: "Launch network",
    logos: [["DAO Maker", "/DAO Maker.png"], ["Seedify", "/seedify.svg"], ["Poolz", "/Poolz Finance.png"], ["BullPerks", "/BullPerks.png"], ["Kommunitas", "/kommunitas.png"]],
  },
  {
    label: "Capital network",
    logos: [["Coresky", "/Coresky.jpeg"], ["MT Capital", "/MT Capital.avif"], ["Mirana", "/Mirana Ventures.png"], ["Snova", "/Snova Capital.png"], ["Unicorne", "/Unicorne-Verse.jpg"]],
  },
];

const CASES = [
  ["CHAX", "CEX listing coordination", "Live and tracked on CoinGecko", "CoinGecko", "https://www.coingecko.com/en/coins/chax"],
  ["HIRO", "Listing preparation and coordination", "Listed with active markets", "CoinMarketCap", "https://coinmarketcap.com/currencies/hiro/#Markets"],
  ["Virtuals", "Public supply verification support", "Tracked on CoinMarketCap", "CoinMarketCap", "https://coinmarketcap.com/currencies/virtual-protocol/"],
  ["USBT", "Listing advisory and coordination", "Listing announced by Gate.io", "Gate.io", "https://www.gate.io/zh/announcements/article/39267"],
];

function ListingBoard() {
  return (
    <div className="e2p-visual-card" aria-label="Listing business development workflow preview">
      <header className="e2p-visual-header">
        <span>LISTING BD / TARGET MAP</span>
        <span className="e2p-live">ACTIVE PIPELINE</span>
      </header>
      <div className="e2p-listing-summary">
        <div>
          <small>Current focus</small>
          <strong>04 tracks</strong>
          <small>Standards → material → target → follow-up</small>
        </div>
        <div className="e2p-listing-bars">
          <span>Core project materials</span><i><b style={{ width: "92%" }} /></i>
          <span>Market proof package</span><i><b style={{ width: "78%" }} /></i>
          <span>Exchange-specific mapping</span><i><b style={{ width: "84%" }} /></i>
          <span>BD follow-up actions</span><i><b style={{ width: "66%" }} /></i>
        </div>
      </div>
      <div className="e2p-target-list">
        <article><i>01</i><b>Target A</b><span>GLOBAL · PRIORITY</span><em>2 material actions</em><b>HIGH FIT</b></article>
        <article><i>02</i><b>Target B</b><span>APAC · PRIORITY</span><em>Window mapped</em><b>PREPARED</b></article>
        <article><i>03</i><b>Target C</b><span>GLOBAL · GROWTH</span><em>Contact route set</em><b>IN MOTION</b></article>
        <article><i>04</i><b>Target D</b><span>REGIONAL · FIT</span><em>Follow-up queued</em><b>TRACKING</b></article>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="e2p-container e2p-page-hero e2p-grid-wash">
        <div className="e2p-page-hero-copy">
          <span className="e2p-eyebrow">E2P Project Incubator</span>
          <h1>
            Build the project.<br />
            <span className="e2p-highlight">Move the listing.</span>
          </h1>
          <p>
            E2P turns project strategy into an operating path: improve the
            project, assemble the market-facing package, match the right
            exchanges and move every BD action forward.
          </p>
          <div className="e2p-actions">
            <a href={E2P_LINKS.project("incubator_hero")} className="e2p-btn e2p-btn-dark">
              Start project evaluation <ArrowUpRight size={15} />
            </a>
            <a href="#operating-path" className="e2p-btn">See the operating path</a>
          </div>
        </div>
        <ListingBoard />
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">01 / What we deliver</span>
            <h2>Advice is useful.<br />Movement is better.</h2>
            <p>
              The incubator combines strategic work with the execution tools
              needed to prepare and advance real listing conversations.
            </p>
          </header>
          <div className="e2p-operating-grid">
            {SERVICES.map(([index, title, text]) => (
              <article key={title}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="operating-path" className="e2p-section e2p-section-ink">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">02 / Project path</span>
            <h2>Six stages from<br />project to market.</h2>
            <p>
              Every engagement leaves behind priorities, owners, materials and
              concrete next actions—not a generic strategy deck.
            </p>
          </header>
          <div className="e2p-path">
            {PATH.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <item.icon size={25} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-section">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">03 / Listing BD system</span>
            <h2>A visible pipeline.<br />A clear next move.</h2>
            <p>
              The Growth-Ops listing workflow is translated into four operating
              lanes that keep strategy, materials and outreach in sync.
            </p>
          </header>
          <div className="e2p-loop">
            <div className="e2p-loop-board" style={{ background: "#111311", color: "#fff" }}>
              <header><span>LISTING OPERATING LANES</span><b>4 / 4 ACTIVE</b></header>
              <div className="e2p-loop-track">
                {[
                  ["01", "Standards & fit", "Map exchange criteria against the real project profile", "EVIDENCE"],
                  ["02", "Materials & gaps", "Build the listing package and close missing items", "PACKAGE"],
                  ["03", "Target & outreach", "Prioritize targets, routes, timing and message", "BD"],
                  ["04", "Follow-up timeline", "Track owners, status, feedback and next actions", "RUNNING"],
                ].map(([index, title, text, state], i) => (
                  <article key={title} className={i === 3 ? "active" : ""}>
                    <i>{index}</i><span><b>{title}</b><small>{text}</small></span><em>{state}</em>
                  </article>
                ))}
              </div>
            </div>
            <div className="e2p-loop-copy" style={{ background: "#caff3d", color: "#111311", borderColor: "#111311" }}>
              <span className="e2p-eyebrow">From gap to action</span>
              <h3 style={{ color: "#111311" }}>Know the gap.<br />Own the next step.</h3>
              <p style={{ color: "#4f5633" }}>
                Standards research is only useful when it changes the plan. Each
                finding is converted into a material task, BD decision, owner or
                follow-up checkpoint.
              </p>
              <a href={E2P_LINKS.project("listing_system")} className="e2p-btn e2p-btn-dark">
                Open a project track <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">04 / Resource network</span>
            <h2>Exchange, launch<br />and capital routes.</h2>
            <p>
              Relationships support project conversations, but every third
              party keeps its own evaluation criteria and final decision.
            </p>
          </header>
          <div className="e2p-logo-groups">
            {PARTNERS.map((group) => (
              <div className="e2p-logo-group" key={group.label}>
                <header><span>{group.label}</span><span>{group.logos.length} nodes shown</span></header>
                <div className="e2p-logo-row">
                  {group.logos.map(([name, logo]) => (
                    <div key={name}><img src={logo} alt={name} /></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="e2p-note">
            Network logos identify known ecosystem relationships and resources;
            they do not represent a guarantee of acceptance, terms or endorsement.
          </p>
        </div>
      </section>

      <section id="portfolio" className="e2p-section">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">05 / Public references</span>
            <h2>Selected work.<br />Verifiable outcomes.</h2>
            <p>Past support is evidence of activity, not a promise of future results.</p>
          </header>
          <div className="e2p-case-grid">
            {CASES.map(([project, work, result, source, href], index) => (
              <a className="e2p-case-card" href={href} target="_blank" rel="noreferrer" key={project}>
                <header><span>0{index + 1} / {source}</span><ExternalLink size={13} /></header>
                <h3>{project}</h3>
                <p>{work}</p>
                <footer><span><CheckCircle2 size={12} /> {result}</span><ArrowUpRight size={13} /></footer>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-final">
        <span>Project path · Quality upgrade · Listing BD</span>
        <h2>Make the next move<br />an informed one.</h2>
        <a href={E2P_LINKS.project("incubator_final")} className="e2p-btn e2p-btn-dark">
          Start your project track <ArrowUpRight size={15} />
        </a>
      </section>
    </>
  );
}
