import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Ban, BookOpen, Bot, BrainCircuit, ChartCandlestick, Check, CircleStop, Database, Eye, FileCheck2, KeyRound, LockKeyhole, MessageSquare, Orbit, Radar, RefreshCw, Scale, ShieldCheck, Target, Users, Workflow } from "lucide-react";
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

const CAPABILITIES=[
  {code:"01",icon:Database,title:"Market truth layer",text:"Freshness, units, timestamps and source identity are checked before facts reach the model.",boundary:"Stale or conflicting facts force observe-only mode."},
  {code:"02",icon:BrainCircuit,title:"Multi-model decision",text:"Primary analysis and independent review turn context into a structured, challengeable plan.",boundary:"Models propose. They never define their own authority."},
  {code:"03",icon:BookOpen,title:"Traceable knowledge",text:"Approved research, strategies and review notes enter with source and version context.",boundary:"Unapproved knowledge cannot become a live instruction."},
  {code:"04",icon:ShieldCheck,title:"Deterministic risk",text:"Capital limits, instrument scope, event windows and required protection are checked in code.",boundary:"A failed gate cannot be overridden by a persuasive answer."},
  {code:"05",icon:Workflow,title:"Execution state machine",text:"Stable intent, idempotent submission, reconciliation and recovery handle uncertain remote outcomes.",boundary:"Unknown order state blocks new risk until authority is restored."},
  {code:"06",icon:FileCheck2,title:"Auditable evidence",text:"Inputs, sources, model outputs, plan versions, actions and outcomes remain reviewable.",boundary:"If an action cannot be explained, it should not be automated."},
];

const BOUNDARIES=[
  {icon:KeyRound,title:"Keys stay isolated",text:"Secrets and passphrases never enter model context."},
  {icon:Scale,title:"You define authority",text:"Instruments, strategies, capital and loss limits stay explicit."},
  {icon:Ban,title:"No proof, no new risk",text:"Missing facts or uncertain execution state pause new exposure."},
  {icon:CircleStop,title:"Emergency control",text:"Pause, revoke, cancel and recovery paths remain available."},
];

const SYSTEM_CHECKLIST=[
  ["Source-bound context","Market, account, order and event inputs retain source and time context.","Stale or conflicting facts force observe-only mode."],
  ["Approved knowledge","Research and strategy inputs are versioned before they enter a decision.","Unapproved material cannot become an execution instruction."],
  ["Deterministic risk","Capital, instrument and loss limits are checked outside the model.","A failed gate cannot be overridden by model language."],
  ["Execution recovery","Order intent, submission and reconciliation remain separate states.","Uncertain remote state blocks new risk until reconciled."],
  ["Outcome review","Recorded inputs, decisions, actions and costs form a review trail.","This is a system capability, not a performance claim."],
];

