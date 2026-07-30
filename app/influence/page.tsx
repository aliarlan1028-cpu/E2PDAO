import type { Metadata } from 'next'
import { ArrowRight, BadgeCheck, BarChart3, CheckCircle2, Globe2, Languages, Megaphone, ShieldCheck, Users } from 'lucide-react'
import { E2P_LINKS } from '@/lib/e2p-links'

export const metadata: Metadata = { title: 'KOL & Ambassador Network | E2PDAO', description: 'Explore the E2PDAO creator network, cooperation formats and W3Claw-powered resource workflow.', alternates: { canonical: '/influence/' }, openGraph: { title: 'E2PDAO KOL & Ambassador Network', description: 'Creator assessment and cooperation across Web3 markets.', url: '/influence/' } }

const SNAPSHOT = [
  ['400+','KOL resources','Creator resource network'],
  ['4','Core channels','X, Telegram, YouTube, TikTok'],
  ['6','Market regions','APAC, Europe, LATAM, MENA, North America, CIS'],
  ['2','Creator roles','KOL and regional Ambassador'],
]

const SEGMENTS = [
  { title:'Channel', items:['X / Twitter','Telegram','YouTube','TikTok'] },
  { title:'Narrative', items:['Trading','DeFi','AI & Data','RWA','GameFi','Meme'] },
  { title:'Market', items:['Asia Pacific','Europe','Latin America','Middle East','North America','Russia & CIS'] },
  { title:'Content', items:['Post / Thread','Video review','AMA / Space','Ambassador activation'] },
]

const FORMATS = [
  ['Awareness Matrix','A coordinated mix of macro, mid-tier and micro creators for narrative visibility.'],
  ['Education Campaign','Long-form video, threads, AMA and community content for complex products.'],
  ['Regional Activation','Native-language creators and Ambassadors focused on one local market.'],
  ['Long-term Ambassador','Recurring content, community presence, feedback and relationship development.'],
]

const WORKFLOW = [
  ['01','Profile','Channels, audience, markets, content and cooperation preferences.'],
  ['02','Review','Identity, duplicate records, public signals and self-reported evidence.'],
  ['03','Match','Project narrative, target geography, audience fit and deliverable type.'],
  ['04','Brief','Content requirements, schedule, disclosure and acceptance criteria.'],
  ['05','Measure','Delivery evidence, reach, engagement and available conversion data.'],
]

export default function InfluencePage(){return <div className="min-h-screen bg-web3-dark">
  <section className="border-b border-white/5 py-20 grid-bg"><div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-4xl"><div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">KOL & Ambassador Network</div><h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">Distribution built around <span className="text-web3-accent glow-text">audience fit</span></h1><p className="mt-6 max-w-3xl font-mono text-sm leading-7 text-gray-400">E2PDAO structures creator resources by channel, language, region, narrative and cooperation history—so projects can build a deliberate KOL matrix instead of buying disconnected posts.</p></div></div></section>

  <section className="border-b border-white/5 bg-web3-card/30 py-12"><div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{SNAPSHOT.map(([value,label,detail])=><div key={label} className="rounded-xl border border-white/5 bg-web3-dark p-5"><div className="text-3xl font-bold text-white">{value}</div><div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">{label}</div><p className="mt-3 font-mono text-[9px] text-gray-600">{detail}</p></div>)}</div></div></section>

  <section className="border-b border-white/5 py-20"><div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><Globe2 className="h-7 w-7 text-web3-purple"/><h2 className="mt-5 text-3xl font-bold text-white">Resource matrix</h2><p className="mt-4 font-mono text-sm leading-7 text-gray-400">The network is useful when each creator can be located in a structured market map—not just a follower-count leaderboard.</p></div><div className="grid gap-4 sm:grid-cols-2">{SEGMENTS.map(segment=><div key={segment.title} className="rounded-xl border border-white/10 bg-web3-card p-6"><h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">{segment.title}</h3><div className="mt-4 flex flex-wrap gap-2">{segment.items.map(item=><span key={item} className="rounded border border-white/10 bg-black/30 px-3 py-2 font-mono text-[10px] text-gray-400">{item}</span>)}</div></div>)}</div></div></div></section>

  <section className="border-b border-white/5 bg-web3-card/30 py-20"><div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">Cooperation Products</div><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">More than one sponsored post</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{FORMATS.map(([title,text])=><div key={title} className="rounded-xl border border-white/10 bg-web3-dark p-6"><Megaphone className="h-5 w-5 text-web3-purple"/><h3 className="mt-5 text-lg font-bold text-white">{title}</h3><p className="mt-3 font-mono text-xs leading-6 text-gray-400">{text}</p></div>)}</div></div></section>

  <section className="border-b border-white/5 py-20"><div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]"><div><BadgeCheck className="h-7 w-7 text-web3-accent"/><h2 className="mt-5 text-3xl font-bold text-white">How creators are evaluated</h2><p className="mt-4 font-mono text-sm leading-7 text-gray-400">Reach is only one input. Review considers channel authenticity, content relevance, audience geography, delivery history and available performance evidence.</p><div className="mt-6 space-y-3">{['Follower count is never treated as proof of conversion','Self-reported results remain labeled until verified','Private contact details and rates are not published','Approved public profiles require Owner authorization'].map(item=><div key={item} className="flex gap-3 font-mono text-xs text-gray-300"><CheckCircle2 className="h-4 w-4 shrink-0 text-web3-accent"/>{item}</div>)}</div></div><div className="rounded-xl border border-white/10 bg-web3-card p-7"><div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">Campaign workflow</span><BarChart3 className="h-4 w-4 text-web3-purple"/></div><div className="mt-5 space-y-4">{WORKFLOW.map(([step,title,text])=><div key={step} className="flex gap-4"><span className="font-mono text-xs font-bold text-web3-accent">{step}</span><div><h3 className="text-sm font-bold text-white">{title}</h3><p className="mt-1 font-mono text-[10px] leading-5 text-gray-500">{text}</p></div></div>)}</div></div></div></div></section>

  <section className="py-20"><div className="container mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div className="rounded-2xl border border-web3-accent/20 bg-web3-accent/5 p-8"><Users className="h-7 w-7 text-web3-accent"/><h2 className="mt-5 text-2xl font-bold text-white">For KOLs</h2><p className="mt-4 font-mono text-xs leading-6 text-gray-400">Access structured briefs, project opportunities and a resource record that can support repeat cooperation.</p><a href={E2P_LINKS.kol('kol_network_bottom')} className="mt-7 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-web3-accent">Join the KOL network <ArrowRight className="h-4 w-4"/></a></div><div className="rounded-2xl border border-web3-purple/20 bg-web3-purple/5 p-8"><Languages className="h-7 w-7 text-web3-purple"/><h2 className="mt-5 text-2xl font-bold text-white">For Ambassadors</h2><p className="mt-4 font-mono text-xs leading-6 text-gray-400">Turn regional language, community and event capability into longer-term market cooperation.</p><a href={E2P_LINKS.ambassador('kol_network_bottom')} className="mt-7 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-web3-purple">Become an Ambassador <ArrowRight className="h-4 w-4"/></a></div></div><div className="container mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8"><div className="flex items-start gap-3 rounded-lg border border-white/5 bg-web3-card p-4"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gray-500"/><p className="font-mono text-[10px] leading-5 text-gray-600">Applications are privately reviewed in W3Claw and are not automatically published or guaranteed cooperation.</p></div></div></section>
</div>}
