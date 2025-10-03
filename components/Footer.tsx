import Link from 'next/link'
import { MessageCircle, Mail, ExternalLink } from 'lucide-react'

// X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

// TG (Telegram) Icon Component
const TGIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.87 1.19-5.28 3.5-.5.35-.95.52-1.35.51-.45-.01-1.31-.25-1.95-.46-.79-.26-1.42-.4-1.37-.85.03-.22.4-.44 1.1-.67 4.33-1.88 7.22-3.12 8.66-3.68 4.05-1.6 4.89-1.88 5.44-1.89.12 0 .38.03.55.17.14.11.18.26.2.36.01.06.01.24 0 .37z"/>
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'E2P Labs', href: '/e2p-labs' },
      { name: 'E2P Club', href: '/e2p-club' },
      { name: 'E2P Signal Bot', href: '/e2p-signal-bot' },
    ],
    community: [
      { name: 'Telegram', href: 'https://t.me/+RcB2FVha7bo4N2Nk', external: true },
      { name: 'X', href: 'https://x.com/e2p_dao', external: true },
      { name: 'TaskOn', href: 'https://taskon.xyz/E2P_DAO', external: true },
      { name: 'CoinMarketCap', href: 'https://coinmarketcap.com/currencies/e2p-token/', external: true },
    ],
    resources: [
      { name: 'Business Inquiry', href: 'https://t.me/BitEsq', external: true },
      { name: 'Project Recommendation', href: 'https://tekmrajjzl3.larksuite.com/share/base/form/shrusvRnucx6PXYKzsXtRC72nTI', external: true },
      { name: 'KOL Application', href: 'https://tekmrajjzl3.larksuite.com/share/base/form/shrus2nxIgRpMN9luP12gZUMN1b', external: true },
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <img src="/E2PDAO/logo-e2p-dao.svg" alt="E2P DAO" className="w-8 h-8 flex-shrink-0" />
              <span className="text-xl font-bold">E2P DAO</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              E2P DAO leverages its extensive network of resources to provide comprehensive, 
              one-stop support for blockchain project teams. From incubation to listing, 
              we accelerate your success in the crypto ecosystem.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/e2p_dao"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/+RcB2FVha7bo4N2Nk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <TGIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:aliarlan1028@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community and Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    {link.name === 'X' && <XIcon className="w-4 h-4" />}
                    {link.name === 'Telegram' && <TGIcon className="w-4 h-4" />}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} E2P DAO. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
