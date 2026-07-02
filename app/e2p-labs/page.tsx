'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Building2,
  Globe2,
  Megaphone,
  Newspaper,
  PlaySquare,
  RadioTower,
  Search,
  ShieldCheck,
  Users,
  Video,
} from 'lucide-react'

const serviceGroups = [
  {
    icon: Search,
    title: 'Project Incubation',
    description: 'Model, tokenomics, raise.',
    accent: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Megaphone,
    title: 'Global KOL Marketing',
    description: 'X, YouTube, Telegram, TikTok.',
    accent: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Newspaper,
    title: 'Media & PR Distribution',
    description: 'PR, SEO, authority.',
    accent: 'bg-amber-50 text-amber-700',
  },
  {
    icon: RadioTower,
    title: 'Community Growth',
    description: 'AMA, airdrops, TG ops.',
    accent: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Building2,
    title: 'Token Listing Accelerator',
    description: 'CEX, CMC, launchpads.',
    accent: 'bg-indigo-50 text-indigo-700',
  },
  {
    icon: Video,
    title: 'Video & Brand Packaging',
    description: 'Video, pitch, launch assets.',
    accent: 'bg-rose-50 text-rose-700',
  },
  {
    icon: Briefcase,
    title: 'Advisory & Headhunting',
    description: 'Advisors, talent, credibility.',
    accent: 'bg-slate-100 text-slate-800',
  },
  {
    icon: BarChart3,
    title: 'Market Making & Growth Support',
    description: 'Liquidity, structure, momentum.',
    accent: 'bg-cyan-50 text-cyan-700',
  },
]

const marketStack = [
  { title: 'KOL', value: 'X / YouTube / Telegram / TikTok' },
  { title: 'Media', value: 'PR / SEO / launch announcements' },
  { title: 'Community', value: 'AMA / airdrop / social tasks' },
  { title: 'Listing', value: 'CEX / CMC / launchpad prep' },
]

const process = [
  { step: '01', title: 'Audit', text: 'Stage, market, budget.' },
  { step: '02', title: 'Plan', text: 'Channels and sequence.' },
  { step: '03', title: 'Execute', text: 'Creators, PR, community.' },
  { step: '04', title: 'Convert', text: 'Users, demand, listing.' },
]

const exchanges = [
  { name: 'OKX', logo: '/OKX.png' },
  { name: 'Bybit', logo: '/Bybit.png' },
  { name: 'Gate.io', logo: '/Gate.io.png' },
  { name: 'Bitget', logo: '/Bitget Logo.png' },
  { name: 'MEXC', logo: '/MEXC.png' },
  { name: 'HTX', logo: '/HTX.png' },
  { name: 'Kucoin', logo: '/Kucoin.png' },
  { name: 'Coinstore', logo: '/CoinStore.png' },
]

const labsMetrics = [
  { value: '400+', label: 'KOL resources' },
  { value: '20+', label: 'Market regions' },
  { value: '10+', label: 'Exchange resources' },
  { value: '50M+', label: 'Potential audience reach' },
]

export default function E2PLabsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="bg-white pt-16">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="animated-grid absolute inset-0 grid-bg opacity-20" />
        <div className="scanline absolute inset-x-0 top-0" />
        <div className="section-shell relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-slate-200">
                <BadgeCheck className="h-4 w-4 text-teal-300" />
                E2P Labs for project teams
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                Web3 launch stack for growth and listing.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Incubation, KOL, media, community, packaging and listing support in one execution layer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-hover inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-950 hover:bg-slate-100"
                >
                  Get a project proposal
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/success-cases"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/10"
                >
                  View cases
                  <PlaySquare className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="energy-card rounded-lg border border-white/10 bg-white/5 p-5"
            >
              <div className="grid grid-cols-2 gap-3">
                {labsMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg bg-white p-5 text-slate-950">
                    <div className="text-3xl font-bold">{metric.value}</div>
                    <div className="mt-1 text-sm text-slate-600">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-slate-900 p-5 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-teal-200">Core promise</div>
                <p className="mt-2 text-lg font-semibold leading-7 text-white">
                  Turn scattered resources into market traction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-primary-600">Service architecture</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Pick outcomes, not scattered services.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${service.accent}`}>
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="global-marketing" className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-600">Global marketing stack</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
                Campaign systems, not text-heavy catalogs.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Regional channels, creators, media and communities packaged around launch goals.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {marketStack.map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold uppercase text-slate-500">{item.title}</div>
                  <div className="mt-3 text-lg font-semibold leading-7 text-slate-950">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="listing" className="bg-slate-950 py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-950">
                <ShieldCheck className="h-4 w-4" />
                Listing readiness
              </div>
              <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                Listing prep starts before the listing talk.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Story, users, visibility and market structure move together.
              </p>
            </div>
            <div className="energy-card rounded-lg border border-white/10 bg-white/5 p-5">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {exchanges.map((exchange) => (
                  <div key={exchange.name} className="flex h-20 min-w-0 items-center justify-center overflow-hidden rounded-lg bg-white p-3">
                    <img src={exchange.logo} alt={exchange.name} className="h-9 w-24 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-primary-600">How execution works</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Four-step execution loop.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-md bg-slate-950 px-3 py-1 text-sm font-semibold text-white">{item.step}</div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="rounded-lg bg-slate-950 p-8 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Globe2 className="h-9 w-9 text-teal-300" />
                <h2 className="mt-5 text-3xl font-bold">Need a custom growth stack?</h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                  Share stage, market and timeline. We map the stack.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-slate-100"
              >
                Get proposal
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
