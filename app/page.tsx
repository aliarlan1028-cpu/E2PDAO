import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Coins,
  ExternalLink,
  Megaphone,
  Network,
  Users,
} from "lucide-react";
import Hero from "@/components/Hero";
import PartnershipCards from "@/components/PartnershipCards";
import { E2P_LINKS } from "@/lib/e2p-links";
import {
  AgentTerminal,
  EcosystemOrbit,
  RingChart,
} from "@/components/EcosystemVisuals";

const NETWORK_STATS = [
  {
    value: "400+",
    label: "KOL resources",
    detail: "Creator network managed with W3Claw",
  },
  {
    value: "10",
    label: "Exchange relationships",
    detail: "Publicly presented network resources",
  },
  {
    value: "20",
    label: "Institutional resources",
    detail: "Exchange, launchpad and capital logos shown",
  },
  {
    value: "4",
    label: "Public proof links",
    detail: "Cases with independently accessible references",
  },
];

const SERVICES = [
  {
    icon: BarChart3,
    title: "Project Growth",
    text: "Positioning, growth diagnosis, KOL campaign design, community activation and measurable review.",
  },
  {
    icon: Building2,
    title: "Listing & BD Support",
    text: "Materials review, exchange requirement mapping, cooperation paths and process follow-up.",
  },
  {
    icon: Megaphone,
    title: "KOL & Ambassador Network",
    text: "Creator assessment, regional matching, briefs, scheduling and long-term cooperation records.",
  },
];

const ECOSYSTEM = [
  {
    icon: Network,
    eyebrow: "Growth Engine",
    title: "E2P Services",
    text: "Project growth, listing preparation and professional resource coordination.",
    href: "/services",
    color: "text-web3-accent",
  },
  {
    icon: Megaphone,
    eyebrow: "Influence Layer",
    title: "KOL Network",
    text: "A structured creator and Ambassador resource network powered operationally by W3Claw.",
    href: "/influence",
    color: "text-web3-purple",
  },
  {
    icon: Users,
    eyebrow: "Community Layer",
    title: "E2P Club",
    text: "Market discussion, research, project feedback and community activation.",
    href: "/club",
    color: "text-web3-purple",
  },
  {
    icon: Bot,
    eyebrow: "Trading Product",
    title: "Trading Agent",
    text: "A multi-agent workflow integrated into the Token-Based AI Strategy Club.",
    href: "/club#trading-agent",
    color: "text-web3-accent",
  },
  {
    icon: Coins,
    eyebrow: "Contribution Layer",
    title: "$E2P Point",
    text: "Connects verified ecosystem contribution with recognition, access and future utility.",
    href: "/tokenomics",
    color: "text-white",
  },
];

