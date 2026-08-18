import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, Check, ExternalLink, ListChecks, Search, Send, Target, Wrench } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = { title:"Project Incubator & Listing BD | E2PDAO", description:"E2P diagnoses project gaps, improves quality, designs the route and owns listing BD follow-up.", alternates:{canonical:"/services/"} };

const IMPROVEMENTS = [
  ["Strategic positioning","Clear value proposition and exchange-fit narrative."],
  ["Token & economics","Coherent utility, emissions and market logic."],
  ["Transparency & trust","Public materials, disclosures and verifiable evidence."],
  ["Market proof","Traction, community quality and source-backed signals."],
  ["Liquidity & market quality","Venue-specific liquidity and market support planning."],
  ["Operations & follow-up","Owners, timelines, decisions and the next conversation."],
];
const PATH = [
  {icon:Search,title:"Diagnose",text:"Project, token, traction and exchange expectation gaps."},
  {icon:ListChecks,title:"Prioritize",text:"Rank gaps by impact and build one decision path."},
  {icon:Wrench,title:"Upgrade",text:"Strengthen narrative, proof, assets and operations."},
  {icon:Target,title:"Match",text:"Map standards, fit, timing and the right exchange lanes."},
  {icon:Send,title:"Move",text:"Open routes and own the follow-up until the decision moves."},
  {icon:ChartNoAxesCombined,title:"Learn",text:"Turn feedback and outcomes into the next project cycle."},
];
const EXCHANGES = [["OKX","/OKX.png"],["Bybit","/Bybit.png"],["Gate.io","/Gate.io.png"],["Bitget","/Bitget Logo.png"],["MEXC","/MEXC.png"],["KuCoin","/Kucoin.png"],["HTX","/HTX.png"],["BingX","/Bingx.png"]];
const CASES = [
  ["CHAX","CEX listing coordination","Live and publicly tracked","CoinGecko","https://www.coingecko.com/en/coins/chax"],
  ["HIRO","Listing preparation and coordination","Listed with active markets","CoinMarketCap","https://coinmarketcap.com/currencies/hiro/#Markets"],
  ["Virtuals","Public supply verification support","Supply information publicly tracked","CoinMarketCap","https://coinmarketcap.com/currencies/virtual-protocol/"],
  ["USBT","Listing advisory and coordination","Listing publicly announced","Gate.io","https://www.gate.io/zh/announcements/article/39267"],
];

function Diagnosis() {
  return <div className="v4-inc-diagnosis">
    <header><span>PROJECT DIAGNOSIS · <b>ILLUSTRATIVE</b></span><em>Outcome: clear upgrade plan</em></header>
    <div className="v4-inc-diagnosis-body">
      <section><small>PROJECT</small><h3>DeFi infrastructure<br />Pre-TGE</h3><div className="v4-gap-columns"><div><b>GAPS IDENTIFIED</b><span>Token utility clarity</span><span>Market proof</span><span>Liquidity design</span><span>Target readiness</span></div><div><b>NEXT ACTIONS</b><span>Refine positioning</span><span>Verify evidence</span><span>Build market package</span><span>Prioritize venues</span></div></div></section>
      <aside><small>CURRENT STATE</small><div className="v4-radar"><i /><i /><i /><span>PRODUCT</span><span>MARKET</span><span>TRUST</span><span>OPS</span><b>E2P</b></div><p><i /> Current evidence<br /><i /> Exchange expectation</p></aside>
    </div>
    <footer><ArrowUpRight size={16} /> One project truth · One owned next move</footer>
  </div>;
}

