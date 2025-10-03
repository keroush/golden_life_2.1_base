'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, Home, DollarSign, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const { language, t } = useLanguage()
  const [searchType, setSearchType] = useState('buy')
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [currentSubtitle, setCurrentSubtitle] = useState(0)

  const propertyTypes = ['Apartment', 'Villa', 'Penthouse', 'Townhouse', 'Commercial']
  const priceRanges = ['$500K - $1M', '$1M - $5M', '$5M - $10M', '$10M+']
  const locations = ['Dubai', 'London', 'New York', 'Miami', 'Singapore']
  
  const subtitles = [
    t('hero.subtitle1'),
    t('hero.subtitle2'),
    t('hero.subtitle3'),
    t('hero.subtitle4'),
    t('hero.subtitle5')
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [subtitles.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-luxurious-resort-with-pools-50201-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-luxury-resort-with-pools-50200-large.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback background image if video fails to load */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
            zIndex: -1
          }}
        />
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className={`font-luxury text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${language === 'fa' ? 'text-right' : ''}`}>
            {t('hero.title1')}
            <span className="block text-gold-500">{t('hero.title2')}</span>
            {t('hero.title3')}
          </h1>
          
          {/* Dynamic Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed transition-opacity duration-500">
            {subtitles[currentSubtitle]}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
