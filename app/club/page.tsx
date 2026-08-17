import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpen,
  Bot,
  ExternalLink,
  Gauge,
  MessageCircle,
  Radar,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "AI Trading Agent & Points-Based Trading Community | E2PDAO",
  description:
    "The E2P AI Trading Agent is the operating core: market context, structured plans, hard risk controls and auditable review—supported by a points-based trading community.",
  alternates: { canonical: "/club/" },
  openGraph: {
    title: "E2P Trading Agent — Agent First, Community Powered",
    description: "A discipline-first AI Trading Agent with a community points and reputation layer.",
    url: "/club/",
  },
};

const E2P_CONTRACT = "0x597716022fc149c2b89061d6ec6b5eac4a97bc20";
const CMC_URL = "https://coinmarketcap.com/currencies/e2p-token/";

const COMMUNITY_DESKS = [
  { icon: Radar, label: "01 / RESEARCH DESK", title: "Shared market context", text: "Members surface structure, catalysts, project events and changing risk conditions for the Agent workflow." },
  { icon: BookOpen, label: "02 / PLAYBOOK LIBRARY", title: "Repeatable frameworks", text: "Theses, invalidation logic, risk rules and post-trade reviews become reusable operating knowledge." },
  { icon: SearchCheck, label: "03 / REVIEW ROOM", title: "Decisions get challenged", text: "The community reviews assumptions, execution quality and process discipline—not only winning outcomes." },
  { icon: MessageCircle, label: "04 / FEEDBACK LOOP", title: "Markets talk back", text: "Projects and operators receive direct questions, objections and perception signals from active participants." },
];

