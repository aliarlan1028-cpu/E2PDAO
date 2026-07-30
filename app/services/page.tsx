import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ExternalLink,
  FlaskConical,
  LineChart,
  Megaphone,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";
import { RingChart, Sparkline } from "@/components/EcosystemVisuals";

export const metadata: Metadata = {
  title: "Web3 Project Incubator | E2PDAO",
  description:
    "Explore the E2PDAO incubation pipeline, readiness model and market resource network.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "E2PDAO Project Incubator",
    description: "From project diagnosis to KOL growth and listing readiness.",
    url: "/services/",
  },
};

const PIPELINE = [
  {
    step: "01",
    title: "Diagnose",
    icon: BarChart3,
    text: "Product, narrative, token, market and material readiness.",
  },
  {
    step: "02",
    title: "Architect",
    icon: LineChart,
    text: "Positioning, growth path, tokenomics and launch plan.",
  },
  {
    step: "03",
    title: "Activate",
    icon: Megaphone,
    text: "KOL matrix, content brief and community activation.",
  },
  {
    step: "04",
    title: "Launch",
    icon: Rocket,
    text: "Campaign, TGE, launchpad and market coordination.",
  },
  {
    step: "05",
    title: "List & Scale",
    icon: Building2,
    text: "Exchange readiness, liquidity planning and review.",
  },
];

const READINESS = [
  { value: 82, label: "Growth", color: "#00FF66" },
  { value: 74, label: "Listing", color: "#8A2BE2" },
  { value: 68, label: "Community", color: "#00FF66" },
  { value: 79, label: "Narrative", color: "#8A2BE2" },
];

const PARTNERS = [
  {
    label: "Exchange Network",
    logos: [
      ["OKX", "/OKX.png"],
      ["Bybit", "/Bybit.png"],
      ["Gate.io", "/Gate.io.png"],
      ["Bitget", "/Bitget Logo.png"],
      ["MEXC", "/MEXC.png"],
    ],
  },
  {
    label: "Launchpad Network",
    logos: [
      ["DAO Maker", "/DAO Maker.png"],
      ["Seedify", "/seedify.svg"],
      ["Poolz", "/Poolz Finance.png"],
      ["BullPerks", "/BullPerks.png"],
      ["Kommunitas", "/kommunitas.png"],
    ],
  },
  {
    label: "Capital Network",
    logos: [
      ["Coresky", "/Coresky.jpeg"],
      ["MT Capital", "/MT Capital.avif"],
      ["Mirana", "/Mirana Ventures.png"],
      ["Snova", "/Snova Capital.png"],
      ["Unicorne", "/Unicorne-Verse.jpg"],
    ],
  },
];

