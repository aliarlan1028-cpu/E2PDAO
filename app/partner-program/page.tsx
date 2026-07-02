'use client'

import Link from 'next/link'
import { ArrowRight, BadgeCheck, Briefcase, DollarSign, ShieldCheck, UsersRound } from 'lucide-react'

const fit = [
  'Web3 BD and ecosystem partners',
  'KOLs and community owners',
  'VC analysts and launchpad BD teams',
  'Exchange BD and market consultants',
  'PR, KOL, and regional agencies',
  'Web3 freelancers with project access',
]

const needs = [
  'Launch & TGE campaign',
  'KOL campaign',
  'PR / media publication',
  'Regional market entry',
  'Community growth or AMA',
  'Listing readiness',
  'CMC / CoinGecko support',
  'Market maker introduction',
  'VC / fundraising support',
  'KOL round support',
]

const fields = [
  'scout_name',
  'telegram',
  'email',
  'referred_project_name',
  'project_website',
  'project_x_url',
  'project_telegram',
  'contact_person',
  'project_stage',
  'expected_need',
  'estimated_budget',
  'expected_launch_date',
  'notes',
]

export default function PartnerProgramPage() {
  return (
    <div className="pt-16 bg-white text-gray-900">
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">Partner Program</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">Become an E2P Scout</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            Refer Web3 projects that need launch, KOL, PR, community, listing-readiness, or fundraising support. Earn commission when your referred project closes a campaign with E2P.
          </p>
          <a href="https://tekmrajjzl3.larksuite.com/share/base/form/shrusvRnucx6PXYKzsXtRC72nTI" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors">
            Submit a Lead
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border border-gray-200 p-6">
            <UsersRound className="w-9 h-9 text-primary-600 mb-4" />
            <h2 className="text-xl font-bold text-gray-950">What is an E2P Scout?</h2>
            <p className="mt-3 text-gray-600">A trusted partner who introduces qualified Web3 project demand to E2P Labs and helps both sides start the conversation efficiently.</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <Briefcase className="w-9 h-9 text-emerald-600 mb-4" />
            <h2 className="text-xl font-bold text-gray-950">Qualified referrals</h2>
            <p className="mt-3 text-gray-600">Projects with a real launch, growth, fundraising, listing-readiness, or regional expansion need and a reachable decision maker.</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <DollarSign className="w-9 h-9 text-amber-600 mb-4" />
            <h2 className="text-xl font-bold text-gray-950">Commission principle</h2>
            <p className="mt-3 text-gray-600">Commission is discussed case by case and paid only after the referred project closes and pays for an eligible E2P campaign.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-950">Who should join</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fit.map((item) => (
                <div key={item} className="rounded-lg bg-white border border-gray-200 p-4 text-gray-700">{item}</div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-950">Referral needs E2P can review</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {needs.map((item) => (
                <div key={item} className="rounded-lg bg-white border border-gray-200 p-4 text-gray-700">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
            <div>
              <BadgeCheck className="w-10 h-10 text-primary-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-950">Lead submission fields</h2>
              <p className="mt-4 text-gray-600">The Scout form should capture enough context for E2P to qualify demand, contact the project, and protect attribution.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fields.map((field) => (
                <code key={field} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">{field}</code>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg bg-white border border-primary-100 p-6">
            <ShieldCheck className="w-9 h-9 text-primary-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-950">Settlement rules</h2>
            <p className="mt-3 text-gray-600">Attribution should be confirmed before E2P starts direct sales work. Commission terms, eligible services, payment timing, and dispute handling must be agreed in writing.</p>
          </div>
          <div className="rounded-lg bg-white border border-primary-100 p-6">
            <ShieldCheck className="w-9 h-9 text-amber-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-950">Anti-abuse and compliance</h2>
            <p className="mt-3 text-gray-600">No spam, fake leads, impersonation, unauthorized claims, guaranteed listing promises, or misleading statements about E2P, exchanges, CMC, CoinGecko, or partners.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Have a qualified project lead?</h2>
          <p className="mt-4 text-lg text-gray-600">Submit the project and E2P will review fit, campaign scope, and next steps.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://tekmrajjzl3.larksuite.com/share/base/form/shrusvRnucx6PXYKzsXtRC72nTI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white hover:bg-primary-700 transition-colors">
              Submit Lead Form
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-8 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
              Talk to E2P
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
