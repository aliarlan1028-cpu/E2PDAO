import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, Megaphone, ScanSearch, ShieldCheck, Sparkles, Users } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = { title:"KOL Marketplace & Campaign Operations | E2PDAO", description:"E2P matches Web3 projects with verified creator resources and runs campaigns from brief to review.", alternates:{canonical:"/influence/"} };

const CREATORS = [
  {image:"/people/creator-02.jpg",name:"Kai Chen",role:"Research Educator",market:"ASIA",language:"EN / 中文",channel:"YOUTUBE / X",fit:"Deep explains · product trust"},
  {image:"/people/creator-01.jpg",name:"Aisha Kapoor",role:"DeFi Educator",market:"GLOBAL",language:"EN",channel:"X / NEWSLETTER",fit:"Onchain education · context & trust"},
  {image:"/people/creator-04.jpg",name:"Jamal Okoye",role:"Community Builder",market:"AFRICA",language:"EN",channel:"X / TELEGRAM",fit:"Community growth · activation"},
  {image:"/people/creator-03.jpg",name:"Lucia Morales",role:"Web3 Storyteller",market:"LATAM",language:"ES / EN",channel:"YOUTUBE / IG",fit:"Brand storytelling · cultural relevance"},
  {image:"/people/creator-05.jpg",name:"Minseo Park",role:"DevRel Engineer",market:"ASIA",language:"KO / EN",channel:"X / YOUTUBE",fit:"Dev audiences · product adoption"},
];
const PACKAGES = [
  ["Launch & Mindshare","/concept-art/kol/package-launch.png"],
  ["Community Growth","/concept-art/kol/package-community.png"],
  ["User Acquisition","/concept-art/kol/package-acquisition.png"],
  ["Regional Expansion","/concept-art/kol/package-regional.png"],
];
const OPPORTUNITIES = [
  ["Qualified Projects","/concept-art/kol/opportunity-projects.png"],
  ["Paid Partnerships","/concept-art/kol/opportunity-partnerships.png"],
  ["Events & Invitations","/concept-art/kol/opportunity-events.png"],
  ["Ambassador Roles","/concept-art/kol/opportunity-ambassador.png"],
];
const WORKFLOW = [
  ["01","Brief","Share goals, audiences and campaign needs."],["02","Verify","We verify project credentials and fit."],["03","Match","Our system and experts match the right voices."],["04","Package","Co-create the plan, deliverables and flow."],["05","Launch","Campaign goes live across the right channels."],["06","Review","Measure what matters and learn together."],
];

function HeroCollage() {
  return <div className="v4-kol-hero-collage v4-kol-hero-collage-concept"><img src="/concept-art/kol/hero-collage.png" alt="A diverse creator group matched to the Permissionless Wallet project brief"/></div>;
}

