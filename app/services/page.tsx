import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, BadgeDollarSign, Box, ChartNoAxesCombined, Check, Crosshair, Droplets, FileCheck2, Globe2, ListChecks, Search, Send, ShieldCheck, SquareArrowOutUpRight, Target, UsersRound, Wrench } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = { title:"Project Incubator & Listing BD | E2PDAO", description:"E2P diagnoses project gaps, improves quality, designs the route and owns listing BD follow-up.", alternates:{canonical:"/services/"} };

const IMPROVEMENTS = [
  {icon:Crosshair,title:"Strategic Positioning",text:"Clear value proposition and exchange-fit narrative."},
  {icon:BadgeDollarSign,title:"Token & Economics",text:"Sustainable token design, utilities and emissions."},
  {icon:ShieldCheck,title:"Transparency & Trust",text:"Docs, disclosures, governance and audit readiness."},
  {icon:UsersRound,title:"Market Readiness",text:"Narrative, go-to-market plan and community strength."},
  {icon:Droplets,title:"Liquidity & Market Quality",text:"Liquidity architecture and market-making readiness."},
  {icon:FileCheck2,title:"Operations & Compliance",text:"Entity, legal, KYC/AML readiness and policies."},
];
const PATH = [
  {icon:Search,title:"Diagnose",text:"Deep-dive review of project quality, gaps and exchange expectations."},
  {icon:ListChecks,title:"Prioritize",text:"Rank gaps by impact and build a focused upgrade roadmap."},
  {icon:Wrench,title:"Upgrade",text:"Execute improvements across product, tokenomics, docs and operations."},
  {icon:Target,title:"Match",text:"Match with the right exchanges and lanes based on fit and readiness."},
  {icon:Send,title:"Move",text:"Run BD, materials and due diligence through the exchange decision process."},
  {icon:ChartNoAxesCombined,title:"Coordinate",text:"If accepted, support launch coordination, market quality and the operating handoff."},
];
const EXCHANGES = [["OKX","/OKX.png"],["Bybit","/Bybit.png"],["Gate.io","/Gate.io.png"],["Bitget","/Bitget Logo.png"],["MEXC","/MEXC.png"],["KuCoin","/Kucoin.png"],["HTX","/HTX.png"],["BingX","/Bingx.png"]];
const CASES = [
  {project:"CHAX",scope:"CEX listing coordination",result:"CHAX reached a centralized-exchange market and remains publicly traceable.",source:"Public market reference",href:"https://www.coinlore.com/coin/chax/exchanges"},
  {project:"HIRO",scope:"Listing preparation & coordination",result:"HIRO is publicly tracked with market information on CoinMarketCap.",source:"CoinMarketCap",href:"https://coinmarketcap.com/currencies/hiro/"},
  {project:"Virtuals",scope:"Public supply verification support",result:"VIRTUAL supply and market information is publicly tracked on CoinMarketCap.",source:"CoinMarketCap",href:"https://coinmarketcap.com/currencies/virtual-protocol/"},
  {project:"USBT",scope:"Listing advisory & coordination",result:"Gate announced the USBT Startup offering and trading launch in September 2024.",source:"Gate announcement",href:"https://www.gate.com/zh/announcements/article/39267/gate.io-startup-free-offering-universal-blockchain-token-usbt-and-announcement-of-free-distribution-rules-17-046-usbt-free-of-charge"},
];

function Diagnosis() {
  const gaps=["Unclear exchange narrative","Token utility needs proof","Thin liquidity plan","Incomplete disclosures"];
  const actions=["Reframe positioning","Stress-test token model","Design liquidity lanes","Close data-room gaps"];
  return <div className="v4-inc-diagnosis">
    <header><span>PROJECT DIAGNOSIS · ILLUSTRATIVE</span><b>SAMPLE REVIEW</b></header>
    <div className="v4-inc-diagnosis-body">
      <section><small>PROJECT / CURRENT STATE</small><h3>Illustrative project <em>Pre-listing review</em></h3><div className="v4-gap-columns"><div><b>PRIORITY GAPS</b>{gaps.map(item=><span key={item}>{item}</span>)}</div><div><b>NEXT ACTIONS</b>{actions.map(item=><span key={item}>{item}</span>)}</div></div></section>
      <aside><small>EXCHANGE-FIT SIGNAL</small><div className="v4-radar v4-radar-native"><i/><i/><i/><b/><span>PRODUCT</span><span>TOKEN</span><span>MARKET</span><span>TRUST</span><span>OPS</span></div><strong>58 / 100</strong><p>Promising fundamentals.<br/>Not ready for BD yet.</p></aside>
    </div>
    <footer><Check size={13}/><span>E2P turns every gap into an owned action.</span></footer>
  </div>;
}

