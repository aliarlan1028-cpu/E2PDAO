import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "Project Incubator & Listing BD | E2PDAO",
  description:
    "E2PDAO helps Web3 projects design the right path, improve project quality, prepare listing materials and move exchange BD conversations forward.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "E2PDAO Project Incubator & Listing BD",
    description:
      "Project path design, quality optimization, listing advisory and exchange coordination.",
    url: "/services/",
  },
};

const PROJECT_TYPES = [
  {
    index: "01",
    label: "PRE-TGE",
    title: "A strong product without a market-ready path.",
    text: "Turn product, token, traction and timing into one prioritized route toward launch and listing.",
  },
  {
    index: "02",
    label: "QUALITY UPGRADE",
    title: "A live project that is difficult to evaluate.",
    text: "Make the narrative, evidence, token logic and public materials easier for partners to understand.",
  },
  {
    index: "03",
    label: "MARKET EXPANSION",
    title: "A listed project looking for the next venue.",
    text: "Map exchange fit, close material gaps and coordinate a disciplined BD follow-up track.",
  },
];

const DELIVERABLES = [
  {
    index: "01",
    title: "Project diagnosis",
    outcome: "KNOW WHAT MATTERS NOW",
    text: "A structured view of product, token, traction, market proof and the gaps blocking the next move.",
  },
  {
    index: "02",
    title: "Path architecture",
    outcome: "ONE PRIORITIZED ROUTE",
    text: "Milestones, dependencies, decision gates and owners aligned around launch and listing objectives.",
  },
  {
    index: "03",
    title: "Quality upgrade",
    outcome: "A PROJECT PEOPLE CAN EVALUATE",
    text: "Positioning, narrative, token logic, proof and market-facing assets rebuilt around partner questions.",
  },
  {
    index: "04",
    title: "Listing BD",
    outcome: "EVERY CONVERSATION MOVES",
    text: "Exchange standards, target priority, relationship routes, outreach and follow-up kept on one track.",
  },
];

const PROJECT_PATH = [
  ["01", "Diagnose", "Evidence map", "Project, token, traction and source trail"],
  ["02", "Prioritize", "Decision path", "Milestones, dependencies and owners"],
  ["03", "Upgrade", "Market package", "Narrative, proof and partner-facing assets"],
  ["04", "Match", "Target map", "Standards, gaps, fit and timing"],
  ["05", "Move", "BD track", "Route, outreach and accountable follow-up"],
  ["06", "Learn", "Market loop", "Feedback, outcomes and next-cycle decisions"],
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
  {
    project: "CHAX",
    scope: "CEX listing coordination",
    result: "Live and publicly tracked on CoinGecko",
    source: "CoinGecko",
    href: "https://www.coingecko.com/en/coins/chax",
  },
  {
    project: "HIRO",
    scope: "Listing preparation and coordination",
    result: "Listed with active markets",
    source: "CoinMarketCap",
    href: "https://coinmarketcap.com/currencies/hiro/#Markets",
  },
  {
    project: "Virtuals",
    scope: "Public supply verification support",
    result: "Supply information publicly tracked",
    source: "CoinMarketCap",
    href: "https://coinmarketcap.com/currencies/virtual-protocol/",
  },
  {
    project: "USBT",
    scope: "Listing advisory and coordination",
    result: "Listing publicly announced by Gate.io",
    source: "Gate.io",
    href: "https://www.gate.io/zh/announcements/article/39267",
  },
];

