import type { Metadata } from "next";
import { ArrowRight, Handshake, LockKeyhole, MessageSquare, Radar, RefreshCw, Search, ShieldCheck, Sprout, Target, Users } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = { title:"About E2P DAO | Evidence to Execution", description:"E2P is one operating network connecting project quality, creator distribution and disciplined market intelligence.", alternates:{canonical:"/about/"} };

const PRINCIPLES=[
  {index:"01",title:"Evidence before opinion.",text:"We start with facts, not narrative. We seek first-principles understanding, test assumptions and let data—not hype—shape our decisions.",visual:"evidence"},
  {index:"02",title:"Ownership before handoff.",text:"We stay close to the work. Clear accountability, fast feedback and visible progress ensure nothing gets lost in translation.",visual:"ownership"},
  {index:"03",title:"Risk before action.",text:"We identify what can go wrong, define what we will not do, and size every bet so that survival is never in question.",visual:"risk"},
  {index:"04",title:"Learning after every cycle.",text:"We review outcomes honestly, capture lessons and improve the operating system. Each cycle makes the next one stronger.",visual:"learning"},
];

function AboutTriad(){return <div className="v4-about-triad"><i/><i/><i/><section><img src="/e2p-icon-transparent.svg" alt=""/><b>E2P</b><small>OPERATING NETWORK</small></section><article className="one"><Sprout/><b>Incubator</b><p>Build quality and create the path.</p></article><article className="two"><Users/><b>KOL Marketplace</b><p>Match trusted voices to real opportunities.</p></article><article className="three"><Radar/><b>Trading Agent</b><p>Turn context into risk-gated decisions.</p></article></div>}

function PrincipleVisual({type}:{type:string}){
  if(type==="evidence") return <div className="v4-principle-visual evidence"><div className="v4-proof-sheet"><b>01</b><i/><i/><i/><i/></div><Search/><span>LOOK CLOSER · VERIFY FIRST</span></div>;
  if(type==="ownership") return <div className="v4-principle-visual ownership"><img src="/people/team-collaboration.jpg" alt="Team collaborating"/><ArrowRight/><span>STAY CLOSE TO THE WORK</span></div>;
  if(type==="risk") return <div className="v4-principle-visual risk"><i/><i/><ShieldCheck/><span>DEFINE THE DOWNSIDE FIRST</span></div>;
  return <div className="v4-principle-visual learning"><RefreshCw/><b>REVIEW<br/>LEARN<br/>IMPROVE</b><span>EVERY CYCLE COMPOUNDS</span></div>;
}

export default function AboutPage(){return <>
  <section className="v4-about-hero"><div className="v4-wrap v4-about-hero-grid"><div><span className="v4-label">About E2P DAO</span><h1>Built for the<br/>hard part between<br/>ambition and <span>execution.</span></h1><p>E2P connects project quality, creator distribution and bounded AI trading in one operating network—so builders, creators and community members can move from evidence to accountable action.</p></div><AboutTriad/></div></section>

  <section className="v4-about-engines"><div className="v4-wrap"><header><h2>One network. Three operating engines.</h2><p>Each engine solves a clear job. Together they connect project readiness, creator-led growth and disciplined market intelligence.</p></header><div><article><i><Sprout/></i><span><b>Incubator</b><p>We diagnose listing gaps, improve project quality, design the route and coordinate exchange BD.</p></span></article><ArrowRight/><article><i><Users/></i><span><b>KOL Marketplace</b><p>We match project needs with creator resources and operate campaigns from brief through review.</p></span></article><ArrowRight/><article><i><Radar/></i><span><b>Trading Agent</b><p>We turn market context into structured plans, deterministic risk checks and controlled CEX execution.</p></span></article></div><footer>Evidence, decisions, actions and review strengthen the next cycle.</footer></div></section>

  <section id="principles" className="v4-about-principles"><div className="v4-wrap"><span className="v4-label">Operating principles</span><div>{PRINCIPLES.map((item)=><article key={item.title}><i>{item.index}</i><section><h2>{item.title}</h2><p>{item.text}</p></section><PrincipleVisual type={item.visual}/></article>)}</div></div></section>

  <section id="cycle" className="v4-about-cycle"><div className="v4-wrap"><header><span className="v4-label">Our operating cycle</span><h2>A simple loop we run constantly.</h2><p>It keeps the work clear, decisions grounded and improvement compounding.</p></header><div><article><Search/><h3>Evidence</h3><p>Gather signals. Validate what is real.</p></article><ArrowRight/><article><Target/><h3>Decision</h3><p>Choose the path. Define constraints.</p></article><ArrowRight/><article><ArrowRight/><h3>Action</h3><p>Execute with focus. Respect the plan.</p></article><ArrowRight/><article><RefreshCw/><h3>Review</h3><p>Measure outcomes. Capture lessons.</p></article></div></div></section>

  <section className="v4-about-standards"><div className="v4-wrap"><span className="v4-label">Our standards and commitments</span><div><article><MessageSquare/><h3>Truthful claims</h3><p>We communicate clearly and accurately. No misleading promises, no hidden agendas.</p></article><article><Handshake/><h3>Protected relationships</h3><p>We respect the people and communities we work with. Trust is earned and protected.</p></article><article><LockKeyhole/><h3>Narrow permissions</h3><p>Access is granted by need, not by role. We limit risk by design.</p></article><article><ShieldCheck/><h3>Measurable work</h3><p>We define success up front and report on what actually moves the needle.</p></article></div></div></section>

  <section id="participate" className="v4-about-participate"><div className="v4-wrap"><span className="v4-label">Ways to participate</span><div><a href={E2P_LINKS.project("about_project_v4")}><Sprout/><h3>Projects</h3><p>Teams can use the Incubator to strengthen project quality and prepare a credible exchange path.</p><ArrowRight/></a><a href={E2P_LINKS.kol("about_creator_v4")}><Users/><h3>Creators</h3><p>KOLs and creators can access aligned project opportunities, campaigns, events and longer-term roles.</p><ArrowRight/></a><a href={E2P_LINKS.partner("about_partner_v4")}><Handshake/><h3>Partners</h3><p>Operators, exchanges and service providers can collaborate through clear mandates and shared work.</p><ArrowRight/></a><a href={E2P_LINKS.telegram}><Radar/><h3>Community</h3><p>Contribute research, review and feedback around the token-based trading community.</p><ArrowRight/></a></div></div></section>

  <section className="v4-about-cta"><div className="v4-wrap"><h2>Build with E2P</h2><p>If you care about doing the work and doing it right, there is a place for you in the network.</p><a href={E2P_LINKS.project("about_final_v4")} className="v4-button v4-button-acid">Build with E2P <ArrowRight size={15}/></a></div></section>
</>}
