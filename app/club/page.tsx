import type { CSSProperties } from "react";
import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BellRing,
  BookOpen,
  Bot,
  BrainCircuit,
  ChartCandlestick,
  Check,
  CircleStop,
  FileCheck2,
  Gauge,
  KeyRound,
  Layers3,
  LockKeyhole,
  MessageSquare,
  Radar,
  RefreshCw,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "E2P AI Trading Agent | A Controlled Trading Operating System",
  description: "See how E2P connects AI market analysis, strategy research, deterministic risk controls, controlled CEX execution and auditable operations.",
  alternates: { canonical: "/club/" },
};

const CONTRACT = "0x597716022fc149c2b89061d6ec6b5eac4a97bc20";
const CMC_URL = "https://coinmarketcap.com/currencies/e2p-token/";

const STAGES = [
  { code: "SENSE", icon: Radar },
  { code: "RECALL", icon: BookOpen },
  { code: "PLAN", icon: Workflow },
  { code: "GUARD", icon: ShieldCheck },
  { code: "EXECUTE", icon: Target },
  { code: "MONITOR", icon: Activity },
  { code: "REVIEW", icon: RefreshCw },
];

const CANDLES = [
  [30, 45, 0], [22, 39, 1], [46, 62, 1], [36, 51, 1], [25, 40, 0], [31, 48, 0],
  [42, 60, 0], [28, 43, 1], [39, 56, 0], [48, 65, 0], [34, 50, 1], [26, 42, 1],
  [37, 55, 1], [49, 67, 0], [43, 58, 0], [31, 49, 1], [26, 44, 1], [35, 52, 0],
  [45, 61, 0], [52, 69, 0], [39, 55, 1], [46, 64, 1], [56, 76, 0], [49, 68, 0],
  [36, 52, 1], [42, 59, 1], [54, 72, 1], [47, 65, 0], [59, 79, 0], [63, 84, 0],
  [52, 71, 1], [58, 77, 0], [67, 88, 0], [61, 82, 1], [72, 94, 0], [78, 101, 0],
];

const STRATEGIES = [
  ["Trend pullback", "MULTI-TF", "OBSERVING", "v1.2"],
  ["Range edge reversal", "15M / 1H", "VALIDATING", "v0.9"],
  ["Breakout retest", "1H / 4H", "DRAFT", "v0.7"],
  ["Event volatility guard", "EVENT", "ACTIVE RULE", "v1.4"],
];

const MODULES = [
  { icon: Bot, label: "AI Trader", detail: "Decision workspace" },
  { icon: ChartCandlestick, label: "Trading Cockpit", detail: "Market · account · execution" },
  { icon: BookOpen, label: "Research Center", detail: "Evidence · strategies" },
  { icon: ShieldCheck, label: "Risk Center", detail: "Authority · capital limits" },
  { icon: Activity, label: "System Operations", detail: "Events · audit · health" },
];

function CandleChart({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`v7-candle-chart${compact ? " compact" : ""}`} aria-label="Illustrative candlestick market chart">
      <span className="v7-chart-line line-a" /><span className="v7-chart-line line-b" /><span className="v7-chart-line line-c" />
      <span className="v7-chart-price">64,824</span>
      <div>{CANDLES.map(([body, wick, down], index) => <i key={index} className={down ? "down" : "up"} style={{ "--body": `${body}%`, "--wick": `${wick}%` } as CSSProperties}><b /></i>)}</div>
    </div>
  );
}

