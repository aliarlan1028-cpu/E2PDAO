'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react'

const projectStages = [
  'Idea / MVP',
  'Testnet',
  'Pre-TGE',
  'IDO / IEO',
  'Post-TGE',
  'CEX Listing Preparation',
  'Already Listed',
  'Regional Expansion',
  'Fundraising',
]

const budgetRanges = [
  '< 2,000 USDT',
  '2,000 - 5,000 USDT',
  '5,000 - 10,000 USDT',
  '10,000 - 25,000 USDT',
  '25,000 - 50,000 USDT',
  '50,000+ USDT',
  'Not sure yet',
]

const serviceNeeds = [
  'KOL Campaign',
  'PR / Media Publication',
  'Regional Market Entry',
  'Telegram / Community Growth',
  'AMA / X Space',
  'YouTube / Video Campaign',
  'Listing Readiness',
  'CMC / CoinGecko Support',
  'Market Maker Introduction',
  'VC / Fundraising Support',
  'KOL Round',
  'Not sure, need advice',
]

const targetMarkets = [
  'Chinese-speaking',
  'English-speaking',
  'Vietnam',
  'Japan',
  'Korea',
  'Indonesia',
  'Turkey',
  'Brazil / Portuguese',
  'MENA / Arabic',
  'Global',
]

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
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Project brief submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="pt-16 bg-white text-gray-900">
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">Project Intake</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">Submit Your Project Brief</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            Tell us your launch goal, stage, target markets, current traction, and budget range. E2P Labs will review your context and recommend a practical GTM campaign plan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="https://t.me/BitEsq" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors">
              <MessageCircle className="mr-2 w-5 h-5" />
              Telegram @BitEsq
            </a>
            <a href="mailto:aliarlan1028@gmail.com" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
              <Mail className="mr-2 w-5 h-5" />
              Email E2P
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="py-14 text-center">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-950">Project brief captured</h2>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                  This frontend currently records the brief in the browser console. Please also contact E2P through Telegram or email so the team can follow up quickly.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="https://t.me/BitEsq" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors">
                    Contact on Telegram
                  </a>
                  <button onClick={() => { setFormData(initialForm); setIsSubmitted(false) }} className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    Submit another brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <FormSection title="Project basics">
                  <Input label="Project Name" name="project_name" value={formData.project_name} onChange={handleChange} required />
                  <Input label="Website" name="website" value={formData.website} onChange={handleChange} placeholder="https://" />
                  <Input label="X URL" name="x_url" value={formData.x_url} onChange={handleChange} placeholder="https://x.com/..." />
                  <Input label="Telegram URL" name="telegram_url" value={formData.telegram_url} onChange={handleChange} placeholder="https://t.me/..." />
                  <Input label="Project Category" name="project_category" value={formData.project_category} onChange={handleChange} placeholder="DeFi, AI, GameFi, Infra..." />
                  <Input label="Token Status" name="token_status" value={formData.token_status} onChange={handleChange} placeholder="No token, testnet points, TGE planned..." />
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
                  <Input label="Current Monthly Marketing Budget" name="current_monthly_marketing_budget" value={formData.current_monthly_marketing_budget} onChange={handleChange} placeholder="Example: 10,000 USDT" />
                  <Input label="Current Community Size" name="current_community_size" value={formData.current_community_size} onChange={handleChange} placeholder="Telegram, Discord, X followers..." />
                  <Input label="Expected Timeline" name="expected_timeline" value={formData.expected_timeline} onChange={handleChange} placeholder="2 weeks, 1 month, before TGE..." />
                </FormSection>

                <FormSection title="Targets and needs">
                  <Textarea label="Target Markets" name="target_markets" value={formData.target_markets} onChange={handleChange} placeholder={`Examples: ${targetMarkets.join(', ')}`} />
                  <Textarea label="Needed Services" name="needed_services" value={formData.needed_services} onChange={handleChange} placeholder={serviceNeeds.join(', ')} />
                  <Textarea label="Main Goal" name="main_goal" value={formData.main_goal} onChange={handleChange} placeholder="What should this campaign accomplish?" required />
                  <Textarea label="Biggest Challenge" name="biggest_challenge" value={formData.biggest_challenge} onChange={handleChange} placeholder="What is blocking growth or listing readiness today?" />
                </FormSection>

                <FormSection title="Existing resources">
                  <Select label="Existing KOL List" name="has_existing_kol_list" value={formData.has_existing_kol_list} onChange={handleChange} options={['Yes', 'No', 'Not sure']} />
                  <Select label="Existing PR" name="has_existing_pr" value={formData.has_existing_pr} onChange={handleChange} options={['Yes', 'No', 'Not sure']} />
                  <Select label="Existing Exchange Contact" name="has_existing_exchange_contact" value={formData.has_existing_exchange_contact} onChange={handleChange} options={['Yes', 'No', 'Not sure']} />
                  <Textarea label="Notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Anything else E2P should know?" />
                </FormSection>

                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  E2P provides GTM planning, campaign execution, delivery reporting, and readiness support. We do not guarantee token price, exchange approval, CMC / CoinGecko approval, trading volume, ROI, or fundraising outcomes.
                </div>

                <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white hover:bg-primary-700 transition-colors">
                  Submit Project Brief
                  <Send className="ml-2 w-5 h-5" />
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
      <h2 className="text-xl font-bold text-gray-950 mb-5">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{children}</div>
    </section>
  )
}

function Input({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = false,
}: {
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
      <span className="text-sm font-semibold text-gray-700">{label}{required ? ' *' : ''}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
      />
    </label>
  )
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-gray-700">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block md:col-span-2">
      <span className="text-sm font-semibold text-gray-700">{label}{required ? ' *' : ''}</span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={4}
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
      />
    </label>
  )
}
