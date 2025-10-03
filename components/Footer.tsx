'use client'

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const { t, language } = useLanguage()

  const footerLinks = {
    company: [
      { name: t('footer.about'), href: '#about' },
      { name: t('footer.properties'), href: '#properties' },
      { name: t('footer.services'), href: '#services' },
      { name: t('footer.contact'), href: '#contact' },
    ],
    legal: [
      { name: t('footer.privacy'), href: '#privacy' },
      { name: t('footer.terms'), href: '#terms' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: t('footer.phone'),
      value: '+971 4 123 4567'
    },
    {
      icon: Mail,
      label: t('footer.email'),
      value: 'info@goldenlife.com'
    },
    {
      icon: MapPin,
      label: t('footer.address'),
      value: 'Dubai, UAE | London, UK | New York, USA'
    }
  ]

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className={`font-luxury text-2xl font-bold ${language === 'fa' ? 'text-right' : ''}`}>
                  <span className="text-gold-500">Golden</span>Life
                </h3>
                <p className={`text-gray-300 mt-4 leading-relaxed ${language === 'fa' ? 'text-right' : ''}`}>
                  {language === 'fa' 
                    ? 'ارائه‌دهنده املاک لوکس در معتبرترین بازارهای جهان با خدمات بی‌نظیر و تجربه‌ای فراموش‌نشدنی.'
                    : 'Providing luxury real estate in the world\'s most prestigious markets with unparalleled service and unforgettable experiences.'
                  }
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`font-semibold text-lg mb-6 ${language === 'fa' ? 'text-right' : ''}`}>
                {t('footer.company')}
              </h4>
              <ul className={`space-y-3 ${language === 'fa' ? 'text-right' : ''}`}>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-gold-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className={`font-semibold text-lg mb-6 ${language === 'fa' ? 'text-right' : ''}`}>
                Legal
              </h4>
              <ul className={`space-y-3 ${language === 'fa' ? 'text-right' : ''}`}>
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-gold-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className={`font-semibold text-lg mb-6 ${language === 'fa' ? 'text-right' : ''}`}>
                {t('footer.contact')}
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`flex items-start space-x-3 ${language === 'fa' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0">
                      <info.icon size={18} />
                    </div>
                    <div className={language === 'fa' ? 'text-right' : ''}>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-gray-300">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${language === 'fa' ? 'md:flex-row-reverse' : ''}`}>
            <div className={`text-gray-400 text-sm ${language === 'fa' ? 'text-right' : ''}`}>
              © 2024 {t('footer.company')}. {t('footer.rights')}
            </div>
            <div className={`flex space-x-6 text-sm ${language === 'fa' ? 'space-x-reverse' : ''}`}>
              <a href="#privacy" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                {t('footer.privacy')}
              </a>
              <a href="#terms" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
