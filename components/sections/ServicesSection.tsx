'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Rocket,
  Megaphone,
  Newspaper,
  Users,
  Building2,
  Video,
  Briefcase,
  Bot,
  Activity,
  CheckCircle2,
} from 'lucide-react'

const labServices = [
  {
    icon: Rocket,
    title: 'Project Incubation',
    description: 'Model, tokenomics, raise, launch.',
    signal: '01',
  },
  {
    icon: Megaphone,
    title: 'Global KOL Marketing',
    description: 'X, YouTube, Telegram, TikTok.',
    signal: '02',
  },
  {
    icon: Newspaper,
    title: 'Media & PR Distribution',
    description: 'PR, announcements, authority.',
    signal: '03',
  },
  {
    icon: Users,
    title: 'Community Growth',
    description: 'AMA, airdrops, TG operations.',
    signal: '04',
  },
  {
    icon: Building2,
    title: 'Token Listing Accelerator',
    description: 'CEX, CMC, launchpad prep.',
    signal: '05',
  },
  {
    icon: Video,
    title: 'Brand Packaging',
    description: 'Video, pitch, founder story.',
    signal: '06',
  },
]

const clubCapabilities = [
  { label: 'VIP trading community', level: 'Live' },
  { label: 'Signal Bot intelligence', level: 'Signal' },
  { label: 'Early investment access', level: 'Access' },
  { label: 'Referral and $E2P rewards', level: 'Reward' },
]

const executionRails = [
  'Positioning',
  'KOL Push',
  'Media Lift',
  'Community Heat',
  'Listing Prep',
  'Club Demand',
]

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase text-primary-600">Two engines, one network</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
            One network. Two engines.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Labs executes project growth. Club activates investor demand.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 md:flex-row md:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold text-white">
                  <Briefcase className="h-4 w-4" />
                  E2P Labs
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-950">Project growth stack</h3>
              </div>
              <Link
                href="/e2p-labs"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-100"
              >
                View Labs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {labServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  className="energy-card group rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500 transition-colors group-hover:bg-slate-950 group-hover:text-white">
                      {service.signal}
                    </span>
                  </div>
                  <h4 className="mt-4 font-semibold text-slate-950">{service.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="energy-card rounded-lg bg-slate-950 p-5 text-white"
          >
            <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-950">
              <Bot className="h-4 w-4" />
              E2P Club
            </div>
            <h3 className="mt-5 text-2xl font-bold">VIP community stack</h3>
            <p className="mt-4 leading-7 text-slate-300">Signals, early access and rewards in one Club.</p>

            <div className="relative mt-6 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="animated-grid absolute inset-0 grid-bg opacity-20" />
              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm text-slate-400">Market pulse</div>
                  <div className="mt-2 text-3xl font-bold text-white">24/7</div>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-teal-300/30 bg-teal-300/10">
                  <Activity className="h-7 w-7 text-teal-200" />
                </div>
              </div>
              <div className="relative mt-4 grid grid-cols-5 items-end gap-2">
                {[46, 72, 54, 88, 64].map((height, index) => (
                  <span
                    key={height}
                    className="signal-bar rounded-t-md bg-gradient-to-t from-teal-400/30 to-teal-200"
                    style={{ height: `${height}px`, animationDelay: `${index * 0.18}s` }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {clubCapabilities.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <span className="flex min-w-0 items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-teal-200" />
                    <span className="truncate">{item.label}</span>
                  </span>
                  <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold text-teal-100">{item.level}</span>
                </div>
              ))}
            </div>

            <Link
              href="/e2p-club"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Explore E2P Club
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-slate-950 p-4 text-white"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-teal-200">Execution rail</div>
              <div className="mt-1 text-sm text-slate-400">From project assets to visible market demand.</div>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {executionRails.map((item, index) => (
                <div key={item} className="relative rounded-lg border border-white/10 bg-white/5 px-3 py-3">
                  <span className="pulse-node absolute right-3 top-3 h-2 w-2 rounded-full bg-teal-300" style={{ animationDelay: `${index * 0.25}s` }} />
                  <div className="text-xs font-semibold text-slate-500">0{index + 1}</div>
                  <div className="mt-2 text-sm font-semibold text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
