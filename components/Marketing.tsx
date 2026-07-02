import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { HTMLAttributes, ReactNode } from 'react'

export function PageHero({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref = '/contact',
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow: string
  title: string
  body: string
  ctaLabel?: string
  ctaHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 opacity-45">
        <img src="/hero-growth-command.png" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#07100d_0%,rgba(7,16,13,0.94)_45%,rgba(7,16,13,0.6)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-4xl">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.04] tracking-normal md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">{body}</p>
          {(ctaLabel || secondaryLabel) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {ctaLabel && <PrimaryLink href={ctaHref}>{ctaLabel}</PrimaryLink>}
              {secondaryLabel && secondaryHref && <SecondaryLink href={secondaryHref}>{secondaryLabel}</SecondaryLink>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function Eyebrow({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${tone === 'dark' ? 'text-mint' : 'text-forest'}`}>
      {children}
    </p>
  )
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = 'left',
  tone = 'light',
}: {
  eyebrow: string
  title: string
  body?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-balance text-3xl font-semibold leading-tight tracking-normal md:text-5xl ${tone === 'dark' ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {body && <p className={`mt-5 text-lg leading-8 ${tone === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>{body}</p>}
    </div>
  )
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex min-h-12 items-center justify-center bg-mint px-6 font-semibold text-ink transition-colors hover:bg-mintSoft">
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  )
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex min-h-12 items-center justify-center border border-white/20 px-6 font-semibold text-white transition-colors hover:bg-white/10">
      {children}
    </Link>
  )
}

export function DarkPanel({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className={`border border-white/10 bg-white/[0.04] ${className}`} {...props}>{children}</div>
}

export function LightPanel({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className={`border border-ink/10 bg-white ${className}`} {...props}>{children}</div>
}

export function Disclosure() {
  return (
    <p className="text-sm leading-6 text-stone-500">
      E2P provides campaign execution and readiness support. We do not guarantee token price, exchange approval, CMC / CoinGecko approval, trading volume, ROI, or fundraising outcomes.
    </p>
  )
}
