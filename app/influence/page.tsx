import type { Metadata } from "next";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Handshake,
  Megaphone,
  Network,
  PackageCheck,
  Radio,
  Sparkles,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "KOL Marketplace & Campaign Packages | E2PDAO",
  description:
    "A two-sided Web3 creator marketplace: projects find matched KOLs and campaign packages; creators access qualified projects, brand partnerships and events.",
  alternates: { canonical: "/influence/" },
  openGraph: {
    title: "E2PDAO KOL Marketplace",
    description: "Where Web3 projects and creators find the right match.",
    url: "/influence/",
  },
};

const MATCHES = [
  ["AC", "APAC DeFi Creator", "X · Telegram · APAC", "91"],
  ["GT", "Global Trading Channel", "YouTube · English", "87"],
  ["LE", "LATAM Web3 Educator", "Video · Spanish", "84"],
  ["MA", "MENA Community Lead", "Telegram · Events", "82"],
];

const PACKAGES = [
  {
    name: "Launch Signal",
    stage: "PRE-TGE / LAUNCH",
    text: "A coordinated creator matrix that introduces the narrative, builds recognition and creates a clean path into launch.",
    items: ["Campaign brief & audience map", "Macro / mid / micro KOL mix", "Content formats & publishing sequence", "Delivery tracking & results review"],
  },
  {
    name: "Market Expansion",
    stage: "REGIONAL GROWTH",
    text: "A market-specific package built around local language, trusted creators and the right community or event touchpoints.",
    items: ["Regional KOL shortlist", "Localized message and assets", "AMA / event / community formats", "Lead and conversion review"],
    featured: true,
  },
  {
    name: "Always-On Influence",
    stage: "ONGOING GROWTH",
    text: "A sustained creator program for education, product updates, social proof and long-term brand presence.",
    items: ["Creator ambassador matrix", "Monthly content cadence", "Product and campaign moments", "Performance and relationship review"],
  },
];

const CREATOR_BENEFITS = [
  { icon: Network, title: "Qualified project access", text: "See relevant project opportunities instead of relying only on cold inbound messages." },
  { icon: Handshake, title: "Brand partnerships", text: "Get matched to paid collaborations based on audience, language, region and format fit." },
  { icon: CalendarDays, title: "Event invitations", text: "Access AMAs, spaces, community events and selected ecosystem activations." },
  { icon: BadgeCheck, title: "Long-term positioning", text: "Build repeat relationships, ambassador roles and a stronger verified creator profile." },
];

