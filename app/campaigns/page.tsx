'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { CalendarDays, CheckCircle2, CircleDollarSign, Megaphone, Plus, Send, Target, Users } from 'lucide-react'
import LocalDataNotice from '@/components/LocalDataNotice'
import { Campaign, makeId, readLocal, recordActivity, SEEDED_CAMPAIGNS, STORAGE_KEYS, writeLocal } from '@/lib/platform'

const emptyForm = { project: '', title: '', category: 'Token Launch', platforms: 'X / Twitter, Telegram', regions: 'Asia Pacific', budget: '', deadline: '', objective: '', deliverables: '' }

export default function CampaignsPage() {
  const [localCampaigns, setLocalCampaigns] = useState<Campaign[]>([])
  const [category, setCategory] = useState('All')
  const [form, setForm] = useState(emptyForm)
  const [showForm, setShowForm] = useState(false)
  const [applied, setApplied] = useState<string[]>([])

  useEffect(() => {
    setLocalCampaigns(readLocal<Campaign[]>(STORAGE_KEYS.campaigns, []))
    setApplied(readLocal<string[]>('e2p_campaign_applications_v1', []))
  }, [])

  const campaigns = useMemo(() => [...localCampaigns, ...SEEDED_CAMPAIGNS].filter(c => category === 'All' || c.category === category), [localCampaigns, category])

  const createCampaign = (event: FormEvent) => {
    event.preventDefault()
    const campaign: Campaign = { ...form, id: makeId('cmp'), platforms: form.platforms.split(',').map(v=>v.trim()).filter(Boolean), regions: form.regions.split(',').map(v=>v.trim()).filter(Boolean), status: 'Open', applicants: 0, createdAt: new Date().toISOString() }
    const next = [campaign, ...localCampaigns]; setLocalCampaigns(next); writeLocal(STORAGE_KEYS.campaigns, next)
    recordActivity({ type: 'Campaign', title: `${form.title} published`, detail: `${form.project} created a local campaign brief.`, points: 800 })
    setForm(emptyForm); setShowForm(false)
  }

  const apply = (campaign: Campaign) => {
    if (applied.includes(campaign.id)) return
    const next = [...applied, campaign.id]; setApplied(next); writeLocal('e2p_campaign_applications_v1', next)
    recordActivity({ type: 'Campaign application', title: `Applied to ${campaign.title}`, detail: `Local participation request for ${campaign.project}.`, points: 150 })
  }

  return (
    <div className="min-h-screen bg-web3-dark">
      <section className="border-b border-white/5 py-20 grid-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><div className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">Campaign Marketplace</div><h1 className="text-4xl font-bold text-white md:text-6xl">Brief. Match. <span className="text-web3-accent glow-text">Deliver.</span></h1><p className="mt-5 font-mono text-sm leading-7 text-gray-400">Projects publish structured growth opportunities. KOLs review goals, markets, deliverables and budgets before participating.</p></div><button onClick={()=>setShowForm(!showForm)} className="inline-flex items-center justify-center gap-2 rounded bg-web3-accent px-6 py-4 text-xs font-bold uppercase tracking-widest text-black"><Plus className="h-4 w-4" /> Create campaign</button></div>
        </div>
      </section>

      <section className="py-16"><div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <LocalDataNotice />
        {showForm && <form onSubmit={createCampaign} className="mt-6 grid gap-5 rounded-xl border border-web3-accent/20 bg-web3-card p-6 md:grid-cols-2 md:p-8">
          <Field label="Project"><input required className="input" value={form.project} onChange={e=>setForm({...form,project:e.target.value})}/></Field><Field label="Campaign title"><input required className="input" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/></Field>
          <Field label="Category"><select className="input" value={form.category} onChange={e=>setForm({...form,category:e.target.value})}><option>Token Launch</option><option>Community Growth</option><option>User Acquisition</option><option>Listing</option><option>Brand Awareness</option></select></Field><Field label="Budget"><input required className="input" placeholder="$10,000" value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}/></Field>
          <Field label="Platforms (comma-separated)"><input required className="input" value={form.platforms} onChange={e=>setForm({...form,platforms:e.target.value})}/></Field><Field label="Regions (comma-separated)"><input required className="input" value={form.regions} onChange={e=>setForm({...form,regions:e.target.value})}/></Field>
          <Field label="Deadline"><input required type="date" className="input" value={form.deadline} onChange={e=>setForm({...form,deadline:e.target.value})}/></Field><div />
          <Field label="Objective"><textarea required className="input min-h-28" value={form.objective} onChange={e=>setForm({...form,objective:e.target.value})}/></Field><Field label="Deliverables"><textarea required className="input min-h-28" value={form.deliverables} onChange={e=>setForm({...form,deliverables:e.target.value})}/></Field>
          <button className="rounded bg-web3-accent px-6 py-4 text-xs font-bold uppercase tracking-widest text-black md:col-span-2">Publish locally</button>
        </form>}

        <div className="mt-10 flex flex-wrap gap-2">{['All','Token Launch','Community Growth','User Acquisition','Listing','Brand Awareness'].map(value=><button key={value} onClick={()=>setCategory(value)} className={`rounded px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest ${category===value?'bg-web3-accent text-black':'border border-white/10 bg-web3-card text-gray-400'}`}>{value}</button>)}</div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">{campaigns.map(campaign => {
          const hasApplied = applied.includes(campaign.id)
          return <article key={campaign.id} className="rounded-xl border border-white/10 bg-web3-card p-6 md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3"><span className="rounded bg-web3-accent/10 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-web3-accent">{campaign.status}</span><span className="font-mono text-[10px] text-gray-500">{campaign.category}</span></div>
            <h2 className="mt-5 text-xl font-bold text-white">{campaign.title}</h2><p className="mt-1 font-mono text-xs text-web3-purple">{campaign.project}</p><p className="mt-5 font-mono text-xs leading-6 text-gray-400">{campaign.objective}</p>
            <div className="mt-5 grid grid-cols-2 gap-3"><Stat icon={CircleDollarSign} label="Budget" value={campaign.budget}/><Stat icon={CalendarDays} label="Deadline" value={campaign.deadline}/><Stat icon={Megaphone} label="Platforms" value={campaign.platforms.join(', ')}/><Stat icon={Users} label="Applicants" value={`${campaign.applicants + (hasApplied?1:0)}`}/></div>
            <div className="mt-5 rounded-lg border border-white/5 bg-black/30 p-4"><div className="font-mono text-[9px] font-bold uppercase tracking-widest text-gray-600">Deliverables</div><p className="mt-2 font-mono text-[11px] leading-5 text-gray-400">{campaign.deliverables}</p></div>
            <button onClick={()=>apply(campaign)} disabled={hasApplied} className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded px-5 py-3 text-xs font-bold uppercase tracking-widest ${hasApplied?'cursor-default border border-web3-accent/20 bg-web3-accent/5 text-web3-accent':'bg-web3-purple text-white'}`}>{hasApplied?<><CheckCircle2 className="h-4 w-4"/>Application saved</>:<>Apply as KOL <Send className="h-4 w-4"/></>}</button>
          </article>
        })}</div>
      </div></section>
    </div>
  )
}

function Field({label,children}:{label:string;children:React.ReactNode}){return <label><span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">{label}</span>{children}</label>}
function Stat({icon:Icon,label,value}:{icon:any;label:string;value:string}){return <div className="rounded-lg border border-white/5 bg-black/30 p-3"><div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-gray-600"><Icon className="h-3 w-3"/>{label}</div><div className="mt-2 truncate text-xs font-bold text-gray-300">{value}</div></div>}
