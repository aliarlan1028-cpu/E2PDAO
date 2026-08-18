import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, BadgeCheck, CalendarDays, ChartNoAxesCombined, Handshake, Megaphone, ScanSearch, ShieldCheck, Sparkles, Users } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = { title:"KOL Marketplace & Campaign Operations | E2PDAO", description:"E2P matches Web3 projects with verified creator resources and runs campaigns from brief to review.", alternates:{canonical:"/influence/"} };

const CREATORS = [
  {image:"/people/creator-02.jpg",name:"APAC DeFi Educator",market:"ASIA",language:"EN / ZH",channel:"X / YOUTUBE",fit:"Deep education · launch context"},
  {image:"/people/creator-01.jpg",name:"Global Web3 Host",market:"GLOBAL",language:"EN",channel:"VIDEO / X",fit:"Interview · brand storytelling"},
  {image:"/people/creator-04.jpg",name:"Trading Community Builder",market:"AFRICA",language:"EN",channel:"X / TELEGRAM",fit:"Community growth · activation"},
  {image:"/people/creator-03.jpg",name:"LATAM Product Storyteller",market:"LATAM",language:"ES / EN",channel:"YOUTUBE / X",fit:"Product education · regional reach"},
  {image:"/people/creator-05.jpg",name:"Asian Developer Educator",market:"ASIA",language:"KO / EN",channel:"X / VIDEO",fit:"Dev audience · technical adoption"},
];
const PACKAGES = [
  ["Launch & Mindshare","Build awareness and make the market understand the story.","/people/creator-02.jpg"],
  ["Community Growth","Turn relevant attention into an active qualified community.","/people/team-collaboration.jpg"],
  ["User Acquisition","Connect creator content to a measurable user action.","/people/creator-01.jpg"],
  ["Regional Expansion","Enter a market with native language and local context.","/people/creator-03.jpg"],
];
const WORKFLOW = [
  ["01","Brief","Goal, audience, market and formats"],["02","Verify","Creator evidence, fit and risk"],["03","Match","The right voices for the objective"],["04","Package","Deliverables, timing and offer"],["05","Launch","Publishing, pages and tracking"],["06","Review","Results and relationship memory"],
];

function HeroCollage() {
  return <div className="v4-kol-hero-collage"><img src="/people/creator-01.jpg" alt="Representative creator"/><img src="/people/creator-04.jpg" alt="Representative creator"/><img src="/people/creator-03.jpg" alt="Representative creator"/><img src="/people/creator-02.jpg" alt="Representative creator"/><div className="v4-kol-brief"><small>MATCHED PROJECT BRIEF</small><h3>APAC DeFi launch</h3><span>Education · recognition · qualified community</span><p><b>Verified fit</b><b>Clear deliverables</b><b>Campaign-ready</b></p><em>Matched by E2P <Sparkles size={12}/></em></div><i/><b>Right project.<br/>Right voice.</b></div>;
}