function ProductWorkspace() {
  return (
    <div className="v7-workspace">
      <header className="v7-workspace-topbar">
        <span className="v7-workspace-brand"><img src="/e2p-icon-transparent.svg" alt="" /><b>E2P AGENT</b></span>
        <span><i className="online" /> OKX · CONNECTED</span>
        <span><Zap /> AUTOMATED · PAUSED</span>
        <button type="button"><CircleStop /> EMERGENCY STOP</button>
      </header>
      <div className="v7-workspace-shell">
        <aside className="v7-workspace-nav">
          {MODULES.map((item, index) => <div className={index === 0 ? "active" : ""} key={item.label}><item.icon /><span><b>{item.label}</b><small>{item.detail}</small></span></div>)}
          <footer><i className="online" /><span>System healthy</span></footer>
        </aside>
        <main className="v7-workspace-main">
          <header><div><span>AI TRADER / DECISION</span><h3>Ask. Inspect. Decide.</h3></div><div className="v7-account-stats"><span><small>POSITIONS</small><b>0</b></span><span><small>DAILY P&amp;L</small><b>—</b></span><span><small>MODE</small><b>OBSERVE</b></span></div></header>
          <section className="v7-agent-dialogue">
            <div className="v7-user-query"><MessageSquare /><p>Assess BTC/USDT using approved research and the current risk mandate.</p></div>
            <article>
              <header><Bot /><span><small>AGENT DECISION</small><b>CONTINUE OBSERVING</b></span><em>NO ORDER</em></header>
              <p>Structure is constructive, but the required confirmation window is incomplete. The system records the missing condition and keeps new exposure at zero.</p>
              <div><span><Check /> Evidence loaded</span><span><Check /> Risk checked</span><span className="pending"><RefreshCw /> Confirmation pending</span></div>
            </article>
            <footer><Search /><span>Ask the Agent about a market, position or rule…</span><ArrowRight /></footer>
          </section>
        </main>
        <aside className="v7-workspace-rail">
          <section><header><ShieldCheck /><b>HARD RISK</b><span>READY</span></header><dl><div><dt>Allowed markets</dt><dd>BTC · ETH</dd></div><div><dt>Max leverage</dt><dd>3×</dd></div><div><dt>Risk / trade</dt><dd>0.30%</dd></div><div><dt>Withdrawal</dt><dd>DISABLED</dd></div></dl><footer><small>DAILY LOSS BUDGET</small><b>100%</b><i><span /></i></footer></section>
          <section><header><FileCheck2 /><b>DECISION TRACE</b><span>04 STEPS</span></header>{["Context sourced", "Evidence challenged", "Rules evaluated", "Action recorded"].map((item, index) => <p key={item}><i>{index + 1}</i><span>{item}</span><Check /></p>)}</section>
        </aside>
      </div>
      <footer className="v7-demo-caption"><span>ILLUSTRATIVE PRODUCT VIEW</span><b>No live account or performance data is shown.</b></footer>
    </div>
  );
}

function TradingCockpit() {
  return (
    <div className="v7-cockpit">
      <header><div><span>TRADING COCKPIT / BTC-USDT</span><b>1H · PUBLIC MARKET CONTEXT</b></div><div><i className="online" /> MARKET FEED HEALTHY</div></header>
      <div className="v7-cockpit-grid">
        <section className="v7-market-panel"><header><div><small>BTC / USDT</small><strong>64,824.00</strong><em>+1.34%</em></div><nav><b>15m</b><b className="active">1h</b><b>4h</b><b>1D</b></nav></header><CandleChart /><footer><span>11 AUG</span><span>13 AUG</span><span>15 AUG</span><span>18 AUG</span></footer></section>
        <aside className="v7-watchlist"><header><b>WATCHLIST</b><span>3 MARKETS</span></header>{[["BTC/USDT", "64,824", "+1.34%"], ["ETH/USDT", "3,145", "+0.44%"], ["SUI/USDT", "0.65", "−3.08%"]].map((row, index) => <div key={row[0]}><i>{index + 1}</i><b>{row[0]}</b><span>{row[1]}</span><em className={index === 2 ? "negative" : ""}>{row[2]}</em></div>)}<section><small>MARKET SNAPSHOT</small><p><span>24H HIGH</span><b>65,036.90</b></p><p><span>24H LOW</span><b>63,946.00</b></p><p><span>FUNDING</span><b>+0.0023%</b></p></section></aside>
      </div>
      <footer className="v7-cockpit-metrics"><article><Gauge /><span><small>OPEN EXPOSURE</small><b>0.00%</b></span></article><article><BarChart3 /><span><small>MARKET BREADTH</small><b>31.5%</b></span></article><article><BellRing /><span><small>ACTIVE EVENTS</small><b>03</b></span></article><article><LockKeyhole /><span><small>EXECUTION MODE</small><b>PAUSED</b></span></article></footer>
    </div>
  );
}

