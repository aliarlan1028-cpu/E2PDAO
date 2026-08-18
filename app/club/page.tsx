import type { Metadata } from "next";
import { Activity, ArrowRight, ArrowUpRight, Ban, BookOpen, Bot, BrainCircuit, ChartCandlestick, Check, CircleStop, Database, Eye, FileCheck2, KeyRound, LockKeyhole, MessageSquare, Radar, RefreshCw, Scale, ShieldCheck, Target, Users, Workflow } from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title:"E2P AI Trading System | Evidence Before Execution",
  description:"A bounded AI trading system connecting market facts, structured plans, hard risk gates, controlled execution and auditable review.",
  alternates:{canonical:"/club/"},
};

const CONTRACT="0x597716022fc149c2b89061d6ec6b5eac4a97bc20";
const CMC_URL="https://coinmarketcap.com/currencies/e2p-token/";

const STAGES=[
  {code:"SENSE",icon:Radar,title:"Sense market facts",text:"Normalize market, account, order and event data before analysis."},
  {code:"RECALL",icon:BookOpen,title:"Recall evidence",text:"Bring approved research, playbooks and counterarguments into context."},
  {code:"PLAN",icon:Workflow,title:"Structure a plan",text:"Bind thesis, entry, invalidation, stop, size and monitoring rules."},
  {code:"GUARD",icon:ShieldCheck,title:"Pass hard risk",text:"Check permissions, loss limits, liquidity, event windows and system health."},
  {code:"EXECUTE",icon:Target,title:"Act in scope",text:"Create an order intent only inside the user-approved execution boundary."},
  {code:"MONITOR",icon:Eye,title:"Monitor state",text:"Reconcile orders and positions while tracking protection and exceptions."},
  {code:"REVIEW",icon:RefreshCw,title:"Review the cycle",text:"Record decisions, fills, costs, rationale and lessons for the next cycle."},
];

const AUTHORITY_LAYERS=[
  {icon:Database,label:"TRUTH",title:"Context is sourced",text:"Market, account and order facts retain source, unit and time context."},
  {icon:BrainCircuit,label:"INTELLIGENCE",title:"Models propose",text:"Analysis creates a challengeable plan; it cannot define its own authority."},
  {icon:ShieldCheck,label:"AUTHORITY",title:"Code permits",text:"Deterministic gates decide if a plan may become an order intent."},
  {icon:Activity,label:"EXECUTION",title:"State is reconciled",text:"Submission, fills, protection and recovery remain explicit states."},
  {icon:FileCheck2,label:"EVIDENCE",title:"Outcomes stay reviewable",text:"Inputs, decisions, actions and costs form an auditable cycle."},
];

const SYSTEM_REQUIREMENTS=[
  ["Source-bound context","Facts retain source and timestamp.","Stale or conflicting inputs force observe-only mode."],
  ["Approved knowledge","Research and playbooks are versioned.","Unapproved material cannot become a live instruction."],
  ["Deterministic risk","Capital and loss limits run outside the model.","A failed gate cannot be argued away by model language."],
  ["Execution recovery","Order intent and remote order state stay separate.","Uncertain state blocks new risk until reconciled."],
  ["Outcome review","Decisions and actions remain replayable.","Architecture capability, not a performance claim."],
];

function AgentProtocol(){
  return <div className="v6-agent-protocol">
    <header><span>AGENT DECISION PROTOCOL</span><b><i/> BOUNDED MODE</b></header>
    <div className="v6-protocol-state"><small>CURRENT ILLUSTRATIVE STATE</small><strong>OBSERVE</strong><p>Required confirmation is incomplete.<br/>No order intent is created.</p></div>
    <div className="v6-protocol-route">{STAGES.map((stage,index)=><div className={index===3?"active":""} key={stage.code}><i>{String(index+1).padStart(2,"0")}</i><span>{stage.code}</span>{index<STAGES.length-1&&<b/>}</div>)}</div>
    <footer><span>MODEL</span><b>PROPOSES</b><i/><span>SYSTEM</span><b>PERMITS</b><i/><span>USER</span><b>CONTROLS</b></footer>
  </div>;
}

