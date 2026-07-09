'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coins, HandCoins, Share2, Megaphone, Target, Copy, Check, ExternalLink } from 'lucide-react'

const EARN_WAYS = [
  { icon: HandCoins, task: 'Copy Trade on Binance', reward: '5,000 $E2P per $5k vol' },
  { icon: Coins, task: 'Invest in Projects', reward: '5,000 $E2P per $1k inv' },
  { icon: Share2, task: 'Recommend Projects', reward: '10,000 $E2P per proj' },
  { icon: Megaphone, task: 'Social Engagement', reward: '50 - 100 $E2P per action' },
]

const CONTRACT = '0x597716022fc149c2b89061d6ec6b5eac4a97bc20'

const TOKEN_STATS = [
  { label: 'Network', value: 'BNB Smart Chain' },
  { label: 'Standard', value: 'BEP-20' },
  { label: 'Max Supply', value: '10,000,000,000' },
  { label: 'Total Supply', value: '10,000,000,000' },
  { label: 'Circulating', value: '6,000,000,000' },
  { label: 'Symbol', value: '$E2P' },
]

const TAGS = ['Proof of Community', 'Marketing', 'AI & Big Data', 'Governance']

const C = 301.593 // circumference for r = 48
const ALLOCATION = [
  { label: 'Community', pct: 60, color: '#00FF66', dot: 'bg-web3-accent shadow-[0_0_5px_#00FF66]' },
  { label: 'Treasury', pct: 20, color: '#8A2BE2', dot: 'bg-web3-purple shadow-[0_0_5px_#8A2BE2]' },
  { label: 'Team', pct: 10, color: '#ffffff', dot: 'bg-white' },
  { label: 'Advisors', pct: 10, color: '#6b7280', dot: 'bg-gray-500' },
]

export default function TokenomicsPage() {
  const [copied, setCopied] = useState(false)

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  let cumulative = 0

  return (
    <div className="py-12 bg-web3-dark min-h-screen grid-bg relative">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-web3-dark z-0 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/20 text-[10px] text-white uppercase tracking-widest font-mono mb-4"
          >
            <Target className="w-3 h-3 text-white" />
            Active Module // Tokenomics
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            The Engine of E2P DAO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-sm font-mono leading-relaxed"
          >
            $E2P is the governance token of E2P DAO, live on BNB Smart Chain. It captures ecosystem value, aligns incentives across projects, KOLs and traders, and rewards contributors to network growth. 60% of the fixed 10B supply is reserved for the community.
          </motion.p>
        </div>

        {/* On-chain metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-web3-card/80 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10 shadow-2xl mb-8"
        >
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">On-Chain Registry // Verified</h4>
            <div className="w-2 h-2 rounded-full bg-web3-accent animate-pulse shadow-[0_0_5px_#00FF66]"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {TOKEN_STATS.map((stat) => (
              <div key={stat.label} className="bg-black/40 border border-white/5 rounded-lg p-4">
                <div className="text-[9px] text-gray-500 uppercase tracking-widest font-mono mb-1">{stat.label}</div>
                <div className="text-sm font-bold text-white break-words">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 bg-black/40 border border-white/5 rounded-lg p-4">
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-mono shrink-0">Contract (BEP-20)</span>
            <code className="text-[11px] md:text-xs text-web3-accent font-mono break-all flex-1">{CONTRACT}</code>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={copyContract}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-web3-accent hover:border-web3-accent/50 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-web3-accent" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
              <a
                href={`https://bscscan.com/token/${CONTRACT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-web3-accent hover:border-web3-accent/50 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                BscScan
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Ways to earn */}
          <div className="order-2 lg:order-1 bg-web3-card/80 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-2xl flex flex-col gap-6">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 border-b border-white/10 pb-4 flex items-center justify-between">
              Ways to Earn $E2P
              <span className="bg-web3-accent/20 text-web3-accent px-2 py-1 rounded">Live</span>
            </h4>

            <div className="space-y-4 font-mono text-[11px]">
              {EARN_WAYS.map((way, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={way.task}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-black/40 border-l-2 border-web3-accent rounded hover:bg-black/60 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <way.icon className="w-5 h-5 text-gray-400" />
                    <span className="text-white font-bold">{way.task}</span>
                  </div>
                  <span className="text-web3-accent font-bold px-2 py-1 bg-web3-accent/10 rounded">{way.reward}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-2">
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span key={tag} className="text-[9px] font-mono uppercase tracking-widest text-gray-400 bg-white/5 border border-white/10 rounded px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Token Distribution Chart */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-web3-card/80 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>

              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 self-start border-b border-white/10 pb-4 w-full">Token Allocation</h3>
              <div className="relative w-56 h-56 flex flex-col items-center justify-center my-8">
                <div className="text-5xl font-light text-white mb-1">10<span className="text-2xl text-web3-accent">B</span></div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Fixed Supply</div>

                {/* Multi-segment allocation ring */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                  {ALLOCATION.map((seg) => {
                    const len = (seg.pct / 100) * C
                    const offset = -(cumulative / 100) * C
                    cumulative += seg.pct
                    return (
                      <circle
                        key={seg.label}
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke={seg.color}
                        strokeWidth="4"
                        strokeDasharray={`${len} ${C - len}`}
                        strokeDashoffset={offset}
                        strokeLinecap="butt"
                        className="origin-center -rotate-90"
                      />
                    )
                  })}
                </svg>
              </div>

              <div className="w-full grid grid-cols-2 gap-4 mt-4 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                {ALLOCATION.map((seg) => (
                  <div key={seg.label} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${seg.dot}`}></div>
                    {seg.label} ({seg.pct}%)
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CMC CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-web3-card/80 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Track $E2P live</h4>
            <p className="text-xs text-gray-400 font-mono">Price, market cap and holders are tracked on CoinMarketCap.</p>
          </div>
          <a
            href="https://coinmarketcap.com/currencies/e2p-token/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-web3-accent text-black rounded text-xs font-bold uppercase tracking-widest hover:bg-web3-accent/80 hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] transition-all shrink-0"
          >
            View on CoinMarketCap
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </div>
  )
}
