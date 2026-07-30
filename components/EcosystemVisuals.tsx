import { Bot, Coins, FlaskConical, Megaphone, Users } from 'lucide-react'

export function Sparkline({ color = '#00FF66', values = [18, 26, 22, 39, 34, 52, 47, 68] }: { color?: string; values?: number[] }) {
  const width = 180
  const height = 52
  const max = Math.max(...values)
  const min = Math.min(...values)
  const points = values.map((value, index) => `${(index / (values.length - 1)) * width},${height - ((value - min) / Math.max(max - min, 1)) * (height - 8) - 4}`).join(' ')
  const lastPoint = points.split(' ')[points.split(' ').length - 1].split(',')[1]
  return <svg viewBox={`0 0 ${width} ${height}`} className="h-14 w-full" aria-hidden="true"><defs><linearGradient id={`area-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={color} stopOpacity=".32"/><stop offset="1" stopColor={color} stopOpacity="0"/></linearGradient></defs><polygon points={`0,${height} ${points} ${width},${height}`} fill={`url(#area-${color.replace('#','')})`}/><polyline points={points} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke"/><circle cx={width} cy={lastPoint} r="3" fill={color}/></svg>
}

export function RingChart({ value, label, color = '#00FF66', size = 'md' }: { value: number; label: string; color?: string; size?: 'sm'|'md'|'lg' }) {
  const circumference = 2 * Math.PI * 42
  const dimensions = size === 'lg' ? 'h-44 w-44' : size === 'sm' ? 'h-24 w-24' : 'h-32 w-32'
  return <div className={`relative ${dimensions}`}><svg viewBox="0 0 100 100" className="h-full w-full -rotate-90"><circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="7"/><circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" strokeDasharray={`${circumference * value / 100} ${circumference}`} className="drop-shadow-[0_0_5px_currentColor]"/></svg><div className="absolute inset-0 flex flex-col items-center justify-center"><strong className="text-2xl text-white">{value}%</strong><span className="mt-1 text-center font-mono text-[8px] uppercase tracking-widest text-gray-500">{label}</span></div></div>
}

const ORBIT_NODES = [
  { icon: FlaskConical, label: 'Incubator', position: 'left-1/2 top-0 -translate-x-1/2', color: 'text-web3-accent' },
  { icon: Megaphone, label: 'KOLs', position: 'right-0 top-1/2 -translate-y-1/2', color: 'text-web3-purple' },
  { icon: Users, label: 'Club', position: 'bottom-0 left-1/2 -translate-x-1/2', color: 'text-web3-purple' },
  { icon: Bot, label: 'AI Agent', position: 'left-0 top-1/2 -translate-y-1/2', color: 'text-web3-accent' },
]

export function EcosystemOrbit() {
  return <div className="relative mx-auto h-80 w-80 sm:h-96 sm:w-96"><div className="absolute inset-12 rounded-full border border-web3-accent/20 animate-[spin_28s_linear_infinite]"/><div className="absolute inset-24 rounded-full border border-dashed border-web3-purple/25 animate-[spin_22s_linear_infinite_reverse]"/><div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,255,102,.09),transparent_60%)]"/><div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-black/80 shadow-[0_0_40px_rgba(0,255,102,.15)]"><Coins className="h-7 w-7 text-white"/><strong className="mt-2 text-lg text-white">$E2P</strong><span className="font-mono text-[7px] uppercase tracking-[.25em] text-web3-accent">Value Layer</span></div>{ORBIT_NODES.map(node=><div key={node.label} className={`absolute ${node.position} flex h-20 w-20 flex-col items-center justify-center rounded-xl border border-white/10 bg-web3-card/95 shadow-xl`}><node.icon className={`h-5 w-5 ${node.color}`}/><span className="mt-2 font-mono text-[8px] font-bold uppercase tracking-widest text-gray-300">{node.label}</span></div>)}</div>
}

export function BarDistribution({ items }: { items: Array<{ label: string; value: number; color?: string }> }) {
  return <div className="space-y-4">{items.map(item=><div key={item.label}><div className="mb-2 flex justify-between font-mono text-[9px] uppercase tracking-widest"><span className="text-gray-400">{item.label}</span><span className="text-white">{item.value}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full" style={{width:`${item.value}%`,background:item.color||'#00FF66',boxShadow:`0 0 10px ${item.color||'#00FF66'}55`}}/></div></div>)}</div>
}

export function AgentTerminal() {
  const rows = [['Market Observer','SCANNING','#00FF66'],['Strategy Engine','ANALYZING','#8A2BE2'],['Risk Officer','ARMED','#00FF66'],['Order Executor','STANDBY','#f3f4f6'],['Position Monitor','ACTIVE','#00FF66']]
  return <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07090c] shadow-2xl"><div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-400/70"/><span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70"/><span className="h-2.5 w-2.5 rounded-full bg-web3-accent/70"/></div><span className="font-mono text-[8px] uppercase tracking-[.25em] text-gray-600">E2P Agent Terminal</span></div><div className="p-5"><div className="mb-5 grid grid-cols-3 gap-3">{[['BTC/USDT','$—'],['Risk Mode','HARD'],['Mandate','SIGNED']].map(([label,value])=><div key={label} className="rounded-lg border border-white/5 bg-white/[.025] p-3"><span className="block font-mono text-[7px] uppercase tracking-widest text-gray-600">{label}</span><strong className="mt-1 block text-xs text-white">{value}</strong></div>)}</div><div className="space-y-2">{rows.map(([name,status,color])=><div key={name} className="flex items-center justify-between rounded border border-white/5 bg-white/[.02] px-3 py-2.5"><span className="font-mono text-[9px] text-gray-400">{name}</span><span className="flex items-center gap-2 font-mono text-[8px] font-bold" style={{color}}><i className="h-1.5 w-1.5 animate-pulse rounded-full" style={{background:color}}/>{status}</span></div>)}</div><div className="mt-5"><Sparkline values={[24,28,22,35,31,44,40,51,48,63]} /></div></div></div>
}
