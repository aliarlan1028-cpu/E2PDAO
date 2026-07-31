'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Megaphone, Network, ShieldCheck, Users } from 'lucide-react'
import { E2P_LINKS } from '@/lib/e2p-links'

const HERO_STATS: [string, string][] = [
  ['400+', 'KOL CREATORS'],
  ['20+', 'RESOURCE NODES'],
  ['4', 'VERIFIED CASES'],
  ['5', 'INCUBATION STAGES'],
]

export default function Hero() {
  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-web3-dark py-20 grid-bg">
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-web3-accent/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-web3-purple/15 blur-[130px] pointer-events-none" />
      <div className="container relative z-10 mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded border border-web3-accent/30 bg-web3-accent/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent"
          >
            <span className="h-2 w-2 rounded-full bg-web3-accent" />
            Web3 Growth &amp; Listing Network
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Web3 growth, KOL campaigns and{' '}
            <span className="text-web3-accent glow-text">listing support</span>{' '}
            in one network
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg"
          >
            E2PDAO connects your project with 400+ KOLs, 20+ resource nodes and
            exchange relationships — so you can plan growth, run campaigns and
            get listing-ready with one partner instead of ten.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={E2P_LINKS.project('home_hero')}
              className="inline-flex items-center justify-center gap-2 rounded bg-web3-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:shadow-[0_0_20px_rgba(0,255,102,0.45)]"
            >
              Apply as a project <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white hover:border-web3-purple hover:text-web3-purple"
            >
              See services &amp; cases
            </Link>
          </motion.div>

          {/* Persona entry points */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-gray-500"
          >
            <span className="uppercase tracking-widest">I&apos;m a</span>
            <a
              href={E2P_LINKS.kol('home_hero')}
              className="inline-flex items-center gap-1.5 font-medium text-gray-300 underline-offset-4 hover:text-web3-accent hover:underline"
            >
              <Megaphone className="h-3.5 w-3.5" /> KOL / Creator
            </a>
            <a
              href={E2P_LINKS.partner('home_hero')}
              className="inline-flex items-center gap-1.5 font-medium text-gray-300 underline-offset-4 hover:text-web3-purple hover:underline"
            >
              <Users className="h-3.5 w-3.5" /> Exchange / Partner
            </a>
          </motion.div>
        </div>

        {/* Right proof card — real numbers, no live-telemetry theater */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07090c]/95 p-6 shadow-2xl backdrop-blur"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <Network className="h-5 w-5 text-web3-accent" />
              <div>
                <h2 className="text-sm font-bold text-white">
                  E2P Resource Network
                </h2>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[.2em] text-gray-600">
                  What we connect
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {HERO_STATS.map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-white/5 bg-white/[.025] p-4"
              >
                <strong className="text-2xl text-white">{value}</strong>
                <span className="mt-1 block font-mono text-[7px] tracking-[.18em] text-gray-500">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 font-mono text-[7px] font-bold uppercase tracking-widest text-gray-500">
            <span className="rounded border border-web3-accent/20 p-2 text-center text-web3-accent">
              Project
            </span>
            <span>→</span>
            <span className="rounded border border-web3-purple/20 p-2 text-center text-web3-purple">
              KOL Matrix
            </span>
            <span>→</span>
            <span className="rounded border border-white/10 p-2 text-center text-white">
              Market
            </span>
          </div>

          <div className="mt-5 flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-web3-purple" />
            <p className="font-mono text-[9px] leading-5 text-gray-600">
              Figures reflect E2PDAO&apos;s current public resource claims. The
              4 references below link to independently verifiable listings.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
