'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sprout, Users, Megaphone, Rocket, Building, TrendingUp } from 'lucide-react'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const e2pLabsServices = [
    {
      icon: Sprout,
      title: 'Project Incubation',
      description: 'Comprehensive support from business model design to tokenomics and fundraising',
      features: ['Business Model & Tokenomics', 'VC Network Connection', 'Market Maker Introduction']
    },
    {
      icon: Users,
      title: 'Community Growth',
      description: 'Build and grow a strong community around your project',
      features: ['Web3 Campaigns', 'Airdrop Events', 'Community Management', 'AMA Sessions']
    },
    {
      icon: Megaphone,
      title: 'KOL Marketing',
      description: 'Leverage our global network of 400+ high-profile KOLs',
      features: ['Global KOL Network', 'Multi-Platform Campaigns', 'Influencer Partnerships']
    },
    {
      icon: Rocket,
      title: 'IEO/IDO Holding',
      description: 'Connect with multiple IEO/IDO platforms for successful fundraising',
      features: ['Gate.io IEO', 'DAO Maker IDO', 'Seedify IDO', 'BullPerks IDO']
    },
    {
      icon: Building,
      title: 'CEX & CMC Listing',
      description: 'Deep cooperation with 10+ major exchanges and CoinMarketCap',
      features: ['Exchange Listing', 'CMC Listing', 'Circulating Supply Updates']
    },
    {
      icon: TrendingUp,
      title: 'Market Making',
      description: 'Partner with top market makers for enhanced liquidity',
      features: ['Tide Group Partnership', 'ChainUp Solutions', 'Flow Traders']
    }
  ]

  const e2pClubBenefits = [
    {
      icon: '🪂',
      title: 'VIP Services',
      description: 'Free market analysis, trade signals, and financial education'
    },
    {
      icon: '🎟️',
      title: 'Lucky Draw',
      description: 'Rewards for community participation and engagement'
    },
    {
      icon: '💰',
      title: 'Recommendation Rewards',
      description: 'Earn up to 2,000 USDT commission from listing fees'
    },
    {
      icon: '🤝',
      title: 'Early Investment',
      description: 'Access to seed-round and IEO/IDO opportunities'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From project incubation to community building, we provide end-to-end solutions 
            for blockchain projects and investors.
          </p>
        </motion.div>

        {/* E2P Labs Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              E2P Labs - Project Incubation Services
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Accelerate your blockchain project from concept to market success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {e2pLabsServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                style={{ opacity: 1, transform: 'translateY(0px)' }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/e2p-labs"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors btn-hover"
            >
              Learn More About E2P Labs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* E2P Club Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              E2P Club - Investment Community
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our exclusive community of high-quality investors and traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {e2pClubBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/e2p-club"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-50 transition-colors btn-hover border-2 border-primary-600"
            >
              Join E2P Club
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection









