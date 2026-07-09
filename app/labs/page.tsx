'use client'

import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, Activity, LineChart, Building2, Mic2, ExternalLink } from 'lucide-react'

const SERVICES = [
  {
    title: 'KOL Matrix Engine',
    icon: Mic2,
    description: 'We orchestrate data-driven marketing campaigns using our proprietary network of 400+ Web3 KOLs. We optimize reach, narrative alignment, and ROI across global markets.',
    stats: { primary: '400+', label: 'Verified KOLs' },
  },
  {
    title: 'CEX Listing Protocol',
    icon: Building2,
    description: 'Direct relationships with Tier-1 and Tier-2 exchanges (OKX, Gate, Bitget, MEXC). We navigate compliance, liquidity requirements, and fast-track approvals.',
    stats: { primary: '10+', label: 'Exchange Partners' },
  },
  {
    title: 'Tokenomics Architecture',
    icon: LineChart,
    description: 'Mathematical modeling of token economies, emission schedules, and value accrual mechanisms designed for sustainable long-term growth and reduced sell pressure.',
    stats: { primary: 'Data', label: 'Driven Models' },
  },
  {
    title: 'IDO / IEO Launchpad',
    icon: Rocket,
    description: 'Strategic allocation and fundraising through top-tier launchpads. We handle the entire pipeline from marketing sync to TGE execution.',
    stats: { primary: 'Tier 1', label: 'Launchpad Access' },
  },
  {
    title: 'Liquidity Provisioning',
    icon: Activity,
    description: 'Partnered with institutional market makers (Flow Traders, Tide Group) to ensure deep liquidity, tight spreads, and healthy charts post-launch.',
    stats: { primary: '24/7', label: 'Market Making' },
  },
  {
    title: 'Smart Contract Audit & Security',
    icon: ShieldCheck,
    description: 'Pre-deployment security reviews and formal verification through our trusted security partners to ensure code safety before TGE.',
    stats: { primary: 'Secure', label: 'Audited Contracts' },
  },
]

const RESOURCE_MATRIX = [
  {
    label: 'Exchange Partners',
    items: [
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
    ],
  },
  {
    label: 'Launchpad Alliance',
    items: [
      { name: 'DAO Maker', logo: '/DAO Maker.png' },
      { name: 'Seedify', logo: '/seedify.svg' },
      { name: 'Poolz Finance', logo: '/Poolz Finance.png' },
      { name: 'BullPerks', logo: '/BullPerks.png' },
      { name: 'Kommunitas', logo: '/kommunitas.png' },
    ],
  },
  {
    label: 'Capital Partners',
    items: [
      { name: 'Coresky', logo: '/Coresky.jpeg' },
      { name: 'Unicorne-Verse', logo: '/Unicorne-Verse.jpg' },
      { name: 'MT Capital', logo: '/MT Capital.avif' },
      { name: 'Mirana Ventures', logo: '/Mirana Ventures.png' },
      { name: 'Snova Capital', logo: '/Snova Capital.png' },
    ],
  },
]

const TRACK_RECORD = [
  {
    project: 'CHAX',
    category: 'CEX Listing',
    channel: 'Gate.io',
    result: 'Full listing support and market-entry coordination.',
    link: 'https://www.coingecko.com/en/coins/chax',
  },
  {
    project: 'HIRO',
    category: 'CEX Listing',
    channel: 'Gate.io',
    result: 'Listing readiness, materials, and exchange coordination.',
    link: 'https://coinmarketcap.com/currencies/hiro/#Markets',
  },
  {
    project: 'Virtuals Protocol',
    category: 'CMC Support',
    channel: 'CoinMarketCap',
    result: 'Circulating supply verification support on CMC.',
    link: 'https://coinmarketcap.com/currencies/virtual-protocol/',
  },
  {
    project: 'USBT',
    category: 'Listing Advisory',
    channel: 'Gate.io',
    result: 'Listing advisory and intermediary execution.',
    link: 'https://www.gate.io/zh/announcements/article/39267',
  },
]

export default function LabsPage() {
  return (
    <div className="py-12 bg-web3-dark min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-web3-accent/30 text-[10px] text-web3-accent uppercase tracking-widest font-mono mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-web3-accent animate-pulse shadow-[0_0_5px_#00FF66]"></span>
            Active Module // E2P Labs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Project Incubation & <br /> <span className="text-web3-accent glow-text">Go-To-Market Engine</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-sm font-mono leading-relaxed"
          >
            E2P Labs is a comprehensive incubator designed to take Web3 projects from concept to Tier-1 listing. We deploy our capital, network, and expertise to ensure successful market entries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={service.title}
              className="bg-web3-card border border-white/5 hover:border-web3-accent/50 rounded-xl p-6 transition-colors flex flex-col group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white group-hover:text-web3-accent group-hover:shadow-[0_0_15px_rgba(0,255,102,0.2)] transition-all">
                  <service.icon className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-light text-white">{service.stats.primary}</div>
                  <div className="text-[9px] uppercase tracking-widest text-web3-accent font-bold">{service.stats.label}</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight mb-3">{service.title}</h4>
              <p className="text-xs font-mono text-gray-400 leading-relaxed flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Verified Track Record */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Verified Track Record // Execution Logs</h2>
            <span className="bg-web3-accent/20 text-web3-accent px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest font-mono">100% Completed</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRACK_RECORD.map((item, idx) => (
              <motion.a
                key={item.project}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-web3-card border border-white/5 hover:border-web3-accent/50 rounded-xl p-6 transition-colors flex flex-col group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                    <span className="bg-web3-accent/10 text-web3-accent px-2 py-1 rounded font-bold">{item.category}</span>
                    <span className="bg-white/5 text-gray-400 px-2 py-1 rounded font-bold">{item.channel}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-web3-accent transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight mb-3">{item.project}</h4>
                <p className="text-xs font-mono text-gray-400 leading-relaxed flex-1">
                  &gt; {item.result}
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-web3-accent transition-colors flex items-center gap-2">
                    View Proof <span className="font-mono">&gt;</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-web3-card p-8 rounded-xl border border-white/5"
        >
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Resource Matrix // Verified Network</h2>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-web3-accent"></div>
              <div className="w-2 h-2 rounded-full bg-web3-purple"></div>
            </div>
          </div>

          <div className="space-y-10">
            {RESOURCE_MATRIX.map((group) => (
              <div key={group.label}>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-web3-accent font-mono mb-4">{group.label}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      title={item.name}
                      className="flex h-16 min-w-0 items-center justify-center overflow-hidden rounded bg-white p-3 opacity-90 hover:opacity-100 transition-opacity"
                    >
                      <img src={item.logo} alt={item.name} className="h-8 w-24 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
