import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Globe2, Megaphone, Radio } from "lucide-react";
import { BarDistribution, RingChart } from "@/components/EcosystemVisuals";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "KOL Marketplace | E2PDAO",
  description:
    "400+ KOL creators across channels and markets. Projects launch coordinated campaigns; creators get matched to paid work.",
  alternates: { canonical: "/influence/" },
  openGraph: {
    title: "E2PDAO KOL Marketplace",
    description: "400+ KOL creators across channels and markets.",
    url: "/influence/",
  },
};

const PROFILES = [
  {
    name: "APAC DeFi Creator A",
    platform: "X / Telegram",
    audience: "100K–250K",
    region: "APAC",
    niche: "DeFi",
    score: 88,
  },
  {
    name: "English Trading Channel B",
    platform: "YouTube",
    audience: "50K–100K",
    region: "Global",
    niche: "Trading",
    score: 84,
  },
  {
    name: "LATAM Web3 Educator C",
    platform: "YouTube / X",
    audience: "25K–75K",
    region: "LATAM",
    niche: "Education",
    score: 81,
  },
  {
    name: "MENA Ambassador D",
    platform: "Telegram / Events",
    audience: "Community-led",
    region: "MENA",
    niche: "Growth",
    score: 79,
  },
];

const CAMPAIGNS = [
  {
    title: "Launch Awareness",
    stage: "Pre-TGE",
    mix: "Macro + Mid + Micro KOLs",
    goal: "Get your narrative seen before launch",
  },
  {
    title: "Regional Expansion",
    stage: "Growth",
    mix: "Local KOLs + Ambassadors",
    goal: "Enter a new market with local voices",
  },
  {
    title: "Community Activation",
    stage: "Product",
    mix: "X + Telegram + AMA",
    goal: "Turn attention into user action",
  },
];

const KOL_BENEFITS = [
  "Get matched to paid campaigns that fit your channel and audience",
  "Work with vetted projects instead of chasing cold DMs",
  "Build a long-term relationship, not one-off posts",
];

export default function InfluencePage() {
  return (
    <div className="min-h-screen bg-web3-dark">
      {/* Hero */}
      <section className="border-b border-white/5 py-20 grid-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
            KOL Marketplace
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            400+ KOL creators.{" "}
            <span className="text-web3-accent glow-text">
              One coordinated campaign.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            A network of creators sorted by channel, market and content type —
            so projects reach the right audience, and creators get matched to
            the right work.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["400+", "KOLs"],
              ["4", "Channels"],
              ["6", "Markets"],
              ["2", "Roles"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-web3-card p-5"
              >
                <strong className="text-2xl text-white">{value}</strong>
                <span className="mt-1 block font-mono text-[8px] uppercase tracking-widest text-web3-accent">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR PROJECTS */}
      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
            For projects
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Reach the right audience, not just a big one
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
            We build your campaign from the network&apos;s channel and market
            coverage, then pick the format that matches your stage.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-web3-card p-7">
              <div className="mb-7 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Channel mix</h3>
                <RingChart value={72} label="Social" size="sm" />
              </div>
              <BarDistribution
                items={[
                  { label: "X / Twitter", value: 78 },
                  { label: "Telegram", value: 66, color: "#8A2BE2" },
                  { label: "YouTube", value: 43 },
                  { label: "TikTok", value: 28, color: "#8A2BE2" },
                ]}
              />
            </div>
            <div className="rounded-2xl border border-white/10 bg-web3-card p-7">
              <div className="mb-7 flex items-center gap-3">
                <Globe2 className="h-6 w-6 text-web3-purple" />
                <h3 className="text-xl font-bold text-white">Market coverage</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["APAC", "Europe", "LATAM", "MENA", "N. America", "CIS"].map(
                  (region, index) => (
                    <div
                      key={region}
                      className={`rounded-lg border p-4 text-center ${index === 0 ? "border-web3-accent/30 bg-web3-accent/10" : "border-web3-purple/15 bg-web3-purple/5"}`}
                    >
                      <span className="text-xs font-medium text-white">
                        {region}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Campaign formats */}
          <div id="campaigns" className="scroll-mt-24">
            <div className="mt-14 flex items-end justify-between">
              <h3 className="text-2xl font-bold text-white">
                Three campaign formats
              </h3>
              <Radio className="hidden h-8 w-8 text-web3-accent md:block" />
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {CAMPAIGNS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-web3-card p-6"
                >
                  <span className="font-mono text-[8px] uppercase tracking-widest text-web3-purple">
                    {item.stage}
                  </span>
                  <h4 className="mt-3 text-xl font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    {item.mix}
                  </p>
                  <p className="mt-5 flex items-start gap-2 border-t border-white/5 pt-4 text-xs leading-relaxed text-web3-accent">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {item.goal}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <a
            href={E2P_LINKS.project("marketplace_projects")}
            className="mt-10 inline-flex items-center gap-2 rounded bg-web3-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:shadow-[0_0_20px_rgba(0,255,102,0.45)]"
          >
            Launch a campaign <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOR KOLS */}
      <section className="border-b border-white/5 bg-web3-card/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
            For KOLs &amp; creators
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Join the network, get matched to paid work
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ul className="space-y-4">
              {KOL_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-web3-accent" />
                  <span className="text-base leading-relaxed text-gray-300">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-white">
                  The kind of creators in the network
                </span>
                <span className="font-mono text-[8px] text-gray-600">
                  ANONYMIZED PREVIEW
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {PROFILES.map((profile) => (
                  <article
                    key={profile.name}
                    className="overflow-hidden rounded-xl border border-white/10 bg-web3-dark"
                  >
                    <div className="relative h-20 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,102,.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(138,43,226,.25),transparent_50%)]">
                      <span className="absolute right-3 top-3 rounded bg-black/60 px-2 py-1 font-mono text-[8px] font-bold text-web3-accent">
                        E2P {profile.score}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-bold text-white">
                        {profile.name}
                      </h3>
                      <p className="mt-1 font-mono text-[9px] text-gray-500">
                        {profile.platform} · {profile.region}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs font-medium text-white">
                          {profile.audience}
                        </span>
                        <span className="rounded bg-web3-purple/10 px-2 py-1 font-mono text-[8px] text-web3-purple">
                          {profile.niche}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-4 font-mono text-[8px] text-gray-600">
                Interface samples only; not public identities or performance
                claims.
              </p>
            </div>
          </div>

          <a
            href={E2P_LINKS.kol("marketplace_kols")}
            className="mt-10 inline-flex items-center gap-2 rounded border border-web3-purple px-7 py-4 text-xs font-bold uppercase tracking-widest text-web3-purple hover:bg-web3-purple/10"
          >
            Join as a KOL <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <Megaphone className="h-7 w-7 text-web3-purple" />
            <h2 className="mt-4 text-3xl font-bold text-white">
              Creators join. Projects launch campaigns.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={E2P_LINKS.kol("marketplace_bottom")}
              className="rounded border border-web3-purple px-6 py-4 text-xs font-bold uppercase tracking-widest text-web3-purple"
            >
              Join as KOL
            </a>
            <a
              href={E2P_LINKS.project("marketplace_bottom")}
              className="rounded bg-web3-accent px-6 py-4 text-xs font-bold uppercase tracking-widest text-black"
            >
              Launch Campaign
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
