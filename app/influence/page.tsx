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

function CreatorSignalBoard(){
  return <div className="v5-kol-signal-board">
    <header><span>PUBLIC CREATOR SIGNAL</span><b><i/> W3CLAW SOURCES CHECKED</b></header>
    <div className="v5-kol-signal-summary"><section><small>PUBLIC PROFILES</small><strong>04</strong></section><section><small>DISPLAYED FOLLOWERS</small><strong>1.9M+</strong></section><section><small>MARKETS</small><strong>04</strong></section></div>
    <div className="v5-kol-signal-list">{CREATORS.map((creator,index)=><a href={creator.href} target="_blank" rel="noreferrer" key={creator.name}><i>0{index+1}</i><span><b>{creator.name}</b><small>{creator.market} · {creator.channels.join(" / ")}</small></span><em>{creator.followers}<small>FOLLOWERS</small></em><strong>{creator.engagement}<small>ENG.</small></strong><ArrowUpRight size={14}/></a>)}</div>
    <footer><span>Creator-maintained public profiles</span><span>Checked 18 Aug 2026 · counts are not audience-deduplicated</span></footer>
  </div>;
}

export default function InfluencePage(){return <>
  <section className="v4-kol-hero v5-kol-hero"><div className="v4-wrap v4-kol-hero-grid"><div><span className="v4-label">E2P KOL Marketplace</span><h1>The right<br/>project. The<br/>right voice<span>.</span></h1><p>E2P turns creator discovery into an operated growth channel—using public data, verified project context and accountable campaign delivery.</p><div className="v4-hero-actions"><a href={E2P_LINKS.project("kol_hero_v6")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a><a href="#creator-network" className="v4-text-link">View creator data <ArrowRight size={14}/></a></div></div><CreatorSignalBoard/></div></section>

  <section className="v4-kol-doors v5-kol-doors"><article id="for-projects"><div><span>FOR PROJECTS</span><h2>Find creators by evidence—not profile photos.</h2><p>Define the market, audience, channel and action. E2P turns that brief into a qualified creator shortlist and an operated campaign.</p><a href={E2P_LINKS.project("kol_project_door_v6")} className="v4-button v4-button-acid">Build a campaign <ArrowRight size={15}/></a></div><aside><ScanSearch/><b>MARKET</b><b>TOPIC</b><b>CHANNEL</b><b>ENGAGEMENT</b></aside></article><article id="for-creators"><div><span>FOR CREATORS</span><h2>Access qualified projects and clearer commercial terms.</h2><p>Show what your audience is good for, receive aligned opportunities and keep scope, timing and value visible.</p><a href={E2P_LINKS.kol("kol_creator_door_v6")} className="v4-button v4-button-acid">Join as a creator <ArrowRight size={15}/></a></div><aside><BadgeCheck/><b>VERIFIED BRIEF</b><b>PAID PARTNERSHIP</b><b>EVENT ACCESS</b><b>AMBASSADOR FIT</b></aside></article></section>

  <section id="creator-network" className="v4-kol-network v5-kol-network"><div className="v4-wrap"><header><span className="v4-label">Public creator data</span><h2>Real profiles.<br/>Comparable signals.</h2><p>These figures are shown exactly as displayed on the linked creator-maintained W3Claw profiles. Open any card to inspect the public source.</p></header><div className="v5-creator-grid">{CREATORS.map((creator,index)=><a href={creator.href} target="_blank" rel="noreferrer" key={creator.name}><header><span>0{index+1} · PUBLIC PROFILE</span><ExternalLink size={13}/></header><div className="v5-creator-name"><i>{creator.name.slice(0,2)}</i><span><h3>{creator.name}</h3><small>@{creator.handle}</small></span></div><div className="v5-creator-metrics"><span><small>FOLLOWERS</small><strong>{creator.followers}</strong></span><span><small>ENGAGEMENT</small><strong>{creator.engagement}</strong></span></div><dl><dt>Market</dt><dd>{creator.market}</dd><dt>Topics</dt><dd>{creator.topics}</dd><dt>Channels</dt><dd>{creator.channels.join(" · ")}</dd></dl><footer>View source on W3Claw <ArrowUpRight size={14}/></footer></a>)}</div><p className="v4-kol-private-note">Public snapshot checked 18 Aug 2026. Follower and engagement figures can change; final campaign fit and commercial terms require confirmation.</p></div></section>

  <section id="how-it-works" className="v4-kol-workflow"><div className="v4-wrap"><header><span className="v4-label">How it works</span><h2>Built for clarity.<br/>Designed for results.</h2></header><div>{WORKFLOW.map(([index,title,text],itemIndex)=><article key={title}><i>{index}</i><div>{itemIndex===0?<ScanSearch/>:itemIndex===1?<ShieldCheck/>:itemIndex===2?<Users/>:itemIndex===3?<Sparkles/>:itemIndex===4?<Megaphone/>:<ChartNoAxesCombined/>}</div><h3>{title}</h3><p>{text}</p>{itemIndex<WORKFLOW.length-1&&<ArrowRight/>}</article>)}</div></div></section>

  <section className="v4-kol-packages"><div className="v4-wrap v4-kol-packages-grid"><header><span className="v4-label">Campaign packages</span><h2>Goal-based.<br/>Creator-powered.</h2><p>Four operating packages built around the result a project needs—not a generic influencer list.</p><a href={E2P_LINKS.project("kol_package_v6")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a></header><div>{PACKAGES.map((item,index)=><article key={item.title}><span>0{index+1}</span><div className="v4-package-icon"><item.icon/></div><h3>{item.title}</h3><p>{item.text}</p><ul>{item.items.map(detail=><li key={detail}>{detail}</li>)}</ul></article>)}</div></div></section>

  <section className="v4-kol-opportunities"><div className="v4-wrap v4-kol-opportunity-grid"><header><span className="v4-label">Creator opportunities</span><h2>Your next chapter starts here.</h2><p>Access qualified projects, paid partnerships, event invitations and ambassador roles.</p><a href={E2P_LINKS.kol("kol_opportunity_v6")} className="v4-button v4-button-acid">Join as a creator <ArrowRight size={15}/></a></header><div>{OPPORTUNITIES.map((item,index)=><article key={item.title}><span>0{index+1}</span><item.icon/><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="v4-opportunity-arrow" size={15}/></article>)}</div></div></section>

  <section className="v4-kol-operations"><div className="v4-wrap"><header><span className="v4-label">Campaign operations</span><h2>From content to impact.<br/>Measured together.</h2><p>One shared source of truth connects the brief, assets, publishing and review.</p></header><div>{[["01","Content","Right story, format and language"],["02","Traffic","Relevant visits and audience context"],["03","Action","Engagement, submissions and conversion"],["04","Value","Outcome review and repeat fit"]].map(([index,title,text])=><article key={title}><i>{index}</i><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

  <section className="v5-kol-cta"><div className="v4-wrap"><Radio/><div><span>PROJECT × CREATOR × OPERATIONS</span><h2>The right match is only the beginning.</h2><p>E2P makes the data visible, the scope clear and the campaign accountable.</p></div><aside><a href={E2P_LINKS.project("kol_final_v6")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a><a href={E2P_LINKS.kol("kol_final_v6")} className="v4-text-link">Join as a creator <ArrowRight size={14}/></a></aside></div></section>
</>}
