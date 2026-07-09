'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  BookOpen,
  Gift,
  Handshake,
  TrendingUp,
  Search,
  CheckCircle2,
  Users,
} from 'lucide-react'

const VIP_SERVICES = [
  { icon: BarChart3, title: 'Market Analysis', desc: 'Expert insights, economic calendars, and macro trends.' },
  { icon: TrendingUp, title: 'Trading Signals', desc: 'Actionable trading signals and verified copy trade options.' },
  { icon: BookOpen, title: 'Financial Education', desc: 'Resources and courses to elevate your investing knowledge.' },
  { icon: Search, title: 'Alpha Alerts', desc: 'Real-time alerts for high-potential, undervalued tokens.' },
]

const SIGNAL_TIERS = [
  { tier: 'Basic', accuracy: '45% - 55%', width: 'w-[50%]', color: 'bg-white/40' },
  { tier: 'Standard', accuracy: '55% - 65%', width: 'w-[60%]', color: 'bg-web3-purple' },
  { tier: 'Premium', accuracy: '65% - 80%', width: 'w-[75%]', color: 'bg-web3-accent' },
]

const SIGNAL_FEATURES = [
  'Trend and volatility signals on OKX perpetual markets',
  'OI, funding rate and order-book tracking',
  'False breakout and manipulation risk filters',
]

const VIP_METRICS = [
  { value: '200 USDT', label: 'One-time lifetime access' },
  { value: '24/7', label: 'Signal monitoring' },
  { value: '60%', label: '$E2P reserved for members' },
]

export default function ClubPage() {
  return (
    <div className="py-12 bg-web3-dark min-h-screen grid-bg relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-web3-purple/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-web3-purple/30 text-[10px] text-web3-purple uppercase tracking-widest font-mono mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-web3-purple animate-pulse shadow-[0_0_5px_#8A2BE2]"></span>
            Active Module // E2P Club
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Elite Trading Community & <br /> <span className="text-web3-purple glow-text">Alpha Syndicate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-sm font-mono leading-relaxed"
          >
            E2P Club is the retail powerhouse behind E2P Labs. We arm our members with institutional-grade research, early investment allocations, and a thriving trading community.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-web3-card p-6 rounded-xl border border-white/5 hover:border-web3-purple/50 transition-colors shadow-lg flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:text-web3-purple transition-colors">
                  <Handshake className="w-5 h-5 text-gray-400 group-hover:text-web3-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Early Investment Opportunities</h4>
                  <p className="text-xs text-gray-400 font-mono leading-relaxed">Exclusive access to Seed-Round, IEO/IDO Allocations, and KOL-Round fundraising directly secured by E2P Labs.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-web3-card p-6 rounded-xl border border-white/5 hover:border-web3-accent/50 transition-colors shadow-lg flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:text-web3-accent transition-colors">
                  <Gift className="w-5 h-5 text-gray-400 group-hover:text-web3-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Scout & Earn Bounties</h4>
                  <p className="text-xs text-gray-400 font-mono leading-relaxed">Recommend promising projects to E2P Labs for CEX/CMC listing services and earn lucrative commission bounties (up to 2,000 USDT).</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-web3-card p-6 rounded-xl border border-white/5 hover:border-white/30 transition-colors shadow-lg flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:text-white transition-colors">
                  <Users className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Active Member Rewards</h4>
                  <p className="text-xs text-gray-400 font-mono leading-relaxed">Consistent engagement is rewarded. Chat, invite friends, and participate in community quizzes for weekly airdrops and lucky draws.</p>
                </div>
              </motion.div>
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              href="https://t.me/+RcB2FVha7bo4N2Nk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-web3-purple text-white rounded text-xs font-bold uppercase tracking-widest hover:bg-web3-purple/80 hover:shadow-[0_0_20px_rgba(138,43,226,0.6)] transition-all mt-4 w-fit"
            >
              Access the Syndicate
            </motion.a>
          </div>

          {/* Right Content - VIP Services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-web3-card/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-web3-purple/10 to-transparent pointer-events-none"></div>

            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-web3-purple font-mono">VIP Core Terminal</h4>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-web3-accent animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {VIP_SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="bg-black/40 border border-white/5 hover:border-web3-purple/50 transition-colors rounded-lg p-5"
                >
                  <service.icon className="w-6 h-6 mb-4 text-web3-purple" />
                  <h5 className="font-bold text-sm text-white mb-2">{service.title}</h5>
                  <p className="text-xs text-gray-500 font-mono leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-black/50 border border-web3-accent/20 rounded-lg flex gap-4 items-start relative z-10">
              <CheckCircle2 className="w-5 h-5 text-web3-accent shrink-0 mt-0.5 shadow-[0_0_10px_#00FF66] rounded-full" />
              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest mb-2 text-web3-accent">System Status</h5>
                <p className="text-[10px] text-gray-400 font-mono leading-relaxed">
                  &gt; Market analysts online.<br />
                  &gt; Signal engine active.<br />
                  &gt; Waiting for user connection...
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Signal Engine & VIP Access */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-web3-card/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Signal Engine // Accuracy Tiers</h4>
              <div className="w-2 h-2 rounded-full bg-web3-accent animate-pulse shadow-[0_0_5px_#00FF66]"></div>
            </div>

            <div className="space-y-5">
              {SIGNAL_TIERS.map((tier) => (
                <div key={tier.tier}>
                  <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                    <span className="text-white font-bold uppercase tracking-widest">{tier.tier}</span>
                    <span className="text-web3-accent font-bold px-2 py-1 bg-web3-accent/10 rounded">{tier.accuracy}</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${tier.color} ${tier.width}`}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-black/50 border border-white/10 rounded-lg font-mono text-[10px] text-gray-400 leading-relaxed">
              {SIGNAL_FEATURES.map((feature) => (
                <div key={feature}>&gt; {feature}</div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-web3-card/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-web3-purple font-mono">VIP Access Protocol</h4>
              <div className="w-2 h-2 rounded-full bg-web3-purple animate-pulse shadow-[0_0_5px_#8A2BE2]"></div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {VIP_METRICS.map((metric) => (
                <div key={metric.label} className="bg-black/40 border border-white/5 rounded-lg p-4">
                  <div className="text-lg font-bold text-white">{metric.value}</div>
                  <div className="mt-1 text-[10px] leading-4 text-gray-500 font-mono uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 font-mono leading-relaxed mb-8">
              Lifetime access to signals, market context, early opportunities and $E2P rewards. Preview the engine in the free community before upgrading.
            </p>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/+RcB2FVha7bo4N2Nk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-web3-accent text-black rounded text-xs font-bold uppercase tracking-widest hover:bg-web3-accent/80 hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] transition-all"
              >
                Join VIP - 200 USDT
              </a>
              <a
                href="https://t.me/e2pdaoviptrail"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-transparent text-white border border-white/20 rounded text-xs font-bold uppercase tracking-widest hover:border-web3-accent hover:text-web3-accent transition-all"
              >
                Try Free Community
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
