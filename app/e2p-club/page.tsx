'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, MessageCircle, ShieldAlert, Sparkles, Users, Vote } from 'lucide-react'
import { Disclosure, LightPanel, PageHero, PrimaryLink, SectionIntro } from '@/components/Marketing'

const projectUses = [
  ['AMAs and education', 'Explain product, token model, campaign story, and launch plan to an investor and trader audience.', MessageCircle],
  ['Tasks and early opportunities', 'Support whitelist, airdrop, testnet, points, and early-opportunity campaigns where appropriate.', Sparkles],
  ['Community feedback', 'Collect questions, objections, and user feedback from active crypto community members.', Vote],
  ['Market education', 'Turn complex narratives into community-friendly explainers and discussion sessions.', BookOpen],
]

const memberBenefits = [
  'Join selected early project activities',
  'Attend AMAs, education sessions, and community discussions',
  'Recommend promising projects to E2P Labs',
  'Participate in tasks and community campaigns',
  'Access Club announcements and resources',
]

export default function E2PClubPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="E2P Club"
        title="A community layer for selected Web3 campaigns."
        body="E2P Club supports E2P Labs through AMAs, tasks, education, early-opportunity programs, and market feedback. It is a community asset, not the main B2B service."
        ctaLabel="Submit Project Brief"
        secondaryLabel="View Signal Bot"
        secondaryHref="/e2p-club/signal-bot"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Campaign activation"
            title="When paid exposure needs real conversation."
            body="Club activation is used selectively inside a broader GTM plan. It helps projects listen, explain, educate, and gather feedback."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectUses.map(([title, copy, Icon]) => (
              <LightPanel key={title as string} className="p-6">
                <Icon className="h-8 w-8 text-forest" />
                <h2 className="mt-5 text-xl font-semibold text-ink">{title as string}</h2>
                <p className="mt-3 leading-7 text-stone-600">{copy as string}</p>
              </LightPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Users className="h-10 w-10 text-forest" />
            <SectionIntro
              eyebrow="For members"
              title="A clearer way to discover and discuss early projects."
              body="E2P Club is for investors and traders who want structured education, community discussion, and optional early project activities."
            />
          </div>
          <div className="space-y-3">
            {memberBenefits.map((benefit) => (
              <LightPanel key={benefit} className="p-5">
                <p className="font-medium text-ink">{benefit}</p>
              </LightPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <ShieldAlert className="h-10 w-10 text-signal" />
            <SectionIntro
              eyebrow="Risk boundary"
              title="Community activity is not investment advice."
              body="Crypto markets are volatile. Club content is for education and community discussion only."
              tone="dark"
            />
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-8">
            <p className="text-lg leading-8 text-stone-300">
              E2P Club does not guarantee returns, token performance, airdrop value, trading results, allocation access, or investment outcomes. Members should do their own research and manage risk independently.
            </p>
            <Link href="/e2p-club/signal-bot" className="mt-8 inline-flex items-center font-semibold text-mint">
              View Signal Bot disclosure
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="For project teams"
            title="Activate E2P Club through a Labs campaign."
            body="Submit your project brief and E2P will decide whether Club activation fits your stage, region, and objective."
            align="center"
          />
          <div className="mt-9">
            <PrimaryLink href="/contact">Submit Project Brief</PrimaryLink>
          </div>
          <div className="mx-auto mt-7 max-w-3xl">
            <Disclosure />
          </div>
        </div>
      </section>
    </div>
  )
}
