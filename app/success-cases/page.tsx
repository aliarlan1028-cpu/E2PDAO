'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, TrendingUp, Users, Award, Calendar } from 'lucide-react'

export default function SuccessCasesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const successCases = [
    {
      project: 'CHAX',
      exchange: 'Gate.io',
      description: 'Provided listing consultation to project $CHAX and get listed on Gate.io successfully',
      details: 'E2P Labs provided comprehensive listing consultation services, helping CHAX meet Gate.io\'s listing requirements and successfully launch on the exchange.',
      link: 'https://www.coingecko.com/en/coins/chax',
      image: '/api/placeholder/400/300',
      category: 'Exchange Listing',
      date: '2024',
      metrics: {
        listingTime: '24 hours',
        successRate: '100%',
        userGrowth: '500%'
      }
    },
    {
      project: 'HIRO',
      exchange: 'Gate.io',
      description: 'Provided listing consultation to project $HIRO and get listed on Gate.io successfully',
      details: 'Our team worked closely with HIRO to optimize their project structure and successfully secure a listing on Gate.io, one of the top-tier exchanges.',
      link: 'https://coinmarketcap.com/currencies/hiro/#Markets',
      image: '/api/placeholder/400/300',
      category: 'Exchange Listing',
      date: '2024',
      metrics: {
        listingTime: '48 hours',
        successRate: '100%',
        userGrowth: '300%'
      }
    },
    {
      project: 'Virtuals Protocol',
      exchange: 'CMC',
      description: 'Helped Virtuals Protocol on verification of Circulating supply on CMC',
      details: 'E2P Labs assisted Virtuals Protocol in navigating the complex CMC listing process, ensuring accurate circulating supply verification and successful listing.',
      link: 'https://coinmarketcap.com/currencies/virtual-protocol/',
      image: '/api/placeholder/400/300',
      category: 'CMC Listing',
      date: '2024',
      metrics: {
        listingTime: '24 hours',
        successRate: '100%',
        visibility: 'Global'
      }
    },
    {
      project: 'USBT',
      exchange: 'Gate.io',
      description: 'E2P DAO Assists $USBT in Successful Gate.io Listing',
      details: 'E2P DAO played a pivotal role in the successful listing of $USBT on Gate.io. Acting as the intermediary, we engaged with the Gate.io team on behalf of the project, offering advisory services to elevate the project\'s quality to meet Gate.io\'s listing standards.',
      link: 'https://www.gate.io/zh/announcements/article/39267',
      image: '/api/placeholder/400/300',
      category: 'Exchange Listing',
      date: '2024',
      metrics: {
        listingTime: '72 hours',
        successRate: '100%',
        communityGrowth: '1000%'
      }
    }
  ]

  const stats = [
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Success Rate',
      description: 'Projects successfully listed'
    },
    {
      icon: Users,
      value: '50M+',
      label: 'Users Reached',
      description: 'Through our network'
    },
    {
      icon: Award,
      value: '25+',
      label: 'Projects Launched',
      description: 'Successfully incubated'
    },
    {
      icon: Calendar,
      value: '24h',
      label: 'Average Time',
      description: 'To complete listings'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Project Assessment',
      description: 'We evaluate your project\'s readiness and identify areas for improvement'
    },
    {
      step: '02',
      title: 'Optimization',
      description: 'We help optimize your project structure, tokenomics, and documentation'
    },
    {
      step: '03',
      title: 'Exchange Engagement',
      description: 'We engage with exchange teams and facilitate the listing process'
    },
    {
      step: '04',
      title: 'Launch Support',
      description: 'We provide ongoing support during and after the listing process'
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
              Success Cases
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Real projects that achieved success with our comprehensive support. 
              See how we've helped blockchain projects reach their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Successful Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project represents our commitment to excellence and our ability to deliver results
            </p>
          </motion.div>

          <div className="space-y-16">
            {successCases.map((case_, index) => (
              <motion.div
                key={case_.project}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{case_.project}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {case_.exchange}
                          </span>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {case_.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Completed</div>
                        <div className="font-semibold text-gray-900">{case_.date}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {case_.description}
                    </p>
                    
                    <p className="text-gray-700 mb-6">
                      {case_.details}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(case_.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={case_.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors btn-hover"
                    >
                      View Project Details
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-6xl mb-4">🚀</div>
                      <div className="text-lg font-semibold">{case_.project}</div>
                      <div className="text-sm">Success Story</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Success Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your project's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonials from projects that have achieved success with our support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">CH</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">CHAX Team</h4>
                  <p className="text-sm text-gray-600">Project Founder</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "E2P Labs provided exceptional support throughout our listing process. Their expertise 
                and network connections made the difference in getting us listed on Gate.io successfully. 
                Highly recommended for any project looking to accelerate their growth."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary-600 font-bold">US</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">USBT Team</h4>
                  <p className="text-sm text-gray-600">Project Lead</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The team at E2P DAO was instrumental in our successful Gate.io listing. They acted as 
                our intermediary and provided valuable advisory services that elevated our project quality. 
                Their professionalism and results speak for themselves."
              </p>
            </motion.div>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let us help you achieve the same level of success. Contact our team today 
              and let's discuss how we can accelerate your project's growth.
            </p>
            <a
              href="https://t.me/BitEsq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-50 transition-colors btn-hover font-semibold"
            >
              Start Your Success Story
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


