'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe2, Megaphone, Building2, Trophy } from 'lucide-react'

const stats = [
  {
    icon: Megaphone,
    value: '400+',
    label: 'KOL Network',
    description: 'Global creator access',
  },
  {
    icon: Globe2,
    value: '50M+',
    label: 'Reach',
    description: 'Campaign distribution',
  },
  {
    icon: Building2,
    value: '10+',
    label: 'Listing Routes',
    description: 'CEX, CMC, launchpads',
  },
  {
    icon: Trophy,
    value: '25+',
    label: 'Projects',
    description: 'Growth and listing support',
  },
]

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="bg-slate-50 py-16">
      <div className="section-shell">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="soft-card rounded-lg p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-3xl font-bold text-slate-950">{stat.value}</div>
              <h3 className="mt-2 font-semibold text-slate-900">{stat.label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
