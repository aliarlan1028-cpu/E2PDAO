'use client'

import Link from 'next/link'
import { ArrowRight, ClipboardCheck, FileText, Globe2, ListChecks } from 'lucide-react'

const resources = [
  {
    icon: ClipboardCheck,
    title: 'Listing Readiness Checklist',
    slug: 'listing-readiness-checklist',
    description: 'A practical checklist for CEX, CMC, CoinGecko, IEO, and IDO preparation conversations.',
    sections: ['Project basics', 'Tokenomics', 'Website and docs', 'Social and community', 'User data', 'Media and PR', 'KOL traction', 'Exchange materials', 'Risk disclosure', 'Next steps'],
  },
  {
    icon: FileText,
    title: 'KOL Campaign Brief Template',
    slug: 'kol-campaign-brief-template',
    description: 'A brief structure for project teams planning X, Telegram, YouTube, AMA, and media campaigns.',
    sections: ['Project introduction', 'Campaign goal', 'Target markets', 'Target users', 'Core selling points', 'Forbidden claims', 'Content format', 'CTA', 'Timeline', 'Reporting requirements'],
  },
  {
    icon: Globe2,
    title: 'Web3 Regional GTM Guide',
    slug: 'web3-gtm-guide',
    description: 'A market-entry planning guide for choosing regions, localizing messages, and sequencing channels.',
    sections: ['Market selection', 'Audience fit', 'Language style', 'KOL channel mix', 'Community entry', 'PR timing', 'Budget bands', 'Campaign review'],
  },
]

export default function ResourcesPage() {
  return (
    <div className="pt-16 bg-white text-gray-900">
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">Resources</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">Practical Web3 GTM Tools for Project Teams</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            Use these resources to prepare better campaign briefs, listing-readiness materials, and regional growth plans before speaking with E2P Labs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <article key={resource.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <resource.icon className="w-9 h-9 text-primary-600 mb-5" />
              <h2 className="text-xl font-bold text-gray-950">{resource.title}</h2>
              <p className="mt-3 text-gray-600">{resource.description}</p>
              <ul className="mt-5 space-y-2">
                {resource.sections.slice(0, 6).map((section) => (
                  <li key={section} className="flex gap-2 text-sm text-gray-600">
                    <ListChecks className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    {section}
                  </li>
                ))}
              </ul>
              <a href={`#${resource.slug}`} className="mt-6 inline-flex items-center font-semibold text-primary-700 hover:text-primary-800">
                Preview resource
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {resources.map((resource) => (
            <article id={resource.slug} key={resource.slug} className="scroll-mt-24 rounded-lg border border-gray-200 p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <resource.icon className="w-9 h-9 text-primary-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-950">{resource.title}</h2>
                  <p className="mt-3 text-gray-600">{resource.description}</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resource.sections.map((section, index) => (
                  <div key={section} className="rounded-lg bg-gray-50 border border-gray-100 p-4">
                    <span className="text-sm font-bold text-primary-700">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mt-1 font-semibold text-gray-950">{section}</h3>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-primary-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Want E2P to review your GTM plan?</h2>
          <p className="mt-4 text-lg text-gray-600">Submit your project brief and mention which resource you used. We will recommend next steps based on your stage and target market.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white hover:bg-primary-700 transition-colors">
            Get a GTM Review
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
