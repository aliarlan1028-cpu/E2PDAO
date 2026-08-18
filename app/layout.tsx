import type { Metadata } from 'next'
import './globals.css'
import './concept.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://e2pdao.xyz'),
  title: 'E2P DAO — Incubate. Influence. Trade Smarter.',
  description: 'E2P DAO connects project incubation and listing support, a two-sided KOL marketplace, and a token-based trading community powered by a risk-controlled AI Trading Agent.',
  keywords: 'web3 incubator, crypto KOL marketplace, CEX listing support, listing BD, token-based community, AI trading agent, E2P DAO, E2P Club, E2P Token',
  authors: [{ name: 'E2P DAO Team' }],
  icons: {
    icon: '/e2p-icon-transparent.svg',
    shortcut: '/e2p-icon-transparent.svg',
    apple: '/e2p-icon-transparent.svg',
  },
  openGraph: {
    title: 'E2P DAO — Incubate. Influence. Trade Smarter.',
    description: 'One network connecting project incubation, KOL distribution and a token-based trading community.',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: '/og.png',
      width: 1731,
      height: 909,
      alt: 'E2P DAO — Incubate. Influence. Trade smarter.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E2P DAO — Incubate. Influence. Trade Smarter.',
    description: 'One network connecting project incubation, KOL distribution and a token-based trading community.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="e2p-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
