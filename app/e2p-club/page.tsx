'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Users, TrendingUp, Target, Gift, DollarSign, Star, ExternalLink } from 'lucide-react'

export default function E2PClubPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const vipServices = [
    {
      icon: '📊',
      title: 'Market Analysis',
      description: 'Professional market insights and trend analysis'
    },
    {
      icon: '🗓️',
      title: 'Economic Calendar',
      description: 'Important events and market-moving announcements'
    },
    {
      icon: '🔄',
      title: 'Copy Trade',
      description: 'Follow successful traders and strategies'
    },
    {
      icon: '📈',
      title: 'Trading Signals',
      description: 'High-quality trading signals and recommendations'
    },
    {
      icon: '📚',
      title: 'Financial Education',
      description: 'Learn from experts and improve your skills'
    },
    {
      icon: '🔍',
      title: 'Undervalued Token Alerts',
      description: 'Early identification of promising projects'
    }
  ]

  const luckyDraws = [
    {
      icon: '✍️',
      title: 'CHAT to Lucky Draw',
      description: 'We reward users who actively participate in community discussions',
      requirements: [
        'Points Each Speech: 1 Point',
        'Eligibility: Users with ≥ 300 Points',
        'Lucky Draw: Weekly'
      ]
    },
    {
      icon: '👥',
      title: 'INVITE to Lucky Draw',
      description: 'We reward users who contributing for community growth',
      requirements: [
        'Eligibility: Users with ≥ 20 Invites',
        'Lucky Draw: Weekly'
      ]
    },
    {
      icon: '📈',
      title: 'QUIZ to Lucky Draw',
      description: 'We reward users who contributing for best understanding of the group rules',
      requirements: [
        'Eligibility: Users who sending correct answer to all questions',
        'Lucky Draw: Weekly'
      ]
    }
  ]

  const earningTasks = [
    {
      task: 'Join E2P DAO VIP Group',
      reward: '100,000 $E2P'
    },
    {
      task: 'Invite Users to E2P DAO VIP Group',
      reward: '100,000 $E2P Per User'
    },
    {
      task: 'Register OKX by Ref Link and Trade',
      reward: '25,000 $E2P for every $5,000 volume'
    },
    {
      task: 'Recommend Projects for Cooperation',
      reward: '10,000 $E2P Per Project'
    },
    {
      task: 'Increase Engagement of Social Media',
      reward: '500 $E2P Per Time'
    }
  ]


  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              E2P Club
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              📈 E2P Club is an investor base primarily designed to empower E2P Labs.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <h3 className="font-semibold text-gray-900 mb-2">KNOWING RISKS</h3>
                  <p className="text-gray-600 text-sm">Understanding market dynamics</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⬇️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">MINIMIZING RISKS</h3>
                  <p className="text-gray-600 text-sm">Risk management strategies</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h3 className="font-semibold text-gray-900 mb-2">MAXIMIZING RETURNS</h3>
                  <p className="text-gray-600 text-sm">Optimizing investment outcomes</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <p className="text-gray-700 italic">
                  "Risk comes from not knowing what you're doing." - Warren Buffett
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIP Services */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              👑 E2P Club Members Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              🪂 We offer comprehensive services to meet the needs of various types of investors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              💎 VIP Services
            </h3>
            <p className="text-center text-gray-600 mb-12">
              We provide our community members with free market analysis, trade signals, and financial education.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vipServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lucky Draws */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              🎟️ Lucky Draw
            </h3>
            <p className="text-center text-gray-600 mb-12">
              We reward all users who contribute to the community, even for simple chatting.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {luckyDraws.map((draw, index) => (
                <motion.div
                  key={draw.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6"
                >
                  <div className="text-4xl mb-4">{draw.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {draw.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {draw.description}
                  </p>
                  <ul className="space-y-2">
                    {draw.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recommendation Rewards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                💰 Recommendation Rewards
              </h3>
              <p className="text-center text-gray-600 mb-8">
                Exchange/CMC Listing is one of core services of E2P Labs. Recommend projects to E2P Labs 
                and earn up to <span className="font-bold text-green-600">2,000 USDT</span> commission from listing fee.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Exchanges We Can List</h4>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-700">OKX | Crypto.com | HTX | Kucoin | Bybit | Bitget | Gate.io | MEXC | Bingx | Poloniex | Coinstore</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Ranking Platforms</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-700">CoinMarketCap</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-700">Coingecko</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="https://tekmrajjzl3.larksuite.com/share/base/form/shrusvRnucx6PXYKzsXtRC72nTI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors btn-hover"
                >
                  Recommend Projects Here
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Early Investment Opportunity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                🤝 Early Investment Opportunity
              </h3>
              <p className="text-center text-gray-600 mb-8">
                E2P Labs, as a project incubation team, collaborates with renowned VCs, project teams, and exchanges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏧</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Seed-Round Fundraising</h4>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold text-gray-900 mb-2">IEO/IDO Allocation</h4>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎤</div>
                  <h4 className="font-semibold text-gray-900 mb-2">KOL-Round Fundraising</h4>
                </div>
              </div>
            </div>
          </motion.div>


          {/* $E2P Token */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                🪙 $E2P Token
              </h3>
              <p className="text-center text-gray-600 mb-8">
                The $E2P token served as governance token of E2P Club. The $E2P token will be rewarded 
                those who contribute to E2P Club growth. The ultimate goal of E2P Club is to gather 
                high-quality investors and form a powerful crypto investors base with over 50,000 members.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Token Distribution</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-700">60% of the $E2P token will be distributed to the E2P Club members</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-700">E2P Club Members can earn $E2P token by completing tasks</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Ways to Earn $E2P</h4>
                  <div className="space-y-2">
                    {earningTasks.map((task, index) => (
                      <div key={index} className="text-sm">
                        <span className="font-medium text-gray-900">{task.task}:</span>
                        <span className="text-gray-700 ml-1">{task.reward}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      VIP Trading Community
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Join E2P Club VIP
                  </h4>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-3xl font-bold text-white">150 USDT</span>
                    <span className="text-white/80 text-lg">One-time Payment</span>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Become a permanent VIP member and enjoy all community benefits
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-white/80 text-sm">
                    <span>✓ Lifetime Access</span>
                    <span>✓ VIP Signals</span>
                    <span>✓ Early Opportunities</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a
                    href="https://t.me/+RcB2FVha7bo4N2Nk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors btn-hover"
                  >
                    Join E2P Club VIP - 150 USDT
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  
                  <div className="text-center">
                    <p className="text-gray-600 text-sm mb-2">Want to try first?</p>
                    <a
                      href="https://t.me/e2pdaoviptrail"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      Join Free Trial Community
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Communities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🌐 E2P Communities
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join our communities and stay connected with the latest updates
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="https://t.me/+RcB2FVha7bo4N2Nk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mb-3 mx-auto">
                  <img src="/Telegram.png" alt="Telegram" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Telegram</h3>
                <p className="text-sm text-gray-600">Official Group</p>
              </a>
              
              <a
                href="https://x.com/e2p_dao"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mb-3 mx-auto">
                  <img src="/x.svg" alt="X" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">X</h3>
                <p className="text-sm text-gray-600">Latest Updates</p>
              </a>
              
              <a
                href="https://taskon.xyz/E2P_DAO"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mb-3 mx-auto">
                  <img src="/Taskon.svg" alt="TaskOn" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">TaskOn</h3>
                <p className="text-sm text-gray-600">Community Tasks</p>
              </a>
              
              <a
                href="https://coinmarketcap.com/currencies/e2p-token/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mb-3 mx-auto">
                  <img src="/CMC.png" alt="CMC" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">CMC</h3>
                <p className="text-sm text-gray-600">Token Price</p>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
