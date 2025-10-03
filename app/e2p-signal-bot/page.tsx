'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  Bot, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3, 
  Brain, 
  AlertTriangle, 
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

export default function E2PSignalBotPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithmic analysis combining multiple technical indicators for accurate signal generation',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Built-in manipulation detection and false breakout identification to protect your investments',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous market surveillance with real-time signal delivery and instant notifications',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: BarChart3,
      title: 'Multi-Dimensional Analysis',
      description: 'Comprehensive market analysis including technical indicators, sentiment, and macro events',
      color: 'from-orange-500 to-orange-700'
    }
  ]

  const capabilities = [
    {
      category: 'Technical Analysis',
      items: [
        'EMA Crossovers & Trends',
        'RSI Momentum Analysis', 
        'MACD Signal Detection',
        'Bollinger Bands Breakouts',
        'Donchian Channel Analysis',
        'ATR Volatility Measurement'
      ]
    },
    {
      category: 'Market Intelligence',
      items: [
        'Open Interest Monitoring',
        'Fear & Greed Index',
        'Funding Rate Analysis',
        'Order Book Imbalance Detection',
        'Volume Profile Analysis',
        'Market Structure Assessment'
      ]
    },
    {
      category: 'Risk Control',
      items: [
        'False Breakout Detection',
        'Manipulation Risk Assessment',
        'Price Structure Conflicts',
        'Market Sentiment Divergence',
        'Volatility Risk Management',
        'Position Sizing Guidance'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Enhanced Decision Making',
      description: 'Get professional-grade market insights to make informed trading decisions with confidence'
    },
    {
      icon: Target,
      title: 'Risk Reduction',
      description: 'Advanced risk detection algorithms help identify potential market traps and manipulation'
    },
    {
      icon: Zap,
      title: 'Real-Time Alerts',
      description: 'Instant notifications for trading opportunities and risk warnings, never miss critical market moves'
    },
    {
      icon: CheckCircle,
      title: 'Proven Performance',
      description: 'Backed by professional trading experience from Bitget and Tron, with continuous algorithm optimization'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Bot className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              E2P DAO Signal Bot
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Professional-grade trading signal bot powered by advanced AI algorithms and multi-dimensional market analysis
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Trading Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our signal bot combines cutting-edge technology with professional trading expertise to deliver accurate market insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Market Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-dimensional analysis covering technical indicators, market intelligence, and risk management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {capability.category}
                </h3>
                <ul className="space-y-4">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose E2P Signal Bot?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional trading tools designed to enhance your market performance and reduce risks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <benefit.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Background Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Built by Trading Professionals
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto">
              Our team brings extensive experience from leading cryptocurrency exchanges and blockchain projects
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">OKX Experience</h3>
                <p className="text-white/90">
                  Professional trading and operations expertise from one of the world's leading cryptocurrency exchanges
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Our Signal Bot in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of our professional trading signals and real-time market analysis
            </p>
          </motion.div>

          {/* Three Screenshots Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                <h3 className="text-lg font-bold text-white mb-1">Welcome Message</h3>
                <p className="text-blue-100 text-sm">
                  Bot greeting and feature overview
                </p>
              </div>
              <div className="p-4">
                <div className="relative bg-gray-50 rounded-xl p-3">
                  <img 
                    src="/E2PDAO/Welcome.jpg" 
                    alt="E2P Signal Bot Welcome Message" 
                    className="w-full h-auto rounded-lg shadow-md max-h-80 object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Signal Part 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                <h3 className="text-lg font-bold text-white mb-1">Signal Part 1</h3>
                <p className="text-green-100 text-sm">
                  Trading signal analysis
                </p>
              </div>
              <div className="p-4">
                <div className="relative bg-gray-50 rounded-xl p-3">
                    <img 
                      src="/E2PDAO/Signal1.jpg" 
                      alt="E2P Signal Bot Trading Signals Part 1" 
                      className="w-full h-auto rounded-lg shadow-md max-h-80 object-contain"
                    />
                </div>
              </div>
            </motion.div>

            {/* Signal Part 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                <h3 className="text-lg font-bold text-white mb-1">Signal Part 2</h3>
                <p className="text-green-100 text-sm">
                  Trading signal analysis
                </p>
              </div>
              <div className="p-4">
                <div className="relative bg-gray-50 rounded-xl p-3">
                    <img 
                      src="/E2PDAO/Signal2.jpg" 
                      alt="E2P Signal Bot Trading Signals Part 2" 
                      className="w-full h-auto rounded-lg shadow-md max-h-80 object-contain"
                    />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Enhance Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our professional trading community and get access to advanced signal analysis and market insights
            </p>
            
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    VIP Trading Community
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Access Professional Signal Bot
                </h3>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-3xl font-bold text-white">150 USDT</span>
                  <span className="text-white/80 text-lg">One-time Payment</span>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Join E2P Club VIP to access our professional signal bot and trading insights
                </p>
                <div className="flex items-center justify-center space-x-4 text-white/80 text-sm mb-6">
                  <span>✓ Signal Bot Access</span>
                  <span>✓ VIP Community</span>
                  <span>✓ Lifetime Access</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-center">
                <Link
                  href="https://t.me/+RcB2FVha7bo4N2Nk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Join E2P Club VIP - 150 USDT
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 text-sm mb-3">Want to experience our signals first?</p>
                <Link
                  href="https://t.me/e2pdaoviptrail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white/80 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                >
                  Join Free Trial Community
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gray-800 rounded-2xl max-w-2xl mx-auto">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-300">
                <strong>Disclaimer:</strong> Trading signals are for reference only and do not constitute investment advice. 
                Please conduct your own research and trade responsibly. Past performance does not guarantee future results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
