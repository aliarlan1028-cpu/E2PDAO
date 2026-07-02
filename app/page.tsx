'use client'

import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, FileCheck2, Globe2, Megaphone, Network, Radar, Rocket, ShieldCheck, Users } from 'lucide-react'
import { Disclosure, Eyebrow, LightPanel, PrimaryLink, SectionIntro, SecondaryLink } from '@/components/Marketing'
import { differentiators, proofCases, solutions, workflow } from './siteData'

const icons = [Rocket, Globe2, Megaphone, FileCheck2, Users, BarChart3]
const diffIcons = [Radar, Network, Users, ShieldCheck, BarChart3, Globe2]

export default function HomePage() {
  return (
    <div className="bg-paper">
      <section className="relative min-h-screen overflow-hidden bg-ink pt-16 text-white">
        <img src="/hero-growth-command.png" alt="Abstract Web3 campaign control room" className="absolute inset-0 h-full w-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#07100d_0%,rgba(7,16,13,0.92)_40%,rgba(7,16,13,0.48)_75%,rgba(7,16,13,0.25)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(245,246,241,0)_0%,#f5f6f1_100%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-mint backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Web3 Launch-to-Listing Growth Partner
            </div>
            <h1 className="mt-7 max-w-5xl text-balance text-4xl font-semibold leading-[1.02] tracking-normal md:text-6xl lg:text-7xl">
              Market traction is built campaign by campaign.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
              E2P Labs designs and manages Web3 growth campaigns across launch, KOL and PR, regional market entry, investor community activation, and listing-readiness support.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Get a GTM Plan</PrimaryLink>
              <SecondaryLink href="/solutions">Explore Solutions</SecondaryLink>
              <SecondaryLink href="/partner-program">Join Scout Program</SecondaryLink>
            </div>
            <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 text-sm text-stone-300 sm:grid-cols-3">
              {['Strategy before media spend', 'Partner resource orchestration', 'Proof-based delivery reports'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-mint" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 border border-ink/10 bg-white shadow-lift md:grid-cols-3">
            {solutions.slice(0, 3).map((solution, index) => {
              const Icon = icons[index]
              return (
                <Link key={solution.title} href="/solutions" className={`group p-7 transition-colors hover:bg-mist ${index ? 'border-t border-ink/10 md:border-l md:border-t-0' : ''}`}>
                  <Icon className="h-9 w-9 text-forest" />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-forest">{solution.eyebrow}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-ink">{solution.title}</h2>
                  <p className="mt-4 leading-7 text-stone-600">{solution.goal}</p>
                  <span className="mt-6 inline-flex items-center font-semibold text-forest">
                    View solution
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <SectionIntro
            eyebrow="Operating model"
            title="A campaign system, not a vendor list."
            body="Every engagement starts with the project stage and market objective, then moves through strategy, resource matching, execution, reporting, and optimization."
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {workflow.map(([num, title, copy]) => (
              <LightPanel key={num} className="p-5">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-forest">{num}</span>
                  <div className="h-px flex-1 bg-ink/10" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{copy}</p>
              </LightPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div>
            <Eyebrow tone="dark">Why E2P</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Growth work that can survive investor and exchange conversations.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              The goal is not loud marketing for its own sake. The goal is a campaign trail that can be explained, checked, and improved.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {differentiators.map(([title, copy], index) => {
              const Icon = diffIcons[index]
              return (
                <div key={title} className="bg-ink p-6">
                  <Icon className="h-7 w-7 text-mint" />
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-stone-400">{copy}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Public proof"
              title="Conservative case signals, not inflated claims."
              body="We present outcomes through public references and clear disclaimers. No private data, guaranteed listing language, or unverifiable ROI."
            />
            <Link href="/cases" className="inline-flex min-h-12 items-center justify-center border border-ink/10 bg-white px-5 font-semibold text-ink hover:bg-mist">
              View all cases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {proofCases.map((item) => (
              <LightPanel key={item.project} className="p-6">
                <p className="text-sm font-semibold text-forest">{item.stage}</p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{item.project}</h3>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center font-semibold text-forest hover:text-ink">
                  {item.proof}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </LightPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <SectionIntro
            eyebrow="Community layer"
            title="E2P Club turns attention into conversation."
            body="Selected campaigns can connect with traders, investors, and community members through AMAs, tasks, education, and feedback loops."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {['AMAs and X Spaces', 'Investor Q&A', 'Community tasks', 'Trader feedback'].map((item) => (
              <LightPanel key={item} className="bg-paper p-6">
                <Users className="h-8 w-8 text-forest" />
                <h3 className="mt-5 text-xl font-semibold text-ink">{item}</h3>
              </LightPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Project intake"
            title="Tell us your launch goal. We will recommend a campaign path."
            body="Share stage, target markets, current traction, budget range, and biggest challenge. E2P will suggest the right GTM structure."
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