function ProjectDiagnosis() {
  return (
    <div className="e2p-inc-diagnostic" aria-label="Illustrative E2P project diagnosis">
      <header>
        <span><i /> E2P PROJECT DESK / DIAGNOSIS</span>
        <b>ILLUSTRATIVE VIEW</b>
      </header>
      <div className="e2p-inc-diagnostic-main">
        <aside>
          <small>PROJECT STAGE</small>
          <strong>PRE-TGE</strong>
          <span>DeFi infrastructure · APAC</span>
          <div>
            <i />
            <p><b>Next decision</b>Close the evidence gaps before exchange outreach.</p>
          </div>
        </aside>
        <div className="e2p-inc-gap-report">
          <div className="e2p-inc-gap-score">
            <span><small>LISTING GAP REPORT</small><b>03</b></span>
            <p>Critical gaps before the next listing conversation.</p>
          </div>
          {[
            ["01", "Market proof", "Strengthen traction sources and public evidence", "UPGRADE"],
            ["02", "Liquidity plan", "Define venue-specific liquidity support", "DESIGN"],
            ["03", "Target mapping", "Prioritize fit before opening routes", "MAP"],
          ].map(([index, title, text, state]) => (
            <article key={title}>
              <i>{index}</i>
              <span><b>{title}</b><small>{text}</small></span>
              <em>{state}</em>
            </article>
          ))}
        </div>
      </div>
      <footer>
        <span>EVIDENCE</span><ArrowRight size={12} /><span>DECISION</span><ArrowRight size={12} /><span>OWNED ACTION</span>
      </footer>
    </div>
  );
}

