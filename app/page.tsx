'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, TrendingUp, Shield, Zap, Target, Star } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'
import TeamSection from '@/components/sections/TeamSection'
import PartnersSection from '@/components/sections/PartnersSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TeamSection />
      <PartnersSection />
      <CTASection />
    </div>
  )
}
















