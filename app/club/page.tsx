import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpen,
  Bot,
  ExternalLink,
  Fingerprint,
  KeyRound,
  MessageCircle,
  Radar,
  SearchCheck,
  ShieldCheck,
  Users,
  Vote,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "Token-Based Trading Community & AI Trading Agent | E2PDAO",
  description:
    "E2P Club is a token-based trading community with shared market intelligence and a discipline-first AI Trading Agent governed by explicit authorization, hard risk controls and audit trails.",
  alternates: { canonical: "/club/" },
  openGraph: {
    title: "E2P Club — Token-Based Trading Community",
    description: "$E2P access, shared intelligence and a risk-controlled AI Trading Agent.",
    url: "/club/",
  },
};

const E2P_CONTRACT = "0x597716022fc149c2b89061d6ec6b5eac4a97bc20";
const CMC_URL = "https://coinmarketcap.com/currencies/e2p-token/";

const MEMBER_VALUE = [
  { icon: Radar, title: "Market intelligence", text: "Discuss market structure, macro catalysts, project events and changing risk conditions." },
  { icon: BookOpen, title: "Trading frameworks", text: "Share research methods, plan reviews, execution discipline and risk-management concepts." },
  { icon: SearchCheck, title: "Project discovery", text: "Access public project updates, education, AMAs and selected ecosystem opportunities." },
  { icon: MessageCircle, title: "Real market feedback", text: "Projects hear the questions, objections and perceptions of active community participants." },
];

