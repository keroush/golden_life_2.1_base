'use client'

import { Globe, Building2, TrendingUp, Shield } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const OurServices = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: Building2,
      title: t('services.property.title'),
      description: t('services.property.desc'),
      features: ['Luxury Apartments', 'Premium Villas', 'Commercial Spaces', 'Investment Properties'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',      imagePosition: 'top'
    },
    {
      icon: TrendingUp,
      title: t('services.investment.title'),
      description: t('services.investment.desc'),
      features: ['Market Analysis', 'ROI Projections', 'Portfolio Management', 'Risk Assessment'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'bottom'
    },
    {
      icon: Shield,
      title: t('services.management.title'),
      description: t('services.management.desc'),
      features: ['Tenant Management', 'Maintenance Services', 'Financial Reporting', '24/7 Support'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'top'
    },
    {
      icon: Globe,
      title: t('services.relocation.title'),
      description: t('services.relocation.desc'),
      features: ['Visa Assistance', 'School Placement', 'Cultural Integration', 'Concierge Services'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'bottom'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            <span className="text-gold-500"> Golden </span>{t('services.title')}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 overflow-hidden"
            >
              {/* Top Image */}
              {service.imagePosition === 'top' && (
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                </div>
              )}

              <div className="p-6">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-gold-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Image */}
              {service.imagePosition === 'bottom' && (
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