const PROCESS = [
  [
    "01",
    "Apply",
    "Submit structured information through the E2PDAO × W3Claw intake.",
  ],
  [
    "02",
    "Evaluate",
    "Review completeness, public signals, fit and potential duplicates.",
  ],
  [
    "03",
    "Design",
    "Define resources, content mix, timeline and success measures.",
  ],
  [
    "04",
    "Execute",
    "Coordinate projects, KOLs, partners and community touchpoints.",
  ],
  [
    "05",
    "Review",
    "Record delivery, results, open items and next opportunities.",
  ],
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-white/5 bg-web3-card/35 py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Network snapshot
            </span>
            <span className="font-mono text-[9px] text-gray-600">
              Public site data · July 2026
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {NETWORK_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 bg-web3-dark p-5"
              >
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
                  {stat.label}
                </div>
                <p className="mt-3 font-mono text-[9px] leading-4 text-gray-600">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              Core Services
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
              Three paths to market
            </h2>
            <p className="mt-4 font-mono text-sm leading-6 text-gray-400">
              E2PDAO organizes resources around the project’s actual stage,
              target market and measurable objective.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-white/5 bg-web3-card p-7"
              >
                <service.icon className="h-6 w-6 text-web3-accent" />
                <h3 className="mt-5 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 font-mono text-xs leading-6 text-gray-400">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-web3-accent"
          >
            View service deliverables <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-white/5 bg-web3-card/30 py-20 grid-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
                E2P Ecosystem
              </div>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
                One network, five connected products
              </h2>
              <p className="mt-4 font-mono text-sm leading-7 text-gray-400">
                Projects create demand, creators provide distribution, Club
                supplies community feedback, the Agent supports disciplined
                trading workflows and $E2P Point recognizes contribution.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {ECOSYSTEM.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-web3-dark/70 p-4 hover:border-white/25"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <span className="font-mono text-[7px] uppercase tracking-widest text-gray-600">
                        {item.eyebrow}
                      </span>
                      <h3 className="text-sm font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <ArrowRight className={`ml-auto h-3 w-3 ${item.color}`} />
                  </Link>
                ))}
              </div>
            </div>
            <EcosystemOrbit />
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
          <AgentTerminal />
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              Token-Based AI Strategy Club
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
              Community intelligence meets controlled automation
            </h2>
            <p className="mt-5 font-mono text-sm leading-7 text-gray-400">
              The Club brings research, discussion and project discovery. The
              Trading Agent adds a structured control loop. $E2P connects
              contribution and future access without promising returns.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <RingChart
                value={100}
                label="Risk checks"
                color="#00FF66"
                size="sm"
              />
              <RingChart
                value={0}
                label="Withdrawal access"
                color="#8A2BE2"
                size="sm"
              />
              <div className="space-y-3 font-mono text-[10px] text-gray-400">
                <div>● User-defined mandate</div>
                <div>● Hard stop-loss requirement</div>
                <div>● Append-only review trail</div>
              </div>
            </div>
            <div className="mt-7 flex gap-3">
              <Link
                href="/club"
                className="rounded bg-web3-purple px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-white"
              >
                Enter Club
              </Link>
              <Link
                href="/club#trading-agent"
                className="rounded border border-web3-accent px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-web3-accent"
              >
                View Agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              Why E2PDAO
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Operator-led cooperation
            </h2>
            <p className="mt-5 font-mono text-sm leading-7 text-gray-400">
              E2PDAO combines exchange operations experience, Web3 growth
              execution, creator relationships and a trading-oriented community.
              Cooperation starts with fit and evidence—not generic reach
              promises.
            </p>
            <div className="mt-7 space-y-3">
              {[
                "Structured application and evaluation",
                "Resource matching by market and objective",
                "Private operations managed through W3Claw",
                "Verified facts separated from applicant-provided data",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 font-mono text-xs text-gray-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-web3-purple" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-web3-card p-7">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <ClipboardCheck className="h-5 w-5 text-web3-accent" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Operating background
              </span>
            </div>
            <div className="mt-6 space-y-5 font-mono text-xs">
              {[
                ["2018", "Exchange futures operations"],
                ["2020", "TRON ecosystem DeFi operations"],
                ["2021", "KOL creator network development"],
                ["2022", "E2PDAO growth and listing network"],
                [
                  "Now",
                  "Integrated project, creator and community cooperation",
                ],
              ].map(([year, text]) => (
                <div key={year} className="flex gap-4">
                  <span className="w-12 shrink-0 font-bold text-web3-accent">
                    {year}
                  </span>
                  <span className="text-gray-400">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-web3-card/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              Operating Loop
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              From opportunity to measurable review
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {PROCESS.map(([step, title, text]) => (
              <div
                key={step}
                className="rounded-xl border border-white/5 bg-web3-dark p-5"
              >
                <span className="font-mono text-xs font-bold text-web3-accent">
                  {step}
                </span>
                <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
                <p className="mt-3 font-mono text-[10px] leading-5 text-gray-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
                Verified Work
              </div>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Evidence before promises
              </h2>
            </div>
            <Link
              href="/success-cases"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-web3-accent"
            >
              View all cases <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              ["CHAX", "CEX listing coordination", "CoinGecko reference"],
              [
                "HIRO",
                "Listing readiness and coordination",
                "CoinMarketCap reference",
              ],
              [
                "Virtuals Protocol",
                "Supply verification support",
                "CoinMarketCap reference",
              ],
            ].map(([name, work, proof]) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 bg-web3-card p-6"
              >
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <p className="mt-3 font-mono text-xs text-gray-400">{work}</p>
                <p className="mt-5 border-t border-white/5 pt-4 font-mono text-[9px] uppercase tracking-widest text-web3-accent">
                  {proof}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-web3-card/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              Partnership Intake
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Ready when the value is clear
            </h2>
            <p className="mt-4 font-mono text-sm leading-6 text-gray-400">
              Choose the route that matches your role. This is the only
              application section on the homepage.
            </p>
          </div>
          <div className="mt-10">
            <PartnershipCards source="home_partnerships" />
          </div>
        </div>
      </section>

      <section className="py-20 grid-bg">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Trade, learn and follow the ecosystem
            </h2>
            <p className="mt-4 max-w-2xl font-mono text-sm leading-6 text-gray-400">
              E2P Club is the public community layer. No application form is
              required.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={E2P_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded bg-web3-purple px-6 py-4 text-xs font-bold uppercase tracking-widest text-white"
            >
              Join E2P Club <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              href="/club#trading-agent"
              className="inline-flex items-center justify-center gap-2 rounded border border-web3-accent px-6 py-4 text-xs font-bold uppercase tracking-widest text-web3-accent"
            >
              Explore Agent
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