function ResearchOperations() {
  return (
    <div className="v7-intelligence-grid">
      <section className="v7-strategy-library">
        <header><div><span>RESEARCH CENTER</span><h3>Strategy library</h3></div><button type="button"><Sparkles /> IMPORT RESEARCH</button></header>
        <div className="v7-library-summary"><span><small>VERSIONED STRATEGIES</small><b>18</b></span><span><small>LIVE-ELIGIBLE</small><b>00</b></span><span><small>IN OBSERVATION</small><b>05</b></span></div>
        <div className="v7-strategy-table"><header><span>STRATEGY</span><span>CONTEXT</span><span>STATUS</span><span>VERSION</span></header>{STRATEGIES.map((row, index) => <article key={row[0]}><i>{String(index + 1).padStart(2, "0")}</i><b>{row[0]}</b><span>{row[1]}</span><em className={index === 3 ? "active" : ""}>{row[2]}</em><small>{row[3]}</small></article>)}</div>
        <footer><ShieldCheck /><p><b>Research and execution are separated.</b><span>A strategy must pass evidence, version and risk gates before it can become eligible for live use.</span></p></footer>
      </section>
      <section className="v7-ops-center">
        <header><div><span>SYSTEM OPERATIONS</span><h3>Events &amp; audit</h3></div><b>AUG / 2026</b></header>
        <div className="v7-ops-calendar"><header>{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</header><div>{Array.from({ length: 21 }, (_, index) => <span className={[4, 10, 11, 15, 17].includes(index) ? "has-event" : ""} key={index}>{index + 1}{[4, 10, 11, 15, 17].includes(index) && <i />}</span>)}</div></div>
        <div className="v7-event-log"><header><span>RECENT SYSTEM EVENTS</span><b>REPLAYABLE</b></header>{[[Radar, "Market context refreshed", "23:09:55"], [BookOpen, "Evidence set versioned", "23:07:12"], [ShieldCheck, "Risk mandate checked", "23:06:48"], [Activity, "Observe state retained", "23:06:45"]].map(([Icon, label, time]) => { const EventIcon = Icon as typeof Radar; return <article key={label as string}><EventIcon /><span><b>{label as string}</b><small>{time as string}</small></span><Check /></article>; })}</div>
      </section>
    </div>
  );
}

export default function ClubPage() {
  return <>
    <section className="v7-trade-hero">
      <div className="v7-trade-grid" />
      <div className="v4-wrap">
        <div className="v7-trade-intro"><span className="v4-kicker">E2P AI Trading Agent</span><h1>See the market.<br />Control the action<span>.</span></h1><p>A trading operating system where AI analyzes context, deterministic rules control risk, and every action stays inside user-defined permissions.</p><div className="v4-hero-actions"><a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="v4-button v4-button-acid">Open Trading Agent <ArrowUpRight size={16} /></a><a href="#product" className="v4-text-link">Explore the system <ArrowRight size={15} /></a></div></div>
        <ProductWorkspace />
      </div>
    </section>

    <section className="v7-trade-principle"><div className="v4-wrap"><span>THE OPERATING RULE</span><h2>No evidence<span>—</span>no new risk.</h2><div><b>AI PROPOSES</b><i /><b>CODE PERMITS</b><i /><b>USER CONTROLS</b></div></div></section>

    <section className="v7-trade-why"><div className="v4-wrap"><header><span className="v4-label">01 / Why</span><h2>One system for the full trading loop.</h2><p>Information, judgment, risk and execution should not live in disconnected tools.</p></header><div>{MODULES.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, "0")}</span><item.icon /><h3>{item.label}</h3><p>{item.detail}</p></article>)}</div></div></section>

    <section id="product" className="v7-product-section"><div className="v4-wrap"><header><span className="v4-label">02 / Market cockpit</span><h2>Market state becomes visible before it becomes actionable.</h2><p>Illustrative interface showing product structure—not live prices, positions or performance.</p></header><TradingCockpit /></div></section>

    <section className="v7-decision-section"><div className="v4-wrap"><header><span className="v4-label">03 / Decision system</span><h2>Seven states. No jump from prompt to order.</h2></header><div className="v7-stage-track">{STAGES.map((item, index) => <article className={index === 3 ? "active" : ""} key={item.code}><span>{String(index + 1).padStart(2, "0")}</span><div><item.icon /><b>{item.code}</b></div>{index < STAGES.length - 1 && <ArrowRight />}</article>)}</div><footer><span><BrainCircuit /> MODEL <b>interprets context</b></span><span><ShieldCheck /> SYSTEM <b>checks authority</b></span><span><Target /> EXECUTION <b>acts in scope</b></span><span><FileCheck2 /> AUDIT <b>records the cycle</b></span></footer></div></section>

    <section className="v7-intelligence-section"><div className="v4-wrap"><header><span className="v4-label">04 / Research &amp; operations</span><h2>Every strategy has a version.<br />Every action has a trace.</h2><p>Research, validation, events and system decisions remain inspectable rather than disappearing inside a black box.</p></header><ResearchOperations /></div></section>

    <section id="risk" className="v7-risk-section"><div className="v4-wrap"><header><span className="v4-label">05 / Risk center</span><h2>The Agent has boundaries it cannot rewrite.</h2></header><div className="v7-risk-board"><aside><ShieldCheck /><span>USER-DEFINED AUTHORITY</span><b>BOUNDED<br />EXECUTION</b><p>Permissions and capital limits sit outside model reasoning.</p></aside><div>{[[KeyRound, "Keys isolated", "Secrets never enter model context."], [SlidersHorizontal, "Scope explicit", "Markets, size and leverage are defined by the user."], [CircleStop, "Uncertainty stops action", "Stale data or unknown order state blocks new risk."], [LockKeyhole, "Withdrawal disabled", "Trading access never implies withdrawal authority."], [Zap, "Emergency control", "Pause, revoke and recovery remain human controls."], [FileCheck2, "Evidence retained", "Inputs, checks and actions remain replayable."]].map(([Icon, title, copy], index) => { const RiskIcon = Icon as typeof KeyRound; return <article key={title as string}><i>{String(index + 1).padStart(2, "0")}</i><RiskIcon /><span><b>{title as string}</b><p>{copy as string}</p></span><Check /></article>; })}</div></div></div></section>

    <section id="community" className="v7-community-section"><div className="v4-wrap"><header><span className="v4-label">06 / Token-based community</span><h2>$E2P coordinates participation around the Agent.</h2><p>Community research and review can strengthen the evidence layer. Trading authority still passes through the same risk-controlled system.</p><div><a href={CMC_URL} target="_blank" rel="noreferrer">CoinMarketCap <ArrowUpRight /></a><a href={`https://bscscan.com/token/${CONTRACT}`} target="_blank" rel="noreferrer">Token contract <ArrowUpRight /></a></div></header><section>{[[BookOpen, "CONTRIBUTE", "Research and playbooks"], [Users, "PARTICIPATE", "Community priorities"], [Layers3, "ACCESS", "Tools and experiences"], [Activity, "IMPROVE", "Review and feedback"]].map(([Icon, title, copy], index) => { const CommunityIcon = Icon as typeof BookOpen; return <article key={title as string}><span>{String(index + 1).padStart(2, "0")}</span><CommunityIcon /><b>{title as string}</b><p>{copy as string}</p>{index < 3 && <ArrowRight />}</article>; })}</section></div></section>

    <section className="v7-trade-final"><div className="v4-wrap"><div><span>RISK DISCLOSURE</span><p>Trading involves substantial risk of loss. Product views are illustrative; Agent outputs are not guaranteed profits or financial advice.</p></div><section><small>E2P AI TRADING AGENT</small><h2>Evidence before execution.</h2><a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="v4-button v4-button-acid">Open Trading Agent <ArrowUpRight size={16} /></a></section></div></section>
  </>;
}
