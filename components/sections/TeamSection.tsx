'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building } from 'lucide-react'

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const teamExperience = [
    {
      company: 'Bitget',
      logo: '/E2PDAO/Bitget Logo.png',
      period: '2018/2 - 2020/6',
      position: 'Futures Operations',
      description: 'Led futures trading operations and market analysis'
    },
    {
      company: 'Tron',
      logo: '/E2PDAO/Tron.png',
      period: '2020/6 - 2021/6',
      position: 'DeFi Operations',
      description: 'Managed DeFi protocol operations and community growth'
    },
    {
      company: 'Gate.io',
      logo: '/E2PDAO/Gate.io.png',
      period: '2021/6 - 2022/6',
      position: 'KOL Operations',
      description: 'Built and managed global KOL network and partnerships'
    },
    {
      company: 'E2P DAO',
      logo: '/E2PDAO/logo-e2p-dao.svg',
      period: '2022/6 - Now',
      position: 'Founder',
      description: 'Leading comprehensive blockchain project incubation services'
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
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Team Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team brings extensive experience from leading blockchain companies, 
            ensuring your project receives world-class support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamExperience.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <img src={experience.logo} alt={experience.company} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {experience.company}
                </h3>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  {experience.period}
                </div>
                <div className="flex items-center justify-center text-sm text-primary-600 font-medium">
                  <Building className="w-4 h-4 mr-1" />
                  {experience.position}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm text-center">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Key Achievements & Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Industry Leadership
              </h4>
              <p className="text-gray-600 text-sm">
                5+ years of experience in top-tier blockchain companies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Global Network
              </h4>
              <p className="text-gray-600 text-sm">
                Established relationships with exchanges, VCs, and KOLs worldwide
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Proven Track Record
              </h4>
              <p className="text-gray-600 text-sm">
                95% success rate in project incubation and listing services
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection














