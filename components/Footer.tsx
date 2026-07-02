import Link from 'next/link'
import { Mail, Send } from 'lucide-react'
import { navItems } from '@/app/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo-e2p-dao.svg" alt="E2P Labs" className="h-8 w-auto" />
              <span className="text-xl font-semibold">E2P Labs</span>
            </Link>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              Web3 launch, KOL, PR, regional market entry, community activation, and listing-readiness campaigns built for transparent delivery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-mint px-6 font-semibold text-ink hover:bg-mintSoft">
                Submit Project Brief
              </Link>
              <a href="https://t.me/BitEsq" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-white/15 px-6 font-semibold text-white hover:bg-white/10">
                <Send className="mr-2 h-4 w-4" />
                Telegram
              </a>
              <a href="mailto:aliarlan1028@gmail.com" className="inline-flex min-h-12 items-center justify-center border border-white/15 px-6 font-semibold text-white hover:bg-white/10">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">Navigate</h2>
              <ul className="mt-5 space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-stone-400 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">External</h2>
              <ul className="mt-5 space-y-3">
                <li><a href="https://x.com/e2p_dao" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white">X</a></li>
                <li><a href="https://t.me/+RcB2FVha7bo4N2Nk" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white">Telegram</a></li>
                <li><a href="https://taskon.xyz/E2P_DAO" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white">TaskOn</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">Forms</h2>
              <ul className="mt-5 space-y-3">
                <li><Link href="/contact" className="text-stone-400 hover:text-white">Project Intake</Link></li>
                <li><a href="https://tekmrajjzl3.larksuite.com/share/base/form/shrusvRnucx6PXYKzsXtRC72nTI" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white">Scout Lead</a></li>
                <li><a href="https://tekmrajjzl3.larksuite.com/share/base/form/shrus2nxIgRpMN9luP12gZUMN1b" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white">KOL Apply</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-stone-500">
          <p>© {year} E2P Labs. Campaign execution and readiness support only. No listing, price, ROI, volume, or fundraising guarantees.</p>
        </div>
      </div>
    </footer>
  )
}
