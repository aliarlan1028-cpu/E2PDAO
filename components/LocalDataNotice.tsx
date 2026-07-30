import { Database, Download } from 'lucide-react'

export default function LocalDataNotice() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-web3-accent/20 bg-web3-accent/5 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <Database className="mt-0.5 h-4 w-4 shrink-0 text-web3-accent" />
        <p className="font-mono text-[11px] leading-5 text-gray-400">
          Serverless MVP mode: data created here is saved only in this browser. Use the dashboard export to hand records to the E2P operations team.
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-widest text-web3-accent">
        <Download className="h-3 w-3" /> Local-first
      </div>
    </div>
  )
}
