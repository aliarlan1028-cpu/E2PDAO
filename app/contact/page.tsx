'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react'
import { budgetRanges, projectStages, serviceNeeds, targetMarkets } from '../siteData'

const initialForm = {
  project_name: '',
  website: '',
  x_url: '',
  telegram_url: '',
  contact_name: '',
  contact_telegram: '',
  contact_email: '',
  project_stage: 'Pre-TGE',
  project_category: '',
  token_status: '',
  launch_or_tge_date: '',
  target_markets: '',
  current_community_size: '',
  current_monthly_marketing_budget: '',
  campaign_budget_range: 'Not sure yet',
  main_goal: '',
  needed_services: '',
  expected_timeline: '',
  has_existing_kol_list: 'Not sure',
  has_existing_pr: 'Not sure',
  has_existing_exchange_contact: 'Not sure',
  biggest_challenge: '',
  notes: '',
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Project brief submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className="bg-paper">
      <section className="bg-ink pb-20 pt-36 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">Project intake</p>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.04] md:text-6xl">Tell us what you are trying to launch.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              Share your project stage, target market, current traction, budget range, and biggest challenge. E2P will recommend a practical campaign path.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://t.me/BitEsq" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center bg-mint px-6 font-semibold text-ink hover:bg-mintSoft">
                <MessageCircle className="mr-2 h-5 w-5" />
                Telegram @BitEsq
              </a>
              <a href="mailto:aliarlan1028@gmail.com" className="inline-flex min-h-12 items-center justify-center border border-white/15 px-6 font-semibold text-white hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Email E2P
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-3 text-sm text-stone-300 sm:grid-cols-2">
              {['Stage-aware campaign plan', 'KOL / PR / regional resources', 'Delivery proof and reporting', 'No guaranteed outcome claims'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-mint" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold">What happens next</h2>
            <div className="mt-6 space-y-4">
              {[
                ['01', 'E2P reviews your stage, market, and objective.'],
                ['02', 'We recommend a campaign structure and budget logic.'],
                ['03', 'You approve scope before execution starts.'],
                ['04', 'Delivery is tracked with proof and reporting.'],
              ].map(([num, text]) => (
                <div key={num} className="flex gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <span className="font-semibold text-mint">{num}</span>
                  <p className="text-stone-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="border border-ink/10 bg-white p-5 shadow-lift sm:p-8">
            {submitted ? (
              <div className="py-16 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-forest" />
                <h2 className="mt-5 text-3xl font-semibold text-ink">Project brief captured</h2>
                <p className="mx-auto mt-4 max-w-2xl leading-8 text-stone-600">
                  This frontend records the brief in the browser console. Please also contact E2P through Telegram or email so the team can follow up quickly.
                </p>
                <button onClick={() => { setFormData(initialForm); setSubmitted(false) }} className="mt-8 border border-ink/10 px-6 py-3 font-semibold text-ink hover:bg-mist">
                  Submit another brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <FormSection title="Project basics">
                  <Input label="Project Name" name="project_name" value={formData.project_name} onChange={handleChange} required />
                  <Input label="Website" name="website" value={formData.website} onChange={handleChange} placeholder="https://" />
                  <Input label="X URL" name="x_url" value={formData.x_url} onChange={handleChange} placeholder="https://x.com/..." />
                  <Input label="Telegram URL" name="telegram_url" value={formData.telegram_url} onChange={handleChange} placeholder="https://t.me/..." />
                  <Input label="Category" name="project_category" value={formData.project_category} onChange={handleChange} placeholder="DeFi, AI, GameFi, Infra..." />
                  <Input label="Token Status" name="token_status" value={formData.token_status} onChange={handleChange} placeholder="No token, points, TGE planned..." />
                </FormSection>

                <FormSection title="Contact">
                  <Input label="Contact Name" name="contact_name" value={formData.contact_name} onChange={handleChange} required />
                  <Input label="Telegram" name="contact_telegram" value={formData.contact_telegram} onChange={handleChange} placeholder="@username" required />
                  <Input label="Email" name="contact_email" type="email" value={formData.contact_email} onChange={handleChange} />
                </FormSection>

                <FormSection title="Campaign context">
                  <Select label="Project Stage" name="project_stage" value={formData.project_stage} onChange={handleChange} options={projectStages} />
                  <Input label="Launch or TGE Date" name="launch_or_tge_date" value={formData.launch_or_tge_date} onChange={handleChange} placeholder="YYYY-MM-DD or approximate" />
                  <Select label="Campaign Budget Range" name="campaign_budget_range" value={formData.campaign_budget_range} onChange={handleChange} options={budgetRanges} />
                  <Input label="Monthly Marketing Budget" name="current_monthly_marketing_budget" value={formData.current_monthly_marketing_budget} onChange={handleChange} placeholder="Example: 10,000 USDT" />
                  <Input label="Community Size" name="current_community_size" value={formData.current_community_size} onChange={handleChange} placeholder="Telegram, Discord, X followers..." />
                  <Input label="Expected Timeline" name="expected_timeline" value={formData.expected_timeline} onChange={handleChange} placeholder="2 weeks, 1 month, before TGE..." />
                </FormSection>

                <FormSection title="Targets and needs">
                  <Textarea label="Target Markets" name="target_markets" value={formData.target_markets} onChange={handleChange} placeholder={`Examples: ${targetMarkets.join(', ')}`} />
                  <Textarea label="Needed Services" name="needed_services" value={formData.needed_services} onChange={handleChange} placeholder={serviceNeeds.join(', ')} />
                  <Textarea label="Main Goal" name="main_goal" value={formData.main_goal} onChange={handleChange} placeholder="What should this campaign accomplish?" required />
                  <Textarea label="Biggest Challenge" name="biggest_challenge" value={formData.biggest_challenge} onChange={handleChange} placeholder="What is blocking growth or readiness today?" />
                </FormSection>

                <FormSection title="Existing resources">
                  <Select label="Existing KOL List" name="has_existing_kol_list" value={formData.has_existing_kol_list} onChange={handleChange} options={['Yes', 'No', 'Not sure']} />
                  <Select label="Existing PR" name="has_existing_pr" value={formData.has_existing_pr} onChange={handleChange} options={['Yes', 'No', 'Not sure']} />
                  <Select label="Exchange Contact" name="has_existing_exchange_contact" value={formData.has_existing_exchange_contact} onChange={handleChange} options={['Yes', 'No', 'Not sure']} />
                  <Textarea label="Notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Anything else E2P should know?" />
                </FormSection>

                <div className="bg-mist p-5 text-sm leading-6 text-stone-600">
                  E2P provides GTM planning, campaign execution, delivery reporting, and readiness support. We do not guarantee token price, exchange approval, CMC / CoinGecko approval, trading volume, ROI, or fundraising outcomes.
                </div>

                <button type="submit" className="inline-flex min-h-12 items-center justify-center bg-ink px-8 font-semibold text-white hover:bg-charcoal">
                  Submit Project Brief
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-5 border-b border-ink/10 pb-3 text-xl font-semibold text-ink">{title}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">{children}</div>
    </section>
  )
}

function Input({ label, name, value, onChange, type = 'text', placeholder, required = false }: {
  label: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">{label}{required ? ' *' : ''}</span>
      <input type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} className="mt-2 w-full border border-ink/10 bg-paper px-4 py-3 text-ink outline-none focus:border-forest" />
    </label>
  )
}

function Select({ label, name, value, onChange, options }: {
  label: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <select name={name} value={value} onChange={onChange} className="mt-2 w-full border border-ink/10 bg-paper px-4 py-3 text-ink outline-none focus:border-forest">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}

function Textarea({ label, name, value, onChange, placeholder, required = false }: {
  label: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block md:col-span-2">
      <span className="text-sm font-semibold text-ink">{label}{required ? ' *' : ''}</span>
      <textarea name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} rows={4} className="mt-2 w-full border border-ink/10 bg-paper px-4 py-3 text-ink outline-none focus:border-forest" />
    </label>
  )
}
