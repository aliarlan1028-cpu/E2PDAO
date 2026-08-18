import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, BadgeCheck, CalendarDays, ChartNoAxesCombined, ExternalLink, Globe2, Handshake, Megaphone, Radio, Rocket, ScanSearch, ShieldCheck, Sparkles, Users } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title:"KOL Marketplace & Campaign Operations | E2PDAO",
  description:"E2P matches Web3 projects with public creator data and operates campaigns from brief to review.",
  alternates:{canonical:"/influence/"},
};

const CREATORS = [
  {name:"Crypto Banter",handle:"CryptoBanterGroup",market:"United States",followers:"1,180,000",engagement:"0.5%",topics:"Trading · Technical analysis · On-chain data",channels:["YouTube","X","Telegram"],href:"https://w3claw.xyz/card/crypto-banter-links"},
  {name:"토미의 트레이딩 TV",handle:"tommy_trading",market:"Korea",followers:"13,575",engagement:"3.5%",topics:"Trading · Technical analysis",channels:["Telegram","YouTube"],href:"https://w3claw.xyz/card/tv-links"},
  {name:"仮想通貨チャンネル — Joe Takayama",handle:"Joe_Bitcoin",market:"Japan",followers:"158,000",engagement:"0.26%",topics:"Trading · Technical analysis",channels:["YouTube","X"],href:"https://w3claw.xyz/card/%E4%BB%AE%E6%83%B3%E9%80%9A%E8%B2%A8-joe-takayama-links"},
  {name:"Selcoin",handle:"Selcoin",market:"Türkiye",followers:"554,000",engagement:"0.11%",topics:"Trading · Technical analysis",channels:["YouTube","X","Telegram"],href:"https://w3claw.xyz/card/selcoin-links"},
];

const CHANNEL_MIX = [
  ["YouTube",86],
  ["Telegram",58],
  ["X",44],
  ["TikTok + other",6],
] as const;

const MARKET_COVERAGE = [
  ["Türkiye",22],
  ["United States",19],
  ["Korea",15],
  ["India",14],
  ["Vietnam",14],
] as const;

const PACKAGES = [
  {title:"Launch & Mindshare",icon:Rocket,text:"Own the launch window with a coordinated narrative and trusted voices.",items:["Narrative design","Creator wave","Launch reporting"]},
  {title:"Community Growth",icon:Users,text:"Turn attention into an active, informed and durable community.",items:["Education content","Community activations","Retention loop"]},
  {title:"User Acquisition",icon:ChartNoAxesCombined,text:"Build creator-led acquisition around trackable actions—not vanity reach.",items:["Audience matching","Conversion briefs","Performance review"]},
  {title:"Regional Expansion",icon:Globe2,text:"Enter new markets with local context, language and credible operators.",items:["Market mapping","Local creators","Regional rollout"]},
];

const OPPORTUNITIES = [
  {title:"Qualified Projects",icon:ShieldCheck,text:"Verified teams, clear scope and genuine product context."},
  {title:"Paid Partnerships",icon:Handshake,text:"Transparent deliverables, timelines and commercial terms."},
  {title:"Events & Invitations",icon:CalendarDays,text:"Selected online and offline moments across our ecosystem."},
  {title:"Ambassador Roles",icon:Sparkles,text:"Longer-term partnerships where creator and project truly fit."},
];

const WORKFLOW = [
  ["01","Brief","Share goals, audiences and campaign needs."],
  ["02","Verify","Check project credentials, creator data and fit."],
  ["03","Match","Score market, topic, channel and audience alignment."],
  ["04","Package","Lock the plan, deliverables, timing and terms."],
  ["05","Launch","Operate content across the selected channels."],
  ["06","Review","Measure delivery, actions and repeat potential."],
];

