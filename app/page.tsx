import Link from "next/link";
import { ArrowRight, BrainCircuit, FileCheck2, Radar, Sprout, UsersRound } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

function NetworkTriad() {
  return (
    <div className="v6-network-triad" aria-label="E2P operating network">
      <i className="v6-triad-orbit v6-triad-orbit-top" />
      <i className="v6-triad-orbit v6-triad-orbit-left" />
      <i className="v6-triad-orbit v6-triad-orbit-right" />
      <i className="v6-triad-wire v6-triad-wire-left" />
      <i className="v6-triad-wire v6-triad-wire-right" />
      <i className="v6-triad-wire v6-triad-wire-base" />
      <Link href="/services" className="v6-triad-node v6-triad-inc"><Sprout size={31}/><b>Incubator</b><small>BUILD</small></Link>
      <Link href="/influence" className="v6-triad-node v6-triad-kol"><UsersRound size={31}/><b>KOL<br/>Marketplace</b><small>INFLUENCE</small></Link>
      <Link href="/club" className="v6-triad-node v6-triad-agent"><Radar size={31}/><b>Trading<br/>Agent</b><small>INTELLIGENCE</small></Link>
      <div className="v6-network-core"><img src="/e2p-icon-transparent.svg" alt=""/><b>E2P DAO</b><span>OPERATING NETWORK</span></div>
    </div>
  );
}

function EngineVisual({type}:{type:"incubator"|"kol"|"agent"}) {
  if (type === "incubator") return <div className="v4-engine-art v4-engine-plant"><Sprout/><i/><span>FROM GAP TO EXCHANGE DECISION</span></div>;
  if (type === "kol") return <div className="v4-engine-art v6-home-kol-radar"><header><b>114</b><span>CREATOR RECORDS</span></header><div className="v6-kol-radar-core"><UsersRound/><i/><i/><i/></div><div className="v6-kol-radar-bars"><span>YT <b>86</b></span><span>TG <b>58</b></span><span>X <b>44</b></span></div><footer>MARKET · CHANNEL · FIT</footer></div>;
  return <div className="v4-engine-art v4-engine-brain"><BrainCircuit/><i/><i/><i/><span>CONTEXT → PLAN → GUARD → ACTION</span></div>;
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
            <p>We diagnose listing gaps, strengthen project quality, design the route and coordinate exchange BD through the decision process.</p>
            <EngineVisual type="incubator" />
            <ul><li>Listing Advisory</li><li>Project Quality Upgrade</li><li>Project Path Design</li><li>Exchange BD Coordination</li></ul>
          </Link>
          <Link href="/influence" className="v4-home-engine">
            <header><span>02</span><h2>KOL Marketplace</h2></header>
            <p>We match project needs with public creator data, then operate campaigns from brief and scope through delivery and review.</p>
            <EngineVisual type="kol" />
            <ul><li>Public Creator Profiles</li><li>Campaign Matching</li><li>Scope & Commercial Terms</li><li>Delivery & Outcome Review</li></ul>
          </Link>
          <Link href="/club" className="v4-home-engine">
            <header><span>03</span><h2>Trading Agent</h2></header>
            <p>Our AI trading system turns market and account context into structured plans, hard risk checks and controlled CEX execution.</p>
            <EngineVisual type="agent" />
            <ul><li>Market & Account Context</li><li>Evidence-backed Plans</li><li>Deterministic Risk Gates</li><li>Controlled CEX Execution</li></ul>
          </Link>
        </div>
      </section>

      <section id="network" className="v4-home-proof-strip">
        <div className="v4-wrap">
          <div><strong>Project readiness, creator campaigns and bounded AI trading.</strong></div>
          <span><b>04</b> Public project cases</span><span><b>114</b> KOL resource records</span><span><b>194</b> Channel profiles</span><span><b>07</b> Agent decision stages</span>
        </div>
      </section>

      <section id="how-it-works" className="v4-home-flow">
        <div className="v4-wrap v4-home-flow-grid">
          <header><span className="v4-label">How E2P works</span><h2>From idea to<br />market intelligence<span>.</span></h2></header>
          <div className="v4-flow-steps">
            <article><div><Sprout/></div><span>01</span><h3>Project readiness</h3><p>Diagnose gaps, improve project quality and coordinate the route through exchange review.</p></article><ArrowRight />
            <article><div><UsersRound/></div><span>02</span><h3>Creator campaigns</h3><p>Match project requirements with public creator signals, then operate delivery and review.</p></article><ArrowRight />
            <article><div><Radar/></div><span>03</span><h3>Bounded trading</h3><p>Sense context, structure a plan, pass hard risk gates and act only within approved permissions.</p></article>
          </div>
        </div>
      </section>

      <section id="results" className="v4-home-outcomes">
        <div className="v4-wrap">
          <header><span className="v4-label">Public evidence</span></header>
          <div className="v4-outcome-grid">
            <Link href="/services#cases" className="v4-outcome-card depin v5-evidence-card"><div className="v4-outcome-visual"><FileCheck2/></div><span>Incubator</span><h3>04 cases</h3><p>CHAX · HIRO · Virtuals · USBT. Engagement scopes confirmed by E2P, with public outcome links.</p><footer><b>VIEW PUBLIC CASES</b><ArrowRight size={14}/></footer></Link>
            <Link href="/influence#creator-network" className="v4-outcome-card social v5-evidence-card"><div className="v4-outcome-visual"><UsersRound/></div><span>KOL Marketplace</span><h3>114 records</h3><p>A growing multi-market resource library, with four creator-maintained public profiles shown as source-linked examples.</p><footer><b>EXPLORE THE NETWORK</b><ArrowRight size={14}/></footer></Link>
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