function ProductCockpit(){
  return <div className="v5-cockpit">
    <aside><header><Bot/><span><b>E2P AGENT</b><small>PRODUCT WORKSPACE</small></span></header>{[[BrainCircuit,"AI Trader","DECISION"],[BookOpen,"Research","EVIDENCE"],[ChartCandlestick,"Strategies","VERSIONS"],[Workflow,"Operations","STATE"],[ShieldCheck,"Risk Center","BOUNDARIES"]].map(([Icon,title,label],index)=>{const IconComponent=Icon as typeof Bot;return <div className={index===0?"active":""} key={title as string}><IconComponent/><span><b>{title as string}</b><small>{label as string}</small></span>{index===0&&<i>ACTIVE</i>}</div>})}<footer><i/><span>Hard risk controls available</span></footer></aside>
    <section><header><span>AI TRADER / DECISION REVIEW</span><b>OBSERVE MODE</b></header><div className="v5-cockpit-prompt"><small>USER MANDATE</small><p>Evaluate current context using approved evidence and strategy rules. Create an order intent only if every required condition and risk gate passes.</p></div><div className="v5-cockpit-answer"><header><Bot/><span><b>CONTINUE OBSERVING</b><small>Illustrative product state</small></span><em>NO ORDER</em></header><p>The setup has supporting evidence, but required confirmation is incomplete. The system preserves capital, records the missing condition and schedules the next review.</p><div><span><small>DECISION</small><b>WAIT</b></span><span><small>MISSING CONDITION</small><b>Confirmation window</b></span><span><small>NEXT ACTION</small><b>Reassess context</b></span></div></div></section>
    <aside className="v5-cockpit-trace"><header><span>DECISION TRACE</span><b>REPLAYABLE</b></header>{["Primary analysis","Independent review","Deterministic risk","Final action"].map((item,index)=><div key={item}><i>{index+1}</i><span><b>{item}</b><small>{index===3?"Observe · no intent":"Evidence recorded"}</small></span><Check/></div>)}<footer><ShieldCheck/><span><b>Audit evidence retained</b><small>Inputs · tools · models · plan · action</small></span></footer></aside>
  </div>;
}

