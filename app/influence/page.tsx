import type { Metadata } from "next";
import { ArrowRight, Globe2, Megaphone, Radio, Users } from "lucide-react";
import { BarDistribution, RingChart } from "@/components/EcosystemVisuals";
import { E2P_LINKS } from "@/lib/e2p-links";

export const metadata: Metadata = {
  title: "KOL Marketplace | E2PDAO",
  description:
    "Explore E2PDAO KOL resources, market coverage and Campaign formats.",
  alternates: { canonical: "/influence/" },
  openGraph: {
    title: "E2PDAO KOL Marketplace",
    description: "400+ KOL resources across channels and markets.",
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
    goal: "Narrative visibility",
  },
  {
    title: "Regional Expansion",
    stage: "Growth",
    mix: "Local KOLs + Ambassadors",
    goal: "Market entry",
  },
  {
    title: "Community Activation",
    stage: "Product",
    mix: "X + Telegram + AMA",
    goal: "User action",
  },
];

export default function InfluencePage() {
  return (
    <div className="min-h-screen bg-web3-dark">
      <section className="border-b border-white/5 py-20 grid-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">
            KOL Marketplace
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold text-white md:text-6xl">
            400+ KOL resources.
            <br />
            <span className="text-web3-accent glow-text">
              One Campaign Matrix.
            </span>
          </h1>
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

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Network samples</h2>
            <span className="font-mono text-[8px] text-gray-600">
              ANONYMIZED PREVIEW
            </span>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROFILES.map((profile) => (
              <article
                key={profile.name}
                className="overflow-hidden rounded-xl border border-white/10 bg-web3-card"
              >
                <div className="relative h-24 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,102,.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(138,43,226,.25),transparent_50%)]">
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
                  <div className="mt-5 flex justify-between">
                    <span className="font-mono text-[10px] text-white">
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
            Interface samples only; not public identities or performance claims.
          </p>
        </div>
      </section>

      <section className="border-b border-white/5 bg-web3-card/30 py-20">
        <div className="container mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-web3-dark p-7">
            <div className="mb-7 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Channel mix</h2>
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
          <div className="rounded-2xl border border-white/10 bg-web3-dark p-7">
            <div className="mb-7 flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-web3-purple" />
              <h2 className="text-xl font-bold text-white">Market coverage</h2>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["APAC", "Europe", "LATAM", "MENA", "N. America", "CIS"].map(
                (region, index) => (
                  <div
                    key={region}
                    className={`rounded-lg border p-4 text-center ${index === 0 ? "border-web3-accent/30 bg-web3-accent/10" : "border-web3-purple/15 bg-web3-purple/5"}`}
                  >
                    <span className="font-mono text-[9px] text-white">
                      {region}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        id="campaigns"
        className="scroll-mt-24 border-b border-white/5 py-20"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">
                Campaign Hub
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Three ways to activate the network
              </h2>
            </div>
            <Radio className="hidden h-8 w-8 text-web3-accent md:block" />
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {CAMPAIGNS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-web3-card p-6"
              >
                <span className="font-mono text-[8px] uppercase tracking-widest text-web3-purple">
                  {item.stage}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 font-mono text-xs text-gray-400">
                  {item.mix}
                </p>
                <p className="mt-5 border-t border-white/5 pt-4 font-mono text-[9px] uppercase tracking-widest text-web3-accent">
                  Goal: {item.goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <Megaphone className="h-7 w-7 text-web3-purple" />
            <h2 className="mt-4 text-3xl font-bold text-white">
              Creators join. Projects launch Campaigns.
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
