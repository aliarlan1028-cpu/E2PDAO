import { ArrowRight, Building2, Megaphone, Rocket, Users } from 'lucide-react'
import { E2P_LINKS } from '@/lib/e2p-links'

const CARDS = [
  { title: 'Join as a KOL', text: 'Submit your channels, audience, regions, content focus and cooperation preferences for review.', icon: Megaphone, href: E2P_LINKS.kol, accent: 'text-web3-accent', border: 'hover:border-web3-accent/50' },
  { title: 'Become an Ambassador', text: 'Apply with your local market, language, community and regional activation capabilities.', icon: Users, href: E2P_LINKS.ambassador, accent: 'text-web3-purple', border: 'hover:border-web3-purple/50' },
  { title: 'Project & Listing Support', text: 'Share your project stage, target exchanges, budget and timeline for structured evaluation.', icon: Rocket, href: E2P_LINKS.project, accent: 'text-web3-accent', border: 'hover:border-web3-accent/50' },
  { title: 'Become a Partner', text: 'For exchanges, market makers, media, VCs, launchpads, incubators and service providers.', icon: Building2, href: E2P_LINKS.partner, accent: 'text-web3-purple', border: 'hover:border-web3-purple/50' },
]

export default function PartnershipCards({ source = 'partnership_cards' }: { source?: string }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {CARDS.map(card => (
        <a key={card.title} href={card.href(source)} className={`group flex flex-col rounded-xl border border-white/10 bg-web3-card p-6 transition-colors ${card.border}`}>
          <card.icon className={`h-6 w-6 ${card.accent}`} />
          <h3 className="mt-5 text-lg font-bold text-white">{card.title}</h3>
          <p className="mt-3 flex-1 font-mono text-xs leading-6 text-gray-400">{card.text}</p>
          <span className={`mt-6 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest ${card.accent}`}>Start application <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></span>
        </a>
      ))}
    </div>
  )
}