function AgentBoard() {
  return (
    <div className="e2p-agent-cockpit" aria-label="E2P AI Trading Agent operating cockpit">
      <header>
        <span><i /> E2P TRADING AGENT / LIVE WORKSPACE</span>
        <b>CONTROLLED MODE</b>
      </header>
      <div className="e2p-agent-statusbar">
        <span><small>MODE</small><b>OBSERVE</b></span>
        <span><small>MANDATE</small><b>ACTIVE</b></span>
        <span><small>RISK ENGINE</small><b>HARD GATES</b></span>
        <span><small>WITHDRAWAL</small><b>DISABLED</b></span>
      </div>
      <div className="e2p-agent-screen">
        <div className="e2p-agent-market">
          <header><span>MARKET + EVENT CONTEXT</span><b>12 SIGNALS WATCHED</b></header>
          <div className="e2p-agent-chart-grid">
            <div className="e2p-agent-wave">
              {[24, 31, 27, 42, 38, 54, 48, 64, 58, 71, 66, 81, 73, 88, 82, 92].map((height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <span className="e2p-agent-event event-one">MACRO / 14:30</span>
            <span className="e2p-agent-event event-two">LIQUIDITY SHIFT</span>
          </div>
          <footer><span>STRUCTURE <b>NEUTRAL</b></span><span>VOLATILITY <b>ELEVATED</b></span><span>BIAS <b>WAIT</b></span></footer>
        </div>
        <aside className="e2p-agent-decision">
          <header><span>DECISION OBJECT / 041</span><b>HOLD</b></header>
          <div className="e2p-agent-orbit"><i /><i /><strong>AI</strong><span>RISK</span></div>
          <h3>No trade is<br />also a decision.</h3>
          <p>Event risk is above mandate tolerance. Re-evaluate after the defined confirmation window.</p>
          <div className="e2p-agent-check"><span>STOP DEFINED</span><b>YES</b><span>SIZE ALLOWED</span><b>YES</b><span>EVENT GATE</span><b className="blocked">BLOCK</b></div>
        </aside>
      </div>
      <footer>
        {["Observe", "Context", "Plan", "Risk gate", "Act", "Review"].map((step, index) => (
          <span key={step} className={index === 3 ? "active" : index < 3 ? "done" : ""}><i>0{index + 1}</i><b>{step}</b></span>
        ))}
      </footer>
    </div>
  );
}

export default function ClubPage() {
  return (
    <>
      <section className="e2p-agent-hero-shell e2p-grid-wash">
        <div className="e2p-container e2p-agent-hero">
          <div className="e2p-agent-hero-copy">
            <span className="e2p-eyebrow">E2P Trading Agent</span>
            <h1>The Agent is<br /><span className="e2p-highlight">the main event.</span></h1>
            <p>
              Market context, structured plans, hard risk gates and auditable
              review in one AI operating loop. The community contributes
              intelligence; $E2P organizes participation and access.
            </p>
            <div className="e2p-actions">
              <a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-dark">
                Launch Trading Agent <ExternalLink size={14} />
              </a>
              <a href="#agent-system" className="e2p-btn">See how it operates</a>
            </div>
            <div className="e2p-agent-hero-facts">
              <span><b>01</b> AGENT FIRST</span><span><b>02</b> RISK BEFORE ACTION</span><span><b>03</b> AUDIT EVERY MOVE</span>
            </div>
          </div>
          <AgentBoard />
        </div>
      </section>

      <section id="agent-system" className="e2p-section e2p-agent-os-section">
        <div className="e2p-container">
          <header className="e2p-agent-os-head">
            <span className="e2p-section-index">01 / Agent operating system</span>
            <h2>From noisy market<br />to <em>controlled action.</em></h2>
            <p>The Agent is built as a continuous operating system—not a chat window and not a stream of unqualified signals.</p>
          </header>
          <div className="e2p-agent-workbench">
            <aside className="e2p-agent-rail">
              <header><span>OPERATING LOOP</span><b>06 MODULES</b></header>
              {[
                ["01", "Observe", "Market, macro, project and execution signals", "LIVE"],
                ["02", "Build context", "Evidence, events and knowledge base", "SYNCED"],
                ["03", "Structure plan", "Entry, invalidation, stop and size", "DRAFT"],
                ["04", "Pass risk gate", "Mandate, exposure, liquidity and health", "ACTIVE"],
                ["05", "Act in scope", "Only permitted execution actions", "LOCKED"],
                ["06", "Review & learn", "Outcome, process and audit record", "QUEUED"],
              ].map(([index, title, text, state], itemIndex) => (
                <article key={title} className={itemIndex === 3 ? "active" : itemIndex < 3 ? "done" : ""}>
                  <i>{index}</i><span><b>{title}</b><small>{text}</small></span><em>{state}</em>
                </article>
              ))}
            </aside>
            <div className="e2p-agent-plan">
              <header><span>PLAN OBJECT / REVIEW REQUIRED</span><b>STATE: WAIT</b></header>
              <div className="e2p-agent-plan-title"><small>OPERATING THESIS</small><h3>Protect process quality<br />before seeking opportunity.</h3><p>Signals can create a hypothesis. Only a complete plan and a valid mandate can create an allowed action.</p></div>
              <div className="e2p-agent-plan-grid">
                <span><small>ENTRY LOGIC</small><b>Confirmation required</b><em>NOT MET</em></span>
                <span><small>INVALIDATION</small><b>Structure break</b><em>DEFINED</em></span>
                <span><small>STOP POLICY</small><b>Hard stop attached</b><em>REQUIRED</em></span>
                <span><small>POSITION SIZE</small><b>Mandate constrained</b><em>ALLOWED</em></span>
              </div>
              <div className="e2p-agent-verdict"><ShieldCheck size={23} /><span><small>RISK VERDICT</small><b>WAIT / EVENT GATE ACTIVE</b></span><em>NON-BYPASSABLE</em></div>
              <footer><span>PROPOSED BY AGENT</span><span>CONFIRMED BY HUMAN</span><span>RECORDED FOR REVIEW</span></footer>
            </div>
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-risk-constitution">
        <div className="e2p-container">
          <header className="e2p-risk-head">
            <div><span className="e2p-section-index">02 / Risk constitution</span><h2>Permission is narrow.<br />Controls are hard.</h2></div>
            <p>AI can propose and operate only inside an explicit mandate. Trade permission never implies withdrawal permission, and no control is designed to be bypassed.</p>
          </header>
          <div className="e2p-risk-rules">
            {[
              ["01", "Explicit mandate", "Account, instrument, action, leverage, loss and time boundaries must be defined before operation."],
              ["02", "Complete plan", "No action without thesis, entry logic, invalidation, stop, size and monitoring conditions."],
              ["03", "Pre-trade gates", "Exposure, liquidity, event, execution and system-health checks can block the action."],
              ["04", "No withdrawal", "The Agent has no authority to withdraw assets or expand its own permissions."],
              ["05", "Append-only audit", "Inputs, plan, checks, execution, monitoring and review stay traceable."],
            ].map(([index, title, text], itemIndex) => (
              <article key={title} className={itemIndex === 2 ? "active" : ""}><i>{index}</i><h3>{title}</h3><p>{text}</p><b>{itemIndex === 2 ? "BLOCK CAPABLE" : "REQUIRED"}</b></article>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">03 / Community intelligence</span>
            <h2>The community feeds<br />the operating loop.</h2>
            <p>Members are not passive signal consumers. They build context, challenge decisions and improve the quality of the shared process.</p>
          </header>
          <div className="e2p-community-desks">
            {COMMUNITY_DESKS.map((item, index) => (
              <article key={item.title} className={index === 0 ? "featured" : ""}>
                <header><span>{item.label}</span><item.icon size={20} /></header>
                <h3>{item.title}</h3><p>{item.text}</p>
                <footer>{index === 0 ? "CONTEXT → AGENT" : index === 1 ? "KNOWLEDGE → PLAN" : index === 2 ? "REVIEW → DISCIPLINE" : "MARKET → PROJECT"}</footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="points-layer" className="e2p-section e2p-points-section">
        <div className="e2p-container e2p-points-layout">
          <div className="e2p-points-copy">
            <span className="e2p-section-index">04 / $E2P points layer</span>
            <h2>Points for participation.<br /><em>Not the trading thesis.</em></h2>
            <p>
              In the community model, $E2P primarily works as the coordination
              layer: recording contribution, supporting reputation and roles,
              organizing access and carrying governance signals. The Trading
              Agent remains the product at the center.
            </p>
            <div className="e2p-actions">
              <a href={CMC_URL} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-acid">View $E2P on CMC <ExternalLink size={14} /></a>
              <a href={`https://bscscan.com/token/${E2P_CONTRACT}`} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-light">Token contract <ExternalLink size={14} /></a>
            </div>
          </div>
          <div className="e2p-points-ledger">
            <header><span>COMMUNITY POINTS / PARTICIPATION LEDGER</span><b>$E2P</b></header>
            <div className="e2p-points-loop">
              {[
                ["01", "Contribute", "Research, review and useful community work", "+ POINTS"],
                ["02", "Build reputation", "Quality and consistency over raw activity", "ROLE"],
                ["03", "Unlock routes", "Community rooms, tools and opportunities", "ACCESS"],
                ["04", "Guide direction", "Governance signals under published rules", "VOICE"],
              ].map(([index, title, text, state], itemIndex) => (
                <article key={title} className={itemIndex === 1 ? "active" : ""}><i>{index}</i><span><b>{title}</b><small>{text}</small></span><em>{state}</em></article>
              ))}
            </div>
            <footer><span><Gauge size={13} /> CONTRIBUTION WEIGHTED</span><span><Bot size={13} /> AGENT REMAINS PRIMARY</span></footer>
          </div>
        </div>
        <div className="e2p-container"><p className="e2p-points-note">$E2P is a public token, not a promise of value, access or performance. Community mechanics and thresholds must follow the latest published Club rules. Trading can result in total loss.</p></div>
      </section>

      <section className="e2p-final">
        <span>Agent first · Risk before action · Community powered</span>
        <h2>Build the process.<br />Then make the move.</h2>
        <div className="e2p-actions">
          <a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-dark">Launch Trading Agent <ExternalLink size={14} /></a>
          <a href={E2P_LINKS.telegram} target="_blank" rel="noreferrer" className="e2p-btn">Join the community <ArrowUpRight size={15} /></a>
        </div>
      </section>
    </>
  );
}
