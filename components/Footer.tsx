import Link from 'next/link'
import { Mail, Send, ArrowUpRight } from 'lucide-react'

const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    { name: 'E2P Labs', href: '/e2p-labs' },
    { name: 'Global KOL Marketing', href: '/e2p-labs#global-marketing' },
    { name: 'Media & PR Distribution', href: '/e2p-labs#global-marketing' },
    { name: 'Token Listing Accelerator', href: '/e2p-labs#listing' },
    { name: 'E2P Club', href: '/e2p-club' },
  ]

  const resourceLinks = [
    { name: 'Success Cases', href: '/success-cases' },
    { name: 'About E2P DAO', href: '/about' },
    { name: 'Project Recommendation', href: 'https://tekmrajjzl3.larksuite.com/share/base/form/shrusvRnucx6PXYKzsXtRC72nTI', external: true },
    { name: 'KOL Application', href: 'https://tekmrajjzl3.larksuite.com/share/base/form/shrus2nxIgRpMN9luP12gZUMN1b', external: true },
  ]

  return (
    <footer className="bg-slate-950 text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo-e2p-dao.svg" alt="E2P DAO" className="h-9 w-auto" />
              <span className="text-xl font-bold">E2P DAO</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
              A Web3 growth, listing, and investor network combining E2P Labs project services with
              E2P Club community activation.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://x.com/e2p_dao"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="E2P DAO on X"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/+RcB2FVha7bo4N2Nk"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="E2P DAO on Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="mailto:aliarlan1028@gmail.com"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Email E2P DAO"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    {link.name}
                    {link.external && <ArrowUpRight className="h-3.5 w-3.5" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold">Start with a focused proposal</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Tell us whether you need launch growth, global marketing, exchange listing, or investor
              community activation.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Get Proposal
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} E2P DAO. All rights reserved.</p>
          <p>For reference only, not investment advice.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
