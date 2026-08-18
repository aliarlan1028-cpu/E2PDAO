import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrainCircuit, ExternalLink, Megaphone, Radar, Sprout, Users } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

const CASES = [
  ["CHAX", "CEX listing coordination", "CoinGecko", "https://www.coingecko.com/en/coins/chax"],
  ["HIRO", "Listing preparation and coordination", "CoinMarketCap", "https://coinmarketcap.com/currencies/hiro/#Markets"],
  ["Virtuals", "Public supply verification support", "CoinMarketCap", "https://coinmarketcap.com/currencies/virtual-protocol/"],
];

function NetworkTriad() {
  return (
    <div className="v4-network-triad" aria-label="E2P operating network">
      <i className="orbit orbit-a" /><i className="orbit orbit-b" /><i className="orbit orbit-c" />
      <span className="wire wire-a" /><span className="wire wire-b" /><span className="wire wire-c" />
      <Link href="/services" className="node node-inc"><Sprout size={24} /><b>Incubator</b></Link>
      <Link href="/influence" className="node node-kol"><Users size={24} /><b>KOL<br />Marketplace</b></Link>
      <Link href="/club" className="node node-agent"><Radar size={24} /><b>Trading<br />Agent</b></Link>
      <div className="v4-network-core"><img src="/e2p-icon-transparent.svg" alt="" /><b>E2P</b><span>DAO</span></div>
    </div>
  );
}

function CreatorCollage() {
  return <div className="v4-home-collage"><img src="/people/creator-01.jpg" alt="" /><img src="/people/creator-02.jpg" alt="" /><img src="/people/creator-03.jpg" alt="" /><i /></div>;
}

export default function HomePage() {
  return (
    <>
      <section className="v4-home-hero">
        <div className="v4-wrap v4-home-hero-grid">
          <div className="v4-home-hero-copy">
            <span className="v4-kicker">E2P DAO / WEB3 OPERATING NETWORK</span>
            <h1>Build<span>.</span><br />Influence<span>.</span><br />Trade with<br />intelligence<span>.</span></h1>
            <p>One operating network for Web3 execution.</p>
            <div className="v4-hero-actions"><a href={E2P_LINKS.project("home_v4")} className="v4-button v4-button-dark">Start a project <ArrowUpRight size={15} /></a><a href="#what-we-do" className="v4-text-link">See what we do <ArrowRight size={14} /></a></div>
          </div>
          <NetworkTriad />
        </div>
      </section>

      <section id="what-we-do" className="v4-home-engines">
        <div className="v4-wrap v4-home-engine-grid">
          <Link href="/services" className="v4-home-engine">
            <header><span>01</span><h2>Incubator</h2></header>
            <p>We help projects improve quality, design the route and move listing conversations forward.</p>
            <div className="v4-engine-art v4-engine-plant"><i /><Sprout size={112} /></div>
            <ul><li>Project diagnosis</li><li>Quality optimization</li><li>Listing advisory</li><li>Owned BD follow-up</li></ul>
          </Link>
          <Link href="/influence" className="v4-home-engine">
            <header><span>02</span><h2>KOL Marketplace</h2></header>
            <p>We connect projects with verified creator resources and run the campaign through review.</p>
            <div className="v4-engine-art"><CreatorCollage /></div>
            <ul><li>Creator verification</li><li>Goal-based matching</li><li>Campaign packaging</li><li>Measured operations</li></ul>
          </Link>
          <Link href="/club" className="v4-home-engine">
            <header><span>03</span><h2>Trading Agent</h2></header>
            <p>We turn market context into structured decisions inside explicit risk boundaries.</p>
            <div className="v4-engine-art v4-engine-brain"><BrainCircuit size={128} /><i /><i /><i /></div>
            <ul><li>AI market context</li><li>Structured planning</li><li>Hard risk gates</li><li>Auditable review</li></ul>
          </Link>
        </div>
      </section>

      <section className="v4-home-proof-strip">
        <div className="v4-wrap">
          <div><strong>A network of builders, creators and market operators.</strong></div>
          <span><b>04</b> Public references</span><span><b>400+</b> KOL resources</span><span><b>20+</b> Operating nodes</span><span><b>03</b> Connected engines</span>
        </div>
      </section>

      <section className="v4-home-flow">
        <div className="v4-wrap v4-home-flow-grid">
          <header><span className="v4-label">How E2P works</span><h2>From idea to<br />market intelligence<span>.</span></h2></header>
          <div className="v4-flow-steps">
            <article><div><Sprout size={38} /></div><span>01</span><h3>Project</h3><p>Diagnose, prioritize and build a project the market can evaluate.</p></article><ArrowRight />
            <article><div><Megaphone size={38} /></div><span>02</span><h3>Distribution</h3><p>Activate the right creators and communities around a clear goal.</p></article><ArrowRight />
            <article><div><Radar size={38} /></div><span>03</span><h3>Market intelligence</h3><p>Observe, decide and feed what the market teaches back into the next move.</p></article>
          </div>
        </div>
      </section>

      <section className="v4-home-outcomes">
        <div className="v4-wrap">
          <header><span className="v4-label">Selected public work</span><h2>Evidence you can verify.</h2><p>Public references describe support scope and source. They are not promises of future results.</p></header>
          <div className="v4-outcome-grid">
            {CASES.map(([project, scope, source, href], index) => <a key={project} href={href} target="_blank" rel="noreferrer"><span>0{index + 1} / PUBLIC REFERENCE</span><h3>{project}</h3><p>{scope}</p><footer>{source}<ExternalLink size={14} /></footer></a>)}
          </div>
        </div>
      </section>

      <section className="v4-home-cta">
        <div className="v4-wrap"><h2>Build the future<span>.</span><br /><em>Together.</em></h2><div><p>Choose the first problem. E2P connects the rest of the operating loop.</p><a href={E2P_LINKS.project("home_cta_v4")} className="v4-button v4-button-acid">Start a project <ArrowRight size={15} /></a></div></div>
      </section>
    </>
  );
}
