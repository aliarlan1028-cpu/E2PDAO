import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  ChartCandlestick,
  CircleStop,
  ExternalLink,
  FileClock,
  Gauge,
  LockKeyhole,
  MessageCircle,
  Radar,
  ScrollText,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "AI Trading Agent & Points-Based Trading Community | E2PDAO",
  description:
    "The E2P AI Trading Agent turns market context into structured plans, hard risk decisions and auditable review, supported by a points-based trading community.",
  alternates: { canonical: "/club/" },
  openGraph: {
    title: "E2P Trading Agent — Discipline Before Execution",
    description: "An AI Trading Agent built around explicit plans, narrow permissions, hard risk gates and auditable decisions.",
    url: "/club/",
  },
};

const E2P_CONTRACT = "0x597716022fc149c2b89061d6ec6b5eac4a97bc20";
const CMC_URL = "https://coinmarketcap.com/currencies/e2p-token/";

const COMMUNITY_DESKS = [
  { icon: Radar, label: "MARKET CONTEXT", title: "Surface what changed", text: "Members contribute structure, catalysts, project events and changing risk conditions—not anonymous buy calls." },
  { icon: ScrollText, label: "SHARED PLAYBOOKS", title: "Make judgment reusable", text: "Theses, invalidation logic, risk rules and post-trade reviews become operating knowledge for the next decision." },
  { icon: SearchCheck, label: "DECISION REVIEW", title: "Challenge the process", text: "The room reviews assumptions, execution quality and discipline, including decisions that correctly stayed out." },
  { icon: MessageCircle, label: "MARKET FEEDBACK", title: "Turn discussion into signal", text: "Projects and operators receive direct questions, objections and perception signals from active market participants." },
];

function AgentDecisionSurface() {
  const candles = [38, 47, 42, 62, 55, 71, 66, 83, 72, 91, 78, 86, 74, 69, 61, 58, 64, 53];
  return (
    <div className="e2p-trade-terminal" aria-label="Illustrative E2P Trading Agent decision workspace">
      <header><span><i /> E2P TRADING AGENT / DECISION 041</span><b>HARD RISK ACTIVE</b></header>
      <div className="e2p-trade-terminal-body">
        <div className="e2p-trade-chart">
          <div className="e2p-trade-chart-head"><span>MARKET CONTEXT / ILLUSTRATIVE</span><b>4H</b></div>
          <div className="e2p-trade-candles" aria-hidden="true">
            {candles.map((height, index) => <i key={index} className={index % 3 === 0 || index > 13 ? "down" : "up"} style={{ height: `${height}%` }} />)}
            <span className="line-one" /><span className="line-two" />
          </div>
          <div className="e2p-trade-context-tags"><span>LIQUIDITY / THIN</span><span>EVENT / 00:42</span><span>VOL / RISING</span></div>
        </div>
        <div className="e2p-trade-verdict">
          <small>AGENT VERDICT</small>
          <strong>WAIT.</strong>
          <p>Setup quality is acceptable. Event risk and execution conditions are not.</p>
          <div><span>CONFIDENCE <b>72</b></span><span>RISK STATE <b>BLOCK</b></span></div>
          <em><CircleStop size={13} /> No order created</em>
        </div>
      </div>
      <footer><span>TRACE ID / E2P-041</span><span>STOP DEFINED</span><span>WITHDRAWAL DISABLED</span></footer>
    </div>
  );
}

function DecisionCase() {
  return (
    <div className="e2p-trade-case" aria-label="Illustrative Trading Agent pre-trade decision">
      <header><span><i /> PRE-TRADE REVIEW</span><b>ILLUSTRATIVE CASE · NOT A LIVE SIGNAL</b></header>
      <div className="e2p-trade-case-body">
        <aside>
          <small>CONTEXT PACK</small>
          <strong>BTC<br />Momentum setup</strong>
          <p>The market has structure. The execution window does not yet have permission.</p>
          <div><span>STRUCTURE</span><b>VALID</b></div><div><span>LIQUIDITY</span><b>THIN</b></div><div><span>EVENT GATE</span><b>ACTIVE</b></div>
        </aside>
        <section>
          <div className="e2p-trade-plan-head"><span>STRUCTURED PLAN</span><b>COMPLETE</b></div>
          <div className="e2p-trade-plan-grid">
            <article><small>01 / THESIS</small><h3>Continuation only after confirmation.</h3><p>Momentum remains constructive while the defined structure holds.</p></article>
            <article><small>02 / ENTRY</small><h3>Conditional. No market chase.</h3><p>Require confirmation after the event window and executable liquidity.</p></article>
            <article><small>03 / INVALIDATION</small><h3>Structure lost below the plan level.</h3><p>Plan becomes invalid before any new action is considered.</p></article>
            <article><small>04 / RISK</small><h3>Fixed stop. Bounded size.</h3><p>Exposure must remain inside the explicit account mandate.</p></article>
          </div>
          <div className="e2p-trade-gate-output"><span><ShieldCheck size={18} /> HARD GATE OUTPUT</span><strong>BLOCK ACTION</strong><p>Reason: event proximity + thin liquidity</p></div>
        </section>
      </div>
      <footer><span>OBSERVE</span><ArrowRight size={11} /><span>PLAN</span><ArrowRight size={11} /><span>CHECK</span><ArrowRight size={11} /><b>WAIT</b><ArrowRight size={11} /><span>REVIEW</span></footer>
    </div>
  );
}

