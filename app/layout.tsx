import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'E2P DAO - Blockchain Project Incubation & Investment Community',
  description: 'E2P DAO provides comprehensive blockchain project incubation services, KOL marketing, exchange listings, and investment opportunities through our E2P Club community.',
  keywords: 'blockchain, crypto, project incubation, KOL marketing, exchange listing, investment, E2P DAO, E2P Labs, E2P Club',
  authors: [{ name: 'E2P DAO Team' }],
  icons: {
    icon: '/E2PDAO/logo-e2p-dao-favicon.svg',
    shortcut: '/E2PDAO/logo-e2p-dao-favicon.svg',
    apple: '/E2PDAO/logo-e2p-dao-favicon.svg',
  },
  openGraph: {
    title: 'E2P DAO - Blockchain Project Incubation & Investment Community',
    description: 'Comprehensive blockchain project incubation services and investment opportunities',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E2P DAO - Blockchain Project Incubation & Investment Community',
    description: 'Comprehensive blockchain project incubation services and investment opportunities',
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