export default function ClubPage(){return <>
  <section className="v6-trade-hero"><div className="v6-trade-grid"/><div className="v4-wrap v6-trade-hero-layout"><div className="v6-trade-copy"><span className="v4-kicker">E2P AI Trading System</span><h1>Intelligence<br/>with limits<span>.</span></h1><h2>AI reads the market. The system controls the action.</h2><p>E2P turns market and account context into structured plans, deterministic risk checks and controlled CEX execution—inside permissions defined by the user.</p><div className="v4-hero-actions"><a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="v4-button v4-button-acid">Open Trading Agent <ArrowUpRight size={15}/></a><a href="#system" className="v4-text-link">See the decision loop <ArrowRight size={14}/></a></div><div className="v6-trade-promises"><span><ShieldCheck/>Read-only first</span><span><LockKeyhole/>No withdrawal authority</span><span><FileCheck2/>Traceable actions</span></div></div><AgentProtocol/></div></section>

  <section className="v6-trade-principle"><div className="v4-wrap"><span>THE OPERATING PRINCIPLE</span><h2>No evidence<span>—</span>no new risk.</h2><p>The model can interpret context. It cannot expand permissions, bypass risk controls or invent execution truth.</p></div></section>

  <section className="v5-trade-problem"><div className="v4-wrap"><header><span className="v4-label">01 / Why</span><h2>Markets never stop.<br/>Human attention does.</h2><p>The problem is not a lack of information. It is the gap between facts, judgment, risk and execution.</p></header><div>{[{icon:Database,index:"01",title:"Facts fragment",text:"Market, order, account, flow and event data arrive through different clocks and formats."},{icon:BrainCircuit,index:"02",title:"Discipline drifts",text:"Humans tire and chase. Fixed bots repeat rules without understanding new context."},{icon:RefreshCw,index:"03",title:"Execution is a loop",text:"Orders, partial fills, protection, costs and uncertain remote outcomes need continuous reconciliation."}].map(item=><article key={item.title}><span>{item.index}</span><item.icon/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><footer><b>E2P&apos;s answer</b><span>Let AI understand continuously. Let deterministic systems own permissions, risk and execution truth.</span></footer></div></section>

  <section id="system" className="v6-trade-loop"><div className="v4-wrap"><header><span className="v4-label">02 / Decision loop</span><h2>Seven disciplined moves.<br/>One reviewed outcome.</h2><p>Each stage produces an explicit state for the next. The Agent never jumps from a prompt directly to an exchange order.</p></header><div className="v6-loop-story">{STAGES.map((item,index)=><article key={item.code}><div><span>{String(index+1).padStart(2,"0")}</span><item.icon/></div><section><small>{item.code}</small><h3>{item.title}</h3><p>{item.text}</p></section><aside>{index===3?"HARD GATE":index===4?"CONTROLLED ACTION":"RECORDED STATE"}</aside></article>)}</div></div></section>

  <section className="v5-trade-product"><div className="v4-wrap"><header><span className="v4-label">03 / Product system</span><h2>Not a chat box.<br/>A trading operating system.</h2><p>The product connects the AI decision surface to evidence, strategies, operations and capital boundaries. The interface below demonstrates real product roles without presenting a live account.</p></header><ProductCockpit/></div></section>

  <section className="v6-trade-authority"><div className="v4-wrap"><header><span className="v4-label">04 / Authority architecture</span><h2>Intelligence moves inward.<br/>Authority stays bounded.</h2><p>Five system layers turn uncertain market context into a controlled, reviewable action path.</p></header><div className="v6-authority-system"><div className="v6-authority-core"><Bot/><b>E2P<br/>AGENT</b><small>USER-DEFINED SCOPE</small></div><div className="v6-authority-layers">{AUTHORITY_LAYERS.map((item,index)=><article key={item.label}><i>{String(index+1).padStart(2,"0")}</i><item.icon/><span><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p></span></article>)}</div></div></div></section>

  <section id="risk" className="v6-trade-constitution"><div className="v4-wrap"><header><span className="v4-label">05 / Risk constitution</span><h2>The Agent has rules<br/>it cannot rewrite.</h2></header><div className="v6-risk-laws"><article><span>01</span><KeyRound/><h3>Keys stay isolated.</h3><p>Secrets and passphrases never enter model context.</p></article><article><span>02</span><Scale/><h3>Authority is explicit.</h3><p>Users define instruments, strategies, capital and loss limits.</p></article><article><span>03</span><Ban/><h3>Uncertainty reduces action.</h3><p>Missing facts or unknown order state pause new exposure.</p></article><article><span>04</span><CircleStop/><h3>Emergency control remains human.</h3><p>Pause, revoke, cancel and recovery paths remain available.</p></article></div><footer><LockKeyhole/><span><b>THE NON-NEGOTIABLE</b>The Agent cannot expand its own permissions.</span></footer></div></section>

  <section className="v6-trade-requirements"><div className="v4-wrap"><header><span className="v4-label">06 / System requirements</span><h2>Every capability carries<br/>its own stopping condition.</h2><p>A system is trustworthy only when the conditions for not acting are visible.</p></header><div className="v6-requirement-list"><header><span>CAPABILITY</span><span>WHAT THE SYSTEM KEEPS</span><span>WHEN ACTION STOPS</span></header>{SYSTEM_REQUIREMENTS.map((row,index)=><article key={row[0]}><i>{String(index+1).padStart(2,"0")}</i><b>{row[0]}</b><p>{row[1]}</p><p><ShieldCheck/>{row[2]}</p></article>)}</div><small>Representative product architecture. Availability varies by integration and operating mode; trading risk always remains.</small></div></section>

  <section id="community" className="v6-trade-community"><div className="v4-wrap"><header><span className="v4-label">07 / Community intelligence</span><h2>People strengthen the evidence.<br/>The Agent remains the execution center.</h2><p>Research and review can come from the community. Trading authority still passes through the same bounded system.</p></header><div className="v6-community-system"><div className="v6-community-orbit"><i/><i/><section><Bot/><b>TRADING<br/>AGENT</b><small>EXECUTION CENTER</small></section><article className="research"><Radar/><b>RESEARCH</b><span>Sourced observations</span></article><article className="playbooks"><BookOpen/><b>PLAYBOOKS</b><span>Approved frameworks</span></article><article className="review"><Users/><b>PEER REVIEW</b><span>Bias and risk challenge</span></article><article className="feedback"><MessageSquare/><b>FEEDBACK</b><span>Outcome learning</span></article></div><aside><span>COMMUNITY INPUT</span><b>Structured, sourced, reviewable.</b><p>Free-form opinions do not become execution commands. Useful contributions enter as evidence, playbooks or review notes with clear provenance.</p></aside></div></div></section>

  <section id="points" className="v6-token-community"><div className="v4-wrap"><header><span className="v4-label">$E2P token-based community</span><h2>A coordination layer<br/>around the Agent.</h2><p>$E2P supports participation, contribution recognition, access and community voice. It is not presented here as a promise of yield or investment return.</p><div><a href={CMC_URL} target="_blank" rel="noreferrer">CoinMarketCap <ArrowUpRight size={13}/></a><a href={`https://bscscan.com/token/${CONTRACT}`} target="_blank" rel="noreferrer">View contract <ArrowUpRight size={13}/></a></div></header><div className="v6-token-route">{[{icon:BookOpen,title:"Contribute",text:"Research, tools and review"},{icon:ChartCandlestick,title:"Recognize",text:"High-signal participation"},{icon:KeyRound,title:"Access",text:"Community tools and features"},{icon:Users,title:"Participate",text:"Priorities and improvement"}].map((item,index)=><article key={item.title}><span>{String(index+1).padStart(2,"0")}</span><item.icon/><h3>{item.title}</h3><p>{item.text}</p>{index<3&&<ArrowRight/>}</article>)}</div></div></section>

  <section className="v6-trade-final"><div className="v4-wrap"><div><span>RISK DISCLOSURE</span><p>Trading and investing involve substantial risk of loss. Agent outputs and token information are product and community context—not guaranteed profits or financial advice.</p></div><section><small>E2P AI TRADING SYSTEM</small><h2>Evidence before execution.</h2><a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="v4-button v4-button-acid">Open Trading Agent <ArrowUpRight size={15}/></a></section></div></section>
</>}