export default function InfluencePage(){return <>
  <section className="v4-kol-hero"><div className="v4-wrap v4-kol-hero-grid"><div><span className="v4-label">E2P KOL Marketplace</span><h1>The right<br/>project. The<br/>right voice<span>.</span></h1><p>E2P connects Web3 projects with evidence-backed creators—then turns the match into a clear package, coordinated campaign and repeat partnership.</p><div className="v4-hero-actions"><a href={E2P_LINKS.project("kol_v4")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a><a href={E2P_LINKS.kol("kol_v4")} className="v4-text-link">Join as a creator <ArrowUpRight size={14}/></a></div></div><HeroCollage/></div></section>

  <section className="v4-kol-doors"><article><div><span>FOR PROJECTS</span><h2>Find trusted creators. Plan clearly. Move together.</h2><p>Tell us the market, audience, objective and budget. E2P returns verified matches and one owned campaign track.</p><a href={E2P_LINKS.project("kol_project_door_v4")} className="v4-button v4-button-acid">Build a campaign <ArrowRight size={15}/></a></div><img src="/people/creator-02.jpg" alt="Representative project advisor"/></article><article><div><span>FOR CREATORS</span><h2>Qualified projects. Better partnerships. More access.</h2><p>Receive relevant projects, brand collaboration routes, event invitations and long-term opportunities.</p><a href={E2P_LINKS.kol("kol_creator_door_v4")} className="v4-button v4-button-acid">Join as a creator <ArrowRight size={15}/></a></div><img src="/people/creator-03.jpg" alt="Representative creator"/></article></section>

  <section className="v4-kol-network"><div className="v4-wrap"><header><span className="v4-label">Creator network</span><h2>Diverse voices. Aligned impact.</h2><p>Every recommendation combines public evidence with protected relationship knowledge.</p></header><div className="v4-creator-grid">{CREATORS.map((creator)=><article key={creator.name}><div><img src={creator.image} alt="Representative creator profile"/><span>Representative</span></div><h3>{creator.name}</h3><dl><dt>Market</dt><dd>{creator.market}</dd><dt>Language</dt><dd>{creator.language}</dd><dt>Channel</dt><dd>{creator.channel}</dd><dt>Best for</dt><dd>{creator.fit}</dd></dl><ArrowUpRight size={16}/></article>)}</div><p className="v4-kol-private-note">Private contacts, internal pricing and relationship notes stay protected. Profiles above illustrate the matching structure.</p></div></section>

  <section className="v4-kol-workflow"><div className="v4-wrap"><header><span className="v4-label">How it works</span><h2>Built for clarity.<br/>Designed for results.</h2></header><div>{WORKFLOW.map(([index,title,text],itemIndex)=><article key={title}><i>{index}</i><div>{itemIndex===0?<ScanSearch/>:itemIndex===1?<ShieldCheck/>:itemIndex===2?<Users/>:itemIndex===3?<Sparkles/>:itemIndex===4?<Megaphone/>:<ChartNoAxesCombined/>}</div><h3>{title}</h3><p>{text}</p>{itemIndex<WORKFLOW.length-1&&<ArrowRight/>}</article>)}</div></div></section>

  <section className="v4-kol-packages"><div className="v4-wrap v4-kol-packages-grid"><header><span className="v4-label">Campaign packages</span><h2>Goal-based.<br/>Creator-powered.</h2><p>Start with what the project needs. Then choose the voices, formats and operating rhythm.</p><a href={E2P_LINKS.project("kol_package_v4")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a></header><div>{PACKAGES.map(([title,text,image],index)=><article key={title}><img src={image} alt=""/><span>0{index+1}</span><h3>{title}</h3><p>{text}</p><ul>{index===0?<><li>Narrative education</li><li>Launch content</li><li>Mindshare review</li></>:index===1?<><li>Regional creators</li><li>Community entry</li><li>Retention loop</li></>:index===2?<><li>Creator pages</li><li>Tracking links</li><li>Conversion review</li></>:<><li>Native language</li><li>Local formats</li><li>Long-term partners</li></>}</ul></article>)}</div></div></section>

  <section className="v4-kol-opportunities"><div className="v4-wrap v4-kol-opportunity-grid"><header><span className="v4-label">Creator opportunities</span><h2>Your next chapter starts here.</h2><p>Access qualified work without reducing your value to a rate card.</p><a href={E2P_LINKS.kol("kol_opportunity_v4")} className="v4-button v4-button-acid">Join as a creator <ArrowRight size={15}/></a></header><div><article><Users/><h3>Qualified projects</h3><p>Work with vetted opportunities aligned to your audience and format.</p></article><article><Handshake/><h3>Paid partnerships</h3><p>Clear scope, timing, assets, approvals and accountable coordination.</p></article><article><CalendarDays/><h3>Events & invitations</h3><p>Selected AMAs, spaces, conferences and ecosystem activations.</p></article><article><BadgeCheck/><h3>Ambassador roles</h3><p>Turn verified delivery into repeat work and long-term representation.</p></article></div></div></section>

  <section className="v4-kol-operations"><div className="v4-wrap"><header><span className="v4-label">Campaign operations</span><h2>From content to impact.<br/>Measured together.</h2><p>One shared source of truth connects the brief, assets, publishing and review.</p></header><div>{[["01","Content","Right story, format and language"],["02","Traffic","Relevant visits and audience context"],["03","Action","Engagement, submissions and conversion"],["04","Value","Outcome review and repeat fit"]].map(([index,title,text])=><article key={title}><i>{index}</i><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

  <section className="v4-kol-cta"><img src="/people/creator-02.jpg" alt=""/><div><h2>The right project. The right voice.</h2><p>Make the match clear, then operate it properly.</p><span><a href={E2P_LINKS.project("kol_final_v4")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a><a href={E2P_LINKS.kol("kol_final_v4")} className="v4-button">Join as a creator <ArrowRight size={15}/></a></span></div><img src="/people/creator-03.jpg" alt=""/></section>
</>}