export default function InfluencePage(){return <>
  <section className="v4-kol-hero"><div className="v4-wrap v4-kol-hero-grid"><div><span className="v4-label">E2P KOL Marketplace</span><h1>The right<br/>project. The<br/>right voice<span>.</span></h1><p>E2P connects projects with the right creators to build trust, attention and action—onchain and off.</p></div><HeroCollage/></div></section>

  <section className="v4-kol-doors"><article id="for-projects"><div><span>FOR PROJECTS</span><h2>Find trusted creators, plan campaigns and drive real outcomes.</h2><a href={E2P_LINKS.project("kol_project_door_v4")} className="v4-button v4-button-acid">Build a campaign <ArrowRight size={15}/></a></div><img src="/people/creator-02.jpg" alt="Representative project advisor"/></article><article id="for-creators"><div><span>FOR CREATORS</span><h2>Discover qualified projects, brand partnerships and event invitations.</h2><a href={E2P_LINKS.kol("kol_creator_door_v4")} className="v4-button v4-button-acid">Join as a creator <ArrowRight size={15}/></a></div><img src="/people/creator-03.jpg" alt="Representative creator"/></article></section>

  <section id="creator-network" className="v4-kol-network"><div className="v4-wrap"><header><span className="v4-label">Creator network</span><h2>Diverse voices. Aligned impact.</h2><p>Our network spans cultures, languages and communities. Every creator is vetted for quality, authenticity and fit.</p></header><div className="v4-creator-grid">{CREATORS.map((creator)=><article key={creator.name}><div><img src={creator.image} alt="Representative creator profile"/><span>Representative</span></div><h3>{creator.name}</h3><small>{creator.role}</small><dl><dt>Market</dt><dd>{creator.market}</dd><dt>Language</dt><dd>{creator.language}</dd><dt>Channel</dt><dd>{creator.channel}</dd><dt>Best for</dt><dd>{creator.fit}</dd></dl><ArrowUpRight size={16}/></article>)}</div><p className="v4-kol-private-note">Explore more creators →</p></div></section>

  <section id="how-it-works" className="v4-kol-workflow"><div className="v4-wrap"><header><span className="v4-label">How it works</span><h2>Built for clarity.<br/>Designed for results.</h2></header><div>{WORKFLOW.map(([index,title,text],itemIndex)=><article key={title}><i>{index}</i><div>{itemIndex===0?<ScanSearch/>:itemIndex===1?<ShieldCheck/>:itemIndex===2?<Users/>:itemIndex===3?<Sparkles/>:itemIndex===4?<Megaphone/>:<ChartNoAxesCombined/>}</div><h3>{title}</h3><p>{text}</p>{itemIndex<WORKFLOW.length-1&&<ArrowRight/>}</article>)}</div></div></section>

  <section className="v4-kol-packages"><div className="v4-wrap v4-kol-packages-grid"><header><span className="v4-label">Campaign packages</span><h2>Goal-based.<br/>Creator-powered.</h2><p>Flexible packages to meet your goals. Matched with creators who move your audience and your mission.</p><a href={E2P_LINKS.project("kol_package_v4")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a></header><div>{PACKAGES.map(([title,image])=><article className="v4-kol-concept-card" key={title}><img src={image} alt={`${title} campaign package`}/></article>)}</div></div></section>

  <section className="v4-kol-opportunities"><div className="v4-wrap v4-kol-opportunity-grid"><header><span className="v4-label">Creator opportunities</span><h2>Your next chapter starts here.</h2><p>Access qualified projects, paid partnerships, event invitations and ambassador roles.</p><a href={E2P_LINKS.kol("kol_opportunity_v4")} className="v4-button v4-button-acid">Join as a creator <ArrowRight size={15}/></a></header><div>{OPPORTUNITIES.map(([title,image])=><article className="v4-kol-concept-card" key={title}><img src={image} alt={`${title} creator opportunity`}/></article>)}</div></div></section>

  <section className="v4-kol-operations"><div className="v4-wrap"><header><span className="v4-label">Campaign operations</span><h2>From content to impact.<br/>Measured together.</h2><p>One shared source of truth connects the brief, assets, publishing and review.</p></header><div>{[["01","Content","Right story, format and language"],["02","Traffic","Relevant visits and audience context"],["03","Action","Engagement, submissions and conversion"],["04","Value","Outcome review and repeat fit"]].map(([index,title,text])=><article key={title}><i>{index}</i><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

  <section className="v4-kol-cta"><img src="/people/creator-02.jpg" alt=""/><div><h2>The right project. The right voice.</h2><p>Make the match clear, then operate it properly.</p><span><a href={E2P_LINKS.project("kol_final_v4")} className="v4-button v4-button-dark">Build a campaign <ArrowRight size={15}/></a><a href={E2P_LINKS.kol("kol_final_v4")} className="v4-button">Join as a creator <ArrowRight size={15}/></a></span></div><img src="/people/creator-03.jpg" alt=""/></section>
</>}
