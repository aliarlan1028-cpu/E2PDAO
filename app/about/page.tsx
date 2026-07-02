'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Building2, Calendar, Globe2, Megaphone, Network, ShieldCheck, Users } from 'lucide-react'

const timeline = [
  { year: '2018', title: 'Exchange operations', text: 'Bitget futures operations.' },
  { year: '2020', title: 'DeFi operations', text: 'Tron ecosystem operations.' },
  { year: '2021', title: 'KOL network', text: 'Gate.io creator network.' },
  { year: '2022', title: 'E2P DAO founded', text: 'Growth and listing network.' },
  { year: 'Now', title: 'Expanded platform', text: 'Labs + Club operating layer.' },
]

const principles = [
  { icon: Network, title: 'Resource integration', text: 'KOL, media, listing, VC, advisory.' },
  { icon: ShieldCheck, title: 'Market readiness', text: 'Story, assets, users, structure.' },
  { icon: Users, title: 'Community activation', text: 'Club demand for partner projects.' },
  { icon: Globe2, title: 'Global execution', text: 'Multi-market growth paths.' },
]

const pillars = [
  {
    icon: Building2,
    title: 'E2P Labs',
    text: 'Incubation, KOL, PR, community, listing and advisory.',
    href: '/e2p-labs',
  },
  {
    icon: Users,
    title: 'E2P Club',
    text: 'VIP membership, Signal Bot, early access and $E2P rewards.',
    href: '/e2p-club',
  },
]

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="bg-white pt-16">
      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-teal-300">About E2P DAO</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              A Web3 growth network with two engines.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              E2P Labs moves projects. E2P Club moves investor demand.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <Link key={pillar.title} href={pillar.href} className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-slate-950">{pillar.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{pillar.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
                  Explore {pillar.title}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-white py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-primary-600">Operating principles</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Built to turn resources into traction.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                  <principle.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-slate-950">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{principle.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white">
                <Megaphone className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-3xl font-bold text-slate-950 md:text-4xl">Exchange, DeFi and KOL roots.</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Built from practical operations experience.
              </p>
            </div>
            <div className="space-y-3">
              {timeline.map((item) => (
                <div key={item.year} className="grid gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="flex min-w-20 items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                    <Calendar className="h-4 w-4" />
                    {item.year}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">Build your Web3 growth path with E2P DAO.</h2>
              <p className="mt-3 text-slate-300">Labs for projects. Club for investors.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Contact E2P
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
