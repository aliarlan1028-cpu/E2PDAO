'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sprout, Users, Megaphone, Rocket, Building, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react'

export default function E2PLabsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Sprout,
      title: 'Project Incubation',
      description: 'Helps teams and projects in business building, tokenomics and fundraising',
      features: [
        'Powerful Resources Network - Connecting with Top VCs and individual investors',
        'Business Model & Tokenomics - Help with the design of the project tokenomics',
        'Introductions - Introduce projects with market makers and security audit'
      ],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Users,
      title: 'Community Growth',
      description: 'Help projects establish and grow a strong community around the project',
      features: [
        'Campaigns - Use Web3.0 tools to boost community engagement',
        'Airdrop Events - Partner with E2P Club for airdrop events',
        'Community Managers - Recruit overseas community managers',
        'Bot Setup - Implement and manage Telegram bots',
        'AMAs/Binance Live/X Spaces - Engage the community with AMA sessions'
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Megaphone,
      title: 'KOL Marketing',
      description: 'E2P Labs managing a global network of 300 high-profile KOLs from 20+ Countries',
      features: [
        'Global KOL Network - 400+ KOLs from 20+ crypto-friendly countries',
        'Multi-Platform Campaigns - Meeting all types of KOL needs',
        'Influencer Partnerships - Strategic collaborations with top influencers'
      ],
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Rocket,
      title: 'IEO/IDO Holding',
      description: 'E2P Labs connects projects with multiple IEO/IDO platforms',
      features: [
        'Gate.io IEO - Average ATH ROI 20.3x',
        'Coinstore IEO - Subscription Rate 700%+',
        'BitMart IEO - Number of IEOs 67+',
        'DAO Maker IDO - Reducing token concentration',
        'Seedify IDO - Gaming-focused platform',
        'BullPerks IDO - Multi-chain support'
      ],
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: Building,
      title: 'CEX & CMC Listing',
      description: 'E2P Labs has deep cooperation and strong relationships with 10+ major exchanges',
      features: [
        'Exchange Listing - Team members have over 5 years of experience',
        'Quality Improvement - Help improve project quality to meet listing standards',
        'Network Support - Extensive network and resources guarantee responsive support',
        'CMC Listing - Familiar with application process and rules for listing projects'
      ],
      color: 'from-red-500 to-red-700'
    },
    {
      icon: TrendingUp,
      title: 'Market Making',
      description: 'E2P Labs partners with top market makers to provide advanced strategies',
      features: [
        'Tide Group - One-stop Web3 AI algorithm trading company',
        'ChainUp - Top blockchain technology solutions provider',
        'Flow Traders - Global leader in market making and proprietary trading'
      ],
      color: 'from-teal-500 to-teal-700'
    }
  ]

  const exchanges = [
    { name: 'OKX', logo: '/OKX.png' },
    { name: 'Crypto.com', logo: '/crypto.com.png' },
    { name: 'Bybit', logo: '/Bybit.png' },
    { name: 'Kucoin', logo: '/Kucoin.png' },
    { name: 'HTX', logo: '/HTX.png' },
    { name: 'Bitget', logo: '/Bitget Logo.png' },
    { name: 'Gate.io', logo: '/Gate.io.png' },
    { name: 'MEXC', logo: '/MEXC.png' },
    { name: 'Bingx', logo: '/Bingx.png' },
    { name: 'Coinstore', logo: '/CoinStore.png' }
  ]

  const successCases = [
    {
      project: 'CHAX',
      exchange: 'Gate.io',
      description: 'Provided listing consultation and successfully listed on Gate.io',
      link: 'https://www.coingecko.com/en/coins/chax'
    },
    {
      project: 'HIRO',
      exchange: 'Gate.io',
      description: 'Provided listing consultation and successfully listed on Gate.io',
      link: 'https://coinmarketcap.com/currencies/hiro/#Markets'
    },
    {
      project: 'Virtuals Protocol',
      exchange: 'CMC',
      description: 'Helped with verification of Circulating supply on CMC',
      link: 'https://coinmarketcap.com/currencies/virtual-protocol/'
    },
    {
      project: 'USBT',
      exchange: 'Gate.io',
      description: 'E2P DAO Assists $USBT in Successful Gate.io Listing',
      link: 'https://www.gate.io/zh/announcements/article/39267'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              E2P Labs
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">🌱</div>
                <div className="text-lg font-semibold text-gray-800">Incubation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💼</div>
                <div className="text-lg font-semibold text-gray-800">Listing Advisory</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-lg font-semibold text-gray-800">KOL Marketing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💹</div>
                <div className="text-lg font-semibold text-gray-800">Market Making</div>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              E2P Labs is a catalyst between Projects | VCs | KOLs | Users | Exchanges, 
              driving interaction and collaboration. We will assist you in successfully 
              launching and attracting investments in your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">400+</div>
              <div className="text-lg text-gray-600">High Quality KOLs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50M+</div>
              <div className="text-lg text-gray-600">Users Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-lg text-gray-600">Exchange Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E2P Labs Accelerates Your Progress
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We will assist you in successfully launching and attracting investments in your project.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exchanges We Can List Your Project
            </h2>
            <p className="text-xl text-gray-600">
              Our expertise ensures smooth project listings with our extensive network
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {exchanges.map((exchange, index) => (
              <motion.div
                key={exchange.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src={exchange.logo} 
                    alt={exchange.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900">{exchange.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Successful Cases
            </h2>
            <p className="text-xl text-gray-600">
              Real projects that achieved success with our support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={case_.project}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{case_.project}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {case_.exchange}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{case_.description}</p>
                <a
                  href={case_.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  View Details
                  <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Collaborate with E2P Labs
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              We are here to meet all your needs. Simply let us know what you require.
            </p>
            <a
              href="https://t.me/BitEsq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-50 transition-colors btn-hover font-semibold"
            >
              Contact TG: @BitEsq
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
