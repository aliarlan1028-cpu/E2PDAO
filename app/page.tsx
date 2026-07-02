'use client'

import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Megaphone,
  Network,
  Radar,
  Rocket,
  ShieldCheck,
  Users,
} from 'lucide-react'

const coreSolutions = [
  {
    icon: Rocket,
    title: 'Launch & TGE Campaigns',
    copy: 'Pre-launch narrative, KOL / PR mix, community warm-up, publishing calendar, and delivery report.',
  },
  {
    icon: Globe2,
    title: 'Regional Market Entry',
    copy: 'Localized market selection, regional KOL and media sourcing, local copy, and post-campaign review.',
  },
  {
    icon: Megaphone,
    title: 'KOL & PR Campaigns',
    copy: 'Managed exposure across X, Telegram, YouTube, crypto media, AMAs, and regional communities.',
  },
]

const workflow = [
  ['01', 'Audit', 'Stage, channel, community, budget, and readiness gaps.'],
  ['02', 'Strategy', 'Market priority, narrative, audience, and channel mix.'],
  ['03', 'Match', 'Internal and partner KOL, media, PR, and community resources.'],
  ['04', 'Execute', 'Content, scheduling, publishing, proof capture, and issue handling.'],
  ['05', 'Report', 'Links, screenshots, basic metrics, status, and delivery notes.'],
  ['06', 'Optimize', 'Next campaign priorities and budget recommendations.'],
]

const reasons = [
  ['Strategy before execution', 'We plan around stage, market, story, budget, and launch objective before recommending channels.'],
  ['Partner resource network', 'Access internal and partner KOL, media, PR, community, and regional resources through one managed plan.'],
  ['Investor community activation', 'Selected projects can activate E2P Club through AMAs, tasks, education, and community feedback.'],
  ['Listing-readiness support', 'We prepare market, PR, community, and documentation signals for stronger platform conversations.'],
  ['Transparent reporting', 'Campaigns are tracked with links, screenshots, delivery status, and next-step recommendations.'],
  ['Regional localization', 'Narratives and content are adapted to local market language, channel style, and audience expectations.'],
]

const caseCards = [
  {
    project: 'USBT',
    stage: 'Listing communication',
    proof: 'Gate.io public announcement',
    href: 'https://www.gate.io/zh/announcements/article/39267',
  },
  {
    project: 'Virtuals Protocol',
    stage: 'CMC data support',
    proof: 'CoinMarketCap public page',
    href: 'https://coinmarketcap.com/currencies/virtual-protocol/',
  },
  {
    project: 'CHAX',
    stage: 'Market visibility',
    proof: 'CoinGecko public page',
    href: 'https://www.coingecko.com/en/coins/chax',
  },
]

