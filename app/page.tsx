import Link from "next/link";
import {
  ArrowRight,
  Bot,
  ExternalLink,
  FlaskConical,
  Megaphone,
  Rocket,
  Users,
} from "lucide-react";
import Hero from "@/components/Hero";
import { AgentTerminal, EcosystemOrbit } from "@/components/EcosystemVisuals";
import { E2P_LINKS } from "@/lib/e2p-links";

const PERSONAS = [
  {
    icon: Rocket,
    title: "I have a project",
    text: "Get a growth plan, KOL campaigns and listing preparation from one team.",
    cta: "Apply for incubation",
    href: E2P_LINKS.project("home_persona"),
    accent: "text-web3-accent",
    border: "hover:border-web3-accent/40",
  },
  {
    icon: Megaphone,
    title: "I'm a KOL / creator",
    text: "Join the creator network and get matched to paid campaigns that fit your channel.",
    cta: "Join as a KOL",
    href: E2P_LINKS.kol("home_persona"),
    accent: "text-web3-purple",
    border: "hover:border-web3-purple/40",
  },
  {
    icon: Users,
    title: "I'm an exchange / partner",
    text: "Bring listing, launchpad or capital resources into the E2P network.",
    cta: "Start a partnership",
    href: E2P_LINKS.partner("home_persona"),
    accent: "text-web3-accent",
    border: "hover:border-web3-accent/40",
  },
];

const PRODUCTS = [
  {
    icon: Megaphone,
    title: "KOL Marketplace",
    metric: "400+ creators",
    text: "Reach the right audience with a matrix of KOLs sorted by channel, market and content type.",
    href: "/influence",
    color: "text-web3-purple",
  },
  {
    icon: FlaskConical,
    title: "Project Incubator",
    metric: "5-stage pipeline",
    text: "A step-by-step path from project diagnosis to campaigns, listing readiness and growth.",
    href: "/services",
    color: "text-web3-accent",
  },
  {
    icon: Users,
    title: "E2P Club",
    metric: "Community + Agent",
    text: "A trading community with a Trading Agent and the $E2P contribution token.",
    href: "/club",
    color: "text-web3-purple",
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
    work: "Listing readiness & coordination",
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
    work: "Listing advisory & coordination",
    proof: "Gate.io",
    href: "https://www.gate.io/zh/announcements/article/39267",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Persona routing — send each visitor to the right entry point */}
      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              Where do you fit?
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
              Pick your path
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
              E2PDAO works with three kinds of partners. Choose the one that
              matches you and we&apos;ll route you to the right process.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PERSONAS.map((item) => (
              <div
                key={item.title}
                className={`flex flex-col rounded-2xl border border-white/10 bg-web3-card p-7 transition-colors ${item.border}`}
              >
                <item.icon className={`h-8 w-8 ${item.accent}`} />
                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                  {item.text}
                </p>
                <a
                  href={item.href}
                  className={`mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest ${item.accent}`}
                >
                  {item.cta} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-b border-white/5 bg-web3-card/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              E2P DAO
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
              Three products. One growth loop.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PRODUCTS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-web3-card"
              >
                <div className="h-2 bg-gradient-to-r from-web3-accent via-web3-purple to-transparent" />
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <item.icon className={`h-7 w-7 ${item.color}`} />
                    <span className="font-mono text-[8px] uppercase tracking-widest text-gray-500">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {item.text}
                  </p>
                  <span
                    className={`mt-7 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest ${item.color}`}
                  >
                    Explore{" "}
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem loop */}
      <section className="border-b border-white/5 py-20 grid-bg">
        <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <EcosystemOrbit />
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
              How it fits together
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
              Incubate. Amplify. Trade. Contribute.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-400">
              Projects enter the Incubator, KOLs drive distribution, the Club
              turns it into an active community, the Trading Agent gives that
              community a product, and $E2P ties contribution back to the
              ecosystem.
            </p>
            <div className="mt-7 flex gap-3">
              <Link
                href="/services"
                className="rounded bg-web3-accent px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-black"
              >
                Incubate a Project
              </Link>
              <Link
                href="/club"
                className="rounded border border-web3-purple px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-web3-purple"
              >
                Enter Club
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real, verifiable proof */}
      <section className="border-b border-white/5 bg-web3-card/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
                Proof, not promises
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Projects we&apos;ve supported
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
                <p className="mt-3 text-xs leading-relaxed text-gray-400">
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

      {/* Trading Agent */}
      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-8">
          <AgentTerminal />
          <div>
            <Bot className="h-8 w-8 text-web3-accent" />
            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Trading Agent lives inside E2P Club
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Market observation, trade planning, hard risk approval, monitored
              execution and post-trade review — the interface above is an
              illustration of the workflow.
            </p>
            <Link
              href="/club#trading-agent"
              className="mt-7 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-web3-accent"
            >
              Open Agent cockpit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Ready to start?
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Apply as a project, or join the Club to see how the community
              works.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={E2P_LINKS.project("home_bottom")}
              className="rounded bg-web3-accent px-6 py-4 text-xs font-bold uppercase tracking-widest text-black"
            >
              Apply as a project
            </a>
            <a
              href={E2P_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded border border-web3-purple px-6 py-4 text-xs font-bold uppercase tracking-widest text-web3-purple"
            >
              Join Club <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
