import Link from "next/link";
import {
  ArrowRight,
  Bot,
  ExternalLink,
  FlaskConical,
  Megaphone,
  Users,
} from "lucide-react";
import Hero from "@/components/Hero";
import { AgentTerminal, EcosystemOrbit } from "@/components/EcosystemVisuals";
import { E2P_LINKS } from "@/lib/e2p-links";

const STATS = [
  ["400+", "KOL resources"],
  ["20", "Resource nodes"],
  ["4", "Verified cases"],
  ["24/7", "Trading Agent design"],
];
const PRODUCTS = [
  {
    icon: Megaphone,
    title: "KOL Marketplace",
    metric: "400+ creators",
    text: "Build a KOL matrix by channel, market and content type.",
    href: "/influence",
    color: "text-web3-purple",
  },
  {
    icon: FlaskConical,
    title: "Project Incubator",
    metric: "5-stage pipeline",
    text: "Move from diagnosis to Campaign, listing readiness and growth.",
    href: "/services",
    color: "text-web3-accent",
  },
  {
    icon: Users,
    title: "E2P Club",
    metric: "Community + Agent + Point",
    text: "Trading community with Trading Agent and $E2P contribution utility.",
    href: "/club",
    color: "text-web3-purple",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="border-b border-white/5 bg-web3-card/30 py-10">
        <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-white/5 bg-web3-dark p-5"
            >
              <strong className="text-3xl text-white">{value}</strong>
              <span className="mt-2 block font-mono text-[9px] font-bold uppercase tracking-widest text-web3-accent">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
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
                  <p className="mt-3 font-mono text-xs leading-6 text-gray-400">
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

      <section className="border-b border-white/5 bg-web3-card/30 py-20 grid-bg">
        <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <EcosystemOrbit />
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
              Ecosystem Loop
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
              Incubate. Amplify. Trade. Contribute.
            </h2>
            <p className="mt-5 max-w-xl font-mono text-sm leading-7 text-gray-400">
              Projects enter the Incubator, KOLs drive distribution, Club
              creates community feedback, Trading Agent provides the trading
              product, and $E2P connects contribution.
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

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-8">
          <AgentTerminal />
          <div>
            <Bot className="h-8 w-8 text-web3-accent" />
            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Trading Agent lives inside E2P Club
            </h2>
            <p className="mt-4 font-mono text-sm leading-7 text-gray-400">
              Market observation, trade planning, hard risk approval, monitored
              execution and post-trade review.
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

      <section className="py-20">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Choose your entry point
            </h2>
            <p className="mt-3 font-mono text-xs text-gray-500">
              Project, KOL, Ambassador or business partner.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={E2P_LINKS.project("home_bottom")}
              className="rounded bg-web3-accent px-6 py-4 text-xs font-bold uppercase tracking-widest text-black"
            >
              Start a Partnership
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
