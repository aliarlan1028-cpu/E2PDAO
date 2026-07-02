import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://e2pdao.xyz'),
  title: 'E2P Labs - Web3 Launch-to-Listing Growth Partner',
  description: 'E2P Labs helps Web3 projects prepare launch campaigns, activate KOL and PR resources, build investor communities, enter regional markets, and improve listing readiness.',
  keywords: 'Web3 growth, launch campaign, TGE marketing, KOL campaign, PR campaign, regional market entry, listing readiness, E2P Labs, E2P Club',
  authors: [{ name: 'E2P DAO Team' }],
  icons: {
    icon: '/logo-e2p-dao-favicon.svg',
    shortcut: '/logo-e2p-dao-favicon.svg',
    apple: '/logo-e2p-dao-favicon.svg',
  },
  openGraph: {
    title: 'E2P Labs - Web3 Launch-to-Listing Growth Partner',
    description: 'Web3 GTM campaigns, KOL and PR activation, regional market entry, community activation, and listing-readiness support.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E2P Labs - Web3 Launch-to-Listing Growth Partner',
    description: 'Web3 GTM campaigns, KOL and PR activation, regional market entry, community activation, and listing-readiness support.',
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
