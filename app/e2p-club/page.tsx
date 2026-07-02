'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Gift, MessageCircle, ShieldAlert, Users, Vote } from 'lucide-react'

const projectUses = [
  {
    icon: MessageCircle,
    title: 'AMAs and education',
    copy: 'Help selected projects explain their product, token model, and launch plan to an investor and trader audience.',
  },
  {
    icon: Gift,
    title: 'Tasks and early opportunities',
    copy: 'Support whitelist, airdrop, testnet, points, and early-opportunity campaigns where appropriate.',
  },
  {
    icon: Vote,
    title: 'Community feedback',
    copy: 'Collect questions, objections, and product feedback from active crypto community members.',
  },
  {
    icon: BookOpen,
    title: 'Market education',
    copy: 'Turn complex project narratives into community-friendly explainers and discussion sessions.',
  },
]

const memberBenefits = [
  'Join selected early project activities',
  'Attend AMAs, education sessions, and community discussions',
  'Recommend promising projects to E2P Labs',
  'Participate in tasks and community campaigns',
  'Access E2P Club announcements and resources',
]

export default function E2PClubPage() {
  return (
    <div className="pt-16 bg-white text-gray-900">
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">E2P Club</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">Investor and Trader Community for Web3 Campaign Activation</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            E2P Club is a community asset that supports E2P Labs campaigns through AMAs, tasks, education, early-opportunity programs, and community feedback. Signal Bot remains a Club-side tool, not a B2B growth service.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="https://t.me/+RcB2FVha7bo4N2Nk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors">
              Join Community
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link href="/partner-program" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
              Recommend a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950">How E2P Club supports projects</h2>
            <p className="mt-4 text-lg text-gray-600">Club activation is used selectively as part of a broader GTM campaign, not as a guarantee of user conversion or token performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectUses.map((item) => (
              <article key={item.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <item.icon className="w-9 h-9 text-primary-600 mb-5" />
                <h3 className="text-xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Users className="w-10 h-10 text-primary-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-950">For members</h2>
            <p className="mt-4 text-gray-600">E2P Club is for investors and traders who want structured project education, community discussion, and optional early project activities.</p>
            <ul className="mt-6 space-y-3">
              {memberBenefits.map((benefit) => (
                <li key={benefit} className="rounded-lg border border-gray-200 bg-white p-4 text-gray-700">{benefit}</li>
              ))}
            </ul>
          </div>
          <div>
            <ShieldAlert className="w-10 h-10 text-amber-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-950">Risk reminder</h2>
            <p className="mt-4 text-gray-600">Crypto markets are volatile. E2P Club content is for education and community discussion only and should not be treated as investment advice.</p>
            <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
              E2P Club does not guarantee returns, token performance, airdrop value, trading results, allocation access, or investment outcomes. Members should do their own research and manage risk independently.
            </div>
            <Link href="/e2p-club/signal-bot" className="mt-6 inline-flex items-center font-semibold text-primary-700 hover:text-primary-800">
              View Signal Bot risk notes
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Project teams can activate E2P Club through Labs campaigns</h2>
          <p className="mt-4 text-lg text-gray-600">Submit your project brief and E2P will decide whether Club activation fits your stage, region, and campaign objective.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white hover:bg-primary-700 transition-colors">
            Submit Project Brief
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
