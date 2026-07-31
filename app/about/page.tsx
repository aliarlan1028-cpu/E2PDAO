import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Handshake,
  Megaphone,
  Rocket,
  Search,
  Users,
} from "lucide-react";
import PartnershipCards from "@/components/PartnershipCards";

export const metadata: Metadata = {
  title: "About E2PDAO | Growth & Listing Network",
  description:
    "E2PDAO is a Web3 growth and listing network. We help projects find the right KOLs, exchanges and resources — and run the campaigns that connect them.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About E2PDAO",
    description:
      "A Web3 growth and listing network connecting projects, creators and exchanges.",
    url: "/about/",
  },
};

const HELP = [
  {
    icon: Megaphone,
    title: "Reach the right audience",
    text: "We match your project with KOLs and creators by channel, market and content type — not a random blast, a targeted campaign.",
  },
  {
    icon: Rocket,
    title: "Get listing-ready",
    text: "From narrative and tokenomics to materials and market context, we help you prepare for exchange and launchpad conversations.",
  },
  {
    icon: Building2,
    title: "Tap one network, not ten",
    text: "Exchanges, launchpads, capital and service partners sit in one place, so you coordinate growth through a single team.",
  },
];

const STEPS = [
  {
    step: "01",
    icon: Handshake,
    title: "Apply",
    text: "Tell us your project stage, goals, target exchanges and timeline.",
  },
  {
    step: "02",
    icon: Search,
    title: "Evaluate",
    text: "We review readiness and fit privately — no public profile is created.",
  },
  {
    step: "03",
    icon: Users,
    title: "Match resources",
    text: "We map the KOLs, exchanges and partners that fit your goals.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Run & follow up",
    text: "Campaigns are executed and reviewed, with follow-up on outcomes.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-web3-dark">
      {/* Hero — one plain sentence */}
      <section className="border-b border-white/5 py-20 grid-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
              About E2PDAO
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
              We connect Web3 projects with the{" "}
              <span className="text-web3-accent glow-text">
                KOLs, exchanges and resources
              </span>{" "}
              that drive growth
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
              E2PDAO is a Web3 growth and listing network. If you&apos;re
              building a project, we help you plan growth, run KOL campaigns and
              prepare for listing — coordinating everything through one team
              instead of a dozen separate deals.
            </p>
          </div>
        </div>
      </section>

      {/* What we help you do */}
      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
            What we help you do
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Three problems, one partner
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {HELP.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-web3-card p-7"
              >
                <item.icon className="h-8 w-8 text-web3-accent" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-white/5 bg-web3-card/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            What happens after you apply
          </h2>
          <div className="relative mt-12 grid gap-4 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-web3-accent via-web3-purple to-web3-accent md:block" />
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-white/10 bg-web3-dark p-6"
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
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-gray-500">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-web3-purple" />
            <span>
              Applications are handled privately in E2PDAO&apos;s internal
              workspace for evaluation and follow-up — they are not published as
              public profiles. Applying does not guarantee cooperation, campaign
              results or a listing.{" "}
              <Link
                href="/risk-disclosure"
                className="text-web3-accent underline-offset-4 hover:underline"
              >
                See risk disclosure
              </Link>
              .
            </span>
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
                Track record
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white">
                We&apos;ve supported real listings
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
                Projects such as CHAX, HIRO, Virtuals Protocol and USBT are
                publicly listed and independently verifiable. Past support is
                not a guarantee of future results.
              </p>
            </div>
            <Link
              href="/services#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded border border-web3-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-web3-accent hover:bg-web3-accent/10"
            >
              View verified cases
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-bold text-white">
            Start the right conversation
          </h2>
          <p className="mb-9 max-w-2xl text-sm text-gray-400">
            Pick the path that matches you and we&apos;ll route you to the right
            process.
          </p>
          <PartnershipCards source="about_bottom" />
        </div>
      </section>
    </div>
  );
}
