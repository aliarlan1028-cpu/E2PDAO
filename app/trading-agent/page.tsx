import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Ban,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ExternalLink,
  LockKeyhole,
  Radar,
  ScrollText,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
} from 'lucide-react'

const PRODUCT_URL = 'https://yegidawir.xyz/'

const AGENTS = [
  {
    icon: Radar,
    title: 'Market Observer',
    text: 'Monitors market structure, macro signals, funding rates and high-impact events around the clock.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Trader',
    text: 'Turns evidence into a structured trade plan with entries, exits, invalidation and position sizing.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Officer',
    text: 'Checks every plan against the user mandate, leverage caps, drawdown rules and circuit breakers.',
  },
  {
    icon: Workflow,
    title: 'Execution Engine',
    text: 'Routes approved orders through exchange connectors with idempotent execution and status tracking.',
  },
  {
    icon: Activity,
    title: 'Position Monitor',
    text: 'Continuously watches open positions, stop-loss protection, exposure and changing market conditions.',
  },
  {
    icon: ScrollText,
    title: 'Review Agent',
    text: 'Reviews decisions and outcomes, preserving a traceable record for future strategy improvement.',
  },
]

const PIPELINE = [
  ['01', 'Perceive', 'Scan market, macro and event data'],
  ['02', 'Analyze', 'Build an evidence-backed market view'],
  ['03', 'Plan', 'Create a complete trade proposal'],
  ['04', 'Validate', 'Apply mandate and hard risk rules'],
  ['05', 'Execute', 'Send only approved orders'],
  ['06', 'Monitor', 'Protect positions continuously'],
  ['07', 'Review', 'Record outcomes and improve'],
]

const SAFEGUARDS = [
  {
    icon: SlidersHorizontal,
    title: 'User-defined mandate',
    text: 'The agent operates only within approved coins, leverage, risk limits and mandate expiry.',
  },
  {
    icon: Ban,
    title: 'No stop-loss, no trade',
    text: 'Orders that fail mandatory protection and exposure checks are rejected before execution.',
  },
  {
    icon: LockKeyhole,
    title: 'No withdrawal access',
    text: 'Exchange API permissions should remain trade-only; withdrawal permission is never required.',
  },
  {
    icon: ScrollText,
    title: 'Full audit trail',
    text: 'Plans, checks, approvals, orders and reviews are recorded for accountability and inspection.',
  },
]

const STEPS = [
  ['1', 'Review the system', 'Open the live product and review supported exchanges, features and current availability.'],
  ['2', 'Set your mandate', 'Define the assets, leverage and maximum risk the system is allowed to use.'],
  ['3', 'Connect safely', 'Use a dedicated exchange API key with trading permission only and withdrawals disabled.'],
]

export default function TradingAgentPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-web3-dark">
      <section className="relative border-b border-white/5 grid-bg">
        <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-web3-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-web3-purple/10 blur-[110px] pointer-events-none" />

        <div className="container relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-web3-accent/30 bg-web3-accent/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-web3-accent shadow-[0_0_6px_#00FF66]" />
              E2P Trading Agent // External Product
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Structured AI Trading, <span className="text-web3-accent glow-text">Bounded by Risk</span>
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-sm leading-7 text-gray-400 md:text-base">
              A multi-agent trading workflow that observes the market, prepares trade plans, validates risk and monitors execution. It is designed as an operating system for disciplined decisions—not a promise of profit.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded bg-web3-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-web3-accent/80 hover:shadow-[0_0_18px_rgba(0,255,102,0.5)]"
              >
                Launch Trading Agent <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/club"
                className="inline-flex items-center justify-center gap-2 rounded border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-web3-purple hover:text-web3-purple"
              >
                Explore E2P Club <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-web3-card/85 p-6 shadow-2xl backdrop-blur md:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-web3-accent/10 text-web3-accent">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Agent Control Loop</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-gray-500">Plan → Check → Execute</div>
                </div>
              </div>
              <span className="rounded bg-web3-accent/10 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-web3-accent">Live Product</span>
            </div>
            <div className="space-y-3">
              {PIPELINE.map(([step, title, text]) => (
                <div key={step} className="flex items-start gap-4 rounded-lg border border-white/5 bg-black/30 p-3 font-mono">
                  <span className="text-xs font-bold text-web3-accent">{step}</span>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-white">{title}</div>
                    <div className="mt-1 text-[10px] leading-4 text-gray-500">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">Multi-Agent Architecture</div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Specialized agents, one controlled workflow</h2>
            <p className="mt-4 font-mono text-sm leading-6 text-gray-400">Each role has a defined responsibility so market analysis, risk approval and execution remain separate and auditable.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AGENTS.map((agent) => (
              <article key={agent.title} className="rounded-xl border border-white/5 bg-web3-card p-6 transition-colors hover:border-web3-accent/40">
                <agent.icon className="mb-5 h-6 w-6 text-web3-accent" />
                <h3 className="mb-3 text-lg font-bold text-white">{agent.title}</h3>
                <p className="font-mono text-xs leading-6 text-gray-400">{agent.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-web3-card/40 py-20 grid-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">Hard Risk Architecture</div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Automation with explicit boundaries</h2>
              <p className="mt-4 font-mono text-sm leading-6 text-gray-400">The agent should never have unlimited authority. Users define the mandate; deterministic controls decide whether a plan may proceed.</p>
              <div className="mt-7 rounded-lg border border-yellow-400/20 bg-yellow-400/5 p-4 font-mono text-[11px] leading-5 text-yellow-100/70">
                Cryptocurrency trading involves substantial risk and can result in total loss. E2P does not guarantee returns. Review the live product’s terms and risk disclosures before use.
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {SAFEGUARDS.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-web3-dark/80 p-6">
                  <item.icon className="mb-5 h-6 w-6 text-web3-purple" />
                  <h3 className="mb-3 text-base font-bold text-white">{item.title}</h3>
                  <p className="font-mono text-xs leading-6 text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">Getting Started</div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Review, configure, connect</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map(([step, title, text]) => (
              <div key={step} className="rounded-xl border border-white/10 bg-web3-card p-6">
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-web3-accent text-sm font-bold text-black">{step}</div>
                <h3 className="mb-3 text-base font-bold text-white">{title}</h3>
                <p className="font-mono text-xs leading-6 text-gray-400">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-web3-accent/20 bg-gradient-to-r from-web3-accent/10 to-web3-purple/10 p-8 text-center md:p-10">
            <CheckCircle2 className="mx-auto mb-4 h-7 w-7 text-web3-accent" />
            <h2 className="text-2xl font-bold text-white">Ready to inspect the live system?</h2>
            <p className="mx-auto mt-3 max-w-xl font-mono text-xs leading-6 text-gray-400">The application is hosted separately. You will leave the E2P DAO website when opening the Trading Agent.</p>
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded bg-web3-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-web3-accent/80 hover:shadow-[0_0_18px_rgba(0,255,102,0.5)]"
            >
              Open yegidawir.xyz <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