function AgentBoard() {
  return (
    <div className="e2p-visual-card dark" aria-label="AI Trading Agent cockpit preview">
      <header className="e2p-visual-header">
        <span>E2P TRADING AGENT / DISCIPLINE CO-PILOT</span>
        <span className="e2p-live">CONTROLLED</span>
      </header>
      <div className="e2p-agent-board">
        <div className="e2p-agent-topline">
          <span>MARKET MODE<b>OBSERVE</b></span>
          <span>MANDATE<b>REQUIRED</b></span>
          <span>RISK GATES<b>HARD</b></span>
          <span>WITHDRAWAL<b>DISABLED</b></span>
        </div>
        <div className="e2p-agent-core">
          <div className="e2p-chart-panel">
            <header><span>MARKET + EVENT CONTEXT</span><b>MONITORING</b></header>
            <svg viewBox="0 0 360 130" className="e2p-agent-chart" role="img" aria-label="Illustrative market context chart">
              <defs>
                <linearGradient id="agentArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#20c997" stopOpacity=".34" />
                  <stop offset="1" stopColor="#20c997" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="area" d="M0 112 L22 104 L44 108 L66 88 L88 94 L110 73 L132 82 L154 58 L176 65 L198 48 L220 53 L242 32 L264 43 L286 27 L308 35 L332 20 L360 25 L360 130 L0 130 Z" />
              <path className="line" d="M0 112 L22 104 L44 108 L66 88 L88 94 L110 73 L132 82 L154 58 L176 65 L198 48 L220 53 L242 32 L264 43 L286 27 L308 35 L332 20 L360 25" />
            </svg>
          </div>
          <div className="e2p-risk-panel">
            <header><span>RISK POSTURE</span><span>PRE-TRADE</span></header>
            <div className="e2p-risk-stack">
              <span>Authorization boundary <b>CHECKED</b></span>
              <span>Stop-loss requirement <b>REQUIRED</b></span>
              <span>Position & leverage limits <b>ENFORCED</b></span>
              <span>Event / execution risk <b>MONITORED</b></span>
              <span>Audit record <b>APPEND-ONLY</b></span>
            </div>
          </div>
        </div>
        <div className="e2p-agent-flow">
          {["Observe", "Research", "Plan", "Risk gate", "Execute", "Review"].map((step, index) => (
            <span key={step}>0{index + 1}<b>{step}</b></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ClubPage() {
  return (
    <>
      <section className="e2p-container e2p-page-hero e2p-grid-wash">
        <div className="e2p-page-hero-copy">
          <span className="e2p-eyebrow">E2P Club / Token-Based Community</span>
          <h1>
            Shared intelligence.<br />
            <span className="e2p-highlight">Disciplined trading.</span>
          </h1>
          <p>
            E2P Club combines a token-based member layer, market discussion and
            a discipline-first AI Trading Agent that operates only inside clear
            authorization, risk and audit boundaries.
          </p>
          <div className="e2p-actions">
            <a href={E2P_LINKS.telegram} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-dark">
              Join E2P Club <ArrowUpRight size={15} />
            </a>
            <a href="#trading-agent" className="e2p-btn">See the Agent logic</a>
          </div>
        </div>
        <AgentBoard />
      </section>

      <section id="token-access" className="e2p-section e2p-section-ink">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">01 / Token-based layer</span>
            <h2>$E2P turns membership<br />into an onchain layer.</h2>
            <p>
              The token connects contribution, verifiable ownership, community
              access and governance routes across the E2P Club ecosystem.
            </p>
          </header>

          <div className="e2p-token-panel">
            <div className="e2p-token-summary">
              <span>E2P TOKEN / BNB SMART CHAIN</span>
              <strong>$E2P</strong>
              <small>Publicly described as the governance token of E2P Club and a reward layer for contributions to community growth.</small>
              <div className="e2p-actions">
                <a href={CMC_URL} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-dark">CoinMarketCap <ExternalLink size={14} /></a>
              </div>
            </div>
            <div className="e2p-token-gates">
              <article><span>01 / CONTRIBUTE</span><KeyRound size={22} /><h3>Earn or hold $E2P</h3><p>Community contribution and token ownership form the base of the member layer.</p></article>
              <article><span>02 / VERIFY</span><Fingerprint size={22} /><h3>Verify onchain status</h3><p>Wallet-based verification can support transparent access without exposing private credentials.</p></article>
              <article><span>03 / ACCESS</span><Users size={22} /><h3>Unlock member routes</h3><p>Published Club rules can connect verified status with community and product access.</p></article>
              <article><span>04 / GOVERN</span><Vote size={22} /><h3>Participate in direction</h3><p>The token provides the foundation for future community governance processes and rules.</p></article>
            </div>
          </div>

          <div className="e2p-token-facts">
            <span><strong>10B E2P</strong>Total supply</span>
            <span><strong>10B E2P</strong>Maximum supply</span>
            <span><strong>6B E2P</strong>Self-reported circulating supply</span>
          </div>
          <p className="e2p-note" style={{ color: "#7f8981" }}>
            Token supply figures and description are taken from the E2P Token
            preview page on CoinMarketCap. Access mechanics and thresholds must
            follow the latest rules published by E2P Club; no token value or
            market performance is promised.
          </p>
        </div>
      </section>

      <section id="trading-agent" className="e2p-section">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">02 / AI Trading Agent</span>
            <h2>A disciplined co-pilot.<br />Not a profit promise.</h2>
            <p>
              The Agent helps structure information, enforce trading boundaries,
              execute within authorization and turn every action into an auditable
              review loop.
            </p>
          </header>
          <div className="e2p-operating-grid">
            {[
              ["01", "Sense & research", "Monitor market structure, macro events, project catalysts and the expert knowledge base."],
              ["02", "Build the plan", "Convert a thesis into a structured plan with entry, invalidation, stop, size and allowed actions."],
              ["03", "Pass hard risk gates", "Check mandate, instrument, leverage, loss limits, liquidity, events and execution health."],
              ["04", "Execute & review", "Send only approved actions, monitor positions and write outcomes back into the audit and review loop."],
            ].map(([index, title, text]) => (
              <article key={title}><span>{index}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>

          <div className="e2p-actions" style={{ marginTop: 28 }}>
            <a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-dark">
              Launch Trading Agent <ExternalLink size={14} />
            </a>
            <a href={`https://bscscan.com/token/${E2P_CONTRACT}`} target="_blank" rel="noreferrer" className="e2p-btn">
              View token contract <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-white">
        <div className="e2p-container">
          <header className="e2p-section-head">
            <span className="e2p-section-index">03 / Community value</span>
            <h2>More than<br />a signal group.</h2>
            <p>
              The community creates a shared research and feedback layer around
              projects, markets and disciplined decision-making.
            </p>
          </header>
          <div className="e2p-membership-grid">
            {MEMBER_VALUE.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <item.icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="e2p-section e2p-section-ink">
        <div className="e2p-container e2p-loop">
          <div className="e2p-loop-copy">
            <span className="e2p-eyebrow">Explicit safety boundary</span>
            <h3>AI can propose.<br />Risk must allow.</h3>
            <p>
              Trading actions require a valid mandate and structured plan. Hard
              controls block out-of-scope assets, missing stops, excessive risk,
              unhealthy execution conditions and withdrawal authority.
            </p>
          </div>
          <div className="e2p-loop-board">
            <header><span>MANDATE + HARD RISK + AUDIT</span><b>NON-BYPASSABLE</b></header>
            <div className="e2p-loop-track">
              {[
                ["01", "Explicit authorization", "Accounts, instruments, risk, leverage, actions and time window", "MANDATE"],
                ["02", "Pre-trade hard gates", "Stop, exposure, loss, liquidity, event and execution checks", "RISK"],
                ["03", "No withdrawal authority", "Trade permission never implies withdrawal permission", "ISOLATED"],
                ["04", "Full audit trail", "Plan, check, execution, monitoring and review remain traceable", "RECORDED"],
              ].map(([index, title, text, state], i) => (
                <article key={title} className={i === 1 ? "active" : ""}>
                  <i>{index}</i><span><b>{title}</b><small>{text}</small></span><em>{state}</em>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="e2p-final">
        <span>$E2P access · Community intelligence · Hard risk controls</span>
        <h2>Trade together.<br />Stay disciplined.</h2>
        <a href={E2P_LINKS.telegram} target="_blank" rel="noreferrer" className="e2p-btn e2p-btn-dark">
          Enter E2P Club <ArrowUpRight size={15} />
        </a>
      </section>
    </>
  );
}
