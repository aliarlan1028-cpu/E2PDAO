import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

function NetworkTriad() {
  return (
    <div className="v4-network-triad v4-network-triad-concept" aria-label="E2P operating network">
      <img src="/concept-art/home/hero-network.png" alt="Incubator, KOL Marketplace and Trading Agent connected through E2P DAO" />
      <Link href="/services" className="v4-network-hotspot hotspot-inc" aria-label="Explore the E2P Incubator" />
      <Link href="/influence" className="v4-network-hotspot hotspot-kol" aria-label="Explore the E2P KOL Marketplace" />
      <Link href="/club" className="v4-network-hotspot hotspot-agent" aria-label="Explore the E2P Trading Agent" />
    </div>
  );
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
            <div className="v4-engine-art"><img src="/concept-art/home-incubator.png" alt="A growing project" /></div>
            <ul><li>Ideas → Products</li><li>Capital & Advisory</li><li>Tokenomics & Design</li><li>Go-to-Market Readiness</li></ul>
          </Link>
          <Link href="/influence" className="v4-home-engine">
            <header><span>02</span><h2>KOL Marketplace</h2></header>
            <p>We connect projects with verified KOLs and communities to create authentic reach and measurable impact.</p>
            <div className="v4-engine-art"><img src="/concept-art/home-kol.png" alt="Creator network collage" /></div>
            <ul><li>Verified KOL Network</li><li>Campaign Matching</li><li>Performance Tracking</li><li>On-chain Transparency</li></ul>
          </Link>
          <Link href="/club" className="v4-home-engine">
            <header><span>03</span><h2>Trading Agent</h2></header>
            <p>We build and curate AI trading agents that turn market intelligence into automated, data-driven execution.</p>
            <div className="v4-engine-art"><img src="/concept-art/home-agent.png" alt="AI market intelligence network" /></div>
            <ul><li>AI Market Intelligence</li><li>Strategy Automation</li><li>Risk Management</li><li>On-chain Execution</li></ul>
          </Link>
        </div>
      </section>

      <section id="network" className="v4-home-proof-strip">
        <div className="v4-wrap">
          <div><strong>A network of builders, influencers and intelligent capital.</strong></div>
          <span><b>250+</b> Projects incubated</span><span><b>1,200+</b> Verified KOLs</span><span><b>$750M+</b> Trading volume via AI agents</span><span><b>60+</b> Countries</span>
        </div>
      </section>

      <section id="how-it-works" className="v4-home-flow">
        <div className="v4-wrap v4-home-flow-grid">
          <header><span className="v4-label">How E2P works</span><h2>From idea to<br />market intelligence<span>.</span></h2></header>
          <div className="v4-flow-steps">
            <article><div><img src="/concept-art/home/flow-project.png" alt="Project growth" /></div><span>01</span><h3>Project</h3><p>We incubate and equip projects to be market-ready from day one.</p></article><ArrowRight />
            <article><div><img src="/concept-art/home/flow-distribution.png" alt="Creator distribution" /></div><span>02</span><h3>Distribution</h3><p>We activate the right KOLs and communities to drive adoption at scale.</p></article><ArrowRight />
            <article><div><img src="/concept-art/home/flow-intelligence.png" alt="Market intelligence" /></div><span>03</span><h3>Market intelligence</h3><p>Our AI trading agents monitor, learn, and execute to maximize opportunities.</p></article>
          </div>
        </div>
      </section>

      <section id="results" className="v4-home-outcomes">
        <div className="v4-wrap">
          <header><span className="v4-label">Selected outcomes</span></header>
          <div className="v4-outcome-grid">
            <article><img src="/concept-art/home/outcome-depin.png" alt="DePIN infrastructure: 17.8x ATH ROI" /></article>
            <article><img src="/concept-art/home/outcome-social.png" alt="SocialFi app: 12 million users reached" /></article>
            <article><img src="/concept-art/home/outcome-agent.png" alt="AI Trading Agent: 42 percent average monthly return" /></article>
          </div>
          <p className="v4-outcome-note">Real results. Transparent. <b>On-chain.</b></p>
        </div>
      </section>

      <section className="v4-home-cta">
        <div className="v4-wrap"><h2>Build the future<span>.</span><br /><em>Together.</em></h2><div><a href={E2P_LINKS.project("home_cta_v4")} className="v4-button v4-button-acid">Start a project <ArrowRight size={15} /></a><p>Join E2P DAO and turn your vision into measurable impact.</p></div></div>
      </section>
    </>
  );
}
