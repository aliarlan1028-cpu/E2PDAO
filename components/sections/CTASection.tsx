'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Rocket, Users, Send } from 'lucide-react'

const paths = [
  {
    icon: Rocket,
    title: 'Project teams',
    description: 'Growth, KOL, PR, listing.',
    href: '/contact',
    action: 'Request growth proposal',
  },
  {
    icon: Users,
    title: 'Investors and traders',
    description: 'Signals, access, rewards.',
    href: '/e2p-club',
    action: 'Explore E2P Club',
  },
]

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="animated-grid absolute inset-0 grid-bg opacity-20" />
      <div className="scanline absolute inset-x-0 top-0" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        >
          <div>
            <p className="text-sm font-semibold uppercase text-teal-300">Choose the right path</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Choose your entry point.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Labs for projects. Club for investors.
            </p>
            <a
              href="https://t.me/BitEsq"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact on Telegram
              <Send className="h-5 w-5" />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {paths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="energy-card rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-slate-950">
                  <path.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{path.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-200">
                  {path.action}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
