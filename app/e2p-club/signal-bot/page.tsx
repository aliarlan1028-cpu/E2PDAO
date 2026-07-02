'use client'

import Link from 'next/link'
import { ArrowRight, BarChart3, Bell, Bot, ShieldAlert, ShieldCheck } from 'lucide-react'
import { LightPanel, PageHero, SectionIntro } from '@/components/Marketing'

const capabilities = [
  'Technical indicator monitoring',
  'Market structure review',
  'Risk reminders and false-breakout warnings',
  'Funding, volatility, and sentiment context',
  'Club member notifications',
  'Educational explanations for setups',
]

export default function SignalBotPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="E2P Club Tool"
        title="Signal Bot is a research aid, not a shortcut."
        body="Signal Bot helps Club members observe market conditions and review structured alerts. It is informational and educational only."
        ctaLabel="Join E2P Club"
        ctaHref="https://t.me/+RcB2FVha7bo4N2Nk"
        secondaryLabel="Back to Club"
        secondaryHref="/e2p-club"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ['Market monitoring', 'Tracks selected indicators and market context so members can review conditions more efficiently.', Bot],
              ['Signal context', 'Provides observations members can compare with their own research and risk plans.', BarChart3],
              ['Club notifications', 'Shares selected alerts and explanations inside the E2P Club environment.', Bell],
            ].map(([title, copy, Icon]) => (
              <LightPanel key={title as string} className="p-7">
                <Icon className="h-9 w-9 text-forest" />
                <h2 className="mt-5 text-2xl font-semibold text-ink">{title as string}</h2>
                <p className="mt-4 leading-8 text-stone-600">{copy as string}</p>
              </LightPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <ShieldCheck className="h-10 w-10 text-forest" />
            <SectionIntro
              eyebrow="Capabilities"
              title="Structured market observations for members."
              body="The bot helps organize market context, but decisions remain the member's responsibility."
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <LightPanel key={item} className="bg-paper p-5">
                <p className="font-medium text-ink">{item}</p>
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
              eyebrow="Risk disclosure"
              title="No accuracy, profit, or outcome guarantee."
              body="Trading alerts can be wrong, late, incomplete, or unsuitable for a member's situation."
              tone="dark"
            />
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-8">
            <p className="text-lg leading-8 text-stone-300">
              Signal Bot outputs are informational and educational. They are not financial advice, not a trading instruction, and not a guarantee of accuracy, profit, stop-loss performance, or future market behavior.
            </p>
            <p className="mt-5 leading-8 text-stone-400">
              Members should do their own research, understand leverage risk, and make independent decisions. Past market behavior does not predict future results.
            </p>
            <Link href="/e2p-club" className="mt-8 inline-flex items-center font-semibold text-mint">
              Back to E2P Club
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
