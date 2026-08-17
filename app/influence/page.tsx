import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  ChartNoAxesCombined,
  CircleDollarSign,
  Globe2,
  Handshake,
  Megaphone,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "KOL Intelligence, Campaign Operations & Marketplace | E2PDAO",
  description:
    "E2P turns private KOL resources into evidence-backed matches, client-ready packages, live campaign operations and repeat creator partnerships.",
  alternates: { canonical: "/influence/" },
  openGraph: {
    title: "E2PDAO KOL Marketplace & Growth Operations",
    description:
      "Creator intelligence, package building, campaign execution and partnership growth in one operating system.",
    url: "/influence/",
  },
};

const CREATORS = [
  {
    initials: "AC",
    style: "acid",
    role: "APAC DeFi Educator",
    channels: "X · TELEGRAM",
    language: "EN / ZH",
    signal: "Audience fit",
    evidence: "DeFi education · launch context · APAC distribution",
  },
  {
    initials: "GT",
    style: "mint",
    role: "Global Trading Channel",
    channels: "YOUTUBE · X",
    language: "ENGLISH",
    signal: "Format fit",
    evidence: "Long-form analysis · trading audience · video integration",
  },
  {
    initials: "LE",
    style: "paper",
    role: "LATAM Web3 Host",
    channels: "VIDEO · AMA",
    language: "SPANISH",
    signal: "Market fit",
    evidence: "Regional community · live format · event activation",
  },
];

const CAMPAIGN_PACKAGES = [
  {
    index: "01",
    label: "LAUNCH & MINDSHARE",
    title: "Make the market understand the story.",
    formats: ["Narrative education", "Launch content", "AMA / Space", "Mindshare review"],
  },
  {
    index: "02",
    label: "COMMUNITY GROWTH",
    title: "Turn attention into a qualified community.",
    formats: ["Regional creators", "Community entry", "Event activation", "Retention loop"],
  },
  {
    index: "03",
    label: "USER ACQUISITION",
    title: "Connect content to measurable action.",
    formats: ["Tracking links", "Creator pages", "Conversion events", "ROI review"],
  },
  {
    index: "04",
    label: "REGIONAL EXPANSION",
    title: "Enter a market with native voices.",
    formats: ["Language matching", "Local formats", "Regional events", "Long-term partners"],
  },
];

const CREATOR_BENEFITS = [
  { icon: Network, title: "Qualified projects", text: "Opportunities matched by market, audience, language, format and collaboration history." },
  { icon: Handshake, title: "Brand partnerships", text: "Clearer commercial terms, deliverables, assets, approvals and accountable coordination." },
  { icon: CalendarDays, title: "Events & access", text: "Selected AMAs, spaces, conferences, community events and ecosystem activations." },
  { icon: BadgeCheck, title: "A record that compounds", text: "Verified delivery becomes repeat work, ambassador roles and stronger creator reputation." },
];

function CreatorPortrait({ initials, style }: { initials: string; style: string }) {
  return (
    <div className={`e2p-creator-portrait ${style}`} aria-hidden="true">
      <i /><i /><strong>{initials}</strong><span />
    </div>
  );
}

function MarketplaceScene() {
  return (
    <div className="e2p-kol-market-scene" aria-label="Illustrative E2P creator marketplace matching scene">
      <header><span><i /> CREATOR MARKET / BRIEF OPEN</span><b>REPRESENTATIVE VIEW</b></header>
      <div className="e2p-kol-market-canvas">
        <article className="e2p-kol-scene-creator creator-one">
          <CreatorPortrait initials="AC" style="acid" />
          <div><small>APAC · DEFI</small><b>Education that builds trust.</b><span>X · TELEGRAM</span></div>
        </article>
        <article className="e2p-kol-scene-creator creator-two">
          <CreatorPortrait initials="GT" style="mint" />
          <div><small>GLOBAL · TRADING</small><b>Long-form market context.</b><span>YOUTUBE · X</span></div>
        </article>
        <article className="e2p-kol-scene-creator creator-three">
          <CreatorPortrait initials="LE" style="paper" />
          <div><small>LATAM · WEB3</small><b>Regional conversation.</b><span>VIDEO · AMA</span></div>
        </article>
        <div className="e2p-kol-match-ticket">
          <small>PROJECT BRIEF</small>
          <strong>APAC<br />DeFi launch</strong>
          <p>Education · recognition · qualified community</p>
          <div><span>05 creators</span><span>12 deliverables</span></div>
          <b><Sparkles size={12} /> MATCHED BY E2P</b>
        </div>
      </div>
      <footer><span>BRIEF</span><ArrowRight size={11} /><span>VERIFY</span><ArrowRight size={11} /><span>MATCH</span><ArrowRight size={11} /><b>CAMPAIGN</b></footer>
    </div>
  );
}

