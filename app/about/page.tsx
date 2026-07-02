'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building, Award, Users, Globe, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const teamExperience = [
    {
      company: 'Bitget',
      logo: '/Bitget Logo.png',
      period: '2018/2 - 2020/6',
      position: 'Futures Operations',
      description: 'Led futures trading operations and market analysis, gaining deep insights into cryptocurrency derivatives and risk management.',
      achievements: ['Managed high-volume trading operations', 'Developed risk management protocols', 'Led market analysis team']
    },
    {
      company: 'Tron',
      logo: '/Tron.png',
      period: '2020/6 - 2021/6',
      position: 'DeFi Operations',
      description: 'Managed DeFi protocol operations and community growth, contributing to the expansion of decentralized finance ecosystem.',
      achievements: ['Oversaw DeFi protocol operations', 'Built community engagement strategies', 'Contributed to ecosystem growth']
    },
    {
      company: 'Gate.io',
      logo: '/Gate.io.png',
      period: '2021/6 - 2022/6',
      position: 'KOL Operations',
      description: 'Built and managed global KOL network and partnerships, establishing connections with key influencers in the crypto space.',
      achievements: ['Built 400+ KOL network', 'Established global partnerships', 'Managed influencer campaigns']
    },
    {
      company: 'E2P DAO',
      logo: '/logo-e2p-dao.svg',
      period: '2022/6 - Now',
      position: 'Founder',
      description: 'Leading comprehensive blockchain project incubation services, combining all previous experience to create a one-stop solution for blockchain projects.',
      achievements: ['Founded E2P DAO', 'Built comprehensive service ecosystem', 'Achieved 95% project success rate']
    }
  ]

  const coreValues = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in the power of community and prioritize building strong, engaged communities around every project we support.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in all our services, ensuring quality and professionalism in every interaction.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our network spans across 20+ countries, providing truly global support and market access for our partners.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay at the forefront of blockchain technology, constantly evolving our services to meet market demands.'
    }
  ]

  const milestones = [
    {
      year: '2018',
      title: 'Industry Entry',
      description: 'Started journey in blockchain industry with Bitget'
    },
    {
      year: '2020',
      title: 'DeFi Expertise',
      description: 'Gained DeFi operations experience at Tron'
    },
    {
      year: '2021',
      title: 'KOL Network',
      description: 'Built extensive KOL network at Gate.io'
    },
    {
      year: '2022',
      title: 'E2P DAO Founded',
      description: 'Launched comprehensive blockchain services'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Reached 50M+ users across 20+ countries'
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
              About E2P DAO
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              E2P DAO leverages its extensive network of resources, including KOLs, community, 
              exchange listing, and VC resources, alongside the team's outstanding expertise, 
              to provide comprehensive, one-stop support for project teams.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                E2P DAO's self-built trading community, E2P Club, ensures the introduction of real 
                and effective high-quality users to the projects we collaborate with while creating 
                early investment opportunities for community members, fostering mutual benefits and 
                shared growth between project teams and users.
              </p>
              <p className="text-lg text-gray-700">
                As the governance token of E2P Club, $E2P rewards members who contribute to the 
                community's growth, promoting sustainable and healthy development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at E2P DAO
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Experience */}
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

          <div className="space-y-12">
            {teamExperience.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <img src={experience.logo} alt={experience.company} className="w-16 h-16 object-contain" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                        {experience.company}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-primary-600 font-medium mb-4">
                      <Building className="w-4 h-4 mr-2" />
                      {experience.position}
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {experience.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From industry entry to becoming a leading blockchain accelerator
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg flex-shrink-0 z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">400+</div>
              <div className="text-lg opacity-90">High-Quality KOLs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-lg opacity-90">Users Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Exchange Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                To accelerate the growth of the blockchain ecosystem by providing comprehensive, 
                one-stop support for project teams while building a strong community of 
                high-quality investors and traders.
              </p>
              <p className="text-lg text-gray-600">
                We believe in the power of collaboration, innovation, and community-driven growth. 
                Our mission is to bridge the gap between promising blockchain projects and the 
                resources they need to succeed, while creating value for all stakeholders in the ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}














