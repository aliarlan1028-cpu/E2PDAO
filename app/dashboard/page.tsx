'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Activity, ArrowRight, CheckCircle2, CircleDollarSign, Download, FileJson, FolderKanban, Megaphone, Rocket, Trophy, Users } from 'lucide-react'
import LocalDataNotice from '@/components/LocalDataNotice'
import { ActivityRecord, Campaign, KolApplication, ProjectApplication, readLocal, recordActivity, STORAGE_KEYS, writeLocal } from '@/lib/platform'

const QUESTS = [
  { id: 'quest-research', title: 'Read the weekly market brief', reward: 50, type: 'Education' },
  { id: 'quest-project', title: 'Review a featured incubation project', reward: 100, type: 'Launch' },
  { id: 'quest-campaign', title: 'Explore an open KOL campaign', reward: 80, type: 'Influence' },
  { id: 'quest-risk', title: 'Complete the Trading Agent risk checklist', reward: 120, type: 'Trading' },
]

export default function DashboardPage() {
  const [projects, setProjects] = useState<ProjectApplication[]>([])
  const [kols, setKols] = useState<KolApplication[]>([])
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [activities, setActivities] = useState<ActivityRecord[]>([])
  const [points, setPoints] = useState(1250)
  const [completed, setCompleted] = useState<string[]>([])

  const refresh = () => {
    setProjects(readLocal(STORAGE_KEYS.projects, [])); setKols(readLocal(STORAGE_KEYS.kols, [])); setCampaigns(readLocal(STORAGE_KEYS.campaigns, [])); setActivities(readLocal(STORAGE_KEYS.activities, [])); setPoints(readLocal(STORAGE_KEYS.points, 1250)); setCompleted(readLocal('e2p_completed_quests_v1', []))
  }
  useEffect(refresh, [])

  const finishQuest = (quest: typeof QUESTS[number]) => {
    if (completed.includes(quest.id)) return
    writeLocal('e2p_completed_quests_v1', [...completed, quest.id])
    recordActivity({ type: 'Club quest', title: quest.title, detail: `${quest.type} community contribution completed.`, points: quest.reward })
    refresh()
  }

  const exportData = () => {
    const payload = { version: 1, exportedAt: new Date().toISOString(), projects, kols, campaigns, activities, points, completedQuests: completed }
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = `e2p-workspace-${new Date().toISOString().slice(0,10)}.json`; anchor.click(); URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-web3-dark py-14">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><div className="font-mono text-[10px] font-bold uppercase tracking-widest text-web3-accent">Local Workspace</div><h1 className="mt-3 text-4xl font-bold text-white">E2P Dashboard</h1><p className="mt-3 font-mono text-xs text-gray-400">One view for incubation, influence campaigns, creator applications and Club contribution.</p></div><button onClick={exportData} className="inline-flex items-center justify-center gap-2 rounded border border-web3-accent/40 px-5 py-3 text-xs font-bold uppercase tracking-widest text-web3-accent"><Download className="h-4 w-4"/>Export workspace</button></div>
        <div className="mt-8"><LocalDataNotice /></div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"><Metric icon={CircleDollarSign} value={points.toLocaleString()} label="$E2P Points" accent="text-web3-accent"/><Metric icon={Rocket} value={`${projects.length}`} label="Projects"/><Metric icon={Users} value={`${kols.length}`} label="KOL applications"/><Metric icon={Megaphone} value={`${campaigns.length}`} label="Campaigns"/><Metric icon={Activity} value={`${activities.length}`} label="Activities"/></div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-xl border border-white/10 bg-web3-card p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white"><FolderKanban className="h-4 w-4 text-web3-accent"/>Workspace records</h2><FileJson className="h-4 w-4 text-gray-600"/></div>
            <RecordGroup title="Project applications" empty="No project applications yet." link="/launch" linkText="Apply project">{projects.map(p=><Record key={p.id} title={p.name} meta={`${p.stage} · ${p.category} · ${p.budget}`} status={p.status}/>)}</RecordGroup>
            <RecordGroup title="KOL applications" empty="No KOL applications yet." link="/influence#kol-apply" linkText="Apply as KOL">{kols.map(k=><Record key={k.id} title={k.name} meta={`${k.platform} · ${k.followers} · ${k.region}`} status={k.status}/>)}</RecordGroup>
            <RecordGroup title="Created campaigns" empty="No local campaigns yet." link="/campaigns" linkText="Create campaign">{campaigns.map(c=><Record key={c.id} title={c.title} meta={`${c.project} · ${c.budget}`} status={c.status}/>)}</RecordGroup>
          </section>

          <section className="rounded-xl border border-white/10 bg-web3-card p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white"><Trophy className="h-4 w-4 text-web3-purple"/>E2P Club quests</h2><span className="font-mono text-[9px] uppercase tracking-widest text-gray-600">Proof of contribution</span></div>
            <div className="mt-5 space-y-3">{QUESTS.map(quest=>{const done=completed.includes(quest.id);return <div key={quest.id} className="rounded-lg border border-white/5 bg-black/30 p-4"><div className="flex items-start justify-between gap-4"><div><span className="font-mono text-[9px] font-bold uppercase tracking-widest text-web3-purple">{quest.type}</span><h3 className="mt-2 text-sm font-bold text-white">{quest.title}</h3></div><span className="shrink-0 font-mono text-[10px] font-bold text-web3-accent">+{quest.reward}</span></div><button onClick={()=>finishQuest(quest)} disabled={done} className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded py-2.5 text-[10px] font-bold uppercase tracking-widest ${done?'border border-web3-accent/20 bg-web3-accent/5 text-web3-accent':'bg-white/10 text-white hover:bg-white/15'}`}>{done?<><CheckCircle2 className="h-3 w-3"/>Completed</>:'Complete quest'}</button></div>})}</div>
          </section>
        </div>

        <section className="mt-8 rounded-xl border border-white/10 bg-web3-card p-6"><div className="flex items-center justify-between border-b border-white/10 pb-4"><h2 className="text-sm font-bold uppercase tracking-widest text-white">Activity log</h2><span className="font-mono text-[9px] uppercase tracking-widest text-gray-600">Latest first</span></div>{activities.length ? <div className="mt-4 divide-y divide-white/5">{activities.slice(0,10).map(item=><div key={item.id} className="flex items-start justify-between gap-4 py-4"><div><div className="font-mono text-[9px] font-bold uppercase tracking-widest text-web3-purple">{item.type}</div><div className="mt-1 text-sm font-bold text-white">{item.title}</div><div className="mt-1 font-mono text-[10px] text-gray-500">{item.detail}</div></div><span className="font-mono text-[10px] font-bold text-web3-accent">+{item.points}</span></div>)}</div>:<p className="py-8 text-center font-mono text-xs text-gray-600">Your local activity will appear here.</p>}</section>
      </div>
    </div>
  )
}

function Metric({icon:Icon,value,label,accent='text-white'}:{icon:any;value:string;label:string;accent?:string}){return <div className="rounded-xl border border-white/5 bg-web3-card p-5"><Icon className="h-4 w-4 text-gray-600"/><div className={`mt-4 text-2xl font-bold ${accent}`}>{value}</div><div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-gray-500">{label}</div></div>}
function RecordGroup({title,empty,link,linkText,children}:{title:string;empty:string;link:string;linkText:string;children:React.ReactNode}){const hasChildren=Array.isArray(children)?children.length>0:Boolean(children);return <div className="mt-6"><div className="mb-3 flex items-center justify-between"><h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">{title}</h3><Link href={link} className="flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-widest text-web3-accent">{linkText}<ArrowRight className="h-3 w-3"/></Link></div>{hasChildren?<div className="space-y-2">{children}</div>:<div className="rounded-lg border border-dashed border-white/10 p-5 text-center font-mono text-[10px] text-gray-600">{empty}</div>}</div>}
function Record({title,meta,status}:{title:string;meta:string;status:string}){return <div className="flex items-center justify-between gap-4 rounded-lg bg-black/30 p-3"><div className="min-w-0"><div className="truncate text-sm font-bold text-white">{title}</div><div className="mt-1 truncate font-mono text-[9px] text-gray-500">{meta}</div></div><span className="shrink-0 rounded bg-white/5 px-2 py-1 font-mono text-[9px] uppercase text-gray-400">{status}</span></div>}
