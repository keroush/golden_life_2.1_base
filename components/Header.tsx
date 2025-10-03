'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import ScheduleDialog from './ScheduleDialog'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.properties'), href: '#properties' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-900 text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@luxuryestate.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Dubai, UAE | London, UK | New York, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className={`font-luxury text-2xl md:text-3xl font-bold ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}>
                <span className="text-gold-500">Golden</span>Life
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-gold-500 ${
                    isScrolled ? 'text-navy-900' : 'text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Language Switch & CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-navy-900 hover:bg-gray-100' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Globe size={16} />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'فا' : 'EN'}
                  </span>
                </button>
              </div>
              <button 
                className="btn-primary"
                onClick={() => setIsDialogOpen(true)}
              >
                {t('header.schedule')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-navy-900 font-medium hover:text-gold-500 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg text-navy-900 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Globe size={16} />
                    <span className="text-sm font-medium">
                      {language === 'en' ? 'فا' : 'EN'}
                    </span>
                  </button>
                  <button 
                    className="btn-primary flex-1 ml-4"
                    onClick={() => {
                      setIsDialogOpen(true)
                      setIsMenuOpen(false)
                    }}
                  >
                    {t('header.schedule')}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
      
      {/* Schedule Dialog */}
      <ScheduleDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        type="viewing"
      />
    </>
  )
}

export default Header
