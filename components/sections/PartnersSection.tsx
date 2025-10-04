'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const PartnersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const exchanges = [
    { name: 'OKX', logo: '/OKX.png' },
    { name: 'Crypto.com', logo: '/crypto.com.png' },
    { name: 'Gate.io', logo: '/Gate.io.png' },
    { name: 'Bitget', logo: '/Bitget Logo.png' },
    { name: 'MEXC', logo: '/MEXC.png' },
    { name: 'Bingx', logo: '/Bingx.png' },
    { name: 'HTX', logo: '/HTX.png' },
    { name: 'Bybit', logo: '/Bybit.png' },
    { name: 'Kucoin', logo: '/Kucoin.png' },
    { name: 'Coinstore', logo: '/CoinStore.png' }
  ]

  const idoPlatforms = [
    { name: 'DAO Maker', logo: '/DAO Maker.png', description: 'Leading IDO platform' },
    { name: 'Seedify', logo: '/seedify.svg', description: 'Gaming-focused IDO' },
    { name: 'Poolz Finance', logo: '/Poolz Finance.png', description: 'DeFi IDO platform' },
    { name: 'BullPerks', logo: '/BullPerks.png', description: 'Multi-chain IDO' },
    { name: 'Kommunitas', logo: '/kommunitas.png', description: 'Community-driven IDO' }
  ]

  const vcs = [
    { name: 'Coresky', logo: '/Coresky.jpeg', description: 'Blockchain investment' },
    { name: 'Unicorne-Verse', logo: '/Unicorne-Verse.jpg', description: 'Web3 accelerator' },
    { name: 'MT Capital', logo: '/MT Capital.avif', description: 'Crypto VC fund' },
    { name: 'Mirana Ventures', logo: '/Mirana Ventures.png', description: 'Strategic investments' },
    { name: 'Snova Capital', logo: '/Snova Capital.png', description: 'Early-stage VC' }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with the industry's leading exchanges, IDO platforms, and venture capital firms 
            to provide comprehensive support for your project.
          </p>
        </motion.div>

        {/* Exchanges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Exchange Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {exchanges.map((exchange, index) => (
              <motion.div
                key={exchange.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 mb-3 mx-auto">
                  <img src={exchange.logo} alt={exchange.name} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-semibold text-gray-900">{exchange.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IDO Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            IDO Launchpads
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idoPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{platform.name}</h4>
                    <p className="text-sm text-gray-600">{platform.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* VCs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Venture Capital Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vcs.map((vc, index) => (
              <motion.div
                key={vc.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img src={vc.logo} alt={vc.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{vc.name}</h4>
                    <p className="text-sm text-gray-600">{vc.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to Partner with Us?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join our network of trusted partners and help accelerate the blockchain ecosystem.
            </p>
            <a
              href="https://t.me/BitEsq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-50 transition-colors btn-hover"
            >
              Contact Partnership Team
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection
