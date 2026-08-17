import type { Metadata } from "next";
import {
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
  ["01", "Project evidence", "Product, token, traction and source trail", "PROFILE"],
  ["02", "Path architecture", "Milestones, dependencies and decision gates", "ROUTE"],
  ["03", "Quality upgrade", "Narrative, proof and market-facing assets", "BUILD"],
  ["04", "Listing fit", "Standards, gaps and target priority", "MATCH"],
  ["05", "BD motion", "Route, owner, outreach and follow-up", "MOVE"],
  ["06", "Market loop", "Launch signals, feedback and next cycle", "LEARN"],
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
          <header className="e2p-section-head e2p-path-head">
            <span className="e2p-section-index">02 / Project path</span>
            <h2>One project.<br /><em>One decision system.</em></h2>
            <p>
              We turn the project into a live operating track: evidence at the
              bottom, decisions in the middle and owned next actions at the top.
            </p>
          </header>

          <div className="e2p-project-system">
            <aside className="e2p-project-route">
              <header><span>PROJECT ROUTE / LIVE</span><b>6 STAGES</b></header>
              <div>
                {PATH.map(([index, title, text, state], itemIndex) => (
                  <article key={title} className={itemIndex === 3 ? "active" : itemIndex < 3 ? "done" : ""}>
                    <i>{index}</i>
                    <span><b>{title}</b><small>{text}</small></span>
                    <em>{state}</em>
                  </article>
                ))}
              </div>
              <footer><span>INPUT / VERIFIED PROJECT DATA</span><span>OUTPUT / OWNED ACTION</span></footer>
            </aside>

            <div className="e2p-project-workspace">
              <header><span>PROJECT CONTROL ROOM</span><span className="e2p-live">TRACK ACTIVE</span></header>
              <div className="e2p-project-score">
                <div><small>PATH SIGNAL</small><strong>82</strong><em>/ 100</em></div>
                <div className="e2p-project-score-bars">
                  <span><b>Product evidence</b><i><em style={{ width: "88%" }} /></i><strong>88</strong></span>
                  <span><b>Market narrative</b><i><em style={{ width: "76%" }} /></i><strong>76</strong></span>
                  <span><b>Listing package</b><i><em style={{ width: "68%" }} /></i><strong>68</strong></span>
                </div>
              </div>
              <div className="e2p-project-decisions">
                <header><span>NEXT DECISIONS</span><span>OWNER / DUE</span></header>
                {[
                  ["01", "Close market-proof gap", "PROJECT", "48H", "IN PROGRESS"],
                  ["02", "Confirm target-exchange tier", "E2P BD", "72H", "REVIEW"],
                  ["03", "Approve listing narrative v2", "FOUNDER", "FRI", "DECISION"],
                ].map(([index, action, owner, due, state], itemIndex) => (
                  <article key={action} className={itemIndex === 2 ? "active" : ""}>
                    <i>{index}</i><b>{action}</b><span>{owner}</span><span>{due}</span><em>{state}</em>
                  </article>
                ))}
              </div>
              <footer><b>Every stage must leave an artifact, an owner and a next move.</b><span>DECISION LOG / UPDATED</span></footer>
            </div>
          </div>
        </div>
      </section>

      <section id="listing-bd" className="e2p-section">
        <div className="e2p-container">
          <header className="e2p-section-head e2p-bd-head">
            <span className="e2p-section-index">03 / Listing BD system</span>
            <h2>A BD command system.<br /><em>Not a spreadsheet.</em></h2>
            <p>
              Listing standards, project fit, relationship routes and follow-up
              live together—so the team knows what deserves attention now.
            </p>
          </header>

          <div className="e2p-bd-system">
            <header className="e2p-bd-metrics">
              <span><small>PRIORITY TARGETS</small><b>04</b><em>fit qualified</em></span>
              <span><small>ACTIVE ROUTES</small><b>06</b><em>owner assigned</em></span>
              <span><small>MATERIAL GAPS</small><b>03</b><em>being closed</em></span>
              <span><small>NEXT ACTIONS</small><b>08</b><em>this cycle</em></span>
            </header>

            <div className="e2p-bd-main">
              <section className="e2p-bd-funnel">
                <header><span>PIPELINE / STAGE MOVEMENT</span><b>ILLUSTRATIVE TRACK</b></header>
                <div className="e2p-bd-stages">
                  {[
                    ["01", "Qualified", "12"], ["02", "Contacted", "08"], ["03", "Negotiating", "04"],
                    ["04", "Signed", "02"], ["05", "Listing", "01"], ["06", "Live", "01"],
                  ].map(([index, label, count], itemIndex) => (
                    <span key={label} className={itemIndex === 2 ? "active" : ""}><i>{index}</i><b>{label}</b><em>{count}</em></span>
                  ))}
                </div>
                <div className="e2p-bd-gapmatrix">
                  <header><span>TARGET FIT / GAP MATRIX</span><span>FIT · MATERIAL · ROUTE</span></header>
                  {[
                    ["Priority target A", "GLOBAL / TIER 1", "8.8", "2 GAPS", "ROUTE SET"],
                    ["Priority target B", "APAC / TIER 1", "8.2", "READY", "INTRO"],
                    ["Growth target C", "GLOBAL / GROWTH", "7.6", "1 GAP", "OUTREACH"],
                    ["Regional target D", "MENA / FIT", "7.1", "READY", "RESEARCH"],
                  ].map(([name, tier, score, gap, route], itemIndex) => (
                    <article key={name} className={itemIndex === 1 ? "active" : ""}>
                      <span><b>{name}</b><small>{tier}</small></span><strong>{score}</strong><em>{gap}</em><i>{route}</i>
                    </article>
                  ))}
                </div>
              </section>

              <aside className="e2p-bd-queue">
                <header><span>ACTION QUEUE</span><b>PRIORITIZED</b></header>
                <div className="e2p-bd-radar"><i /><i /><i /><b>FIT<br />SIGNAL</b><span /><span /><span /></div>
                <div className="e2p-bd-actions">
                  {[
                    ["NOW", "Send revised evidence pack", "E2P BD · Target B"],
                    ["TODAY", "Confirm listing window", "Founder · Target A"],
                    ["48H", "Close compliance answer", "Legal · Target C"],
                  ].map(([time, action, owner], itemIndex) => (
                    <article key={action} className={itemIndex === 0 ? "active" : ""}><i>{time}</i><span><b>{action}</b><small>{owner}</small></span></article>
                  ))}
                </div>
                <a href={E2P_LINKS.project("listing_system")} className="e2p-btn e2p-btn-acid">
                  Open a project track <ArrowUpRight size={15} />
                </a>
              </aside>
            </div>

            <footer className="e2p-bd-footer">
              <span><b>STANDARDS</b> source-linked criteria</span><span><b>SCORING</b> fit and timing</span>
              <span><b>CRM</b> stage and owner</span><span><b>ACTION</b> next move</span>
            </footer>
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
