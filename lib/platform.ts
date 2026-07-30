export type ProjectApplication = {
  id: string
  name: string
  website: string
  stage: string
  category: string
  budget: string
  goals: string
  contact: string
  status: 'Submitted' | 'Reviewing' | 'Approved'
  createdAt: string
}

export type KolApplication = {
  id: string
  name: string
  platform: string
  handle: string
  language: string
  region: string
  followers: string
  rate: string
  category: string
  status: 'Pending verification' | 'Verified'
  createdAt: string
}

export type Campaign = {
  id: string
  project: string
  title: string
  category: string
  platforms: string[]
  regions: string[]
  budget: string
  deadline: string
  objective: string
  deliverables: string
  status: 'Draft' | 'Open' | 'In delivery' | 'Completed'
  applicants: number
  createdAt: string
}

export type ActivityRecord = {
  id: string
  type: string
  title: string
  detail: string
  points: number
  createdAt: string
}

export const STORAGE_KEYS = {
  projects: 'e2p_projects_v1',
  kols: 'e2p_kols_v1',
  campaigns: 'e2p_campaigns_v1',
  activities: 'e2p_activities_v1',
  points: 'e2p_points_v1',
}

export const SEEDED_KOLS: KolApplication[] = [
  { id: 'kol-001', name: 'Alpha Chain', platform: 'X / Twitter', handle: '@alphachain', language: 'English', region: 'North America', followers: '186K', rate: 'From $1,200', category: 'DeFi', status: 'Verified', createdAt: '2026-07-01' },
  { id: 'kol-002', name: 'Web3 Mandarin', platform: 'Telegram', handle: '@web3mandarin', language: 'Chinese', region: 'Asia Pacific', followers: '92K', rate: 'From $650', category: 'Trading', status: 'Verified', createdAt: '2026-07-02' },
  { id: 'kol-003', name: 'RWA Research', platform: 'YouTube', handle: '@rwaresearch', language: 'English', region: 'Europe', followers: '74K', rate: 'From $900', category: 'RWA', status: 'Verified', createdAt: '2026-07-03' },
  { id: 'kol-004', name: 'Meme Radar', platform: 'X / Twitter', handle: '@memeradar', language: 'English', region: 'Global', followers: '248K', rate: 'From $1,800', category: 'Meme', status: 'Verified', createdAt: '2026-07-04' },
  { id: 'kol-005', name: 'DeFi Vietnam', platform: 'Telegram', handle: '@defivietnam', language: 'Vietnamese', region: 'Asia Pacific', followers: '51K', rate: 'From $380', category: 'DeFi', status: 'Verified', createdAt: '2026-07-05' },
  { id: 'kol-006', name: 'Onchain Scout', platform: 'YouTube', handle: '@onchainscout', language: 'Spanish', region: 'Latin America', followers: '119K', rate: 'From $1,100', category: 'AI & Data', status: 'Verified', createdAt: '2026-07-06' },
]

export const SEEDED_CAMPAIGNS: Campaign[] = [
  { id: 'cmp-001', project: 'Nova Protocol', title: 'TGE Awareness Matrix', category: 'Token Launch', platforms: ['X / Twitter', 'Telegram'], regions: ['Asia Pacific', 'Europe'], budget: '$12,000', deadline: '2026-09-15', objective: 'Build qualified awareness before TGE and convert users into the official community.', deliverables: '12 X posts, 6 threads, 8 Telegram posts and 2 AMAs', status: 'Open', applicants: 18, createdAt: '2026-07-21' },
  { id: 'cmp-002', project: 'Orbit RWA', title: 'RWA Education Campaign', category: 'Community Growth', platforms: ['YouTube', 'X / Twitter'], regions: ['North America', 'Europe'], budget: '$8,500', deadline: '2026-09-30', objective: 'Educate retail users on tokenized real-world assets.', deliverables: '4 long-form videos, 10 educational posts and tracked referral links', status: 'Open', applicants: 9, createdAt: '2026-07-23' },
  { id: 'cmp-003', project: 'MemeForge', title: 'Community Activation Sprint', category: 'User Acquisition', platforms: ['X / Twitter', 'Telegram'], regions: ['Global'], budget: '$5,000', deadline: '2026-08-28', objective: 'Activate community participation around product beta.', deliverables: '20 micro-KOL posts, 1 Space and community quest amplification', status: 'Open', applicants: 31, createdAt: '2026-07-25' },
]

export function readLocal<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export function writeLocal<T>(key: string, value: T) {
  if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(value))
}

export function makeId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
}

export function recordActivity(activity: Omit<ActivityRecord, 'id' | 'createdAt'>) {
  const current = readLocal<ActivityRecord[]>(STORAGE_KEYS.activities, [])
  const next = [{ ...activity, id: makeId('act'), createdAt: new Date().toISOString() }, ...current]
  writeLocal(STORAGE_KEYS.activities, next)
  const points = readLocal<number>(STORAGE_KEYS.points, 1250)
  writeLocal(STORAGE_KEYS.points, points + activity.points)
}
