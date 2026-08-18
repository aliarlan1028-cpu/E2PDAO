import Link from "next/link";
import { ArrowRight, BrainCircuit, FileCheck2, Radar, Sprout, UsersRound } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

function NetworkTriad() {
  return (
    <div className="v4-network-triad" aria-label="E2P operating network">
      <i className="orbit orbit-a" /><i className="orbit orbit-b" /><i className="orbit orbit-c" />
      <i className="wire wire-a" /><i className="wire wire-b" /><i className="wire wire-c" />
      <Link href="/services" className="node node-inc"><Sprout size={31}/><b>Incubator</b><small>BUILD</small></Link>
      <Link href="/influence" className="node node-kol"><UsersRound size={31}/><b>KOL<br/>Marketplace</b><small>INFLUENCE</small></Link>
      <Link href="/club" className="node node-agent"><Radar size={31}/><b>Trading<br/>Agent</b><small>INTELLIGENCE</small></Link>
      <div className="v4-network-core"><img src="/e2p-icon-transparent.svg" alt=""/><b>E2P DAO</b><span>OPERATING NETWORK</span></div>
    </div>
  );
}

function EngineVisual({type}:{type:"incubator"|"kol"|"agent"}) {
  if (type === "incubator") return <div className="v4-engine-art v4-engine-plant"><Sprout/><i/><span>FROM SEED TO MARKET</span></div>;
  if (type === "kol") return <div className="v4-engine-art v4-engine-collage v5-home-kol-signal"><UsersRound/><i/><i/><i/><b>4 PUBLIC PROFILES</b><span>RIGHT VOICE · RIGHT MARKET</span></div>;
  return <div className="v4-engine-art v4-engine-brain"><BrainCircuit/><i/><i/><i/><span>DATA → DECISION → ACTION</span></div>;
}

export default function HomePage() {
  return (
    <>
      <section className="v4-home-hero">
        <div className="v4-wrap v4-home-hero-grid">
          <div className="v4-home-hero-copy">
            <h1>Build<span>.</span><br />Influence<span>.</span><br />Trade with<br />intelligence<span>.</span></h1>
            <p>One operating network for Web3 execution.</p>
          </div>
          <NetworkTriad />
        </div>
      </section>

      <section id="what-we-do" className="v4-home-engines">
        <div className="v4-wrap v4-home-engine-grid">
          <Link href="/services" className="v4-home-engine">
            <header><span>01</span><h2>Incubator</h2></header>
            <p>We fund and build early-stage Web3 projects with product, tokenomics, and go-to-market support.</p>
            <EngineVisual type="incubator" />
            <ul><li>Ideas → Products</li><li>Capital & Advisory</li><li>Tokenomics & Design</li><li>Go-to-Market Readiness</li></ul>
          </Link>
          <Link href="/influence" className="v4-home-engine">
            <header><span>02</span><h2>KOL Marketplace</h2></header>
            <p>We connect projects with verified KOLs and communities to create authentic reach and measurable impact.</p>
            <EngineVisual type="kol" />
            <ul><li>Verified KOL Network</li><li>Campaign Matching</li><li>Performance Tracking</li><li>On-chain Transparency</li></ul>
          </Link>
          <Link href="/club" className="v4-home-engine">
            <header><span>03</span><h2>Trading Agent</h2></header>
            <p>We build and curate AI trading agents that turn market intelligence into automated, data-driven execution.</p>
            <EngineVisual type="agent" />
            <ul><li>AI Market Intelligence</li><li>Strategy Automation</li><li>Risk Management</li><li>On-chain Execution</li></ul>
          </Link>
        </div>
      </section>

      <section id="network" className="v4-home-proof-strip">
        <div className="v4-wrap">
          <div><strong>A network of builders, influencers and intelligent capital.</strong></div>
          <span><b>04</b> Public project cases</span><span><b>04</b> Creator profiles</span><span><b>1.9M+</b> Displayed followers</span><span><b>07</b> Agent decision stages</span>
        </div>
      </section>

      <section id="how-it-works" className="v4-home-flow">
        <div className="v4-wrap v4-home-flow-grid">
          <header><span className="v4-label">How E2P works</span><h2>From idea to<br />market intelligence<span>.</span></h2></header>
          <div className="v4-flow-steps">
            <article><div><Sprout/></div><span>01</span><h3>Project</h3><p>We incubate and equip projects to be market-ready from day one.</p></article><ArrowRight />
            <article><div><UsersRound/></div><span>02</span><h3>Distribution</h3><p>We activate the right KOLs and communities to drive adoption at scale.</p></article><ArrowRight />
            <article><div><Radar/></div><span>03</span><h3>Market intelligence</h3><p>Our AI trading agents monitor, learn, and execute to maximize opportunities.</p></article>
          </div>
        </div>
      </section>

      <section id="results" className="v4-home-outcomes">
        <div className="v4-wrap">
          <header><span className="v4-label">Public evidence</span></header>
          <div className="v4-outcome-grid">
            <Link href="/services#cases" className="v4-outcome-card depin v5-evidence-card"><div className="v4-outcome-visual"><FileCheck2/></div><span>Incubator</span><h3>04 cases</h3><p>CHAX · HIRO · Virtuals · USBT. Engagement scopes confirmed by E2P, with public outcome links.</p><footer><b>VIEW PUBLIC CASES</b><ArrowRight size={14}/></footer></Link>
            <Link href="/influence#creator-network" className="v4-outcome-card social v5-evidence-card"><div className="v4-outcome-visual"><UsersRound/></div><span>KOL Marketplace</span><h3>1.9M+</h3><p>Displayed followers across four creator-maintained public profiles. Figures are not deduplicated.</p><footer><b>OPEN CREATOR DATA</b><ArrowRight size={14}/></footer></Link>
            <Link href="/club#system" className="v4-outcome-card agent v5-evidence-card"><div className="v4-outcome-visual"><BrainCircuit/></div><span>AI Trading System</span><h3>07 stages</h3><p>Sense → recall → plan → guard → execute → monitor → review. Architecture, not a performance claim.</p><footer><b>EXPLORE THE SYSTEM</b><ArrowRight size={14}/></footer></Link>
          </div>
          <p className="v4-outcome-note">No invented ROI. No synthetic reach. <b>Sources are linked where public.</b></p>
        </div>
      </section>

      <section className="v4-home-cta">
        <div className="v4-wrap"><h2>Build the future<span>.</span><br /><em>Together.</em></h2><div><a href={E2P_LINKS.project("home_cta_v4")} className="v4-button v4-button-acid">Start a project <ArrowRight size={15} /></a><p>Join E2P DAO and turn your vision into measurable impact.</p></div></div>
      </section>
    </>
  );
}
