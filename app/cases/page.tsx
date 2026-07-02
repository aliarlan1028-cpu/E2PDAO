'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink, FileCheck2, ShieldAlert } from 'lucide-react'
import { Disclosure, LightPanel, PageHero, PrimaryLink, SectionIntro } from '@/components/Marketing'
import { proofCases } from '../siteData'

export default function CasesPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Case Studies"
        title="Proof-first case records for Web3 campaigns."
        body="E2P case studies are written around public links, screenshots, or client-approved proof. The language stays conservative by design."
        ctaLabel="Discuss Your Campaign"
        secondaryLabel="See Solutions"
        secondaryHref="/solutions"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Evidence records"
            title="Every case should answer: what was the problem, what did E2P do, and what can be checked?"
            body="We avoid private performance data, exaggerated causal claims, and implied exchange or ranking-platform guarantees."
          />

          <div className="mt-12 space-y-5">
            {proofCases.map((item) => (
              <LightPanel key={item.project} className="p-6 lg:p-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-forest">{item.stage}</p>
                    <h2 className="mt-3 text-3xl font-semibold text-ink">{item.project}</h2>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center font-semibold text-forest hover:text-ink">
                      {item.proof}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Info label="Problem" value={item.problem} />
                    <Info label="E2P Services" value={item.services} />
                    <Info label="Public Proof" value={item.proof} />
                    <Info label="Disclaimer" value="This case does not imply guaranteed listing approval, token performance, trading volume, ROI, or future platform acceptance." />
                  </div>
                </div>
              </LightPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <LightPanel className="p-8">
            <FileCheck2 className="h-10 w-10 text-forest" />
            <h2 className="mt-5 text-2xl font-semibold text-ink">What E2P can show</h2>
            <p className="mt-4 leading-8 text-stone-600">
              Public links, screenshots, media publications, community activity links, approved client quotes, and verifiable market-data pages.
            </p>
          </LightPanel>
          <LightPanel className="p-8">
            <ShieldAlert className="h-10 w-10 text-signal" />
            <h2 className="mt-5 text-2xl font-semibold text-ink">What E2P will not claim</h2>
            <p className="mt-4 leading-8 text-stone-600">
              Unverified ROI, private data, guaranteed listings, guaranteed trading volume, guaranteed investor conversion, or inflated causality.
            </p>
          </LightPanel>
        </div>
      </section>

      <section className="bg-mist py-24 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Campaign reporting"
            title="Need a campaign with delivery proof?"
            body="Submit your project brief and E2P will recommend a practical GTM campaign structure."
            align="center"
          />
          <div className="mt-9">
            <PrimaryLink href="/contact">Submit Project Brief</PrimaryLink>
          </div>
          <div className="mx-auto mt-7 max-w-3xl">
            <Disclosure />
          </div>
        </div>
      </section>
    </div>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper p-5">
      <p className="text-sm font-semibold text-ink">{label}</p>
      <p className="mt-2 leading-7 text-stone-600">{value}</p>
    </div>
  )
}