export default function HomePage() {
  return (
    <div className="bg-[#f6f7f4] text-[#111816]">
      <section className="relative min-h-screen overflow-hidden bg-[#0b100f] pt-16 text-white">
        <img
          src="/hero-growth-command.png"
          alt="Abstract Web3 campaign control room"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,7,0.96)_0%,rgba(5,8,7,0.84)_38%,rgba(5,8,7,0.35)_72%,rgba(5,8,7,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(246,247,244,0)_0%,#f6f7f4_100%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Web3 Launch-to-Listing Growth Partner
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-normal text-white md:text-6xl lg:text-7xl">
              Growth campaigns for Web3 launches that need real market traction.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
              E2P Labs helps projects prepare launch narratives, activate KOL and PR resources, enter regional markets, build investor communities, and improve listing readiness with transparent delivery reporting.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-emerald-400 px-6 font-semibold text-[#06100c] transition-colors hover:bg-emerald-300">
                Get a GTM Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/solutions" className="inline-flex min-h-12 items-center justify-center border border-white/20 px-6 font-semibold text-white transition-colors hover:bg-white/10">
                View Solutions
              </Link>
              <Link href="/partner-program" className="inline-flex min-h-12 items-center justify-center border border-white/20 px-6 font-semibold text-gray-200 transition-colors hover:bg-white/10">
                Scout Program
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 text-sm text-gray-300 sm:grid-cols-3">
              {['Strategy first', 'Partner resources', 'Proof-based reports'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 border border-black/8 bg-white shadow-[0_24px_80px_rgba(8,16,14,0.12)] md:grid-cols-3">
            {coreSolutions.map((solution, index) => (
              <Link
                key={solution.title}
                href="/solutions"
                className={`group p-7 transition-colors hover:bg-[#eef8f2] ${index !== 0 ? 'border-t border-black/8 md:border-l md:border-t-0' : ''}`}
              >
                <solution.icon className="h-8 w-8 text-emerald-600" />
                <h2 className="mt-5 text-xl font-semibold text-[#101816]">{solution.title}</h2>
                <p className="mt-3 leading-7 text-[#5b6662]">{solution.copy}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-emerald-700">
                  Explore solution
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Operating model</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#101816] md:text-5xl">
                A campaign system, not a vendor list.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5b6662]">
                Every campaign starts with the project stage and market goal, then moves through resource matching, execution, reporting, and the next optimization round.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {workflow.map(([num, title, copy]) => (
                <div key={num} className="border border-black/8 bg-white p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-emerald-700">{num}</span>
                    <div className="h-px flex-1 bg-black/10" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#101816]">{title}</h3>
                  <p className="mt-2 leading-6 text-[#66716d]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101816] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Why E2P</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                Built for teams that need momentum they can explain.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                We connect campaign strategy, partner resources, community activation, and reporting into one accountable GTM workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {reasons.map(([title, copy], index) => {
                const Icon = [Radar, Network, Users, FileCheck2, BarChart3, Globe2][index]
                return (
                  <div key={title} className="bg-[#101816] p-6">
                    <Icon className="h-7 w-7 text-emerald-300" />
                    <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                    <p className="mt-3 leading-7 text-gray-400">{copy}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Public proof</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#101816] md:text-5xl">
                Case signals with conservative claims.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5b6662]">
                We show public links and verifiable references instead of inflated ROI or guaranteed-listing language.
              </p>
            </div>
            <Link href="/cases" className="inline-flex min-h-12 items-center justify-center border border-black/12 bg-white px-5 font-semibold text-[#101816] hover:bg-[#eef8f2]">
              View all cases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {caseCards.map((item) => (
              <article key={item.project} className="border border-black/8 bg-white p-6">
                <p className="text-sm font-semibold text-emerald-700">{item.stage}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#101816]">{item.project}</h3>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center font-semibold text-[#1c5f43] hover:text-emerald-700">
                  {item.proof}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Community asset</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#101816] md:text-5xl">
              E2P Club turns attention into conversation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5b6662]">
              Selected campaigns can connect with traders, investors, and community members through AMAs, tasks, education, and feedback.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {['AMAs and X Spaces', 'Community tasks', 'Investor Q&A', 'Trader feedback'].map((item) => (
              <div key={item} className="border border-black/8 bg-[#f6f7f4] p-6">
                <Users className="h-7 w-7 text-emerald-700" />
                <h3 className="mt-5 text-lg font-semibold text-[#101816]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e5f4ea] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold leading-tight text-[#101816] md:text-5xl">
            Tell us your launch goal. We will recommend a campaign plan.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#53605b]">
            Share your project stage, target markets, current channels, and campaign budget range so E2P can suggest a practical GTM path.
          </p>
          <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center justify-center bg-[#101816] px-8 font-semibold text-white transition-colors hover:bg-[#1c2a25]">
            Submit Project Brief
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-[#66716d]">
            E2P provides campaign execution and readiness support. We do not guarantee token price, exchange approval, CMC / CoinGecko approval, trading volume, ROI, or fundraising outcomes.
          </p>
        </div>
      </section>
    </div>
  )
}
