import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  BrainCircuit,
  ChartCandlestick,
  Check,
  CircleStop,
  Coins,
  Database,
  FileCheck2,
  Layers3,
  MessageSquare,
  Network,
  Radar,
  RefreshCw,
  Search,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Target,
  TimerReset,
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

const STRATEGIES = [
  { name: "Trend pullback", market: "BTC / USDT", frame: "1H · 4H", evidence: "12 / 15", state: "FORWARD TEST", run: "23:07:12" },
  { name: "Range edge reversal", market: "ETH / USDT", frame: "15M · 1H", evidence: "09 / 15", state: "VALIDATING", run: "22:56:40" },
  { name: "Breakout retest", market: "BTC / USDT", frame: "1H · 4H", evidence: "07 / 15", state: "DRAFT", run: "21:42:18" },
  { name: "Event volatility guard", market: "ALL ALLOWED", frame: "EVENT", evidence: "15 / 15", state: "ACTIVE RULE", run: "23:09:55" },
];

const MODULES = [
  { icon: Bot, label: "AI Trader", detail: "Decision workspace" },
  { icon: ChartCandlestick, label: "Trading Cockpit", detail: "Market · account · execution" },
  { icon: BookOpen, label: "Research Center", detail: "Evidence · strategies" },
  { icon: ShieldCheck, label: "Risk Center", detail: "Authority · capital limits" },
  { icon: Activity, label: "System Operations", detail: "Events · audit · health" },
];

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
          <header><div><span>AI TRADER / DECISION</span><h3>Ask. Inspect. Decide.</h3></div><div className="v7-account-stats"><span><small>POSITIONS</small><b>0</b></span><span><small>DAILY P&amp;L</small><b>—</b></span><span><small>MODE</small><b>PLAN REVIEW</b></span></div></header>
          <section className="v7-agent-dialogue">
            <div className="v7-user-query"><MessageSquare /><p>Assess BTC/USDT using approved research and the current risk mandate.</p></div>
            <article className="v8-agent-plan">
              <header><Bot /><span><small>ILLUSTRATIVE AGENT PLAN</small><b>BTC / USDT · CONDITIONAL LONG</b></span><em>REVIEW REQUIRED</em></header>
              <p>If BTC closes above 64,920 on the 1H timeframe with volume confirmation, stage a limit entry. Cancel the plan if confirmation expires or the invalidation level is reached first.</p>
              <dl className="v8-plan-grid"><div><dt>ENTRY ZONE</dt><dd>64,920–65,050</dd></div><div><dt>STOP</dt><dd>64,260</dd></div><div><dt>TARGET 01</dt><dd>66,200</dd></div><div><dt>TARGET 02</dt><dd>67,050</dd></div><div><dt>RISK / TRADE</dt><dd>0.30%</dd></div><div><dt>LEVERAGE</dt><dd>≤ 2×</dd></div></dl>
              <div className="v8-plan-checks"><span><Check /> Evidence 12 / 15</span><span><Check /> Hard risk passed</span><span className="pending"><RefreshCw /> Human approval required</span></div>
            </article>
            <footer><Search /><span>Ask the Agent about a market, position or rule…</span><ArrowRight /></footer>
          </section>
        </main>
        <aside className="v7-workspace-rail">
          <section><header><ShieldCheck /><b>HARD RISK</b><span>READY</span></header><dl><div><dt>Allowed markets</dt><dd>BTC · ETH</dd></div><div><dt>Max leverage</dt><dd>3×</dd></div><div><dt>Risk / trade</dt><dd>0.30%</dd></div><div><dt>Withdrawal</dt><dd>DISABLED</dd></div></dl><footer><small>DAILY LOSS BUDGET</small><b>100%</b><i><span /></i></footer></section>
          <section><header><FileCheck2 /><b>DECISION TRACE</b><span>04 STEPS</span></header>{["Context sourced", "Evidence challenged", "Rules evaluated", "Plan proposed"].map((item, index) => <p key={item}><i>{index + 1}</i><span>{item}</span><Check /></p>)}</section>
        </aside>
      </div>
      <footer className="v7-demo-caption"><span>ILLUSTRATIVE PRODUCT VIEW</span><b>No live account or performance data is shown.</b></footer>
    </div>
  );
}

