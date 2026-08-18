import type { Metadata } from "next";
import { ArrowRight, BadgeDollarSign, Box, ChartNoAxesCombined, Crosshair, Droplets, FileCheck2, Globe2, ListChecks, Search, Send, ShieldCheck, SquareArrowOutUpRight, Target, UsersRound, Wrench } from "lucide-react";
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
  {icon:Send,title:"Move",text:"Run BD, materials and due diligence until the listing is live."},
  {icon:ChartNoAxesCombined,title:"Learn",text:"Post-listing review and optimization for liquidity and growth."},
];
const EXCHANGES = [["OKX","/OKX.png"],["Bybit","/Bybit.png"],["Gate.io","/Gate.io.png"],["Bitget","/Bitget Logo.png"],["MEXC","/MEXC.png"],["KuCoin","/Kucoin.png"],["HTX","/HTX.png"],["BingX","/Bingx.png"]];
const CASES = [
  ["NEXORA","Upgraded tokenomics, transparency and market readiness. Matched with appropriate exchanges and supported to successful listing.","Outcome: Listed on top-tier CEX","/success-cases"],
  ["LUMINA","Strengthened go-to-market, community and liquidity design. Ran BD and due diligence through to listing.","Outcome: Listed on global CEX","/success-cases"],
  ["SOLVEX","Enhanced compliance, disclosures and market fit. Executed BD and materials until listing.","Outcome: Listed on international CEX","/success-cases"],
];

function Diagnosis() {
  return <div className="v4-inc-diagnosis v4-inc-diagnosis-concept"><img src="/concept-art/incubator/diagnosis.png" alt="Illustrative Orion Protocol project diagnosis showing gaps, next actions and exchange expectations" /></div>;
}

export default function ServicesPage() {
  return <>
    <section className="v4-inc-hero"><div className="v4-wrap v4-inc-hero-grid"><div><span className="v4-label">E2P Project Incubator</span><h1>Build the project.<br />Move the listing<span>.</span></h1><p>E2P closes the gap between where your project is now and where exchanges say yes. We diagnose, upgrade and move—then own the BD until the listing is live.</p><div className="v4-hero-actions"><a href={E2P_LINKS.project("inc_v4")} className="v4-button v4-button-acid">Start project evaluation <ArrowRight size={15} /></a><a href="#project-path" className="v4-text-link">What we do <ArrowRight size={14} /></a></div></div><Diagnosis /></div></section>

    <section className="v4-inc-audience"><div className="v4-wrap"><header><h2>Who this is for</h2><p>Different stages.<br/>Same goal: exchange-ready.</p></header><div className="v4-inc-audience-grid"><article><Box/><span>01</span><h3>Early-stage builders</h3><p>Strong idea and product in development. Need the right foundation and story to reach exchanges.</p></article><article><SquareArrowOutUpRight/><span>02</span><h3>Growing projects</h3><p>Live product and community. Need to upgrade quality, structuring and market readiness.</p></article><article><Globe2/><span>03</span><h3>Expansion-ready teams</h3><p>Proven traction looking to expand. Need the right exchange mix and strategic BD execution.</p></article></div></div></section>

    <section className="v4-inc-improves"><div className="v4-wrap v4-inc-improves-grid"><header><h2>What E2P improves</h2><p>We upgrade the fundamentals exchanges evaluate.</p></header><div>{IMPROVEMENTS.map((item)=><article key={item.title}><item.icon/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

    <section id="project-path" className="v4-inc-path"><div className="v4-wrap"><header><span className="v4-label">Project path</span><h2>A clear six-stage route from gaps to continuous improvement.</h2></header><div className="v4-inc-path-grid">{PATH.map((item,index)=><article key={item.title}><span>0{index+1}</span><div><item.icon size={27}/></div><h3>{item.title}</h3><p>{item.text}</p>{index<PATH.length-1&&<ArrowRight className="v4-path-arrow" size={17}/>}</article>)}</div></div></section>

    <section id="listing-bd" className="v4-inc-bd"><div className="v4-wrap v4-inc-bd-layout"><header><span className="v4-label">Listing BD Intelligence</span><h2>We connect project evidence to the right exchange lanes and own the BD follow-up.</h2><aside><b>We own the follow-up</b><p>We run the conversations, answer due diligence, provide updates and remove roadblocks until the listing is live.</p></aside></header><img className="v4-bd-concept" src="/concept-art/incubator/bd-map.png" alt="Listing BD intelligence flow from project evidence through E2P intelligence to exchange lanes and owned follow-up"/></div></section>

    <section id="network" className="v4-inc-network"><div className="v4-wrap"><header><h2>Exchange & resource network</h2><p>Long-term relationships. Cross-functional support.</p></header><div className="v4-logo-grid">{EXCHANGES.map(([name,src])=><div key={name}><img src={src} alt={name}/></div>)}</div><div className="v4-network-tags"><span>Liquidity partners</span><span>Market makers</span><span>KOL & media</span><span>Audit & security</span><span>Legal & compliance</span><span>Advisors & BD</span></div></div></section>

    <section className="v4-inc-cases"><div className="v4-wrap"><header><h2>Case outcomes</h2><p>Real projects we&apos;ve supported to listing.<br/><br/>No performance claims.<br/>Results vary by project.</p></header><div>{CASES.map(([project,scope,result,href])=><a key={project} href={href}><span>PUBLIC REFERENCE</span><h3>{project}</h3><p>{scope}</p><b>{result}</b></a>)}<a className="v4-case-more" href="/success-cases"><img src="/concept-art/incubator/more-cases.png" alt="See more cases"/></a></div></div></section>

    <section className="v4-inc-cta"><div className="v4-wrap"><h2>Start project evaluation</h2><p>Let&apos;s build your path to the next market decision.</p><a href={E2P_LINKS.project("inc_cta_v4")} className="v4-button v4-button-dark">Get started <ArrowRight size={15}/></a></div></section>
  </>;
}