export default function ServicesPage() {
  return <>
    <section className="v4-inc-hero"><div className="v4-wrap v4-inc-hero-grid"><div><span className="v4-label">E2P Project Incubator</span><h1>Build the project.<br />Move the listing<span>.</span></h1><p>E2P closes the gap between where your project is now and where exchanges say yes. We diagnose, upgrade and move—then own the BD until the listing is live.</p><div className="v4-hero-actions"><a href={E2P_LINKS.project("inc_v4")} className="v4-button v4-button-acid">Start project evaluation <ArrowRight size={15} /></a><a href="#project-path" className="v4-text-link">What we do <ArrowRight size={14} /></a></div></div><Diagnosis /></div></section>

    <section className="v4-inc-audience"><div className="v4-wrap"><header><h2>Who this is for</h2><p>Different stages. Same goal: a project the market can evaluate.</p></header><div className="v4-inc-audience-grid"><article><span>01</span><h3>Early-stage builders</h3><p>Strong idea and product in development, needing the right foundation and story.</p></article><article><span>02</span><h3>Growing projects</h3><p>Live product and community, needing stronger quality, proof and market materials.</p></article><article><span>03</span><h3>Expansion-ready teams</h3><p>Proven traction, looking for the right venue mix and disciplined BD execution.</p></article></div></div></section>

    <section className="v4-inc-improves"><div className="v4-wrap v4-inc-improves-grid"><header><h2>What E2P improves</h2><p>We strengthen the fundamentals exchanges evaluate.</p></header><div>{IMPROVEMENTS.map(([title,text],index)=><article key={title}><i>0{index+1}</i><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="project-path" className="v4-inc-path"><div className="v4-wrap"><header><span className="v4-label">Project path</span><h2>A clear six-stage route from gaps to continuous improvement.</h2></header><div className="v4-inc-path-grid">{PATH.map((item,index)=><article key={item.title}><span>0{index+1}</span><div><item.icon size={27}/></div><h3>{item.title}</h3><p>{item.text}</p>{index<PATH.length-1&&<ArrowRight className="v4-path-arrow" size={17}/>}</article>)}</div></div></section>

    <section className="v4-inc-bd"><div className="v4-wrap"><header><span className="v4-label">Listing BD Intelligence</span><h2>Evidence enters.<br />Owned follow-up leaves.</h2><p>We translate exchange standards into project actions, then keep every route, update and objection on one accountable track.</p></header><div className="v4-bd-map"><div><small>PROJECT EVIDENCE</small>{["Product & technology","Tokenomics & utility","Security & audit","Team & governance","Market & community","Compliance & operations","Liquidity plan"].map((item)=><span key={item}>{item}</span>)}</div><ArrowRight/><section><i/><b>E2P</b><strong>INTELLIGENCE</strong></section><ArrowRight/><div><small>EXCHANGE LANES</small>{["Top-tier CEX","Global growth CEX","Regional CEX","Specialized CEX","DEX / on-chain"].map((item)=><span key={item}>{item}</span>)}</div><ArrowRight/><aside><small>OWNED FOLLOW-UP</small>{["Intro & positioning","Due diligence","Materials & updates","Internal alignment","Objections resolved","Go-live support"].map((item)=><span key={item}><Check size={12}/>{item}</span>)}</aside></div><p className="v4-illustrative-note">Illustrative operating map. Exchange decisions remain independent and no listing outcome is guaranteed.</p></div></section>

    <section className="v4-inc-network"><div className="v4-wrap"><header><h2>Exchange & resource network</h2><p>Long-term relationships. Cross-functional support.</p></header><div className="v4-logo-grid">{EXCHANGES.map(([name,src])=><div key={name}><img src={src} alt={name}/></div>)}</div><div className="v4-network-tags"><span>Liquidity partners</span><span>Market makers</span><span>KOL & media</span><span>Audit & security</span><span>Legal & compliance</span><span>Advisors & BD</span></div></div></section>

    <section className="v4-inc-cases"><div className="v4-wrap"><header><h2>Public case outcomes</h2><p>Real projects with sources you can open. Results and scope vary by project.</p></header><div>{CASES.map(([project,scope,result,source,href])=><a key={project} href={href} target="_blank" rel="noreferrer"><span>PUBLIC REFERENCE</span><h3>{project}</h3><p>{scope}</p><b>{result}</b><footer>{source}<ExternalLink size={14}/></footer></a>)}</div></div></section>

    <section className="v4-inc-cta"><div className="v4-wrap"><h2>Start project evaluation</h2><p>Let&apos;s build your path to the next market decision.</p><a href={E2P_LINKS.project("inc_cta_v4")} className="v4-button v4-button-dark">Get started <ArrowRight size={15}/></a></div></section>
  </>;
}
