'use client'

import Link from 'next/link'
import { ArrowRight, ClipboardCheck, FileText, Globe2, ListChecks } from 'lucide-react'
import { LightPanel, PageHero, PrimaryLink, SectionIntro } from '@/components/Marketing'
import { resources } from '../siteData'

const icons = [ClipboardCheck, FileText, Globe2]

export default function ResourcesPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Resources"
        title="Practical GTM tools before you spend campaign budget."
        body="Use these templates and checklists to prepare better campaign briefs, listing-readiness materials, and regional growth plans."
        ctaLabel="Get a GTM Review"
        secondaryLabel="Submit Brief"
        secondaryHref="/contact"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Tool library"
            title="Three starting points for cleaner campaign planning."
            body="Each resource is designed to make your next conversation with E2P or any campaign partner more concrete."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = icons[index]
              return (
                <LightPanel key={resource.title} className="p-7">
                  <Icon className="h-10 w-10 text-forest" />
                  <h2 className="mt-6 text-2xl font-semibold text-ink">{resource.title}</h2>
                  <p className="mt-4 leading-8 text-stone-600">{resource.description}</p>
                  <a href={`#${resource.slug}`} className="mt-7 inline-flex items-center font-semibold text-forest">
                    Preview sections
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </LightPanel>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl space-y-8 px-5 sm:px-6 lg:px-8">
          {resources.map((resource, index) => {
            const Icon = icons[index]
            return (
              <LightPanel id={resource.slug} key={resource.slug} className="scroll-mt-24 p-6 lg:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <Icon className="h-10 w-10 flex-shrink-0 text-forest" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-forest">Resource {String(index + 1).padStart(2, '0')}</p>
                    <h2 className="mt-2 text-3xl font-semibold text-ink">{resource.title}</h2>
                    <p className="mt-4 leading-8 text-stone-600">{resource.description}</p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {resource.sections.map((section, sectionIndex) => (
                    <div key={section} className="bg-paper p-4">
                      <div className="flex items-center gap-3">
                        <ListChecks className="h-5 w-5 text-forest" />
                        <span className="text-sm font-semibold text-forest">{String(sectionIndex + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="mt-3 font-semibold text-ink">{section}</h3>
                    </div>
                  ))}
                </div>
              </LightPanel>
            )
          })}
        </div>
      </section>

      <section className="bg-mist py-24 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Review"
            title="Want E2P to review your GTM plan?"
            body="Submit your project brief and mention which resource you used. We will recommend next steps based on your stage and market."
            align="center"
          />
          <div className="mt-9">
            <PrimaryLink href="/contact">Get a GTM Review</PrimaryLink>
          </div>
        </div>
      </section>
    </div>
  )
}
