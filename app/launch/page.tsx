'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronRight, ClipboardCheck, Rocket, Send } from 'lucide-react'
import LocalDataNotice from '@/components/LocalDataNotice'
import { makeId, ProjectApplication, readLocal, recordActivity, STORAGE_KEYS, writeLocal } from '@/lib/platform'

const STAGES = [
  ['01', 'Diagnose', 'Project application, readiness score and growth bottleneck review.'],
  ['02', 'Architect', 'Positioning, tokenomics, launch strategy and operating roadmap.'],
  ['03', 'Activate', 'Brand narrative, community foundation and KOL campaign preparation.'],
  ['04', 'Launch', 'Campaign execution, IDO/IEO coordination and TGE support.'],
  ['05', 'List', 'Exchange readiness, liquidity planning and market-entry coordination.'],
  ['06', 'Scale', 'Post-launch growth, retention, reporting and ambassador programs.'],
]

const PACKAGES = [
  { name: 'Launch Ready', tag: 'Foundation', items: ['Project diagnosis', 'Positioning & narrative', 'Tokenomics review', 'Fundraising materials'] },
  { name: 'Growth Ready', tag: 'Acquisition', items: ['KOL matrix planning', 'Campaign brief', 'Community activation', 'ROI reporting framework'] },
  { name: 'Exchange Ready', tag: 'Market Entry', items: ['Listing readiness', 'Liquidity planning', 'Exchange coordination', 'TGE execution checklist'] },
]

const initialForm = { name: '', website: '', stage: 'Pre-seed', category: 'DeFi', budget: '$5K–$20K', goals: '', contact: '' }

export default function LaunchPage() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const project: ProjectApplication = { ...form, id: makeId('project'), status: 'Submitted', createdAt: new Date().toISOString() }
    writeLocal(STORAGE_KEYS.projects, [project, ...readLocal<ProjectApplication[]>(STORAGE_KEYS.projects, [])])
    recordActivity({ type: 'Project', title: `${form.name} submitted`, detail: 'Incubation application added to the local workspace.', points: 500 })
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div className="min-h-screen bg-web3-dark">
      <section className="border-b border-white/5 py-20 grid-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">E2P Launch // Incubation Operating System</div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">From idea to <span className="text-web3-accent glow-text">market readiness</span></h1>
            <p className="mt-6 max-w-2xl font-mono text-sm leading-7 text-gray-400">A structured incubation path connecting product strategy, KOL growth, community activation, launchpads, exchanges and liquidity partners.</p>
            <a href="#apply" className="mt-8 inline-flex items-center gap-2 rounded bg-web3-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-black">Apply for incubation <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Six-stage launch pipeline</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STAGES.map(([step, title, text]) => (
              <div key={step} className="rounded-xl border border-white/5 bg-web3-card p-6">
                <div className="mb-5 flex items-center justify-between"><span className="font-mono text-xs font-bold text-web3-accent">{step}</span><ChevronRight className="h-4 w-4 text-gray-600" /></div>
                <h3 className="text-lg font-bold text-white">{title}</h3><p className="mt-3 font-mono text-xs leading-6 text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-web3-card/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pack) => (
              <div key={pack.name} className="rounded-xl border border-white/10 bg-web3-dark p-7">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-web3-purple">{pack.tag}</span>
                <h3 className="mt-3 text-2xl font-bold text-white">{pack.name}</h3>
                <div className="mt-6 space-y-3">{pack.items.map(item => <div key={item} className="flex gap-3 font-mono text-xs text-gray-400"><CheckCircle2 className="h-4 w-4 shrink-0 text-web3-accent" />{item}</div>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8"><h2 className="text-3xl font-bold text-white">Project application</h2><p className="mt-3 font-mono text-xs text-gray-400">Create a local incubation brief, then export it from your dashboard or send the summary to E2P.</p></div>
          <LocalDataNotice />
          {submitted ? (
            <div className="mt-6 rounded-xl border border-web3-accent/30 bg-web3-accent/5 p-8 text-center">
              <ClipboardCheck className="mx-auto h-10 w-10 text-web3-accent" /><h3 className="mt-4 text-xl font-bold text-white">Application saved</h3><p className="mt-2 font-mono text-xs text-gray-400">Your project is now available in the local E2P dashboard.</p>
              <div className="mt-6 flex justify-center gap-4"><Link href="/dashboard" className="rounded bg-web3-accent px-5 py-3 text-xs font-bold uppercase tracking-widest text-black">Open dashboard</Link><button onClick={() => setSubmitted(false)} className="rounded border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white">Add another</button></div>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-6 grid gap-5 rounded-xl border border-white/10 bg-web3-card p-6 md:grid-cols-2 md:p-8">
              <Field label="Project name"><input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} className="input" placeholder="Project name" /></Field>
              <Field label="Website"><input value={form.website} onChange={e => setForm({...form, website:e.target.value})} className="input" placeholder="https://" /></Field>
              <Field label="Stage"><select value={form.stage} onChange={e => setForm({...form, stage:e.target.value})} className="input"><option>Idea</option><option>Pre-seed</option><option>Seed</option><option>Private round</option><option>Pre-TGE</option><option>Listed</option></select></Field>
              <Field label="Category"><select value={form.category} onChange={e => setForm({...form, category:e.target.value})} className="input"><option>DeFi</option><option>AI & Data</option><option>RWA</option><option>GameFi</option><option>Infrastructure</option><option>Meme</option><option>Other</option></select></Field>
              <Field label="Growth budget"><select value={form.budget} onChange={e => setForm({...form, budget:e.target.value})} className="input"><option>Under $5K</option><option>$5K–$20K</option><option>$20K–$50K</option><option>$50K–$100K</option><option>$100K+</option></select></Field>
              <Field label="Telegram / email"><input required value={form.contact} onChange={e => setForm({...form, contact:e.target.value})} className="input" placeholder="@handle or email" /></Field>
              <div className="md:col-span-2"><Field label="Primary goals"><textarea required value={form.goals} onChange={e => setForm({...form, goals:e.target.value})} className="input min-h-32" placeholder="Tell us what you are launching, your timeline and the outcomes you need." /></Field></div>
              <button className="inline-flex items-center justify-center gap-2 rounded bg-web3-accent px-6 py-4 text-xs font-bold uppercase tracking-widest text-black md:col-span-2">Save application <Send className="h-4 w-4" /></button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

function Field({label, children}:{label:string; children:React.ReactNode}) {
  return <label className="block"><span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">{label}</span>{children}</label>
}
