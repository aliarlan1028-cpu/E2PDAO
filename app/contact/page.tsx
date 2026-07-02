'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Mail,
  Megaphone,
  Send,
  Users,
  Building2,
  UserPlus,
} from 'lucide-react'

const requestTypes = [
  { id: 'growth', icon: Briefcase, title: 'Project growth', text: 'KOL, PR, community, advisory.' },
  { id: 'listing', icon: Building2, title: 'Listing acceleration', text: 'CEX, CMC, launchpad prep.' },
  { id: 'club', icon: Users, title: 'Join E2P Club', text: 'Signals, access, rewards.' },
  { id: 'kol', icon: Megaphone, title: 'KOL / media partner', text: 'Creators, media, agents.' },
]

const quickActions = [
  {
    title: 'Business inquiry',
    text: 'Fastest business route.',
    href: 'https://t.me/BitEsq',
    action: 'Message @BitEsq',
    icon: Send,
  },
  {
    title: 'Project recommendation',
    text: 'Earn referral rewards.',
    href: 'https://tekmrajjzl3.larksuite.com/share/base/form/shrusvRnucx6PXYKzsXtRC72nTI',
    action: 'Recommend project',
    icon: UserPlus,
  },
  {
    title: 'KOL application',
    text: 'Join the resource network.',
    href: 'https://tekmrajjzl3.larksuite.com/share/base/form/shrus2nxIgRpMN9luP12gZUMN1b',
    action: 'Apply as KOL',
    icon: Megaphone,
  },
]

export default function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedType, setSelectedType] = useState('growth')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    telegram: '',
    message: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Proposal request:', { selectedType, ...formData })
    setIsSubmitted(true)
  }

  return (
    <div className="bg-white pt-16">
      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-teal-300">Contact E2P DAO</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Start the right E2P path.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Growth proposal, listing support, Club access or partnership.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            {quickActions.map((action) => (
              <a
                key={action.title}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white">
                  <action.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">{action.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{action.text}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
                  {action.action}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-600">Get proposal</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
                Select your lane.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                For urgent discussions, Telegram is fastest.
              </p>

              <div className="mt-8 space-y-3">
                {requestTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full rounded-lg border p-4 text-left transition-colors ${
                      selectedType === type.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
                        <type.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-950">{type.title}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-600">{type.text}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55 }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              {isSubmitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <CheckCircle className="h-14 w-14 text-teal-600" />
                  <h3 className="mt-5 text-2xl font-bold text-slate-950">Request captured locally</h3>
                  <p className="mt-3 max-w-md leading-7 text-slate-600">
                    Static preview captured this locally. Telegram is fastest for response.
                  </p>
                  <a
                    href="https://t.me/BitEsq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white"
                  >
                    Message @BitEsq
                    <Send className="h-5 w-5" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">Name</span>
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">Email</span>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">Company / Project</span>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                        placeholder="Project name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">Telegram</span>
                      <input
                        name="telegram"
                        value={formData.telegram}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                        placeholder="@username"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">What do you need?</span>
                    <textarea
                      name="message"
                      required
                      rows={7}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                      placeholder="Stage, market, timeline, budget, outcome."
                    />
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                      <Mail className="h-4 w-4" />
                      aliarlan1028@gmail.com
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-700"
                    >
                      Submit request
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
