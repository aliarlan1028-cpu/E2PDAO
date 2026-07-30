'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { BadgeCheck, Filter, Megaphone, Search, Send, Users } from 'lucide-react'
import LocalDataNotice from '@/components/LocalDataNotice'
import { KolApplication, makeId, readLocal, recordActivity, SEEDED_KOLS, STORAGE_KEYS, writeLocal } from '@/lib/platform'

const emptyForm = { name: '', platform: 'X / Twitter', handle: '', language: 'English', region: 'Asia Pacific', followers: '', rate: '', category: 'DeFi' }

export default function InfluencePage() {
  const [stored, setStored] = useState<KolApplication[]>([])
  const [search, setSearch] = useState('')
  const [platform, setPlatform] = useState('All')
  const [region, setRegion] = useState('All')
  const [form, setForm] = useState(emptyForm)
  const [saved, setSaved] = useState(false)

  useEffect(() => setStored(readLocal<KolApplication[]>(STORAGE_KEYS.kols, [])), [])
  const kols = useMemo(() => [...SEEDED_KOLS, ...stored].filter(kol => {
    const query = `${kol.name} ${kol.handle} ${kol.category} ${kol.language}`.toLowerCase()
    return query.includes(search.toLowerCase()) && (platform === 'All' || kol.platform === platform) && (region === 'All' || kol.region === region)
  }), [stored, search, platform, region])

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const kol: KolApplication = { ...form, id: makeId('kol'), status: 'Pending verification', createdAt: new Date().toISOString() }
    const next = [kol, ...stored]
    setStored(next); writeLocal(STORAGE_KEYS.kols, next)
    recordActivity({ type: 'KOL', title: `${form.name} applied`, detail: 'KOL profile is awaiting manual E2P verification.', points: 300 })
    setSaved(true); setForm(emptyForm)
  }

  return (
    <div className="min-h-screen bg-web3-dark">
      <section className="border-b border-white/5 py-20 grid-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl"><div className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">E2P Influence // Powered by w3claw resources</div><h1 className="text-4xl font-bold text-white md:text-6xl">Find the right <span className="text-web3-accent glow-text">Web3 voices</span></h1><p className="mt-5 font-mono text-sm leading-7 text-gray-400">Discover creators by platform, market, language and narrative. Profiles shown in this MVP combine demonstration data with applications saved in your browser.</p></div>
            <a href="#kol-apply" className="inline-flex items-center justify-center gap-2 rounded bg-web3-accent px-6 py-4 text-xs font-bold uppercase tracking-widest text-black">Join as a KOL <Send className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-3 rounded-xl border border-white/10 bg-web3-card p-4 md:grid-cols-[1fr_220px_220px]">
            <label className="relative"><Search className="absolute left-4 top-3.5 h-4 w-4 text-gray-600" /><input value={search} onChange={e=>setSearch(e.target.value)} className="input pl-11" placeholder="Search name, niche or language" /></label>
            <select value={platform} onChange={e=>setPlatform(e.target.value)} className="input"><option>All</option><option>X / Twitter</option><option>Telegram</option><option>YouTube</option><option>Instagram</option></select>
            <select value={region} onChange={e=>setRegion(e.target.value)} className="input"><option>All</option><option>Global</option><option>Asia Pacific</option><option>Europe</option><option>North America</option><option>Latin America</option></select>
          </div>
          <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-gray-500"><span className="flex items-center gap-2"><Filter className="h-3 w-3" /> {kols.length} profiles</span><span>Manual verification layer</span></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {kols.map(kol => (
              <article key={kol.id} className="rounded-xl border border-white/5 bg-web3-card p-6 transition-colors hover:border-web3-accent/40">
                <div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-web3-accent/10 text-web3-accent"><Users className="h-5 w-5" /></div><span className={`rounded px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest ${kol.status === 'Verified' ? 'bg-web3-accent/10 text-web3-accent' : 'bg-yellow-400/10 text-yellow-300'}`}>{kol.status}</span></div>
                <h2 className="mt-5 flex items-center gap-2 text-xl font-bold text-white">{kol.name}{kol.status === 'Verified' && <BadgeCheck className="h-4 w-4 text-web3-accent" />}</h2><p className="mt-1 font-mono text-xs text-gray-500">{kol.handle}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 font-mono text-[10px]"><Metric label="Platform" value={kol.platform}/><Metric label="Audience" value={kol.followers}/><Metric label="Region" value={kol.region}/><Metric label="Language" value={kol.language}/></div>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4"><span className="rounded bg-web3-purple/10 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-web3-purple">{kol.category}</span><span className="text-sm font-bold text-white">{kol.rate}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kol-apply" className="border-t border-white/5 bg-web3-card/30 py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8"><div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-purple">Creator Onboarding</div><h2 className="mt-3 text-3xl font-bold text-white">Apply to the E2P KOL network</h2></div>
          <LocalDataNotice />
          {saved && <div className="mt-5 rounded-lg border border-web3-accent/20 bg-web3-accent/5 p-4 font-mono text-xs text-web3-accent">Application saved. The profile appears above as “Pending verification”.</div>}
          <form onSubmit={submit} className="mt-6 grid gap-5 rounded-xl border border-white/10 bg-web3-card p-6 md:grid-cols-2 md:p-8">
            <Field label="Display name"><input required className="input" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></Field><Field label="Handle / channel URL"><input required className="input" value={form.handle} onChange={e=>setForm({...form,handle:e.target.value})} /></Field>
            <Field label="Platform"><select className="input" value={form.platform} onChange={e=>setForm({...form,platform:e.target.value})}><option>X / Twitter</option><option>Telegram</option><option>YouTube</option><option>Instagram</option></select></Field><Field label="Followers"><input required className="input" placeholder="e.g. 85K" value={form.followers} onChange={e=>setForm({...form,followers:e.target.value})} /></Field>
            <Field label="Language"><input required className="input" value={form.language} onChange={e=>setForm({...form,language:e.target.value})} /></Field><Field label="Region"><select className="input" value={form.region} onChange={e=>setForm({...form,region:e.target.value})}><option>Asia Pacific</option><option>Europe</option><option>North America</option><option>Latin America</option><option>Middle East</option><option>Global</option></select></Field>
            <Field label="Primary niche"><select className="input" value={form.category} onChange={e=>setForm({...form,category:e.target.value})}><option>DeFi</option><option>Trading</option><option>AI & Data</option><option>RWA</option><option>GameFi</option><option>Meme</option></select></Field><Field label="Starting rate"><input required className="input" placeholder="e.g. From $500" value={form.rate} onChange={e=>setForm({...form,rate:e.target.value})} /></Field>
            <button className="inline-flex items-center justify-center gap-2 rounded bg-web3-purple px-6 py-4 text-xs font-bold uppercase tracking-widest text-white md:col-span-2">Save KOL application <Megaphone className="h-4 w-4" /></button>
          </form>
        </div>
      </section>
    </div>
  )
}

function Metric({label,value}:{label:string;value:string}){return <div className="rounded bg-black/30 p-3"><div className="text-gray-600">{label}</div><div className="mt-1 truncate font-bold text-gray-300">{value}</div></div>}
function Field({label,children}:{label:string;children:React.ReactNode}){return <label><span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">{label}</span>{children}</label>}
