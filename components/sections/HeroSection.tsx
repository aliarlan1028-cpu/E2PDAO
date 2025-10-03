'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Users, TrendingUp, Star } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
            style={{ opacity: 1, transform: 'translateX(0px)' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              style={{ opacity: 1, transform: 'translateY(0px)' }}
            >
              Accelerate Your
              <span className="block gradient-text">Blockchain Success</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
              style={{ opacity: 1, transform: 'translateY(0px)' }}
            >
              E2P DAO leverages its extensive network of resources, including KOLs, community, 
              exchange listing, and VC resources, to provide comprehensive, one-stop support for project teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{ opacity: 1, transform: 'translateY(0px)' }}
            >
              <Link
                href="/e2p-labs"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors btn-hover"
              >
                Explore E2P Labs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                href="/e2p-club"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Join E2P Club
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8"
              style={{ opacity: 1, transform: 'translateY(0px)' }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">400+</div>
                <div className="text-sm text-gray-600">KOLs Network</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50M+</div>
                <div className="text-sm text-gray-600">Users Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">Exchanges</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
            style={{ opacity: 1, transform: 'translateX(0px)' }}
          >
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <img src="/logo-e2p-dao.svg" alt="E2P DAO" className="w-12 h-12" />
                  <div>
                    <h3 className="font-semibold text-gray-900">E2P DAO</h3>
                    <p className="text-sm text-gray-500">Blockchain Accelerator</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">+24.5%</span>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-primary-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs">🌱</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">Incubation</div>
                </div>
                <div className="bg-secondary-50 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-secondary-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs">🎤</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">KOL Marketing</div>
                </div>
                <div className="bg-accent-50 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-accent-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs">🏦</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">Listing</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs">💹</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">Market Making</div>
                </div>
              </div>

              {/* Community Stats */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Community Members</span>
                  <span className="font-semibold text-gray-900">50,000+</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-600">Active Projects</span>
                  <span className="font-semibold text-gray-900">25+</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-700">Live Trading</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100"
            >
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-xs font-medium text-gray-700">Success Rate: 95%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
