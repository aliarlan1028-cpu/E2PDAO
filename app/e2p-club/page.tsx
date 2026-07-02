'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  Brain,
  CheckCircle,
  CircleDollarSign,
  Gauge,
  Gift,
  LineChart,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

const benefits = [
  { icon: LineChart, title: 'Market Analysis', text: 'Trend notes and key events.' },
  { icon: Bot, title: 'Signal Bot', text: 'OKX perpetual market signals.' },
  { icon: Target, title: 'Early Opportunities', text: 'Seed, KOL, IDO/IEO access.' },
  { icon: Gift, title: 'Community Rewards', text: 'Referrals and $E2P incentives.' },
]

const signalFeatures = [
  'Trend and volatility signals',
  'OI, funding and order-book tracking',
  'False breakout risk filters',
  'Basic / Standard / Premium labels',
]

const accuracyTiers = [
  { tier: 'Basic', accuracy: '45%-55%', color: 'bg-slate-100 text-slate-800' },
  { tier: 'Standard', accuracy: '55%-65%', color: 'bg-blue-50 text-blue-700' },
  { tier: 'Premium', accuracy: '65%-80%', color: 'bg-teal-50 text-teal-700' },
]

const rewardRows = [
  { task: 'Join E2P DAO VIP Group', reward: '100,000 $E2P' },
  { task: 'Invite users to the VIP group', reward: '100,000 $E2P per user' },
  { task: 'Register and trade through partner links', reward: '25,000 $E2P per $5,000 volume' },
  { task: 'Recommend projects for cooperation', reward: '10,000 $E2P per project' },
  { task: 'Increase social engagement', reward: '500 $E2P per action' },
]

const clubMetrics = [
  { value: '200 USDT', label: 'VIP one-time access' },
  { value: '24/7', label: 'Signal monitoring' },
  { value: '60%', label: '$E2P for Club members' },
]

export default function E2PClubPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="bg-white pt-16">
      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 px-3 py-2 text-sm font-semibold text-slate-200">
                <Users className="h-4 w-4 text-teal-300" />
                E2P Club
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                VIP crypto community with signals, access and rewards.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Signal Bot, early deal flow, market context and $E2P incentives in one Club.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://t.me/+RcB2FVha7bo4N2Nk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hover inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-950 hover:bg-slate-100"
                >
                  Join VIP - 200 USDT
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="https://t.me/e2pdaoviptrail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/10"
                >
                  Try free community
                  <Bell className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="rounded-lg border border-white/10 bg-white/6 p-5"
            >
              <div className="rounded-lg bg-white p-5 text-slate-950">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Signal Bot inside E2P Club</div>
                    <div className="text-sm text-slate-500">Signals, filters, labels</div>
                  </div>
                </div>
                <div className="mt-5 grid gap-3">
                  {accuracyTiers.map((tier) => (
                    <div key={tier.tier} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                      <span className="font-semibold text-slate-900">{tier.tier}</span>
                      <span className={`rounded-md px-3 py-1 text-sm font-semibold ${tier.color}`}>{tier.accuracy}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {clubMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg bg-slate-900 p-4 ring-1 ring-white/10">
                    <div className="text-lg font-bold text-white">{metric.value}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-primary-600">Member benefits</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Community, signals and opportunities in one place.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-slate-950">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-600">Signal intelligence</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
                Signal Bot is the Club intelligence layer.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Clear labels, faster context, tighter risk awareness.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="grid gap-3">
                {signalFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-lg bg-white p-4 ring-1 ring-slate-200">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
                    <span className="text-sm leading-6 text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: Brain, title: 'Multi-factor scoring', text: 'Trend, momentum, funding, structure.' },
              { icon: Shield, title: 'Risk filters', text: 'False breakout and manipulation checks.' },
              { icon: Gauge, title: 'Signal labels', text: 'Basic, Standard, Premium.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-950">
                <CircleDollarSign className="h-4 w-4" />
                $E2P incentives
              </div>
              <h2 className="mt-5 text-3xl font-bold md:text-4xl">Rewards for growth.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                $E2P rewards referrals, engagement and project recommendations.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/6 p-5">
              <div className="space-y-3">
                {rewardRows.map((row) => (
                  <div key={row.task} className="grid gap-2 rounded-lg bg-white p-4 text-slate-950 md:grid-cols-[1fr_auto] md:items-center">
                    <span className="font-medium">{row.task}</span>
                    <span className="rounded-md bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">{row.reward}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="rounded-lg bg-slate-50 p-8 ring-1 ring-slate-200 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Zap className="h-9 w-9 text-primary-600" />
                <h2 className="mt-5 text-3xl font-bold text-slate-950">Join E2P Club VIP</h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Lifetime access to signals, market context, early opportunities and rewards.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="https://t.me/+RcB2FVha7bo4N2Nk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Join VIP - 200 USDT
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-white"
                >
                  Ask about Club
                  <TrendingUp className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