const CASES = [
  {
    project: "CHAX",
    work: "CEX listing coordination",
    proof: "CoinGecko",
    href: "https://www.coingecko.com/en/coins/chax",
  },
  {
    project: "HIRO",
    work: "Listing readiness and coordination",
    proof: "CoinMarketCap",
    href: "https://coinmarketcap.com/currencies/hiro/#Markets",
  },
  {
    project: "Virtuals Protocol",
    work: "Supply verification support",
    proof: "CoinMarketCap",
    href: "https://coinmarketcap.com/currencies/virtual-protocol/",
  },
  {
    project: "USBT",
    work: "Listing advisory and coordination",
    proof: "Gate.io",
    href: "https://www.gate.io/zh/announcements/article/39267",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-web3-dark">
      <section className="relative overflow-hidden border-b border-white/5 py-20 grid-bg">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-web3-accent/10 blur-[130px]" />
        <div className="container relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              E2P Incubator
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              Build the project.{" "}
              <span className="text-web3-accent glow-text">
                Engineer the market.
              </span>
            </h1>
            <p className="mt-6 max-w-3xl font-mono text-sm leading-7 text-gray-400">
              A stage-based operating layer combining project diagnosis, token
              strategy, KOL activation, community feedback and listing
              readiness.
            </p>
            <a
              href={E2P_LINKS.project("incubator_hero")}
              className="mt-8 inline-flex items-center gap-2 rounded bg-web3-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-black"
            >
              Apply for incubation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#07090c] p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <FlaskConical className="h-5 w-5 text-web3-accent" />
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400">
                  Sample Readiness Console
                </span>
              </div>
              <span className="font-mono text-[8px] text-web3-accent">
                DEMO MODEL
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {READINESS.map((item) => (
                <RingChart
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  color={item.color}
                  size="sm"
                />
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-white/5 bg-white/[.02] p-4">
              <div className="flex justify-between font-mono text-[8px] uppercase tracking-widest">
                <span className="text-gray-600">Readiness trend</span>
                <span className="text-web3-accent">+12 model points</span>
              </div>
              <Sparkline values={[22, 27, 25, 38, 42, 39, 54, 61, 68, 74]} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
                Incubation Pipeline
              </div>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Five stages, one operating track
              </h2>
            </div>
            <span className="hidden font-mono text-[9px] text-gray-600 md:block">
              APPLICATION → MARKET
            </span>
          </div>
          <div className="relative mt-12 grid gap-4 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-web3-accent via-web3-purple to-web3-accent lg:block" />
            {PIPELINE.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-white/10 bg-web3-card p-6"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-web3-accent/30 bg-web3-dark shadow-[0_0_20px_rgba(0,255,102,.12)]">
                  <item.icon className="h-6 w-6 text-web3-accent" />
                </div>
                <span className="mt-5 block font-mono text-[9px] font-bold text-web3-purple">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 font-mono text-[10px] leading-5 text-gray-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-web3-card/30 py-20">
        <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <ShieldCheck className="h-7 w-7 text-web3-purple" />
            <h2 className="mt-5 text-3xl font-bold text-white">
              What readiness means
            </h2>
            <p className="mt-4 font-mono text-sm leading-7 text-gray-400">
              The score console is a visual model—not a public promise. A real
              evaluation should use project materials, public evidence and Owner
              review.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "Growth Ready",
                "Positioning, audience, channels and measurable acquisition plan.",
              ],
              [
                "Token Ready",
                "Utility, allocation, emissions and value-accrual review.",
              ],
              [
                "Community Ready",
                "Narrative clarity, onboarding and feedback mechanisms.",
              ],
              [
                "Listing Ready",
                "Materials, market context, liquidity and exchange requirement mapping.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-web3-dark p-6"
              >
                <CheckCircle2 className="h-5 w-5 text-web3-accent" />
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 font-mono text-xs leading-6 text-gray-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              Resource Network
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              20 publicly presented resource nodes
            </h2>
          </div>
          <div className="space-y-8">
            {PARTNERS.map((group) => (
              <div key={group.label}>
                <div className="mb-3 font-mono text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  {group.label}
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {group.logos.map(([name, logo]) => (
                    <div
                      key={name}
                      className="flex h-20 items-center justify-center rounded-xl border border-white/10 bg-white p-4 transition-transform hover:-translate-y-1"
                    >
                      <img
                        src={logo}
                        alt={name}
                        className="h-9 w-28 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-7 font-mono text-[9px] leading-5 text-gray-600">
            Logo display represents the resource network previously presented by
            E2PDAO and does not imply endorsement, guaranteed access or fixed
            commercial terms.
          </p>
        </div>
      </section>

      <section
        id="portfolio"
        className="scroll-mt-24 border-b border-white/5 bg-web3-card/30 py-20"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
                Portfolio & Proof
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Four public references
              </h2>
            </div>
            <span className="hidden font-mono text-[8px] text-gray-600 md:block">
              PAST SUPPORT ≠ FUTURE GUARANTEE
            </span>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CASES.map((item) => (
              <a
                key={item.project}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-web3-dark p-6 hover:border-web3-accent/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-web3-accent">
                    Verified link
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-600 group-hover:text-web3-accent" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.project}
                </h3>
                <p className="mt-3 font-mono text-[10px] leading-5 text-gray-400">
                  {item.work}
                </p>
                <p className="mt-5 border-t border-white/5 pt-4 font-mono text-[8px] uppercase tracking-widest text-gray-600">
                  {item.proof}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <Users className="h-7 w-7 text-web3-purple" />
            <h2 className="mt-5 text-3xl font-bold text-white">
              A project should leave with an operating plan
            </h2>
            <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-gray-400">
              The output is not a generic introduction. It is a prioritized path
              connecting readiness gaps, growth resources, Campaign design and
              market-entry actions.
            </p>
          </div>
          <a
            href={E2P_LINKS.project("incubator_bottom")}
            className="inline-flex items-center justify-center gap-2 rounded bg-web3-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-black"
          >
            Start project evaluation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