function MatchBoard() {
  return (
    <div className="e2p-visual-card" aria-label="KOL marketplace matching preview">
      <header className="e2p-visual-header">
        <span>KOL MATCH / CAMPAIGN PACKAGE</span>
        <span className="e2p-live">400+ NETWORK</span>
      </header>
      <div className="e2p-market-board">
        <div className="e2p-brief-card">
          <span>PROJECT BRIEF / 01</span>
          <h3>DeFi launch.<br />APAC first.</h3>
          <p>Find creators with trading and DeFi audiences for launch awareness, education and community conversion.</p>
          <div className="e2p-brief-tags"><i>APAC</i><i>DeFi</i><i>X / TG</i><i>Pre-TGE</i><i>Education</i></div>
        </div>
        <div className="e2p-match-list">
          {MATCHES.map(([avatar, name, detail, score]) => (
            <article key={name}>
              <i className="e2p-match-avatar">{avatar}</i>
              <span><b>{name}</b><small>{detail}</small></span>
              <strong>{score}</strong>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InfluencePage() {
  return (
    <>
      <section className="e2p-container e2p-page-hero e2p-grid-wash">
        <div className="e2p-page-hero-copy">
          <span className="e2p-eyebrow">E2P KOL Marketplace</span>
          <h1>
            The right creators.<br />
            <span className="e2p-highlight">The right project.</span>
          </h1>
          <p>
            A two-sided marketplace where projects get a coordinated KOL growth
            system—and creators gain qualified project resources, brand
            partnerships and event opportunities.
          </p>
          <div className="e2p-hero-facts">
            <span><strong>400+</strong>Creator network</span>
            <span><strong>6</strong>Market regions</span>
            <span><strong>4</strong>Core channels</span>
            <span><strong>2</strong>Sides, one market</span>
          </div>
        </div>
        <MatchBoard />
      </section>

      <section className="e2p-section-compact">
        <div className="e2p-container e2p-market-split">
          <article className="e2p-market-door">
            <span>01 / For projects</span>
            <h2>I need<br />KOLs.</h2>
            <p>Tell us the market, stage, audience, deliverables and budget. We turn the brief into a creator shortlist, a campaign package and an operating timeline.</p>
            <a href={E2P_LINKS.project("marketplace_project_door")} className="e2p-btn e2p-btn-dark">Build my campaign <ArrowUpRight size={15} /></a>
          </article>
          <article className="e2p-market-door">
            <span>02 / For KOLs & creators</span>
            <h2>I need<br />opportunities.</h2>
            <p>Join the network to access relevant Web3 projects, paid brand work, community activations and selected event invitations.</p>
            <a href={E2P_LINKS.kol("marketplace_kol_door")} className="e2p-btn e2p-btn-acid">Join the network <ArrowUpRight size={15} /></a>
          </article>
        </div>
      </section>

      <section id="campaigns" className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">01 / Campaign packages</span>
            <h2>A creator list is not<br />a growth strategy.</h2>
            <p>
              Each package connects the project brief, creator selection,
              deliverables, publishing sequence and review into one plan.
            </p>
          </header>
          <div className="e2p-package-grid">
            {PACKAGES.map((item, index) => (
              <article className={`e2p-package${item.featured ? " featured" : ""}`} key={item.name}>
                <header><span>0{index + 1} / {item.stage}</span>{item.featured && <b>Core package</b>}</header>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <ul>{item.items.map((detail) => <li key={detail}>✓ {detail}</li>)}</ul>
                <a href={E2P_LINKS.project(`marketplace_package_${index + 1}`)}>Request this package <ArrowUpRight size={13} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-ink">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">02 / KOL partnership growth</span>
            <h2>From first match<br />to repeat partnership.</h2>
            <p>
              The Growth-Ops workflow becomes a transparent collaboration track
              for creator discovery, campaign delivery and relationship growth.
            </p>
          </header>
          <div className="e2p-loop">
            <div className="e2p-loop-copy">
              <span className="e2p-eyebrow">Partnership operating loop</span>
              <h3>Discover.<br />Package.<br />Deliver.<br />Review.</h3>
              <p>Public evidence and audience fit guide the match. Campaign assets, delivery status and results stay connected to the same creator relationship.</p>
            </div>
            <div className="e2p-loop-board">
              <header><span>CREATOR PARTNERSHIP PIPELINE</span><b>ONE SHARED TRACK</b></header>
              <div className="e2p-loop-track">
                {[
                  ["01", "Discover & verify", "Channels, audience, region, content and public signals", "EVIDENCE"],
                  ["02", "Match & package", "Project fit, creator mix, deliverables and client package", "PACKAGE"],
                  ["03", "Launch & coordinate", "Brief, assets, publishing, AMAs and event actions", "DELIVERY"],
                  ["04", "Review & grow", "Results, relationship notes and next collaboration", "COMPOUND"],
                ].map(([index, title, text, state], i) => (
                  <article key={title} className={i === 2 ? "active" : ""}>
                    <i>{index}</i><span><b>{title}</b><small>{text}</small></span><em>{state}</em>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-ink" style={{ paddingTop: 0 }}>
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">03 / For creators</span>
            <h2>More than<br />one-off posts.</h2>
            <p>Build access, relationships and repeat opportunities inside the E2P project network.</p>
          </header>
          <div className="e2p-benefit-grid">
            {CREATOR_BENEFITS.map((item) => (
              <article key={item.title}>
                <item.icon size={23} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-final">
        <span>Creators need projects · Projects need creators</span>
        <h2>Meet in the<br />right market.</h2>
        <div className="e2p-actions">
          <a href={E2P_LINKS.kol("marketplace_final")} className="e2p-btn e2p-btn-dark">Join as a KOL <ArrowUpRight size={15} /></a>
          <a href={E2P_LINKS.project("marketplace_final")} className="e2p-btn">Launch a campaign <Megaphone size={14} /></a>
        </div>
      </section>
    </>
  );
}
