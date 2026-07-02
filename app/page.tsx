'use client'

import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Megaphone,
  MessageSquare,
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
    fit: 'For Pre-TGE, IDO, IEO, airdrop, and product-launch teams.',
    problem: 'Build market awareness before launch without scattering budget across disconnected channels.',
    deliverables: ['Narrative brief', 'KOL / PR / community mix', 'Publishing schedule', 'Delivery report'],
  },
  {
    icon: Globe2,
    title: 'Regional Market Entry',
    fit: 'For teams entering Chinese-speaking, English-speaking, Vietnam, Japan, Korea, Turkey, MENA, or Brazil markets.',
    problem: 'Select the right market, localize messaging, and activate regional channels with a tracked campaign.',
    deliverables: ['Market entry plan', 'Localized content', 'Regional KOL / PR sourcing', 'Post-campaign review'],
  },
  {
    icon: Megaphone,
    title: 'KOL & PR Campaigns',
    fit: 'For teams needing brand credibility, media exposure, and social proof.',
    problem: 'Turn KOL and media spend into a managed campaign with clear links, screenshots, and reporting.',
    deliverables: ['KOL audit', 'Content adaptation', 'Media / X / Telegram / video execution', 'Engagement recap'],
  },
]

const workflow = [
  'Project Audit',
  'Market & Narrative Strategy',
  'Resource Matching',
  'Campaign Execution',
  'Delivery Report',
  'Next-Round Optimization',
]

const reasons = [
  {
    icon: Radar,
    title: 'Strategy before execution',
    copy: 'We start with stage, market, audience, and launch goal before recommending channels.',
  },
  {
    icon: Network,
    title: 'Partner resource network',
    copy: 'Access internal and partner KOL, media, community, and regional resources through one managed plan.',
  },
  {
    icon: Users,
    title: 'Investor community activation',
    copy: 'E2P Club can support selected campaigns with AMAs, tasks, education, and community feedback.',
  },
  {
    icon: FileCheck2,
    title: 'Listing-readiness support',
    copy: 'We help prepare market, PR, community, and documentation signals for stronger platform conversations.',
  },
  {
    icon: BarChart3,
    title: 'Transparent reporting',
    copy: 'Campaigns are tracked with links, screenshots, basic metrics, delivery status, and next-step recommendations.',
  },
  {
    icon: MessageSquare,
    title: 'Regional localization',
    copy: 'Narratives and content are adapted to local market language, channel style, and audience expectations.',
  },
]

const caseCards = [
  {
    project: 'USBT',
    stage: 'Listing readiness',
    problem: 'Needed stronger public proof around a listing milestone.',
    service: 'Listing communication support and public announcement tracking.',
    proof: 'Gate.io public announcement',
    href: 'https://www.gate.io/zh/announcements/article/39267',
  },
  {
    project: 'Virtuals Protocol',
    stage: 'CMC data support',
    problem: 'Needed support around public market-data preparation.',
    service: 'Circulating supply verification support and documentation coordination.',
    proof: 'CoinMarketCap public page',
    href: 'https://coinmarketcap.com/currencies/virtual-protocol/',
  },
  {
    project: 'CHAX',
    stage: 'Market visibility',
    problem: 'Needed public market presence and listing-related visibility.',
    service: 'Listing readiness consultation and public proof tracking.',
    proof: 'CoinGecko public page',
    href: 'https://www.coingecko.com/en/coins/chax',
  },
]

