'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink, FileCheck2, ShieldAlert } from 'lucide-react'

const cases = [
  {
    project: 'USBT',
    stage: 'Gate.io listing communication',
    problem: 'The project needed public communication support around a listing milestone.',
    goal: 'Make the public proof easy for users, partners, and internal teams to verify.',
    services: 'Listing-readiness communication support, announcement tracking, and public proof organization.',
    execution: 'E2P coordinated around public announcement materials and captured the external listing announcement as a proof point.',
    proof: 'Gate.io announcement',
    link: 'https://www.gate.io/zh/announcements/article/39267',
    result: 'A public exchange announcement can be referenced by partners and community members.',
  },
  {
    project: 'Virtuals Protocol',
    stage: 'CMC data preparation support',
    problem: 'The project required support around market-data preparation and public reference materials.',
    goal: 'Support a clearer public market-data profile through documentation coordination.',
    services: 'Circulating supply verification support and market-data documentation coordination.',
    execution: 'E2P supported preparation workflows and tracked the resulting public CoinMarketCap reference page.',
    proof: 'CoinMarketCap page',
    link: 'https://coinmarketcap.com/currencies/virtual-protocol/',
    result: 'A public market-data page is available for verification.',
  },
  {
    project: 'CHAX',
    stage: 'Market visibility and listing-readiness support',
    problem: 'The project needed stronger public visibility and verifiable market references.',
    goal: 'Support listing-readiness conversations with public proof and market visibility.',
    services: 'Listing consultation, public reference tracking, and readiness support.',
    execution: 'E2P supported consultation and organized public proof around market-data visibility.',
    proof: 'CoinGecko page',
    link: 'https://www.coingecko.com/en/coins/chax',
    result: 'A public CoinGecko reference page is available.',
  },
  {
    project: 'HIRO',
    stage: 'Market page proof tracking',
    problem: 'The project needed public market proof to support partner and community communication.',
    goal: 'Make market availability easier to verify through public links.',
    services: 'Listing-readiness consultation and public proof tracking.',
    execution: 'E2P organized public market reference links for communication and follow-up.',
    proof: 'CoinMarketCap markets page',
    link: 'https://coinmarketcap.com/currencies/hiro/#Markets',
    result: 'A public market reference is available for review.',
  },
]

export default function CasesPage() {
  return (
    <div className="pt-16 bg-white text-gray-900">
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">Case Studies</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">Public Proof, Conservative Claims</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            E2P case studies are written around verifiable public links, screenshots, or client-approved material. We avoid private data, exaggerated ROI claims, and implied guarantees.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {cases.map((caseItem) => (
            <article key={caseItem.project} className="rounded-lg border border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold text-primary-700">{caseItem.stage}</p>
                  <h2 className="mt-2 text-3xl font-bold text-gray-950">{caseItem.project}</h2>
                </div>
                <a href={caseItem.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {caseItem.proof}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <Info label="Problem" value={caseItem.problem} />
                <Info label="Goal" value={caseItem.goal} />
                <Info label="E2P Services" value={caseItem.services} />
                <Info label="Execution Summary" value={caseItem.execution} />
                <Info label="Public Proof" value={caseItem.proof} />
                <Info label="Result" value={caseItem.result} />
              </div>

              <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                Disclaimer: This case does not imply guaranteed listing approval, token performance, trading volume, ROI, or future platform acceptance.
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg border border-gray-200 p-6">
            <FileCheck2 className="w-9 h-9 text-primary-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-950">What E2P can show</h2>
            <p className="mt-3 text-gray-600">Public links, screenshots, media publications, community activity links, approved client quotes, and verifiable market-data pages.</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <ShieldAlert className="w-9 h-9 text-amber-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-950">What E2P will not claim</h2>
            <p className="mt-3 text-gray-600">Unverified ROI, private data, inflated causal claims, guaranteed listings, guaranteed trading volume, or guaranteed investor conversion.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Want a campaign with trackable delivery?</h2>
          <p className="mt-4 text-lg text-gray-600">Submit your project brief and E2P will recommend a practical GTM campaign plan.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white hover:bg-primary-700 transition-colors">
            Submit Project Brief
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-gray-50 border border-gray-100 p-4">
      <p className="text-sm font-bold text-gray-950">{label}</p>
      <p className="mt-2 text-gray-600">{value}</p>
    </div>
  )
}
