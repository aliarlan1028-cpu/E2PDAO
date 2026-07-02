'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, TrendingUp, Globe, Award } from 'lucide-react'

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Users,
      value: '400+',
      label: 'High-Quality KOLs',
      description: 'Global network of influencers'
    },
    {
      icon: Globe,
      value: '50M+',
      label: 'Users Reached',
      description: 'Across 20+ countries'
    },
    {
      icon: TrendingUp,
      value: '10+',
      label: 'Exchange Partners',
      description: 'Major CEX listings'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Success Rate',
      description: 'Project success rate'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by the Blockchain Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our extensive network and proven track record make us the preferred partner 
            for blockchain projects worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
              style={{ opacity: 1, transform: 'translateY(0px)' }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                  style={{ transform: 'scale(1)' }}
                >
                  {stat.value}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection









