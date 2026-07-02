'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, BarChart3, Building2, ExternalLink, LineChart, Newspaper, ShieldCheck, Users } from 'lucide-react'

const cases = [
  {
    project: 'CHAX',
    category: 'Exchange Listing',
    channel: 'Gate.io',
    result: 'Gate.io listing support.',
    link: 'https://www.coingecko.com/en/coins/chax',
    icon: Building2,
  },
  {
    project: 'HIRO',
    category: 'Exchange Listing',
    channel: 'Gate.io',
    result: 'Gate.io readiness and coordination.',
    link: 'https://coinmarketcap.com/currencies/hiro/#Markets',
    icon: Building2,
  },
  {
    project: 'Virtuals Protocol',
    category: 'CMC Support',
    channel: 'CoinMarketCap',
    result: 'CMC supply verification support.',
    link: 'https://coinmarketcap.com/currencies/virtual-protocol/',
    icon: Newspaper,
  },
  {
    project: 'USBT',
    category: 'Listing Advisory',
    channel: 'Gate.io',
    result: 'Listing advisory and intermediary support.',
    link: 'https://www.gate.io/zh/announcements/article/39267',
    icon: ShieldCheck,
  },
]

const impact = [
  { value: '4', label: 'Highlighted cases' },
  { value: '3', label: 'Listing and CMC categories' },
  { value: '24h+', label: 'Fast execution windows' },
  { value: '100%', label: 'Displayed case completion' },
]

const capabilities = [
  { icon: BarChart3, title: 'Assess', text: 'Materials, market fit, listing path.' },
  { icon: Users, title: 'Coordinate', text: 'Exchange, CMC, KOL, media.' },
  { icon: LineChart, title: 'Launch', text: 'Visibility and momentum.' },
]

export default function SuccessCasesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="bg-white pt-16">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="animated-grid absolute inset-0 grid-bg opacity-20" />
        <div className="scanline absolute inset-x-0 top-0" />
        <div className="section-shell relative">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-teal-300">Success cases</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Listing and CMC proof points.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Real project support across market entry, listing and visibility.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {impact.map((item) => (
              <div key={item.label} className="energy-card rounded-lg border border-white/10 bg-white/10 p-5">
                <div className="text-3xl font-bold">{item.value}</div>
                <div className="mt-2 text-sm text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="grid gap-5 md:grid-cols-2">
            {cases.map((caseItem, index) => (
              <motion.a
                key={caseItem.project}
                href={caseItem.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white">
                    <caseItem.icon className="h-6 w-6" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400" />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-md bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">{caseItem.category}</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{caseItem.channel}</span>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-slate-950">{caseItem.project}</h2>
                <p className="mt-3 leading-7 text-slate-600">{caseItem.result}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-primary-600">How cases are created</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Coordinated resources. Clear outcomes.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                  <capability.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{capability.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">Ready to become the next case?</h2>
              <p className="mt-3 text-slate-300">
                Share stage, market and listing goal.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Start a proposal
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