export default function ClubPage() {
  return (
    <>
      <section className="e2p-trade-hero e2p-grid-wash">
        <div className="e2p-container e2p-trade-hero-grid">
          <div className="e2p-trade-hero-copy">
            <span className="e2p-eyebrow">E2P Trading Agent</span>
            <h1>Think first.<br /><span className="e2p-highlight">Trade second.</span></h1>
            <p>
              The E2P Trading Agent turns noisy market information into a
              structured plan, passes it through hard risk gates and records
              every decision. Sometimes the most professional action is no action.
            </p>
            <div className="e2p-actions">
              <a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-dark">Launch Trading Agent <ExternalLink size={14} /></a>
              <a href="#decision" className="e2p-btn">Watch a decision</a>
            </div>
            <div className="e2p-trade-hero-proof"><span><b>01</b> COMPLETE PLAN</span><span><b>02</b> HARD RISK GATES</span><span><b>03</b> AUDITABLE TRACE</span></div>
          </div>
          <AgentDecisionSurface />
        </div>
      </section>

      <section className="e2p-trade-positioning">
        <div className="e2p-container e2p-trade-positioning-grid">
          <span>THE PRODUCT IN ONE SENTENCE</span>
          <h2>An AI decision system<br />for <em>disciplined execution.</em></h2>
          <p>Research gives the Agent context. Risk controls give it boundaries. The community makes the operating knowledge stronger.</p>
        </div>
      </section>

      <section id="decision" className="e2p-section e2p-trade-decision-section">
        <div className="e2p-container">
          <header className="e2p-trade-editorial-head dark">
            <div><span className="e2p-section-index">01 / See the Agent think</span><h2>A valid setup can still<br />be a <em>bad trade.</em></h2></div>
            <p>The example below shows the product principle: an answer is not an order. Context, plan completeness, permission and execution conditions must all agree.</p>
          </header>
          <DecisionCase />
        </div>
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-trade-editorial-head">
            <div><span className="e2p-section-index">02 / Agent operating loop</span><h2>Six stages.<br /><em>One trace.</em></h2></div>
            <p>The Trading Agent is an operating loop, not a chat box or an unqualified stream of signals. Every output must belong to a decision record.</p>
          </header>
          <div className="e2p-trade-loop">
            {[
              { icon: Radar, title: "Observe", text: "Market, macro, project and execution signals", state: "LIVE" },
              { icon: BrainCircuit, title: "Build context", text: "Evidence, events and stored knowledge", state: "SYNCED" },
              { icon: ChartCandlestick, title: "Structure plan", text: "Thesis, entry, invalidation, stop and size", state: "DRAFT" },
              { icon: ShieldCheck, title: "Pass risk", text: "Mandate, exposure, liquidity and system health", state: "BLOCK CAPABLE" },
              { icon: Gauge, title: "Act in scope", text: "Only permitted execution actions", state: "CONTROLLED" },
              { icon: FileClock, title: "Review", text: "Outcome, process and audit record", state: "TRACE" },
            ].map((item, index) => (
              <article key={item.title} className={index === 3 ? "active" : index < 3 ? "done" : ""}>
                <i>0{index + 1}</i><item.icon size={19} /><div><small>{item.state}</small><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-trade-modes-section">
        <div className="e2p-container">
          <header className="e2p-trade-modes-head"><span className="e2p-section-index">03 / Operating modes</span><h2>Earn permission.<br />Do not assume it.</h2></header>
          <div className="e2p-trade-modes">
            <article><span>01</span><Radar size={23} /><small>LEARN THE SYSTEM</small><h3>Observe</h3><p>Read the context, decision and risk trace without creating an order.</p><b>NO EXECUTION</b></article>
            <article className="active"><span>02</span><ChartCandlestick size={23} /><small>TEST THE PROCESS</small><h3>Paper</h3><p>Run the complete operating loop against simulated execution and review the result.</p><b>SIMULATED</b></article>
            <article><span>03</span><LockKeyhole size={23} /><small>OPERATE IN SCOPE</small><h3>Controlled live</h3><p>Use narrow account permissions, explicit limits, human confirmation and hard stops.</p><b>PERMISSIONED</b></article>
          </div>
          <p className="e2p-trade-mode-note">Mode availability depends on the current Trading Agent product, jurisdiction, account configuration and permissions. Trading involves risk of total loss.</p>
        </div>
      </section>

      <section className="e2p-section e2p-trade-risk-section">
        <div className="e2p-container">
          <header className="e2p-trade-editorial-head dark">
            <div><span className="e2p-section-index">04 / Risk constitution</span><h2>Permission is narrow.<br /><em>Controls are hard.</em></h2></div>
            <p>AI can propose or operate only inside an explicit mandate. Trade permission never implies withdrawal permission, and no control is designed to be bypassed.</p>
          </header>
          <div className="e2p-trade-risk-lines">
            {[
              ["01", "Explicit mandate", "Account, instrument, action, leverage, loss and time boundaries are defined first.", "REQUIRED"],
              ["02", "Complete plan", "No action without thesis, entry logic, invalidation, stop, size and monitoring.", "REQUIRED"],
              ["03", "Pre-trade gates", "Exposure, liquidity, event, execution and system-health checks can block action.", "BLOCK CAPABLE"],
              ["04", "No withdrawal", "The Agent has no authority to withdraw assets or expand its own permissions.", "LOCKED"],
              ["05", "Append-only audit", "Inputs, plan, checks, execution, monitoring and review remain traceable.", "RECORDED"],
            ].map(([index, title, text, state], itemIndex) => (
              <article key={title} className={itemIndex === 2 ? "active" : ""}><i>{index}</i><h3>{title}</h3><p>{text}</p><b>{state}</b></article>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-trade-community-section">
        <div className="e2p-container">
          <header className="e2p-trade-editorial-head">
            <div><span className="e2p-section-index">05 / Community intelligence</span><h2>A trading room that<br /><em>improves the process.</em></h2></div>
            <p>Members are not passive signal consumers. They build context, challenge decisions and turn market experience into reusable intelligence.</p>
          </header>
          <div className="e2p-trade-community-list">
            {COMMUNITY_DESKS.map((item, index) => (
              <article key={item.title}><i>0{index + 1}</i><item.icon size={22} /><div><small>{item.label}</small><h3>{item.title}</h3></div><p>{item.text}</p><ArrowRight size={18} /></article>
            ))}
          </div>
        </div>
      </section>

      <section id="points-layer" className="e2p-section e2p-trade-points-section">
        <div className="e2p-container">
          <header className="e2p-trade-points-head">
            <div><span className="e2p-section-index">06 / $E2P points layer</span><h2>Coordinate the people.<br /><em>Keep the Agent central.</em></h2></div>
            <p>$E2P primarily supports contribution records, reputation, access and community voice. It is the coordination layer around the Trading Agent—not the trading thesis.</p>
          </header>
          <div className="e2p-trade-points-ledger">
            <article><span>01</span><small>EARN</small><h3>Contribute</h3><p>Research · review · community work</p></article>
            <ArrowRight size={18} />
            <article><span>02</span><small>BUILD</small><h3>Reputation</h3><p>Quality · consistency · accountability</p></article>
            <ArrowRight size={18} />
            <article><span>03</span><small>UNLOCK</small><h3>Access</h3><p>Rooms · tools · selected opportunities</p></article>
            <ArrowRight size={18} />
            <article><span>04</span><small>SIGNAL</small><h3>Voice</h3><p>Community priorities · governance input</p></article>
          </div>
          <div className="e2p-trade-points-actions">
            <span><Bot size={14} /> THE AGENT REMAINS THE PRODUCT</span>
            <div className="e2p-actions"><a href={CMC_URL} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-dark">View $E2P on CMC <ExternalLink size={14} /></a><a href={`https://bscscan.com/token/${E2P_CONTRACT}`} target="_blank" rel="noreferrer" className="e2p-btn">Token contract <ExternalLink size={14} /></a></div>
          </div>
          <p className="e2p-trade-disclaimer">$E2P is a public token, not a promise of value, access or performance. Community mechanics and thresholds must follow the latest published Club rules. Trading can result in total loss.</p>
        </div>
      </section>

      <section className="e2p-final">
        <span>Complete plan · Hard risk gates · Auditable decisions</span>
        <h2>Build the process.<br />Then make the move.</h2>
        <div className="e2p-actions">
          <a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-dark">Launch Trading Agent <ExternalLink size={14} /></a>
          <a href={E2P_LINKS.telegram} target="_blank" rel="noreferrer" className="e2p-btn">Join the community <ArrowUpRight size={15} /></a>
        </div>
      </section>
    </>
  );
}
