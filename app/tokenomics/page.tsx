'use client'

import { motion } from 'framer-motion'
import { Coins, HandCoins, Share2, Megaphone, Target, ArrowRight } from 'lucide-react'

const EARN_WAYS = [
  { icon: HandCoins, task: 'Copy Trade on Binance', reward: '5,000 $E2P per $5k vol' },
  { icon: Coins, task: 'Invest in Projects', reward: '5,000 $E2P per $1k inv' },
  { icon: Share2, task: 'Recommend Projects', reward: '10,000 $E2P per proj' },
  { icon: Megaphone, task: 'Social Engagement', reward: '50 - 100 $E2P per action' },
]

export default function TokenomicsPage() {
  return (
    <div className="py-12 bg-web3-dark min-h-screen grid-bg relative">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-web3-dark z-0 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        <div className="mb-16">
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
            $E2P serves as the governance token of E2P DAO. It captures ecosystem value, aligns incentives, and rewards those who actively contribute to our network&apos;s growth. 60% of the total supply is strictly reserved for community distribution.
          </motion.p>
        </div>

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

            <button className="mt-4 w-full py-4 border border-dashed border-white/20 text-gray-400 text-[10px] font-bold uppercase tracking-widest hover:border-web3-accent hover:text-web3-accent transition-colors rounded group flex items-center justify-center gap-2">
              View Detailed Whitepaper
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
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
                <div className="text-5xl font-light text-white mb-1">60<span className="text-2xl text-web3-accent">%</span></div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Community Airdrop</div>

                {/* Decorative rings */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#00FF66" strokeWidth="4" strokeDasharray="180 300" strokeLinecap="round" className="transform -rotate-90 origin-center drop-shadow-[0_0_10px_rgba(0,255,102,0.5)]" />
                </svg>
              </div>

              <div className="w-full grid grid-cols-2 gap-4 mt-4 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-web3-accent rounded-full shadow-[0_0_5px_#00FF66]"></div>
                  Community (60%)
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-web3-purple rounded-full shadow-[0_0_5px_#8A2BE2]"></div>
                  Treasury (20%)
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Team (10%)
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  Advisors (10%)
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}
