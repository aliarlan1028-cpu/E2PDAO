'use client'

import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  Globe2,
  Megaphone,
  MessageCircle,
  Rocket,
  SearchCheck,
  Users,
} from 'lucide-react'

const solutions = [
  {
    icon: Rocket,
    title: 'Launch & TGE Campaigns',
    audience: 'Pre-TGE, IDO, IEO, airdrop, and product-launch projects',
    goal: 'Build pre-launch awareness, community heat, and a clear campaign narrative.',
    deliverables: ['Narrative review', 'Campaign brief', 'KOL / PR / community mix', 'Localized copy', 'Delivery report'],
  },
  {
    icon: Globe2,
    title: 'Regional Market Entry',
    audience: 'Projects entering a new local market',
    goal: 'Localize the story, select market channels, and activate regional exposure.',
    deliverables: ['Market selection logic', 'Localized messaging', 'Regional KOL / Telegram / YouTube / PR mix', 'Review report'],
  },
  {
    icon: Megaphone,
    title: 'KOL & PR Campaigns',
    audience: 'Projects needing brand credibility and managed exposure',
    goal: 'Plan, source, execute, and report KOL and media campaigns end to end.',
    deliverables: ['KOL audit', 'Content adaptation', 'Publishing schedule', 'Links and screenshots', 'Engagement recap'],
  },
  {
    icon: FileCheck2,
    title: 'Listing Readiness',
    audience: 'Projects preparing for CEX, CMC, CoinGecko, IDO, or IEO conversations',
    goal: 'Improve the market, community, PR, and documentation signals used in platform review conversations.',
    deliverables: ['Readiness audit', 'Materials checklist', 'PR / market signal support', 'Community data preparation', 'Risk disclaimer'],
  },
  {
    icon: Users,
    title: 'Community & Investor Activation',
    audience: 'Projects with cold communities or low conversion after paid exposure',
    goal: 'Activate investors, traders, and community members through AMAs, tasks, education, and feedback loops.',
    deliverables: ['AMA plan', 'Investor Q&A', 'Community tasks', 'Early-opportunity campaign', 'Community data report'],
  },
  {
    icon: CircleDollarSign,
    title: 'Fundraising / KOL Round Support',
    audience: 'Fundraising, strategic round, ecosystem fund, and KOL round projects',
    goal: 'Prepare materials, build public credibility, and support warm introductions where applicable.',
    deliverables: ['Project material review', 'Pitch deck feedback', 'KOL round communication', 'PR support', 'Partner introduction support'],
  },
]

const stages = [
  'Idea / MVP',
  'Testnet',
  'Pre-TGE',
  'IDO / IEO',
  'Post-TGE',
  'CEX Listing Preparation',
  'Already Listed',
  'Regional Expansion',
  'Fundraising',
]

const budgets = [
  '< 2,000 USDT: diagnostic support or small test campaign',
  '2,000 - 5,000 USDT: narrow market activation or starter KOL / PR plan',
  '5,000 - 10,000 USDT: multi-channel campaign with reporting',
  '10,000 - 25,000 USDT: regional GTM and stronger KOL / PR mix',
  '25,000 - 50,000 USDT: launch-to-listing campaign with multiple workstreams',
  '50,000+ USDT: custom global campaign and ongoing optimization',
]

const workflow = [
  'Project audit',
  'Market and narrative strategy',
  'Resource matching',
  'Campaign execution',
  'Delivery report',
  'Next-round optimization',
]

export default function SolutionsPage() {
  return (
    <div className="pt-16 bg-white text-gray-900">
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">E2P Labs Solutions</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">Solutions for Web3 Launch, Growth, and Listing Readiness</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            We translate project goals into practical campaign plans across KOL, PR, community, regional market entry, investor activation, and listing-readiness support.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors">
            Submit Project Brief
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <article key={solution.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <solution.icon className="w-9 h-9 text-primary-600 mb-5" />
                <h2 className="text-xl font-bold text-gray-950">{solution.title}</h2>
                <p className="mt-3 text-sm font-semibold text-gray-700">Best for: {solution.audience}</p>
                <p className="mt-3 text-gray-600">{solution.goal}</p>
                <ul className="mt-5 space-y-2">
                  {solution.deliverables.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <SearchCheck className="w-10 h-10 text-primary-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-950">Find the right solution by stage</h2>
              <p className="mt-4 text-gray-600">Your stage determines the recommended campaign mix, reporting depth, and market priority.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {stages.map((stage) => (
                  <span key={stage} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700">
                    {stage}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <BarChart3 className="w-10 h-10 text-emerald-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-950">Budget ranges</h2>
              <p className="mt-4 text-gray-600">Budgets are used for scoping, not as guaranteed outcomes. Final plans depend on market, timeline, resource availability, and project risk.</p>
              <ul className="mt-6 space-y-3">
                {budgets.map((budget) => (
                  <li key={budget} className="rounded-lg border border-gray-200 p-4 text-sm text-gray-700">{budget}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Campaign workflow</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {workflow.map((step, index) => (
              <div key={step} className="rounded-lg bg-white border border-primary-100 p-5">
                <span className="text-sm font-bold text-primary-700">0{index + 1}</span>
                <h3 className="mt-2 font-semibold text-gray-950">{step}</h3>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            E2P provides readiness support, exchange introductions where applicable, and transparent delivery reporting. Listing, ranking-platform approval, fundraising, token performance, traffic quality, and ROI remain subject to independent platform review and market conditions.
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-10 h-10 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Need advice before choosing a package?</h2>
          <p className="mt-4 text-lg text-gray-600">Submit your project brief and E2P will recommend a stage-appropriate GTM plan.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white hover:bg-primary-700 transition-colors">
            Get a GTM Plan
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
