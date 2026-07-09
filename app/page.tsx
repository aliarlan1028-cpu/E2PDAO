import Link from 'next/link'
import { Send, UserPlus, Megaphone, Mail } from 'lucide-react'
import Hero from '@/components/Hero'

const TIMELINE = [
  { year: '2018', text: 'Bitget futures operations — exchange floor roots' },
  { year: '2020', text: 'Tron ecosystem DeFi operations' },
  { year: '2021', text: 'Gate.io KOL creator network built' },
  { year: '2022', text: 'E2P DAO founded — growth and listing network' },
  { year: 'NOW', text: 'Labs + Club dual-engine operating layer' },
]

const CONTACT_CHANNELS = [
  {
    icon: Send,
    title: 'Business Inquiry',
    desc: 'Fastest route for growth, listing and partnership discussions.',
    action: 'Message @BitEsq',
    href: 'https://t.me/BitEsq',
    accent: 'text-web3-accent',
    border: 'hover:border-web3-accent',
    iconBg: 'bg-web3-accent/10 text-web3-accent',
  },
  {
    icon: UserPlus,
    title: 'Recommend a Project',
    desc: 'Refer projects for CEX/CMC listing services and earn bounties.',
    action: 'Submit Recommendation',
    href: 'https://tekmrajjzl3.larksuite.com/share/base/form/shrusvRnucx6PXYKzsXtRC72nTI',
    accent: 'text-web3-purple',
    border: 'hover:border-web3-purple',
    iconBg: 'bg-web3-purple/10 text-web3-purple',
  },
  {
    icon: Megaphone,
    title: 'KOL Application',
    desc: 'Join the 400+ creator resource network across global markets.',
    action: 'Apply as KOL',
    href: 'https://tekmrajjzl3.larksuite.com/share/base/form/shrus2nxIgRpMN9luP12gZUMN1b',
    accent: 'text-white',
    border: 'hover:border-white',
    iconBg: 'bg-white/10 text-white',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="about" className="py-24 relative border-y border-white/5 bg-web3-card grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-web3-dark to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center relative z-10">
          <h2 className="text-[12px] font-bold text-web3-accent uppercase tracking-widest mb-4">Strategic Positioning</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            A Catalyst Between <br />
            <span className="text-web3-purple">Projects, VCs, KOLs, Users, & Exchanges</span>
          </h3>
          <p className="text-base text-gray-400 leading-relaxed font-mono max-w-3xl mx-auto">
            E2P DAO leverages extensive networks, industry expertise, and deep exchange relationships to provide comprehensive, one-stop support for projects. Our self-built trading community ensures real user growth and creates early investment opportunities.
          </p>
        </div>
      </section>

      {/* Quick links to sections for the homepage */}
      <section className="py-24 border-b border-white/5 bg-web3-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-2xl bg-web3-card hover:border-web3-accent transition-colors flex flex-col items-start group">
              <div className="w-12 h-12 bg-web3-accent/10 rounded-lg flex items-center justify-center mb-6 text-web3-accent">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">E2P Labs</h4>
              <p className="text-sm text-gray-400 mb-8 font-mono">Data-driven Web3 marketing, Top-tier KOL networks, and CEX Listing Advisory.</p>
              <Link href="/labs" className="mt-auto text-web3-accent font-mono text-sm group-hover:underline">Explore Labs &rarr;</Link>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-web3-card hover:border-web3-purple transition-colors flex flex-col items-start group">
              <div className="w-12 h-12 bg-web3-purple/10 rounded-lg flex items-center justify-center mb-6 text-web3-purple">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">E2P Club</h4>
              <p className="text-sm text-gray-400 mb-8 font-mono">Elite trading community, early Alpha access, and exclusive IDO allocations.</p>
              <Link href="/club" className="mt-auto text-web3-purple font-mono text-sm group-hover:underline">Join Club &rarr;</Link>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-web3-card hover:border-white transition-colors flex flex-col items-start group">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">$E2P Token</h4>
              <p className="text-sm text-gray-400 mb-8 font-mono">Governance, staking rewards, and ecosystem utility capturing value.</p>
              <Link href="/tokenomics" className="mt-auto text-white font-mono text-sm group-hover:underline">Tokenomics &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operator history */}
      <section className="py-24 border-b border-white/5 bg-web3-card grid-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-[12px] font-bold text-web3-accent uppercase tracking-widest mb-4">Operator History</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
            Exchange, DeFi & <span className="text-web3-accent glow-text">KOL Roots</span>
          </h3>
          <div className="bg-black/50 rounded-xl p-6 md:p-8 font-mono border border-web3-accent/20">
            <div className="mb-4 text-[10px] text-web3-accent opacity-50 uppercase tracking-widest">// Boot Sequence</div>
            <div className="space-y-4">
              {TIMELINE.map((item) => (
                <div key={item.year} className="flex items-start gap-4 text-xs md:text-sm">
                  <span className={`shrink-0 w-14 text-right font-bold ${item.year === 'NOW' ? 'text-web3-accent' : 'text-gray-500'}`}>{item.year}</span>
                  <span className="text-gray-600">&gt;</span>
                  <span className={item.year === 'NOW' ? 'text-white' : 'text-gray-400'}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-b border-white/5 bg-web3-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-[12px] font-bold text-web3-accent uppercase tracking-widest mb-4">Establish Connection</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Start the Right <span className="text-web3-purple">E2P Path</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {CONTACT_CHANNELS.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-8 border border-white/10 rounded-2xl bg-web3-card ${channel.border} transition-colors flex flex-col items-start group`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${channel.iconBg}`}>
                  <channel.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{channel.title}</h4>
                <p className="text-sm text-gray-400 mb-8 font-mono">{channel.desc}</p>
                <span className={`mt-auto font-mono text-sm ${channel.accent} group-hover:underline`}>{channel.action} &rarr;</span>
              </a>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-3 font-mono text-xs text-gray-500">
            <Mail className="w-4 h-4" />
            <a href="mailto:aliarlan1028@gmail.com" className="hover:text-white transition-colors">aliarlan1028@gmail.com</a>
          </div>
        </div>
      </section>
    </>
  )
}
