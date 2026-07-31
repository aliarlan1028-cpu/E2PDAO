import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Coins,
  ExternalLink,
  MessageCircle,
  Radar,
  ShieldCheck,
} from "lucide-react";
import { E2P_LINKS } from "@/lib/e2p-links";
import {
  AgentTerminal,
  BarDistribution,
  RingChart,
} from "@/components/EcosystemVisuals";

export const metadata: Metadata = {
  title: "E2P Club | Trading Community & Project Feedback",
  description:
    "Explore E2P Club market discussion, education, project feedback and Trading Agent access.",
  alternates: { canonical: "/club/" },
  openGraph: {
    title: "E2P Club",
    description: "The community and market-intelligence layer of E2PDAO.",
    url: "/club/",
  },
};

const SNAPSHOT = [
  ["24/7", "Community access"],
  ["1", "Trading Agent"],
  ["$E2P", "Contribution token"],
  ["Free", "To join the chat"],
];
const E2P_CONTRACT = "0x597716022fc149c2b89061d6ec6b5eac4a97bc20";
const AREAS = [
  {
    icon: BarChart3,
    title: "Market Intelligence",
    text: "Market structure, macro events, narrative shifts and risk-aware discussion.",
  },
  {
    icon: BookOpen,
    title: "Trading Education",
    text: "Research frameworks, trade-plan reviews and practical risk-management concepts.",
  },
  {
    icon: Radar,
    title: "Project Discovery",
    text: "Public project updates, AMAs, product education and ecosystem opportunities.",
  },
  {
    icon: MessageCircle,
    title: "Community Feedback",
    text: "Direct discussion that helps teams understand questions, objections and market perception.",
  },
];
export default function ClubPage() {
  return (
    <div className="min-h-screen bg-web3-dark">
      <section className="border-b border-white/5 py-20 grid-bg">
        <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
              E2P Club
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
              A trading community with a{" "}
              <span className="text-web3-purple glow-text">Trading Agent</span>{" "}
              and $E2P rewards
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
              E2P Club is where traders learn, discuss the market and discover
              projects. Members get access to the E2P Trading Agent, and
              contribution is rewarded through the $E2P token. Projects get a
              close-up view of how real users react to their product.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={E2P_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded bg-web3-purple px-7 py-4 text-xs font-bold uppercase tracking-widest text-white"
              >
                Join Telegram Community <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="#trading-agent"
                className="inline-flex items-center justify-center gap-2 rounded border border-web3-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-web3-accent"
              >
                Explore Trading Agent
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-web3-card/80 p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Club snapshot
              </span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-web3-purple" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {SNAPSHOT.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/5 bg-black/30 p-4"
                >
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-gray-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-gray-500">
              Joining the community chat is direct and free. Business and
              identity applications are handled separately.
            </p>
          </div>
        </div>
      </section>

      <section
        id="trading-agent"
        className="scroll-mt-24 border-b border-white/5 bg-web3-card/30 py-20"
      >
        <div className="container mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
          <AgentTerminal />
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              E2P Trading Agent
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white">
              What the Trading Agent does
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              An automated trading tool inside the Club. It observes the market,
              plans trades, and only acts after passing hard risk checks — it can
              execute, but never has withdrawal access. Access is gated by your
              $E2P contribution.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              The terminal on the left illustrates this workflow. It does not
              show live positions, a real account balance or historical returns.
            </p>
            <div className="mt-7 flex gap-4">
              <RingChart
                value={100}
                label="Risk gates"
                color="#00FF66"
                size="sm"
              />
              <RingChart
                value={0}
                label="Withdrawal"
                color="#8A2BE2"
                size="sm"
              />
            </div>
            <div className="mt-7">
              <BarDistribution
                items={[
                  { label: "Research & observation", value: 88 },
                  { label: "Risk validation", value: 100, color: "#8A2BE2" },
                  { label: "Execution authority", value: 55 },
                  { label: "Withdrawal authority", value: 0, color: "#8A2BE2" },
                ]}
              />
            </div>
            <a
              href={E2P_LINKS.tradingAgent}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded bg-web3-accent px-6 py-4 text-xs font-bold uppercase tracking-widest text-black"
            >
              Launch Trading Agent <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="e2p-point"
        className="scroll-mt-24 border-b border-white/5 py-20"
      >
        <div className="container mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <Coins className="h-8 w-8 text-web3-accent" />
            <span className="mt-5 block font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              $E2P Point
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Contribution powers access
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              Earn $E2P by contributing — KOL delivery, Ambassador work, project
              referrals and active Club participation. Use it to unlock access
              and future utility across the ecosystem.
            </p>
            <a
              href={`https://bscscan.com/token/${E2P_CONTRACT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-web3-accent"
            >
              View contract <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Earn", "Verified contribution"],
              ["Access", "Club & ecosystem"],
              ["Use", "Published utility"],
              ["Govern", "Future rules"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-web3-card p-5"
              >
                <strong className="text-lg text-white">{title}</strong>
                <span className="mt-2 block font-mono text-[8px] uppercase tracking-widest text-gray-500">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              Member Value
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              More than a signal group
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((area) => (
              <div
                key={area.title}
                className="rounded-xl border border-white/5 bg-web3-card p-6"
              >
                <area.icon className="h-6 w-6 text-web3-purple" />
                <h3 className="mt-5 text-lg font-bold text-white">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <ShieldCheck className="mx-auto h-8 w-8 text-yellow-300" />
          <h2 className="mt-5 text-3xl font-bold text-white">
            Trade with explicit risk boundaries
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
            Community discussion and automated tools are not financial advice.
            Cryptocurrency trading can result in total loss. No return, win rate
            or future performance is guaranteed.
          </p>
        </div>
      </section>
    </div>
  );
}
