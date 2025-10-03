'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const GlobalPresence = () => {
  const { t } = useLanguage()

  const countries = [
    {
      name: 'United Arab Emirates',
      city: 'Dubai',
      properties: '150+',
      business: '25+',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      abbreviation: 'UAE'
    },
    {
      name: 'United Kingdom',
      city: 'London',
      properties: '120+',
      business: '30+',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      abbreviation: 'UK'
    },
    {
      name: 'United States',
      city: 'New York',
      properties: '100+',
      business: '20+',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      abbreviation: 'USA'
    },
    {
      name: 'United States',
      city: 'Miami',
      properties: '80+',
      business: '15+',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      abbreviation: 'USA'
    },
    {
      name: 'Singapore',
      city: 'Singapore',
      properties: '60+',
      business: '18+',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      abbreviation: 'SG'
    },
    {
      name: 'France',
      city: 'Paris',
      properties: '45+',
      business: '12+',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      abbreviation: 'FR'
    }
  ]

  return (
    <section id="global-presence" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            {t('global.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('global.subtitle')}
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <Link
              key={index}
              href={`/all-towers?country=${encodeURIComponent(country.name)}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer block"
            >
              <div className="aspect-[4/3] relative">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${country.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white font-bold text-sm">{country.abbreviation}</span>
                    </div>
                    {/* Properties and Business - Appear on Hover */}
                    <div className="flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {country.properties} {t('global.properties')}
                      </span>
                      <span className="bg-navy-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {country.business} {t('global.business')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-gold-200 transition-colors">
                    {country.city}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {country.name}
                  </p>
                  
                  {/* Click indicator */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-gold-200 font-semibold">
                      {t('global.viewTowers')} →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence
