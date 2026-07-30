import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://e2pdao.xyz'),
  title: 'E2P DAO - Web3 Incubator, Labs & Trading Club',
  description: 'Token-powered incubator and trading club. E2P DAO leverages extensive networks, industry expertise, and deep exchange relationships to provide comprehensive support for projects.',
  keywords: 'web3 incubator, crypto KOL marketing, CEX listing, launchpad, trading community, alpha signals, E2P DAO, E2P Labs, E2P Club, $E2P point',
  authors: [{ name: 'E2P DAO Team' }],
  icons: {
    icon: '/e2p-icon-transparent.svg',
    shortcut: '/e2p-icon-transparent.svg',
    apple: '/e2p-icon-transparent.svg',
  },
  openGraph: {
    title: 'E2P DAO - Web3 Incubator, Labs & Trading Club',
    description: 'Data-driven Web3 incubator bridging Top Tier KOLs, tier-1 exchanges, and retail communities, powered by the $E2P ecosystem.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E2P DAO - Web3 Incubator, Labs & Trading Club',
    description: 'Data-driven Web3 incubator bridging Top Tier KOLs, tier-1 exchanges, and retail communities, powered by the $E2P ecosystem.',
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
      <body className="flex flex-col min-h-screen bg-web3-dark text-gray-200 overflow-x-hidden font-sans">
        <Navbar />
        <main className="flex-1 mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
