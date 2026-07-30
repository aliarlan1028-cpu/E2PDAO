'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Network, ShieldCheck } from 'lucide-react'
import { E2P_LINKS } from '@/lib/e2p-links'

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
        <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{delay:.25}} className="rounded-2xl border border-white/10 bg-web3-card/85 p-7 shadow-2xl backdrop-blur">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5"><Network className="h-5 w-5 text-web3-accent"/><div><h2 className="text-sm font-bold text-white">One network, structured execution</h2><p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-gray-500">Project → Resource → Delivery</p></div></div>
          <div className="mt-6 space-y-4">
            {['Project growth and market-entry planning','KOL and Ambassador cooperation matching','Listing materials and BD process support','Execution tracking and post-campaign review'].map(item=><div key={item} className="flex items-start gap-3 rounded-lg bg-black/30 p-4 font-mono text-xs leading-5 text-gray-300"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-web3-accent"/>{item}</div>)}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-web3-purple/20 bg-web3-purple/5 p-4"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-web3-purple"/><p className="font-mono text-[10px] leading-5 text-gray-500">Cooperation is subject to review. E2PDAO does not guarantee listing, campaign performance, investment return or token value.</p></div>
        </motion.div>
      </div>
    </section>
  )
}