export default function HomePage() {
  return (
    <div className="pt-16 bg-white text-gray-900">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary-600 via-emerald-500 to-accent-500" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] py-16 lg:py-20 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-14 items-center w-full">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 mb-6">
                <ShieldCheck className="w-4 h-4" />
                Web3 Launch-to-Listing Growth Partner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-normal text-gray-950">
                From Launch to Listing: Web3 Growth Campaigns Built for Real Market Traction
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl">
                E2P Labs helps Web3 projects prepare for launch, activate KOL and PR resources, build investor communities, and improve listing readiness across global markets.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors">
                  Get a GTM Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  Submit Your Project
                </Link>
                <Link href="/partner-program" className="inline-flex items-center justify-center rounded-lg border border-primary-200 px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50 transition-colors">
                  Join Partner Program
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
                {['Campaign strategy and sourcing', 'KOL / PR / community execution', 'Delivery reporting and optimization'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg border border-gray-200 bg-white shadow-xl overflow-hidden">
                <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img src="/logo-e2p-dao.svg" alt="E2P Labs campaign dashboard" className="h-9 w-auto" />
                    <div>
                      <p className="font-semibold text-gray-950">Campaign Plan</p>
                      <p className="text-sm text-gray-500">Launch-to-listing workflow</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Tracked</span>
                </div>
                <div className="p-5 space-y-4">
                  {workflow.slice(0, 4).map((step, index) => (
                    <div key={step} className="flex gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-950">{step}</h3>
                        <p className="text-sm text-gray-600">
                          {index === 0 && 'Review stage, goals, current community, channels, and readiness gaps.'}
                          {index === 1 && 'Define market priority, campaign narrative, budget range, and channel mix.'}
                          {index === 2 && 'Match internal and partner resources to target market and project stage.'}
                          {index === 3 && 'Coordinate content, publishing windows, delivery proof, and issue handling.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Core solutions</h2>
            <p className="mt-4 text-lg text-gray-600">E2P sells complete campaign plans, not disconnected KOL inventory.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {coreSolutions.map((solution) => (
              <article key={solution.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <solution.icon className="w-9 h-9 text-primary-600 mb-5" />
                <h3 className="text-xl font-bold text-gray-950">{solution.title}</h3>
                <p className="mt-3 text-sm font-semibold text-gray-700">{solution.fit}</p>
                <p className="mt-3 text-gray-600">{solution.problem}</p>
                <div className="mt-5">
                  <p className="text-sm font-semibold text-gray-950">Core deliverables</p>
                  <ul className="mt-3 space-y-2">
                    {solution.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/solutions" className="mt-6 inline-flex items-center font-semibold text-primary-700 hover:text-primary-800">
                  View solution
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-950">How E2P works</h2>
              <p className="mt-4 text-lg text-gray-600">A simple operating system for campaign strategy, execution, reporting, and the next iteration.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workflow.map((step, index) => (
                <div key={step} className="rounded-lg border border-gray-200 bg-white p-5">
                  <span className="text-sm font-bold text-primary-600">0{index + 1}</span>
                  <h3 className="mt-2 font-semibold text-gray-950">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why choose E2P</h2>
            <p className="mt-4 text-lg text-gray-300">We combine growth advisory, resource sourcing, execution management, and community activation under one accountable campaign workflow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <reason.icon className="w-8 h-8 text-emerald-300 mb-4" />
                <h3 className="text-lg font-bold">{reason.title}</h3>
                <p className="mt-3 text-gray-300">{reason.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Case signals with public proof</h2>
              <p className="mt-4 text-lg text-gray-600">We only present outcomes that can be checked through public links or client-approved materials.</p>
            </div>
            <Link href="/cases" className="inline-flex items-center font-semibold text-primary-700 hover:text-primary-800">
              View all cases
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseCards.map((item) => (
              <article key={item.project} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-primary-700">{item.stage}</p>
                <h3 className="mt-2 text-2xl font-bold text-gray-950">{item.project}</h3>
                <p className="mt-4 text-gray-600"><span className="font-semibold text-gray-900">Problem:</span> {item.problem}</p>
                <p className="mt-3 text-gray-600"><span className="font-semibold text-gray-900">E2P service:</span> {item.service}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center font-semibold text-primary-700 hover:text-primary-800">
                  {item.proof}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary-700">E2P Club asset</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-950">Community activation beyond paid impressions</h2>
              <p className="mt-4 text-lg text-gray-600">
                E2P Club helps selected Web3 projects connect with traders, investors, and community members through AMAs, tasks, education, and early-opportunity campaigns.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['AMAs and X Spaces', 'Community tasks', 'Investor Q&A', 'Trader feedback'].map((item) => (
                <div key={item} className="rounded-lg bg-white p-5 border border-primary-100">
                  <Users className="w-7 h-7 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-950">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Tell us your launch goal. We will recommend a campaign plan.</h2>
          <p className="mt-4 text-lg text-gray-600">Share your project stage, target markets, current channels, and campaign budget range so E2P can suggest the right GTM path.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white hover:bg-primary-700 transition-colors">
            Submit Project Brief
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="mt-6 text-sm text-gray-500">
            E2P provides campaign execution and readiness support. We do not guarantee token price, exchange approval, CMC / CoinGecko approval, trading volume, ROI, or fundraising outcomes.
          </p>
        </div>
      </section>
    </div>
  )
}