function ListingGapMap() {
  return (
    <div className="e2p-listing-gap-map" aria-label="Illustrative listing business development map">
      <header>
        <span>PROJECT → E2P → TARGET VENUES</span>
        <b>ONE SHARED TRACK</b>
      </header>
      <div className="e2p-listing-gap-columns">
        <div className="e2p-listing-project-card">
          <small>PROJECT INPUT</small>
          <h3>What is true<br />right now?</h3>
          <ul>
            <li><span>Product & token</span><b>VERIFIED</b></li>
            <li><span>Traction evidence</span><b>2 GAPS</b></li>
            <li><span>Market package</span><b>IN BUILD</b></li>
            <li><span>Liquidity support</span><b>1 ACTION</b></li>
          </ul>
        </div>
        <div className="e2p-listing-fit-engine">
          <i /><i />
          <small>E2P FIT ENGINE</small>
          <strong>8.6</strong>
          <span>STANDARDS<br />TIMING<br />ROUTE</span>
        </div>
        <div className="e2p-listing-target-lanes">
          {[
            ["A", "Global venue", "HIGH FIT", "PACKAGE READY"],
            ["B", "APAC venue", "ROUTE OPEN", "INTRO NEXT"],
            ["C", "Growth venue", "1 GAP", "UPGRADE FIRST"],
            ["D", "Regional venue", "RESEARCH", "WATCH"],
          ].map(([letter, name, fit, next], index) => (
            <article key={letter} className={index === 1 ? "active" : ""}>
              <i>{letter}</i>
              <span><b>{name}</b><small>{fit}</small></span>
              <em>{next}</em>
            </article>
          ))}
        </div>
      </div>
      <footer>
        <span>Standards translated</span><span>Targets prioritized</span><span>Follow-up owned</span>
      </footer>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="e2p-inc-hero e2p-grid-wash">
        <div className="e2p-container e2p-inc-hero-grid">
          <div className="e2p-inc-hero-copy">
            <span className="e2p-eyebrow">E2P Project Incubator</span>
            <h1>Build the project.<br /><span className="e2p-highlight">Move the listing.</span></h1>
            <p>
              E2P helps Web3 teams turn project gaps into a clear operating
              path—then prepares the package, matches the right exchanges and
              keeps every listing conversation moving.
            </p>
            <div className="e2p-actions">
              <a href={E2P_LINKS.project("incubator_hero")} className="e2p-btn e2p-btn-dark">
                Start project evaluation <ArrowUpRight size={15} />
              </a>
              <a href="#project-path" className="e2p-btn">See how E2P moves it</a>
            </div>
            <div className="e2p-inc-hero-proof">
              <span><b>01</b> PROJECT PATH</span>
              <span><b>02</b> QUALITY UPGRADE</span>
              <span><b>03</b> LISTING BD</span>
            </div>
          </div>
          <ProjectDiagnosis />
        </div>
      </section>

      <section className="e2p-inc-audience">
        <div className="e2p-container">
          <header className="e2p-inc-audience-head">
            <span className="e2p-section-index">Built for the next move</span>
            <h2>Where is your project<br /><em>stuck?</em></h2>
          </header>
          <div className="e2p-inc-segments">
            {PROJECT_TYPES.map((item) => (
              <article key={item.label}>
                <span>{item.index}</span>
                <small>{item.label}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowUpRight size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">01 / What changes</span>
            <h2>Less uncertainty.<br />More movement.</h2>
            <p>Every engagement turns uncertain inputs into concrete artifacts, accountable owners and a clearer next decision.</p>
          </header>
          <div className="e2p-inc-deliverables">
            {DELIVERABLES.map((item) => (
              <article key={item.title}>
                <span>{item.index}</span>
                <div><small>{item.outcome}</small><h3>{item.title}</h3></div>
                <p>{item.text}</p>
                <ArrowRight size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="project-path" className="e2p-section e2p-inc-path-section">
        <div className="e2p-container">
          <header className="e2p-inc-path-head">
            <div><span className="e2p-section-index">02 / Project path</span><h2>One continuous path.<br /><em>Six owned decisions.</em></h2></div>
            <p>A listing path is not a checklist. Each stage must produce an artifact the next stage can trust.</p>
          </header>
          <div className="e2p-inc-route">
            <div className="e2p-inc-route-line" aria-hidden="true"><i /></div>
            {PROJECT_PATH.map(([index, title, artifact, text], itemIndex) => (
              <article key={title} className={itemIndex === 3 ? "active" : itemIndex < 3 ? "done" : ""}>
                <i>{index}</i>
                <small>{artifact}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="e2p-inc-path-output">
            <span>Verified input</span><ArrowRight size={13} /><span>Clear artifact</span><ArrowRight size={13} /><span>Owned next action</span><ArrowRight size={13} /><b>Market feedback</b>
          </div>
        </div>
      </section>

      <section id="listing-bd" className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head e2p-inc-bd-head">
            <span className="e2p-section-index">03 / Listing BD system</span>
            <h2>Know the gap.<br /><em>Then open the route.</em></h2>
            <p>Growth-Ops capabilities become one client-facing movement system: research, standards, material completion, target priority and follow-up.</p>
          </header>
          <ListingGapMap />
          <div className="e2p-inc-bd-actions">
            {[
              ["01", "Translate standards", "Turn venue requirements into project-specific evidence and material actions."],
              ["02", "Prioritize attention", "Compare project fit, timing and relationship routes before outreach begins."],
              ["03", "Own every follow-up", "Keep status, decision, owner and next contact date visible to the project team."],
            ].map(([index, title, text]) => <article key={title}><span>{index}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <a href={E2P_LINKS.project("listing_system")} className="e2p-inc-inline-cta">OPEN A PROJECT TRACK <ArrowUpRight size={14} /></a>
        </div>
      </section>

      <section className="e2p-section e2p-inc-network-section">
        <div className="e2p-container">
          <header className="e2p-inc-network-head">
            <div><span className="e2p-section-index">04 / Resource network</span><h2>Relationships support the route.<br />Evidence earns the conversation.</h2></div>
            <p>Exchange, launch and capital relationships can support relevant introductions. Every third party keeps its own evaluation criteria and final decision.</p>
          </header>
          <div className="e2p-inc-logo-ledger">
            {PARTNERS.map((group) => (
              <div key={group.label}>
                <span>{group.label}</span>
                <section>
                  {group.logos.map(([name, logo]) => <i key={name}><img src={logo} alt={name} /></i>)}
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">05 / Public references</span>
            <h2>Selected work.<br />Publicly verifiable.</h2>
            <p>Past support demonstrates activity and scope. It does not promise acceptance or future results.</p>
          </header>
          <div className="e2p-inc-case-list">
            {CASES.map((item, index) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.project}>
                <span>0{index + 1}</span>
                <h3>{item.project}</h3>
                <p><small>SCOPE</small>{item.scope}</p>
                <p><small>PUBLIC RESULT</small><CheckCircle2 size={13} />{item.result}</p>
                <b>{item.source} <ExternalLink size={12} /></b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-final">
        <span>Project path · Quality upgrade · Listing BD</span>
        <h2>Make the project<br />ready to move.</h2>
        <a href={E2P_LINKS.project("incubator_final")} className="e2p-btn e2p-btn-dark">
          Start project evaluation <ArrowUpRight size={15} />
        </a>
      </section>
    </>
  );
}
