'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const exchanges = [
  { name: 'OKX', logo: '/OKX.png' },
  { name: 'Crypto.com', logo: '/crypto.com.png' },
  { name: 'Bybit', logo: '/Bybit.png' },
  { name: 'Kucoin', logo: '/Kucoin.png' },
  { name: 'HTX', logo: '/HTX.png' },
  { name: 'Bitget', logo: '/Bitget Logo.png' },
  { name: 'Gate.io', logo: '/Gate.io.png' },
  { name: 'MEXC', logo: '/MEXC.png' },
  { name: 'Bingx', logo: '/Bingx.png' },
  { name: 'Coinstore', logo: '/CoinStore.png' },
]

const launchpads = [
  { name: 'DAO Maker', logo: '/DAO Maker.png' },
  { name: 'Seedify', logo: '/seedify.svg' },
  { name: 'Poolz Finance', logo: '/Poolz Finance.png' },
  { name: 'BullPerks', logo: '/BullPerks.png' },
  { name: 'Kommunitas', logo: '/kommunitas.png' },
]

const vcs = [
  { name: 'Coresky', logo: '/Coresky.jpeg' },
  { name: 'Unicorne-Verse', logo: '/Unicorne-Verse.jpg' },
  { name: 'MT Capital', logo: '/MT Capital.avif' },
  { name: 'Mirana Ventures', logo: '/Mirana Ventures.png' },
  { name: 'Snova Capital', logo: '/Snova Capital.png' },
]

const LogoGrid = ({ title, items }: { title: string; items: { name: string; logo: string }[] }) => (
  <div className="rounded-lg border border-slate-200 bg-white p-5">
    <h3 className="font-semibold text-slate-950">{title}</h3>
    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.name} className="flex h-20 min-w-0 items-center justify-center overflow-hidden rounded-lg bg-slate-50 p-4 ring-1 ring-slate-100">
          <img src={item.logo} alt={item.name} className="h-10 w-28 object-contain" />
        </div>
      ))}
    </div>
  </div>
)

const PartnersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary-600">Resource matrix</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Resource matrix.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Exchanges, launchpads, VCs and strategic channels in one view.
            </p>
          </div>
          <Link
            href="/e2p-labs"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
          >
            See services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mt-10 space-y-5"
        >
          <LogoGrid title="Exchange and listing resources" items={exchanges} />
          <div className="grid gap-5 lg:grid-cols-2">
            <LogoGrid title="IDO and launchpad resources" items={launchpads} />
            <LogoGrid title="VC and strategic network" items={vcs} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection
