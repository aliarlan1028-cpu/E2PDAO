'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-web3-dark grid-bg flex flex-col justify-center min-h-[90vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-web3-dark z-0"></div>

      {/* Decorative neon spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-web3-accent/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-web3-purple/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-web3-accent/30 shadow-[0_0_10px_rgba(0,255,102,0.1)] text-[10px] text-web3-accent uppercase tracking-widest w-fit font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-web3-accent animate-pulse shadow-[0_0_5px_#00FF66]"></span>
              System Synchronized // 99.9% UP
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight"
            >
              Data-Driven Web3 <br />
              <span className="text-web3-accent glow-text">Incubator & Labs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base text-gray-400 mb-2 leading-relaxed font-mono"
            >
              E2P DAO bridges the gap between Top Tier KOLs, tier-1 exchanges, and retail communities. We guarantee measurable growth, CEX listing success, and viral marketing driven by the $E2P ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-4"
            >
              <Link href="/launch" className="w-full sm:w-auto px-6 py-3 bg-web3-accent text-black rounded text-xs font-bold uppercase tracking-widest hover:bg-web3-accent/80 hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group">
                Launch a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/influence" className="w-full sm:w-auto px-6 py-3 bg-transparent text-white border border-white/20 rounded text-xs font-bold uppercase tracking-widest hover:border-web3-purple hover:text-web3-purple hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-all duration-300 flex items-center justify-center gap-2">
                Browse KOLs
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-web3-card/80 backdrop-blur p-6 rounded-xl border border-white/10 shadow-2xl hidden lg:block"
          >
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Live Network Metrics</h2>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-web3-purple"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white/5 p-4 rounded border border-white/5">
                <div className="text-[10px] font-bold uppercase text-web3-accent mb-1 font-mono">Total KOL Network</div>
                <div className="text-3xl font-light text-white">400<span className="text-lg text-web3-accent font-bold">+</span></div>
                <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-web3-accent w-[85%] shadow-[0_0_10px_#00FF66]"></div>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/5">
                <div className="text-[10px] font-bold uppercase text-web3-purple mb-1 font-mono">Exchange Partners</div>
                <div className="text-3xl font-light text-white">10<span className="text-lg text-web3-purple font-bold">+</span></div>
                <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-web3-purple w-[100%] shadow-[0_0_10px_#8A2BE2]"></div>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/5">
                <div className="text-[10px] font-bold uppercase text-gray-400 mb-1 font-mono">Global Reach</div>
                <div className="text-3xl font-light text-white">50M<span className="text-lg text-web3-accent font-bold">+</span></div>
                <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white/50 w-[92%]"></div>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/5">
                <div className="text-[10px] font-bold uppercase text-gray-400 mb-1 font-mono">Success Rate (Listing)</div>
                <div className="text-3xl font-light text-white">100<span className="text-lg text-web3-accent font-bold">%</span></div>
                <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-web3-accent w-[100%] shadow-[0_0_10px_#00FF66]"></div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 rounded-lg p-4 font-mono text-[10px] text-web3-accent border border-web3-accent/20">
              <div className="mb-2 opacity-50">// System Logs</div>
              <div className="leading-relaxed">
                &gt; Synchronizing KOL campaign data... OK<br />
                &gt; Establishing secure CEX API link... OK<br />
                &gt; Validating $E2P smart contracts... VERIFIED
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
