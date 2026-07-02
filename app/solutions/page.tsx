'use client'

import { BarChart3, CheckCircle2, CircleDollarSign, FileCheck2, Globe2, Megaphone, Rocket, SearchCheck, Users } from 'lucide-react'
import { Disclosure, LightPanel, PageHero, PrimaryLink, SectionIntro } from '@/components/Marketing'
import { budgetRanges, projectStages, solutions, workflow } from '../siteData'

const icons = [Rocket, Globe2, Megaphone, FileCheck2, Users, CircleDollarSign]

export default function SolutionsPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Solutions"
        title="Campaign plans for launch, growth, and listing readiness."
        body="E2P turns broad growth needs into stage-aware campaign structures across KOL, PR, regional markets, community activation, and readiness support."
        ctaLabel="Submit Project Brief"
        secondaryLabel="View Workflow"
        secondaryHref="#workflow"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Solution map"
            title="Six ways E2P can support a Web3 campaign."
            body="Each solution is scoped around a project stage, a concrete market problem, and a delivery package that can be reported."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = icons[index]
              return (
                <LightPanel key={solution.title} className="p-6">
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-mist">
                      <Icon className="h-7 w-7 text-forest" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-forest">{solution.eyebrow}</p>
                      <h2 className="mt-2 text-2xl font-semibold text-ink">{solution.title}</h2>
                      <p className="mt-4 leading-7 text-stone-600"><span className="font-semibold text-ink">Best for:</span> {solution.audience}</p>
                      <p className="mt-3 leading-7 text-stone-600">{solution.goal}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {solution.deliverables.map((item) => (
                          <span key={item} className="border border-ink/10 bg-paper px-3 py-2 text-sm text-stone-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </LightPanel>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SearchCheck className="h-10 w-10 text-forest" />
            <SectionIntro
              eyebrow="Stage fit"
              title="Start with stage, then choose the campaign."
              body="The same marketing spend behaves differently before TGE, after listing, during fundraising, or while entering a new region."
            />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {projectStages.map((stage) => (
              <div key={stage} className="border border-ink/10 bg-paper px-4 py-4 text-sm font-medium text-ink">
                {stage}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <BarChart3 className="h-10 w-10 text-forest" />
              <SectionIntro
                eyebrow="Budget logic"
                title="Budget ranges are used for scope, not promises."
                body="Final recommendations depend on target market, timeline, resource availability, project risk, and reporting depth."
              />
            </div>
            <div className="space-y-3">
              {budgetRanges.map((budget) => (
                <LightPanel key={budget} className="flex items-center gap-3 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-forest" />
                  <span className="text-stone-700">{budget}</span>
                </LightPanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Workflow"
            title="From diagnosis to next-round optimization."
            body="Campaign execution is managed as a sequence so delivery can be tracked and reviewed."
            tone="dark"
          />
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {workflow.map(([num, title, copy]) => (
              <div key={num} className="bg-ink p-6">
                <span className="text-sm font-semibold text-mint">{num}</span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-stone-400">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl">
            <Disclosure />
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Next step"
            title="Unsure which solution fits your project?"
            body="Submit a brief. E2P will map your stage and goal to the right campaign structure."
            align="center"
          />
          <div className="mt-9">
            <PrimaryLink href="/contact">
              Get a GTM Plan
            </PrimaryLink>
          </div>
        </div>
      </section>
    </div>
  )
}
