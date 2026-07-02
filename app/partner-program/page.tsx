'use client'

import { BadgeCheck, Briefcase, DollarSign, ShieldCheck, UsersRound } from 'lucide-react'
import { LightPanel, PageHero, PrimaryLink, SectionIntro } from '@/components/Marketing'
import { scoutFields, serviceNeeds } from '../siteData'

const partnerTypes = [
  'Web3 BD and ecosystem partners',
  'KOLs and community owners',
  'VC analysts and launchpad BD teams',
  'Exchange BD and market consultants',
  'PR, KOL, and regional agencies',
  'Web3 freelancers with project access',
]

export default function PartnerProgramPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Partner Program"
        title="Become an E2P Scout."
        body="Refer Web3 projects that need launch, KOL, PR, community, listing-readiness, or fundraising support. Earn commission when a referred project closes an eligible campaign with E2P."
        ctaLabel="Submit a Lead"
        ctaHref="https://tekmrajjzl3.larksuite.com/share/base/form/shrusvRnucx6PXYKzsXtRC72nTI"
        secondaryLabel="Talk to E2P"
        secondaryHref="/contact"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ['What is a Scout?', 'A trusted partner who introduces qualified Web3 project demand to E2P Labs.', UsersRound],
            ['Qualified referrals', 'Projects with real launch, growth, fundraising, listing-readiness, or regional expansion needs.', Briefcase],
            ['Commission principle', 'Commission is agreed case by case and paid after the referred project closes and pays.', DollarSign],
          ].map(([title, copy, Icon]) => (
            <LightPanel key={title as string} className="p-7">
              <Icon className="h-9 w-9 text-forest" />
              <h2 className="mt-5 text-2xl font-semibold text-ink">{title as string}</h2>
              <p className="mt-4 leading-8 text-stone-600">{copy as string}</p>
            </LightPanel>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionIntro
              eyebrow="Who should join"
              title="For people already close to project demand."
              body="The best Scouts have access to project teams, understand the project stage, and can introduce a reachable decision maker."
            />
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {partnerTypes.map((item) => (
                <LightPanel key={item} className="bg-paper p-4">
                  <p className="text-sm font-medium text-ink">{item}</p>
                </LightPanel>
              ))}
            </div>
          </div>
          <div>
            <SectionIntro
              eyebrow="Referable needs"
              title="What E2P can review."
              body="A referral can cover any GTM, campaign, readiness, or fundraising-support need listed below."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {serviceNeeds.map((item) => (
                <span key={item} className="border border-ink/10 bg-paper px-3 py-2 text-sm text-stone-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <BadgeCheck className="h-10 w-10 text-forest" />
            <SectionIntro
              eyebrow="Lead fields"
              title="Capture enough context to protect attribution."
              body="The lead form should make it clear who referred the project, who the project contact is, and what the need looks like."
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {scoutFields.map((field) => (
              <code key={field} className="border border-ink/10 bg-white px-4 py-3 text-sm text-stone-700">
                {field}
              </code>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="border border-white/10 bg-white/[0.04] p-8">
            <ShieldCheck className="h-10 w-10 text-mint" />
            <h2 className="mt-5 text-2xl font-semibold">Settlement rules</h2>
            <p className="mt-4 leading-8 text-stone-300">
              Attribution should be confirmed before E2P starts direct sales work. Commission terms, eligible services, payment timing, and dispute handling must be agreed in writing.
            </p>
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-8">
            <ShieldCheck className="h-10 w-10 text-signal" />
            <h2 className="mt-5 text-2xl font-semibold">Anti-abuse and compliance</h2>
            <p className="mt-4 leading-8 text-stone-300">
              No spam, fake leads, impersonation, unauthorized claims, guaranteed listing promises, or misleading statements about E2P, exchanges, CMC, CoinGecko, or partners.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Submit a lead"
            title="Have a qualified Web3 project lead?"
            body="Submit the project and E2P will review fit, campaign scope, and next steps."
            align="center"
          />
          <div className="mt-9">
            <PrimaryLink href="https://tekmrajjzl3.larksuite.com/share/base/form/shrusvRnucx6PXYKzsXtRC72nTI">Submit Lead Form</PrimaryLink>
          </div>
        </div>
      </section>
    </div>
  )
}