function ResearchOperations() {
  return (
    <div className="v7-intelligence-grid">
      <section className="v7-strategy-library">
        <header><div><span>RESEARCH CENTER</span><h3>Versioned strategy registry</h3></div><button type="button"><Sparkles /> IMPORT RESEARCH</button></header>
        <div className="v7-library-summary"><span><small>VERSIONED STRATEGIES</small><b>18</b></span><span><small>FORWARD TESTS</small><b>05</b></span><span><small>LIVE-ELIGIBLE</small><b>00</b></span></div>
        <div className="v8-research-filter"><Search/><span>Search strategy, market or evidence ID</span><b>ALL STATES</b></div>
        <div className="v7-strategy-table v8-strategy-table"><header><span>STRATEGY</span><span>MARKET / FRAME</span><span>EVIDENCE</span><span>STATE / LAST RUN</span></header>{STRATEGIES.map((item, index) => <article key={item.name}><i>{String(index + 1).padStart(2, "0")}</i><b>{item.name}</b><span><strong>{item.market}</strong><small>{item.frame}</small></span><span><strong>{item.evidence}</strong><small>checks passed</small></span><em className={item.state === "ACTIVE RULE" ? "active" : ""}>{item.state}<small>{item.run}</small></em></article>)}</div>
        <footer><ShieldCheck /><p><b>Research and execution are separated.</b><span>A strategy must pass evidence, version and risk gates before it can become eligible for live use.</span></p></footer>
      </section>
      <section className="v7-ops-center">
        <header><div><span>SYSTEM OPERATIONS</span><h3>Agent run &amp; system health</h3></div><b>RUN · 8F3A21</b></header>
        <div className="v8-ops-health">{[[Database,"MARKET DATA","HEALTHY","118 ms"],[Network,"EXCHANGE STATE","SYNCED","0 gaps"],[ShieldCheck,"RISK ENGINE","READY","v4.6"],[ServerCog,"AGENT QUEUE","RUNNING","02 jobs"]].map(([Icon,label,state,detail])=>{const HealthIcon=Icon as typeof Database;return <article key={label as string}><HealthIcon/><span><small>{label as string}</small><b>{state as string}</b></span><em>{detail as string}</em></article>})}</div>
        <div className="v8-agent-run"><header><span>LATEST DECISION RUN</span><b><i className="online"/> REPLAYABLE</b></header><section><div><small>MARKET</small><b>BTC / USDT</b></div><div><small>TIMEFRAME</small><b>1H</b></div><div><small>STARTED</small><b>23:09:41</b></div><div><small>DURATION</small><b>14.2s</b></div></section>{[[Radar,"Market snapshot loaded","23:09:41","12 sources"],[BookOpen,"Strategy evidence recalled","23:09:46","version 1.2"],[BrainCircuit,"Scenario plan generated","23:09:50","3 paths"],[ShieldCheck,"Hard-risk preflight passed","23:09:53","6 / 6 rules"],[FileCheck2,"Conditional plan recorded","23:09:55","awaiting review"]].map(([Icon,label,time,detail],index)=>{const RunIcon=Icon as typeof Radar;return <article key={label as string}><i>{String(index+1).padStart(2,"0")}</i><RunIcon/><span><b>{label as string}</b><small>{detail as string}</small></span><time>{time as string}</time><Check/></article>})}<footer><TimerReset/><span><b>Next scheduled evaluation</b><small>On 1H candle close or material event trigger</small></span></footer></div>
      </section>
    </div>
  );
}