function MissionControl(){
  return <div className="v5-mission-control">
    <header><span>E2P / MISSION CONTROL</span><b><i/> SYSTEM ARCHITECTURE</b><span>ILLUSTRATIVE DECISION</span></header>
    <div className="v5-mission-body">
      <aside><small>DECISION STATE</small><strong>WAIT</strong><p>Evidence is incomplete.<br/>No order intent created.</p><div><span>MARKET FACTS</span><b>BOUND</b></div><div><span>RISK ENGINE</span><b>ONLINE</b></div><div><span>EXECUTION</span><b>LOCKED</b></div></aside>
      <section><header><span>DECISION EVIDENCE CHAIN</span><span>MODEL ≠ AUTHORITY</span></header><div className="v5-mission-orbit"><i/><i/><i/><section><Orbit/><b>E2P CORE</b><small>CONTEXT → PLAN → BOUNDARY</small></section><article className="sense"><Radar/><b>01 · SENSE</b><small>Facts normalized</small></article><article className="risk"><ShieldCheck/><b>04 · GUARD</b><small>Hard gates checked</small></article><article className="review"><FileCheck2/><b>07 · REVIEW</b><small>Evidence retained</small></article></div><footer><span><small>PLAN</small><b>Structured</b></span><span><small>PERMISSION</small><b>User-defined</b></span><span><small>ORDER INTENT</small><b>Not created</b></span><span><small>AUDIT</small><b>Traceable</b></span></footer></section>
    </div>
    <footer><span>Architecture illustration · not a live signal or account</span><span>Evidence before execution</span></footer>
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
  <section className="v5-trade-hero"><div className="v5-trade-grid"/><div className="v4-wrap v5-trade-hero-grid"><div><span className="v4-kicker">E2P AI Trading System</span><h1>Every action<br/>needs a reason<span>.</span></h1><h2>AI understands the context.<br/>The system protects the boundary.</h2><p>E2P connects market facts, approved knowledge, structured planning, deterministic risk, controlled execution and auditable review—inside permissions you define.</p><div className="v4-hero-actions"><a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="v4-button v4-button-acid">Open Trading Agent <ArrowUpRight size={15}/></a><a href="#system" className="v4-text-link">Explore the system <ArrowRight size={14}/></a></div><ul><li>Read-only first</li><li>No withdrawal authority</li><li>Every action traceable</li></ul></div><MissionControl/></div></section>

  <section className="v5-trade-proof"><div className="v4-wrap"><strong>One bounded control loop.</strong><span><b>07</b> defined decision stages</span><span><b>01</b> explicit permission set</span><span><b>STATE</b> context and position monitoring</span><span><b>TRACE</b> recorded decisions stay reviewable</span></div></section>

  <section className="v5-trade-problem"><div className="v4-wrap"><header><span className="v4-label">01 / Why</span><h2>Markets never stop.<br/>Human attention does.</h2><p>The problem is not a lack of information. It is the gap between facts, judgment, risk and execution.</p></header><div>{[{icon:Database,index:"01",title:"Facts fragment",text:"Market, order, account, flow and event data arrive through different clocks and formats."},{icon:BrainCircuit,index:"02",title:"Discipline drifts",text:"Humans tire and chase. Fixed bots repeat rules without understanding new context."},{icon:RefreshCw,index:"03",title:"Execution is a loop",text:"Orders, partial fills, protection, costs and uncertain remote outcomes need continuous reconciliation."}].map(item=><article key={item.title}><span>{item.index}</span><item.icon/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><footer><b>E2P&apos;s answer</b><span>Let AI understand continuously. Let deterministic systems own permissions, risk and execution truth.</span></footer></div></section>

  <section id="system" className="v5-trade-system"><div className="v4-wrap"><header><span className="v4-label">02 / Control loop</span><h2>One route from market fact to reviewed outcome.</h2><p>The model does not “just place a trade.” Every stage has evidence, state and a defined next move.</p></header><div className="v5-stage-track">{STAGES.map((item,index)=><article key={item.code}><header><span>0{index+1}</span><small>{item.code}</small></header><div><item.icon/></div><h3>{item.title}</h3><p>{item.text}</p>{index<STAGES.length-1&&<ArrowRight/>}</article>)}</div></div></section>

  <section className="v5-trade-product"><div className="v4-wrap"><header><span className="v4-label">03 / Product system</span><h2>Not a chat box.<br/>A trading operating system.</h2><p>The product connects the AI decision surface to evidence, strategies, operations and capital boundaries. The interface below demonstrates real product roles without presenting a live account.</p></header><ProductCockpit/></div></section>

  <section className="v5-trade-capabilities"><div className="v4-wrap"><header><span className="v4-label">04 / Capability × boundary</span><h2>Know what the Agent can do—and where it must stop.</h2><p>Useful autonomy comes from combining model intelligence with narrow, deterministic authority.</p></header><div>{CAPABILITIES.map(item=><article key={item.code}><header><span>{item.code}</span><item.icon/></header><h3>{item.title}</h3><p>{item.text}</p><footer><ShieldCheck/><span>{item.boundary}</span></footer></article>)}</div></div></section>

  <section id="risk" className="v5-trade-boundaries"><div className="v4-wrap"><header><span className="v4-label">05 / Safety boundaries</span><h2>Risk before action.</h2><p>The model proposes. Deterministic controls decide whether the proposal is allowed to become an action.</p></header><div>{BOUNDARIES.map((item,index)=><article key={item.title}><span>0{index+1}</span><item.icon/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><footer><LockKeyhole/><b>The Agent cannot expand its own permissions.</b><span>You can pause, revoke or narrow authority at any time.</span></footer></div></section>

  <section className="v5-trade-comparison"><div className="v4-wrap"><header><span className="v4-label">06 / System checklist</span><h2>Capabilities are useful only when their boundaries are explicit.</h2><p>A neutral checklist of the controls E2P is designed around. It does not claim performance superiority over other trading approaches.</p></header><div className="v5-comparison-table v5-system-checklist"><div className="head"><b>CAPABILITY</b><b>E2P IMPLEMENTATION</b><b>BOUNDARY / EVIDENCE</b></div>{SYSTEM_CHECKLIST.map(row=><div key={row[0]}><span>{row[0]}</span><span className="e2p"><Check size={13}/>{row[1]}</span><span>{row[2]}</span></div>)}</div><p>Representative product architecture. Availability may vary by operating mode and integration; trading risk always remains.</p></div></section>

  <section id="community" className="v5-trade-community"><div className="v4-wrap"><header><span className="v4-label">07 / Community intelligence</span><h2>Better evidence.<br/>Better review.<br/>Together.</h2><p>The E2P community contributes structured research and review. The Agent remains the execution center.</p></header><div>{[{icon:Radar,title:"Research",text:"Market observations and sourced research enter a reviewable evidence pool."},{icon:BookOpen,title:"Playbooks",text:"Approved frameworks become versioned inputs—not free-form trading commands."},{icon:Users,title:"Peer review",text:"Plans and outcomes are challenged for bias, risk and execution quality."},{icon:MessageSquare,title:"Feedback",text:"Useful feedback improves the operating system and the next decision cycle."}].map(item=><article key={item.title}><item.icon/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

  <section id="points" className="v5-trade-points"><div className="v4-wrap"><header><span className="v4-label">$E2P token-based community</span><h2>Token-based coordination, access and community participation.</h2><p>$E2P is used as a community coordination layer for participation, contribution recognition and access. Nothing on this page promises yield or investment returns.</p></header><div>{[{icon:Bot,title:"Contribution",text:"Recognize useful research, tools and review."},{icon:ChartCandlestick,title:"Reputation",text:"Record high-signal community participation."},{icon:KeyRound,title:"Access",text:"Coordinate access to community tools and features."},{icon:Users,title:"Voice",text:"Participate in community priorities and improvement."}].map((item,index)=><article key={item.title}><span>0{index+1}</span><item.icon/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><aside><b>$E2P is presented here as a token-based coordination and access layer.</b><span>Community participation</span><span>Contribution recognition</span><span>Access follows community rules</span><span>No guaranteed returns</span><a href={CMC_URL} target="_blank" rel="noreferrer">View $E2P on CoinMarketCap <ArrowUpRight size={13}/></a></aside></div></section>

  <section className="v5-trade-disclosure"><div className="v4-wrap"><ShieldCheck/><div><span>RISK DISCLOSURE</span><p>Trading and investing involve substantial risk of loss. Agent outputs and token information are provided for product and community context, not guaranteed profits or financial advice. Historical or illustrative outcomes do not predict future results.</p></div><strong>Never risk more than you can afford to lose.</strong></div></section>
  <section className="v5-trade-launch"><div className="v4-wrap"><div><span>E2P AI TRADING SYSTEM</span><h2>Evidence before execution.</h2></div><a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="v4-button v4-button-acid">Open Trading Agent <ArrowUpRight size={15}/></a><a href={`https://bscscan.com/token/${CONTRACT}`} target="_blank" rel="noreferrer" className="v4-text-link">View $E2P contract</a></div></section>
</>}