export default function InfluencePage() {
  return (
    <>
      <section className="e2p-kol-market-hero e2p-grid-wash">
        <div className="e2p-container e2p-kol-market-hero-grid">
          <div className="e2p-kol-market-copy">
            <span className="e2p-eyebrow">E2P KOL Marketplace</span>
            <h1>The right project.<br /><span className="e2p-highlight">The right voice.</span></h1>
            <p>
              E2P connects Web3 projects with evidence-backed creators—then
              turns the match into a clear package, coordinated campaign and
              partnership that can grow beyond one post.
            </p>
            <div className="e2p-actions">
              <a href={E2P_LINKS.project("marketplace_hero")} className="e2p-btn e2p-btn-dark">Build a campaign <ArrowUpRight size={15} /></a>
              <a href={E2P_LINKS.kol("marketplace_hero")} className="e2p-btn">Join as a creator</a>
            </div>
            <div className="e2p-kol-market-proof">
              <span><b>01</b> VERIFIED RESOURCES</span><span><b>02</b> GOAL-BASED MATCHING</span><span><b>03</b> SHARED EXECUTION</span>
            </div>
          </div>
          <MarketplaceScene />
        </div>
      </section>

      <section className="e2p-kol-two-sided">
        <div className="e2p-container e2p-kol-two-sided-grid">
          <article>
            <span>01 / FOR PROJECTS</span>
            <h2>I need the<br /><em>right KOLs.</em></h2>
            <p>Tell us the market, audience, objective and budget. E2P returns verified matches, a commercial package and an execution track.</p>
            <a href={E2P_LINKS.project("marketplace_project_door")} className="e2p-btn e2p-btn-dark">Open a project brief <ArrowUpRight size={15} /></a>
          </article>
          <article>
            <span>02 / FOR CREATORS</span>
            <h2>I need better<br /><em>opportunities.</em></h2>
            <p>Build a verified profile and receive relevant projects, paid brand work, event access and long-term collaboration routes.</p>
            <a href={E2P_LINKS.kol("marketplace_kol_door")} className="e2p-btn e2p-btn-acid">Join the creator network <ArrowUpRight size={15} /></a>
          </article>
        </div>
      </section>

      <section id="creator-network" className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-kol-editorial-head">
            <div><span className="e2p-section-index">01 / Creator network</span><h2>See the person.<br /><em>Understand the fit.</em></h2></div>
            <p>Follower count is only one signal. E2P combines public evidence with private relationship knowledge before recommending a creator.</p>
          </header>
          <div className="e2p-creator-showcase">
            {CREATORS.map((creator, index) => (
              <article key={creator.role} className={index === 0 ? "featured" : ""}>
                <header><span>0{index + 1} / REPRESENTATIVE CREATOR</span><BadgeCheck size={16} /></header>
                <CreatorPortrait initials={creator.initials} style={creator.style} />
                <small>{creator.channels} · {creator.language}</small>
                <h3>{creator.role}</h3>
                <p>{creator.evidence}</p>
                <footer><span>{creator.signal}</span><b>EXPLAINED MATCH</b></footer>
              </article>
            ))}
          </div>
          <p className="e2p-creator-disclaimer">Profiles above illustrate the information structure of a matched creator. Private contacts, internal pricing and relationship notes stay protected.</p>
        </div>
      </section>

      <section className="e2p-section e2p-kol-project-system">
        <div className="e2p-container">
          <header className="e2p-kol-editorial-head dark">
            <div><span className="e2p-section-index">02 / For projects</span><h2>From one brief<br />to a <em>live campaign.</em></h2></div>
            <p>Growth-Ops powers the workflow behind the page: resource verification, AI evaluation, package building, client-safe sharing, campaign pages and conversion review.</p>
          </header>
          <div className="e2p-kol-project-flow">
            {[
              { icon: ScanSearch, index: "01", title: "Submit the brief", text: "Objective, market, audience, formats, timing and budget become one campaign truth." },
              { icon: ShieldCheck, index: "02", title: "Verify & match", text: "Channels, audience quality, content fit, risk and relationship history are checked." },
              { icon: Sparkles, index: "03", title: "Build the package", text: "Creator mix, deliverables and client-facing offer are assembled without exposing private data." },
              { icon: ChartNoAxesCombined, index: "04", title: "Launch & measure", text: "Assets, publishing, links, traffic, conversions and review stay on one shared track." },
            ].map((item, index) => (
              <article key={item.title} className={index === 2 ? "active" : ""}>
                <header><span>{item.index}</span><item.icon size={19} /></header>
                <h3>{item.title}</h3><p>{item.text}</p>
                <footer>{index === 0 ? "BRIEF" : index === 1 ? "EVIDENCE" : index === 2 ? "CLIENT READY" : "RESULTS"}</footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="campaign-packages" className="e2p-section e2p-kol-package-market">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">03 / Campaign packages</span>
            <h2>Start with the goal.<br />Then choose the voices.</h2>
            <p>E2P packages are built around the outcome a project needs, not an arbitrary number of posts.</p>
          </header>
          <div className="e2p-kol-goal-list">
            {CAMPAIGN_PACKAGES.map((item, index) => (
              <article key={item.label} className={index === 0 ? "active" : ""}>
                <span>{item.index}</span>
                <div><small>{item.label}</small><h3>{item.title}</h3></div>
                <p>{item.formats.map((format) => <b key={format}>{format}</b>)}</p>
                <ArrowUpRight size={20} />
              </article>
            ))}
          </div>
          <a href={E2P_LINKS.project("marketplace_ai_package")} className="e2p-kol-package-link">BUILD A GOAL-BASED PACKAGE <ArrowUpRight size={14} /></a>
        </div>
      </section>

      <section className="e2p-section e2p-kol-creator-section">
        <div className="e2p-container e2p-kol-creator-layout">
          <div className="e2p-kol-creator-copy">
            <span className="e2p-section-index">04 / For creators</span>
            <h2>Build more than<br /><em>a rate card.</em></h2>
            <p>Your profile should show where you create value, how you work and what kind of partnership deserves your attention.</p>
            <a href={E2P_LINKS.kol("marketplace_creator_layer")} className="e2p-btn e2p-btn-acid">Join the creator network <ArrowUpRight size={15} /></a>
          </div>
          <div className="e2p-kol-opportunity-board">
            <header><span>CREATOR OPPORTUNITIES</span><b>BETTER FIT · CLEARER WORK</b></header>
            {CREATOR_BENEFITS.map((item, index) => (
              <article key={item.title}>
                <i>0{index + 1}</i><item.icon size={20} />
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <ArrowRight size={16} />
              </article>
            ))}
            <footer><Globe2 size={14} /> MARKET · LANGUAGE · FORMAT · RELATIONSHIP</footer>
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-kol-editorial-head">
            <div><span className="e2p-section-index">05 / Campaign operations</span><h2>One campaign.<br /><em>One source of truth.</em></h2></div>
            <p>Briefs, creator pages, assets, approvals, publishing, traffic and review remain connected to the relationship.</p>
          </header>
          <div className="e2p-kol-campaign-track">
            {[
              ["01", "Brief", "Goal and deliverables agreed", "READY"],
              ["02", "Match", "Creators selected with evidence", "VERIFIED"],
              ["03", "Create", "Assets, pages and approvals", "IN PROGRESS"],
              ["04", "Publish", "Content and tracking go live", "LIVE"],
              ["05", "Review", "Results become relationship memory", "REPEAT"],
            ].map(([index, title, text, state], itemIndex) => (
              <article key={title} className={itemIndex === 3 ? "active" : itemIndex < 3 ? "done" : ""}>
                <i>{index}</i><div><h3>{title}</h3><p>{text}</p></div><b>{state}</b>
              </article>
            ))}
          </div>
          <div className="e2p-kol-measure-strip">
            <span><small>CONTENT</small><b>Published correctly</b></span>
            <span><small>TRAFFIC</small><b>Visitors & clicks</b></span>
            <span><small>ACTION</small><b>Submissions & conversion</b></span>
            <span><small>VALUE</small><b>Cost, ROI & repeat fit</b></span>
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-kol-rules-section">
        <div className="e2p-container">
          <header className="e2p-kol-rules-head"><span className="e2p-section-index">06 / Marketplace rules</span><h2>Trust makes<br />the market work.</h2></header>
          <div className="e2p-kol-rules">
            <article><ShieldCheck size={22} /><h3>Verify before matching</h3><p>Channel identity, public signals and material risks are reviewed before a recommendation.</p></article>
            <article><CircleDollarSign size={22} /><h3>Make terms clear</h3><p>Deliverables, timing, commercial terms and approval expectations are recorded before launch.</p></article>
            <article><Handshake size={22} /><h3>Protect the relationship</h3><p>Private contacts, internal costs and collaboration notes are kept out of client-facing views.</p></article>
          </div>
        </div>
      </section>

      <section className="e2p-final">
        <span>Verified creators · Goal-based packages · Shared campaign track</span>
        <h2>Turn the right match<br />into real growth.</h2>
        <div className="e2p-actions">
          <a href={E2P_LINKS.project("marketplace_final")} className="e2p-btn e2p-btn-dark">Build a campaign <Megaphone size={14} /></a>
          <a href={E2P_LINKS.kol("marketplace_final")} className="e2p-btn">Join as a creator <ArrowUpRight size={15} /></a>
        </div>
      </section>
    </>
  );
}
