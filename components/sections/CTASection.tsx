'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Users, Rocket } from 'lucide-react'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const ctaOptions = [
    {
      icon: Rocket,
      title: 'I\'m a Project Team',
      description: 'Looking for incubation, listing, and marketing services',
      buttonText: 'Explore E2P Labs',
      buttonLink: '/e2p-labs',
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: Users,
      title: 'I\'m an Investor/Trader',
      description: 'Seeking early investment opportunities and trading signals',
      buttonText: 'Join E2P Club',
      buttonLink: '/e2p-club',
      color: 'from-secondary-500 to-secondary-700'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Which One Describes You Better?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your path and let us help you achieve your blockchain goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  {option.title}
                </h3>
                
                <p className="text-gray-300 mb-8 text-lg">
                  {option.description}
                </p>
                
                <Link
                  href={option.buttonLink}
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors btn-hover font-semibold"
                >
                  {option.buttonText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team directly for personalized consultation and to discuss 
              how we can help accelerate your blockchain journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/BitEsq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors btn-hover"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact on Telegram
              </a>
              
              <a
                href="mailto:aliarlan1028@gmail.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-400">
            For reference only, not investment advice
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
