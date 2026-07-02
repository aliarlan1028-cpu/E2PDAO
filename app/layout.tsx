import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'E2P DAO - Web3 Growth, Listing & Investor Network',
  description: 'E2P DAO helps Web3 teams accelerate from incubation to global marketing, media exposure, community growth, exchange listing, and investor activation through E2P Labs and E2P Club.',
  keywords: 'web3 growth, crypto marketing, KOL marketing, media PR, exchange listing, project incubation, investor community, E2P DAO, E2P Labs, E2P Club',
  authors: [{ name: 'E2P DAO Team' }],
  icons: {
    icon: '/logo-e2p-dao-favicon.svg',
    shortcut: '/logo-e2p-dao-favicon.svg',
    apple: '/logo-e2p-dao-favicon.svg',
  },
  openGraph: {
    title: 'E2P DAO - Web3 Growth, Listing & Investor Network',
    description: 'One operating network for Web3 project growth, listing, media, KOL marketing, and investor community activation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E2P DAO - Web3 Growth, Listing & Investor Network',
    description: 'Growth, listing, marketing, and investor community infrastructure for Web3 teams.',
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
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