function BDMap(){
  return <div className="v6-bd-map">
    <header><span>01 · EVIDENCE</span><span>02 · ROUTE DESIGN</span><span>03 · MANAGED PROCESS</span></header>
    <div className="v6-bd-flow">
      <section className="v6-bd-evidence"><small>PROJECT SIGNALS</small>{["Product & traction","Token & economics","Trust & compliance","Liquidity plan"].map(item=><span key={item}>{item}<Check size={13}/></span>)}</section>
      <section className="v6-bd-router"><div><img src="/e2p-icon-transparent.svg" alt=""/><small>E2P</small><b>BD<br/>Intelligence</b><em>FIT · TIMING · LANE</em></div><aside><span>Top-tier CEX <b>STRATEGIC</b></span><span>Growth CEX <b>PRIORITY</b></span><span>Regional CEX <b>EXPANSION</b></span><span>DEX route <b>LIQUIDITY</b></span></aside></section>
      <section className="v6-bd-process"><small>OWNED FOLLOW-UP</small><ol><li><i>01</i><span><b>Introduction</b><em>Right contact and context</em></span></li><li><i>02</i><span><b>Materials</b><em>Decision-ready evidence</em></span></li><li><i>03</i><span><b>Due diligence</b><em>Questions and updates</em></span></li><li><i>04</i><span><b>Exchange decision</b><em>Launch handoff if accepted</em></span></li></ol></section>
    </div>
    <footer><span>PROJECT EVIDENCE</span><i/><b>E2P ROUTING</b><i/><span>EXCHANGE DECISION</span></footer>
  </div>;
}

export default function ServicesPage() {
  return <>
    <section className="v4-inc-hero"><div className="v4-wrap v4-inc-hero-grid"><div><span className="v4-label">E2P Project Incubator</span><h1>Build the project.<br />Move the listing<span>.</span></h1><p>E2P closes the gap between a project&apos;s current state and what exchanges evaluate. We diagnose, upgrade and coordinate listing BD through the exchange decision—and, if accepted, the launch process.</p><div className="v4-hero-actions"><a href={E2P_LINKS.project("inc_v4")} className="v4-button v4-button-acid">Start project evaluation <ArrowRight size={15} /></a><a href="#project-path" className="v4-text-link">What we do <ArrowRight size={14} /></a></div></div><Diagnosis /></div></section>

    <section className="v4-inc-audience"><div className="v4-wrap"><header><h2>Who this is for</h2><p>Different stages.<br/>Same goal: exchange-ready.</p></header><div className="v4-inc-audience-grid"><article><Box/><span>01</span><h3>Early-stage builders</h3><p>Strong idea and product in development. Need the right foundation and story to reach exchanges.</p></article><article><SquareArrowOutUpRight/><span>02</span><h3>Growing projects</h3><p>Live product and community. Need to upgrade quality, structuring and market readiness.</p></article><article><Globe2/><span>03</span><h3>Expansion-ready teams</h3><p>Proven traction looking to expand. Need the right exchange mix and strategic BD execution.</p></article></div></div></section>

    <section className="v4-inc-improves"><div className="v4-wrap v4-inc-improves-grid"><header><h2>What E2P improves</h2><p>We upgrade the fundamentals exchanges evaluate.</p></header><div>{IMPROVEMENTS.map((item)=><article key={item.title}><item.icon/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

    <section id="project-path" className="v4-inc-path"><div className="v4-wrap"><header><span className="v4-label">Project path</span><h2>A clear six-stage route from gaps to continuous improvement.</h2></header><div className="v4-inc-path-grid">{PATH.map((item,index)=><article key={item.title}><span>0{index+1}</span><div><item.icon size={27}/></div><h3>{item.title}</h3><p>{item.text}</p>{index<PATH.length-1&&<ArrowRight className="v4-path-arrow" size={17}/>}</article>)}</div></div></section>

    <section id="listing-bd" className="v4-inc-bd"><div className="v4-wrap v4-inc-bd-layout"><header><span className="v4-label">Listing BD Intelligence</span><h2>We connect project evidence to suitable exchange lanes and manage the BD follow-up.</h2><aside><b>We manage the process</b><p>We support conversations, due diligence and updates through the exchange decision. If accepted, we coordinate the launch handoff.</p></aside></header><BDMap/><p className="v5-listing-disclaimer">Exchange acceptance is determined independently by each exchange after its own review. E2P advisory and BD support do not guarantee a listing.</p></div></section>

    <section id="network" className="v4-inc-network"><div className="v4-wrap"><header><h2>Exchange target & resource landscape</h2><p>Coverage for exchange research, listing preparation and cross-functional execution.</p></header><div className="v4-logo-grid">{EXCHANGES.map(([name,src])=><div key={name}><img src={src} alt={name}/></div>)}</div><div className="v4-network-tags"><span>Liquidity resources</span><span>Market makers</span><span>KOL & media</span><span>Audit & security</span><span>Legal & compliance</span><span>Advisors & BD</span></div><p className="v5-logo-disclaimer">Exchange logos identify common listing targets for market mapping. They do not imply endorsement, partnership, acceptance or a guaranteed listing.</p></div></section>

    <section id="cases" className="v4-inc-cases"><div className="v4-wrap"><header><span className="v4-label">04 / Proven work</span><h2>Case outcomes</h2><p>Four E2P engagements with public outcome references. The linked sources verify the public project result; engagement scope is confirmed by E2P.</p></header><div>{CASES.map((item,index)=><a className="v5-case-card" key={item.project} href={item.href} target="_blank" rel="noreferrer"><span>0{index+1} · E2P ENGAGEMENT</span><h3>{item.project}</h3><small>SCOPE</small><p>{item.scope}</p><small>PUBLIC OUTCOME</small><b>{item.result}</b><footer>{item.source}<ArrowUpRight size={13}/></footer></a>)}</div></div></section>

    <section className="v4-inc-cta"><div className="v4-wrap"><h2>Start project evaluation</h2><p>Let&apos;s build your path to the next market decision.</p><a href={E2P_LINKS.project("inc_cta_v4")} className="v4-button v4-button-dark">Get started <ArrowRight size={15}/></a></div></section>
  </>;
}