function ResourceSignalBoard(){
  return <div className="v6-kol-resource-board">
    <header><span>KOL RESOURCE INTELLIGENCE</span><b><i/> GROWING LIBRARY</b></header>
    <div className="v6-kol-resource-summary">
      <section><small>KOL RECORDS</small><strong>114</strong><em>1 partnered</em></section>
      <section><small>EST. MAX-CHANNEL REACH</small><strong>23.0M</strong><em>not audience-deduplicated</em></section>
      <section><small>CHANNEL PROFILES</small><strong>194</strong><em>across 114 KOLs</em></section>
      <section><small>AVG. ENGAGEMENT</small><strong>2.5%</strong><em>110 valid records</em></section>
    </div>
    <div className="v6-kol-resource-body">
      <section><header><span>CHANNEL COVERAGE</span><b>194 PROFILES</b></header>{CHANNEL_MIX.map(([name,value])=><div key={name}><span>{name}</span><i><b style={{width:`${value}%`}}/></i><strong>{value}</strong></div>)}</section>
      <section><header><span>LEADING MARKETS</span><b>RESOURCE COUNT</b></header>{MARKET_COVERAGE.map(([name,value])=><div key={name}><span>{name}</span><i><b style={{width:`${Math.round(value/22*100)}%`}}/></i><strong>{value}</strong></div>)}</section>
    </div>
    <footer><span>E2P resource snapshot · 18 Aug 2026</span><a href="#creator-network">See 4 public profile examples <ArrowRight size={13}/></a></footer>
  </div>;
}

