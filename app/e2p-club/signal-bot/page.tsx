'use client'

import Link from 'next/link'
import { ArrowRight, BarChart3, Bell, Bot, ShieldAlert, ShieldCheck } from 'lucide-react'

const capabilities = [
  'Technical indicator monitoring',
  'Market structure review',
  'Risk reminders and false-breakout warnings',
  'Funding, volatility, and sentiment context',
  'Signal notifications for Club members',
  'Educational explanations for trade setups',
]

export default function SignalBotPage() {
  return (
    <div className="pt-16 bg-white text-gray-900">
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">E2P Club Tool</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">E2P Signal Bot</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            Signal Bot is a Club-side market monitoring and education tool. It can help members observe market conditions, but it is not investment advice and does not guarantee trading results.
          </p>
          <a href="https://t.me/+RcB2FVha7bo4N2Nk" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors">
            Join E2P Club
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border border-gray-200 p-6">
            <Bot className="w-9 h-9 text-primary-600 mb-4" />
            <h2 className="text-xl font-bold text-gray-950">Market monitoring</h2>
            <p className="mt-3 text-gray-600">Tracks selected indicators and market context so members can review conditions more efficiently.</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <BarChart3 className="w-9 h-9 text-emerald-600 mb-4" />
            <h2 className="text-xl font-bold text-gray-950">Signal context</h2>
            <p className="mt-3 text-gray-600">Provides structured observations that members can compare with their own research and risk plan.</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <Bell className="w-9 h-9 text-amber-600 mb-4" />
            <h2 className="text-xl font-bold text-gray-950">Club notifications</h2>
            <p className="mt-3 text-gray-600">Shares selected alerts and explanations inside the E2P Club environment.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <ShieldCheck className="w-10 h-10 text-primary-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-950">Capabilities</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilities.map((item) => (
                <div key={item} className="rounded-lg border border-gray-200 bg-white p-4 text-gray-700">{item}</div>
              ))}
            </div>
          </div>
          <div>
            <ShieldAlert className="w-10 h-10 text-amber-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-950">Risk disclosure</h2>
            <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-900">
              Signal Bot outputs are informational and educational. They are not financial advice, not a trading instruction, and not a guarantee of accuracy, profit, stop-loss performance, or future market behavior.
            </div>
            <p className="mt-5 text-gray-600">
              Members should do their own research, understand leverage risk, and make independent decisions. Past market behavior does not predict future results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Use Signal Bot as a research aid, not a shortcut</h2>
          <p className="mt-4 text-lg text-gray-600">E2P Club members can review alerts alongside their own strategy, risk controls, and market research.</p>
          <Link href="/e2p-club" className="mt-8 inline-flex items-center rounded-lg border border-gray-300 px-8 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
            Back to E2P Club
          </Link>
        </div>
      </section>
    </div>
  )
}
