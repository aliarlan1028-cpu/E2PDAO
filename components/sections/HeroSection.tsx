'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, RadioTower, Users, LineChart, BadgeCheck } from 'lucide-react'

const signals = [
  { label: 'KOLs', value: '400+' },
  { label: 'Reach', value: '50M+' },
  { label: 'Exchanges', value: '10+' },
]

const operatingFlow = [
  { icon: Building2, title: 'Project Teams', text: 'Launch demand' },
  { icon: RadioTower, title: 'E2P Labs', text: 'Growth execution' },
  { icon: Users, title: 'E2P Club', text: 'Investor activation' },
]

const tickerItems = [
  'Project Incubation',
  'Global KOL Marketing',
  'Media PR',
  'Community Growth',
  'Token Listing',
  'CMC Support',
  'Video Packaging',
  'Advisory',
  'Signal Bot',
  'VIP Club',
  'Referral Rewards',
  'Early Access',
]

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-16 text-white">
      <div className="animated-grid absolute inset-0 grid-bg opacity-25" />
      <div className="scanline absolute inset-x-0 top-0" />
      <svg
        className="pointer-events-none absolute right-0 top-24 hidden h-[440px] w-[720px] opacity-35 lg:block"
        viewBox="0 0 720 440"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="rail-flow"
          d="M40 360 C180 180 290 360 420 170 C500 60 600 110 690 40"
          stroke="url(#railGradient)"
          strokeWidth="2"
        />
        <path
          className="rail-flow"
          d="M80 90 C190 220 300 90 410 240 C500 360 610 300 700 390"
          stroke="url(#railGradientSoft)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="railGradient" x1="40" y1="360" x2="690" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#14B8A6" stopOpacity="0" />
            <stop offset="0.5" stopColor="#14B8A6" />
            <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="railGradientSoft" x1="80" y1="90" x2="700" y2="390" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60A5FA" />
            <stop offset="1" stopColor="#14B8A6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="section-shell relative py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-slate-200">
              <BadgeCheck className="h-4 w-4 text-teal-300" />
              Web3 growth, listing and investor activation network
            </div>
            <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Web3 growth engine for launch, listing and community demand.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              E2P Labs drives project growth. E2P Club turns attention into investor and trader demand.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/e2p-labs"
                className="btn-hover inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-slate-100"
              >
                Explore E2P Labs
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/e2p-club"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                View E2P Club
                <Users className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {signals.map((signal) => (
                <div key={signal.label} className="energy-card rounded-lg border border-white/10 bg-white/10 p-4">
                  <div className="text-2xl font-bold text-white">{signal.value}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-300">{signal.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="relative"
          >
            <div className="dark-card energy-card rounded-lg p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <img src="/logo-e2p-dao.svg" alt="E2P DAO" className="h-10 w-auto" />
                  <div>
                    <div className="font-semibold text-white">E2P Command Layer</div>
                    <div className="text-sm text-slate-400">Resources to demand</div>
                  </div>
                </div>
                <LineChart className="h-6 w-6 text-teal-300" />
              </div>

              <div className="mt-5 space-y-3">
                {operatingFlow.map((item, index) => (
                  <div key={item.title} className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-slate-950">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-semibold text-white">{item.title}</h3>
                          <span className="rounded-md bg-white/10 px-2 py-1 text-xs text-slate-300">
                            0{index + 1}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                      </div>
                    </div>
                    <span
                      className="pulse-node absolute right-4 top-4 h-2 w-2 rounded-full bg-teal-300"
                      style={{ animationDelay: `${index * 0.45}s` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-teal-400/10 p-4">
                  <div className="text-sm text-teal-200">Project side</div>
                  <div className="mt-2 font-semibold text-white">Launch / Growth / Listing</div>
                </div>
                <div className="rounded-lg bg-amber-400/10 p-4">
                  <div className="text-sm text-amber-200">Club side</div>
                  <div className="mt-2 font-semibold text-white">Signals / Access / Rewards</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="ticker-mask mt-14 overflow-hidden border-y border-white/10 py-4">
          <div className="ticker-track flex gap-3">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