export default function ClubPage() {
  return <>
    <section className="v7-trade-hero">
      <div className="v7-trade-grid" />
      <div className="v4-wrap">
        <div className="v7-trade-intro"><span className="v4-kicker">E2P AI Trading Agent</span><h1>See the market.<br />Control the action<span>.</span></h1><div className="v8-trade-hero-copy"><div><span><i className="online"/> MARKET CONTEXT</span><span>RESEARCH</span><span>RISK</span><span>EXECUTION</span></div><p>A trading operating system where AI analyzes context, deterministic rules control risk, and every action stays inside user-defined permissions.</p><div className="v4-hero-actions"><a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="v4-button v4-button-acid">Open Trading Agent <ArrowUpRight size={16} /></a><a href="#product" className="v4-text-link">Explore the system <ArrowRight size={15} /></a></div></div></div>
        <ProductWorkspace />
      </div>
    </section>

    <section className="v7-trade-why"><div className="v4-wrap"><header><span className="v4-label">01 / Why</span><h2>One system for the full trading loop.</h2><p>Information, judgment, risk and execution should not live in disconnected tools.</p></header><div>{MODULES.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, "0")}</span><item.icon /><h3>{item.label}</h3><p>{item.detail}</p></article>)}</div></div></section>

    <section id="product" className="v7-decision-section"><div className="v4-wrap"><header><span className="v4-label">02 / Decision system</span><h2>Seven states. No jump from prompt to order.</h2></header><div className="v7-stage-track">{STAGES.map((item, index) => <article className={index === 3 ? "active" : ""} key={item.code}><span>{String(index + 1).padStart(2, "0")}</span><div><item.icon /><b>{item.code}</b></div>{index < STAGES.length - 1 && <ArrowRight />}</article>)}</div><footer><span><BrainCircuit /> MODEL <b>interprets context</b></span><span><ShieldCheck /> SYSTEM <b>checks authority</b></span><span><Target /> EXECUTION <b>acts in scope</b></span><span><FileCheck2 /> AUDIT <b>records the cycle</b></span></footer></div></section>

    <section className="v7-intelligence-section"><div className="v4-wrap"><header><span className="v4-label">03 / Research &amp; operations</span><h2>Every strategy has a version.<br />Every action has a trace.</h2><p>See evidence coverage, validation state, system health and the exact tool sequence behind an illustrative Agent run.</p></header><ResearchOperations /></div></section>

    <section id="community" className="v7-community-section v8-community-section"><div className="v4-wrap"><header><span className="v4-label">04 / Token-based community</span><h2>$E2P is the community coordination layer.</h2><p>Members can use the token layer to organize participation, access community experiences and contribute research or review. It does not bypass the Agent&apos;s permissions or risk controls.</p><div><a href={CMC_URL} target="_blank" rel="noreferrer">View live market data on CoinMarketCap <ArrowUpRight /></a><a href={`https://bscscan.com/token/${CONTRACT}`} target="_blank" rel="noreferrer">Inspect contract <ArrowUpRight /></a></div></header><div className="v8-token-dashboard"><section className="v8-token-identity"><header><span><img src="/e2p-icon-transparent.svg" alt=""/><b>E2P TOKEN</b></span><em>CMC PREVIEW PAGE</em></header><div><Coins/><span><small>NETWORK</small><b>BNB Smart Chain</b></span></div><dl><div><dt>SYMBOL</dt><dd>E2P</dd></div><div><dt>CONTRACT</dt><dd>0x5977…97bc20</dd></div><div><dt>CMC UCID</dt><dd>11928</dd></div></dl><footer>Market price, volume and ranking can change. Open CoinMarketCap for the current public view.</footer></section><section className="v8-token-supply"><header><span>SUPPLY VIEW</span><b>CMC · 19 AUG 2026</b></header><div><i><b>60%</b><small>SELF-REPORTED<br/>CIRCULATING</small></i><dl><div><dt>SELF-REPORTED CIRCULATING</dt><dd>6B E2P</dd></div><div><dt>TOTAL SUPPLY</dt><dd>10B E2P</dd></div><div><dt>MAX. SUPPLY</dt><dd>10B E2P</dd></div></dl></div><footer>Supply figures follow the CoinMarketCap page and should be read with its stated self-reported data label.</footer></section><section className="v8-community-roles">{[[BookOpen,"CONTRIBUTE","Research, market context and reusable playbooks"],[Users,"PARTICIPATE","Community priorities, reviews and working groups"],[Layers3,"ACCESS","Token-gated tools, sessions and member experiences"],[Activity,"IMPROVE","Feedback loops that strengthen the operating system"]].map(([Icon,title,copy],index)=>{const RoleIcon=Icon as typeof BookOpen;return <article key={title as string}><span>{String(index+1).padStart(2,"0")}</span><RoleIcon/><div><b>{title as string}</b><p>{copy as string}</p></div></article>})}</section></div></div></section>

    <section className="v7-trade-final"><div className="v4-wrap"><div><span>RISK DISCLOSURE</span><p>Trading involves substantial risk of loss. Product views are illustrative; Agent outputs are not guaranteed profits or financial advice.</p></div><section><small>E2P AI TRADING AGENT</small><h2>Evidence before execution.</h2><a href={E2P_LINKS.tradingAgent} target="_blank" rel="noreferrer" className="v4-button v4-button-acid">Open Trading Agent <ArrowUpRight size={16} /></a></section></div></section>
  </>;
}
