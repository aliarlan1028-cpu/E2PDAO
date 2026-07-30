'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Network, ShieldCheck } from 'lucide-react'
import { E2P_LINKS } from '@/lib/e2p-links'
import { Sparkline } from '@/components/EcosystemVisuals'

export default function Hero() {
  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-web3-dark py-20 grid-bg">
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-web3-accent/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-web3-purple/15 blur-[130px] pointer-events-none" />
      <div className="container relative z-10 mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="inline-flex items-center gap-2 rounded border border-web3-accent/30 bg-web3-accent/5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent"><span className="h-2 w-2 rounded-full bg-web3-accent"/>Growth & Listing Partnership Network</motion.div>
          <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">Connect projects with the <span className="text-web3-accent glow-text">right market resources</span></motion.h1>
          <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.2}} className="mt-6 max-w-3xl font-mono text-sm leading-7 text-gray-400 md:text-base">E2PDAO connects Web3 projects, KOLs, exchanges and professional service partners through structured growth campaigns, listing support and long-term creator relationships.</motion.p>
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.3}} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={E2P_LINKS.project('home_hero')} className="inline-flex items-center justify-center gap-2 rounded bg-web3-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-black">Start a Project Partnership <ArrowRight className="h-4 w-4"/></a>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white hover:border-web3-purple hover:text-web3-purple">Explore Services</Link>
          </motion.div>
          <p className="mt-5 font-mono text-[10px] leading-5 text-gray-600">Applications are securely handled in E2PDAO’s private W3Claw Owner workspace for evaluation and follow-up.</p>
        </div>
        <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{delay:.25}} className="scan-line relative overflow-hidden rounded-2xl border border-white/10 bg-[#07090c]/95 p-6 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-3"><Network className="h-5 w-5 text-web3-accent"/><div><h2 className="text-sm font-bold text-white">E2P Network Terminal</h2><p className="mt-1 font-mono text-[8px] uppercase tracking-[.2em] text-gray-600">Ecosystem telemetry</p></div></div><span className="flex items-center gap-2 font-mono text-[8px] font-bold text-web3-accent"><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-web3-accent"/>ONLINE</span></div>
          <div className="mt-5 grid grid-cols-2 gap-3">{[['400+','KOL NETWORK'],['20','RESOURCE NODES'],['4','VERIFIED CASES'],['24/7','AGENT DESIGN']].map(([value,label])=><div key={label} className="rounded-lg border border-white/5 bg-white/[.025] p-4"><strong className="text-2xl text-white">{value}</strong><span className="mt-1 block font-mono text-[7px] tracking-[.18em] text-gray-600">{label}</span></div>)}</div>
          <div className="mt-4 rounded-lg border border-white/5 bg-white/[.02] p-4"><div className="flex justify-between font-mono text-[8px] uppercase tracking-widest"><span className="text-gray-600">Network activity model</span><span className="text-web3-accent">Growing</span></div><Sparkline values={[18,26,23,38,34,49,45,62,57,74]}/></div>
          <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 font-mono text-[7px] font-bold uppercase tracking-widest text-gray-500"><span className="rounded border border-web3-accent/20 p-2 text-center text-web3-accent">Project</span><span>→</span><span className="rounded border border-web3-purple/20 p-2 text-center text-web3-purple">KOL Matrix</span><span>→</span><span className="rounded border border-white/10 p-2 text-center text-white">Market</span></div>
          <div className="mt-5 flex items-start gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-web3-purple"/><p className="font-mono text-[9px] leading-5 text-gray-600">Network counts use current public E2PDAO resource claims; charts visualize platform structure, not live financial performance.</p></div>
        </motion.div>
      </div>
    </section>
  )
}
