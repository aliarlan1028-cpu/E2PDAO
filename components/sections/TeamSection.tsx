'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, PenTool, RadioTower, Building2, Users, LineChart } from 'lucide-react'

const phases = [
  {
    icon: Search,
    title: 'Diagnose',
    text: 'Stage, story, market, budget.',
  },
  {
    icon: PenTool,
    title: 'Package',
    text: 'Narrative, assets, credibility.',
  },
  {
    icon: RadioTower,
    title: 'Distribute',
    text: 'KOL, media, community.',
  },
  {
    icon: Building2,
    title: 'List',
    text: 'CEX, CMC, launchpads.',
  },
  {
    icon: Users,
    title: 'Activate',
    text: 'Club demand and rewards.',
  },
]

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-slate-50 py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase text-primary-600">Operating model</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              From idea to market signal.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              A tighter execution loop for teams that need traction, not theory.
            </p>

            <div className="mt-8 rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-950">Launch-to-listing loop</div>
                  <div className="text-sm text-slate-500">Coordinated execution</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-3">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                  <phase.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">{phase.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{phase.text}</p>
                </div>
                <div className="rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-500">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