export default function InfluencePage(){return <>
  <section className="v4-kol-hero v5-kol-hero v6-kol-hero"><div className="v4-wrap v4-kol-hero-grid"><div><span className="v4-label">E2P KOL Marketplace</span><h1>The right<br/>project. The<br/>right voice<span>.</span></h1><p>E2P turns a growing KOL resource library into an operated growth channel—matching market, topic, channel and campaign fit from brief through review.</p><div className="v4-hero-actions"><a href={E2P_LINKS.project("kol_hero_v6")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a><a href="#creator-network" className="v4-text-link">View public examples <ArrowRight size={14}/></a></div></div><ResourceSignalBoard/></div></section>

  <section className="v4-kol-doors v5-kol-doors"><article id="for-projects"><div><span className="v8-kol-door-label"><i>01</i> FOR PROJECTS</span><h2>Find creators by evidence—not profile photos.</h2><p>Define the market, audience, channel and action. E2P turns that brief into a qualified creator shortlist and an operated campaign.</p><a href={E2P_LINKS.project("kol_project_door_v6")} className="v4-button v4-button-acid">Build a campaign <ArrowRight size={15}/></a></div><aside><ScanSearch/><b>MARKET</b><b>TOPIC</b><b>CHANNEL</b><b>ENGAGEMENT</b></aside></article><article id="for-creators"><div><span className="v8-kol-door-label"><i>02</i> FOR CREATORS</span><h2>Access qualified projects and clearer commercial terms.</h2><p>Show what your audience is good for, receive aligned opportunities and keep scope, timing and value visible.</p><a href={E2P_LINKS.kol("kol_creator_door_v6")} className="v4-button v4-button-acid">Join as a creator <ArrowRight size={15}/></a></div><aside><BadgeCheck/><b>VERIFIED BRIEF</b><b>PAID PARTNERSHIP</b><b>EVENT ACCESS</b><b>AMBASSADOR FIT</b></aside></article></section>

  <section id="creator-network" className="v4-kol-network v5-kol-network"><div className="v4-wrap"><header><span className="v4-label">Featured public examples</span><h2>Four profiles.<br/>One larger network.</h2><p>These four source-linked profiles demonstrate the data used in matching; they are not the full E2P KOL resource library. Open any card to inspect the creator-maintained W3Claw source.</p></header><div className="v5-creator-grid">{CREATORS.map((creator,index)=><a href={creator.href} target="_blank" rel="noreferrer" key={creator.name}><header><span>0{index+1} · FEATURED PUBLIC PROFILE</span><ExternalLink size={13}/></header><div className="v5-creator-name"><i>{creator.name.slice(0,2)}</i><span><h3>{creator.name}</h3><small>@{creator.handle}</small></span></div><div className="v5-creator-metrics"><span><small>FOLLOWERS</small><strong>{creator.followers}</strong></span><span><small>ENGAGEMENT</small><strong>{creator.engagement}</strong></span></div><dl><dt>Market</dt><dd>{creator.market}</dd><dt>Topics</dt><dd>{creator.topics}</dd><dt>Channels</dt><dd>{creator.channels.join(" · ")}</dd></dl><footer>View source on W3Claw <ArrowUpRight size={14}/></footer></a>)}</div><p className="v4-kol-private-note">Four featured public examples checked 18 Aug 2026. The broader resource snapshot contains 114 KOL records. Follower and engagement figures can change; final campaign fit and commercial terms require confirmation.</p></div></section>

  <section id="how-it-works" className="v4-kol-workflow"><div className="v4-wrap"><header><span className="v8-kol-section-label"><i>03</i> How it works</span><h2>Built for clarity.<br/>Designed for results.</h2></header><div>{WORKFLOW.map(([index,title,text],itemIndex)=><article key={title}><i>{index}</i><div>{itemIndex===0?<ScanSearch/>:itemIndex===1?<ShieldCheck/>:itemIndex===2?<Users/>:itemIndex===3?<Sparkles/>:itemIndex===4?<Megaphone/>:<ChartNoAxesCombined/>}</div><h3>{title}</h3><p>{text}</p>{itemIndex<WORKFLOW.length-1&&<ArrowRight/>}</article>)}</div></div></section>

  <section className="v4-kol-packages"><div className="v4-wrap v4-kol-packages-grid"><header><span className="v8-kol-section-label"><i>04</i> Campaign packages</span><h2>Goal-based.<br/>Creator-powered.</h2><p>Four operating packages built around the result a project needs—not a generic influencer list.</p><a href={E2P_LINKS.project("kol_package_v6")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a></header><div>{PACKAGES.map((item,index)=><article key={item.title}><span>0{index+1}</span><div className="v4-package-icon"><item.icon/></div><h3>{item.title}</h3><p>{item.text}</p><ul>{item.items.map(detail=><li key={detail}>{detail}</li>)}</ul></article>)}</div></div></section>

  <section className="v4-kol-opportunities"><div className="v4-wrap v4-kol-opportunity-grid"><header><span className="v8-kol-section-label"><i>05</i> Creator opportunities</span><h2>Your next chapter starts here.</h2><p>Access qualified projects, paid partnerships, event invitations and ambassador roles.</p><a href={E2P_LINKS.kol("kol_opportunity_v6")} className="v4-button v4-button-acid">Join as a creator <ArrowRight size={15}/></a></header><div>{OPPORTUNITIES.map((item,index)=><article key={item.title}><span>0{index+1}</span><item.icon/><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="v4-opportunity-arrow" size={15}/></article>)}</div></div></section>

  <section className="v4-kol-operations"><div className="v4-wrap"><header><span className="v8-kol-section-label"><i>06</i> Campaign operations</span><h2>From content to impact.<br/>Measured together.</h2><p>One shared source of truth connects the brief, assets, publishing and review.</p></header><div>{[["01","Content","Right story, format and language"],["02","Traffic","Relevant visits and audience context"],["03","Action","Engagement, submissions and conversion"],["04","Value","Outcome review and repeat fit"]].map(([index,title,text])=><article key={title}><i>{index}</i><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

  <section className="v5-kol-cta"><div className="v4-wrap"><Radio/><div><span>PROJECT × CREATOR × OPERATIONS</span><h2>The right match is only the beginning.</h2><p>E2P makes the data visible, the scope clear and the campaign accountable.</p></div><aside><a href={E2P_LINKS.project("kol_final_v6")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a><a href={E2P_LINKS.kol("kol_final_v6")} className="v4-text-link">Join as a creator <ArrowRight size={14}/></a></aside></div></section>
</>}
