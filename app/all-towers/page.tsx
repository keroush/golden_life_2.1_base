'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Calendar, Users, Star, ArrowLeft, Filter } from 'lucide-react'
import { luxuryTowers } from '../../data/towers'

const AllTowersPage = () => {
  const searchParams = useSearchParams()
  const [selectedCountry, setSelectedCountry] = useState<string>(searchParams.get('country') || 'all')
  const [filteredTowers, setFilteredTowers] = useState<any[]>([])


  const countries = [
    { name: 'All Countries', value: 'all' },
    { name: 'United Arab Emirates', value: 'United Arab Emirates' },
    { name: 'United Kingdom', value: 'United Kingdom' },
    { name: 'United States', value: 'United States' },
    { name: 'Singapore', value: 'Singapore' },
    { name: 'France', value: 'France' }
  ]

  useEffect(() => {
    if (selectedCountry === 'all') {
      setFilteredTowers(luxuryTowers)
    } else {
      setFilteredTowers(luxuryTowers.filter(tower => tower.country === selectedCountry))
    }
  }, [selectedCountry])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-navy-900 hover:text-gold-500 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="font-luxury text-2xl md:text-3xl font-bold text-navy-900">
                All Luxury Towers
              </h1>
            </div>
            
            {/* Country Filter */}
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white"
              >
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        {/* Results Summary */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-navy-900">{filteredTowers.length}</span> luxury towers
            {selectedCountry !== 'all' && (
              <span> in <span className="font-semibold text-navy-900">{selectedCountry}</span></span>
            )}
          </p>
        </div>

        {/* Towers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTowers.map((tower, index) => (
            <Link
              key={index}
              href={`/tower/${tower.id}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group block"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${tower.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Price Tag */}
                <div className="absolute top-4 left-4">
                  <div className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tower.price}
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3 text-gold-500 fill-current" />
                    <span className="text-sm font-semibold text-navy-900">{tower.rating}</span>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-luxury text-xl font-bold mb-1">
                    {tower.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {tower.location}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {tower.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <Calendar className="w-4 h-4 text-gold-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">Completed</div>
                    <div className="text-sm font-semibold text-navy-900">{tower.year}</div>
                  </div>
                  <div>
                    <Users className="w-4 h-4 text-gold-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">Units</div>
                    <div className="text-sm font-semibold text-navy-900">{tower.units}</div>
                  </div>
                  <div>
                    <MapPin className="w-4 h-4 text-gold-500 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">Location</div>
                    <div className="text-sm font-semibold text-navy-900">{tower.country}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-navy-900 mb-2">Premium Features</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                    {tower.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gold-500 hover:bg-gold-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredTowers.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <MapPin className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No towers found
            </h3>
            <p className="text-gray-500">
              Try selecting a different country or view all towers.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllTowersPage
