'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Calendar, Users, Star, ArrowLeft, Building2, Phone, Mail, Globe, Award, Shield, Zap, Store, ShoppingBag, CheckCircle, Clock, XCircle, Filter } from 'lucide-react'
import { luxuryTowers, businessUnits, commercialStores, Tower } from '../../../data/towers'
import ScheduleDialog from '../../../components/ScheduleDialog'

const TowerDetailPage = () => {
  const params = useParams()
  const [tower, setTower] = useState<Tower | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedFloor, setSelectedFloor] = useState<string>('all')
  const [isDialogOpen, setIsDialogOpen] = useState(false)


  useEffect(() => {
    const foundTower = luxuryTowers.find(t => t.id === params.id)
    setTower(foundTower || null)
    setLoading(false)
  }, [params.id])

  // Filter commercial stores by floor
  const filteredStores = selectedFloor === 'all' 
    ? commercialStores 
    : commercialStores.filter(store => store.floor === selectedFloor)

  // Get unique floors for filter options
  const availableFloors = ['all', ...Array.from(new Set(commercialStores.map(store => store.floor)))]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tower details...</p>
        </div>
      </div>
    )
  }

  if (!tower) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-2">Tower Not Found</h2>
          <p className="text-gray-500 mb-6">The tower you're looking for doesn't exist.</p>
          <Link 
            href="/all-towers"
            className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to All Towers
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex items-center space-x-4">
            <Link 
              href="/all-towers"
              className="flex items-center space-x-2 text-navy-900 hover:text-gold-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to All Towers</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="font-luxury text-2xl md:text-3xl font-bold text-navy-900">
              {tower.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${tower.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-custom">
            <div className="flex items-end justify-between">
              <div className="text-white">
                <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-2">
                  {tower.name}
                </h2>
                <div className="flex items-center space-x-4 text-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{tower.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-gold-500 fill-current" />
                    <span>{tower.rating}</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-white">
                <div className="bg-gold-500 px-4 py-2 rounded-lg text-xl font-bold mb-2">
                  {tower.price}
                </div>
                <p className="text-gray-300">Starting Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="font-luxury text-2xl font-bold text-navy-900 mb-4">About This Tower</h3>
              {tower.fullDescription && (
                <p className="text-gray-600 leading-relaxed mb-6">
                  {tower.fullDescription}
                </p>
              )}
              <p className="text-gray-600 leading-relaxed">
                {tower.description}
              </p>
            </div>

            {/* Features & Amenities */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="font-luxury text-2xl font-bold text-navy-900 mb-6">Features & Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Premium Features</h4>
                  <div className="space-y-2">
                    {tower.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award className="w-4 h-4 text-gold-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {tower.amenities && tower.amenities.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-3">Building Amenities</h4>
                    <div className="space-y-2">
                      {tower.amenities.map((amenity: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Shield className="w-4 h-4 text-gold-500" />
                          <span className="text-gray-600">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="font-luxury text-xl font-bold text-navy-900 mb-4">Tower Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-semibold text-navy-900">{tower.year}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Total Units</span>
                  <span className="font-semibold text-navy-900">{tower.units}</span>
                </div>
                {tower.height && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Height</span>
                    <span className="font-semibold text-navy-900">{tower.height}</span>
                  </div>
                )}
                {tower.floors && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Floors</span>
                    <span className="font-semibold text-navy-900">{tower.floors}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-luxury text-xl font-bold mb-2">Interested?</h3>
              <p className="text-gold-100 mb-4">Contact our sales team for more information and to schedule a private tour.</p>
              <div className="space-y-3">
                <button 
                  className="w-full bg-white text-gold-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Schedule Tour
                </button>
                <button className="w-full border border-white text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
          
        {/* Commercial Stores Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Commercial Spaces Available
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Prime retail and commercial spaces within the tower, perfect for luxury brands and premium services.
            </p>
            
            {/* Floor Filter */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedFloor}
                onChange={(e) => setSelectedFloor(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white text-navy-900 font-medium"
              >
                <option value="all">All Floors</option>
                {availableFloors.slice(1).map((floor) => (
                  <option key={floor} value={floor}>
                    {floor}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Results Summary */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-navy-900">{filteredStores.length}</span> commercial spaces
                {selectedFloor !== 'all' && (
                  <span> on <span className="font-semibold text-navy-900">{selectedFloor}</span></span>
                )}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store) => (
              <Link
                key={store.id}
                href={`/commercial-space/${store.id}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                    style={{ backgroundImage: `url('${store.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${
                      store.status === 'available' 
                        ? 'bg-green-100 text-green-800' 
                        : store.status === 'reserved'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {store.status === 'available' && <CheckCircle className="w-3 h-3" />}
                      {store.status === 'reserved' && <Clock className="w-3 h-3" />}
                      {store.status === 'sold' && <XCircle className="w-3 h-3" />}
                      <span className="capitalize">{store.status}</span>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-3 left-3">
                    <div className="bg-gold-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {store.price}
                    </div>
                  </div>

                  {/* Store Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-semibold text-sm mb-1">
                      {store.name}
                    </h3>
                    <p className="text-gray-300 text-xs">
                      {store.type} • {store.floor}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Store className="w-4 h-4" />
                      <span>{store.size}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Building2 className="w-4 h-4" />
                      <span>{store.floor}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                    {store.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                      {store.features.slice(0, 4).map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-gold-500 rounded-full mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div 
                    className={`w-full py-2 px-3 rounded-lg text-sm font-semibold transition-colors text-center ${
                      store.status === 'available'
                        ? 'bg-gold-500 hover:bg-gold-600 text-white'
                        : store.status === 'reserved'
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}
                  >
                    {store.status === 'available' && 'View Details'}
                    {store.status === 'reserved' && 'View Details'}
                    {store.status === 'sold' && 'Sold Out'}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredStores.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Store className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No commercial spaces found
              </h3>
              <p className="text-gray-500 mb-4">
                No commercial spaces available on {selectedFloor}.
              </p>
              <button 
                onClick={() => setSelectedFloor('all')}
                className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                View All Floors
              </button>
            </div>
          )}
        </div>

        {/* Commercial Stores Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Hot Deals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              your other opportunities in our other buildings!
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.slice(0,3).map((store) => (
              <Link
                key={store.id}
                href={`/commercial-space/${store.id}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                    style={{ backgroundImage: `url('${store.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${
                      store.status === 'available' 
                        ? 'bg-green-100 text-green-800' 
                        : store.status === 'reserved'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {store.status === 'available' && <CheckCircle className="w-3 h-3" />}
                      {store.status === 'reserved' && <Clock className="w-3 h-3" />}
                      {store.status === 'sold' && <XCircle className="w-3 h-3" />}
                      <span className="capitalize">{store.status}</span>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-3 left-3">
                    <div className="bg-gold-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {store.price}
                    </div>
                  </div>

                  {/* Store Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-semibold text-sm mb-1">
                      {store.name}
                    </h3>
                    <p className="text-gray-300 text-xs">
                      {store.type} • {store.floor}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Store className="w-4 h-4" />
                      <span>{store.size}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Building2 className="w-4 h-4" />
                      <span>{store.floor}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                    {store.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                      {store.features.slice(0, 4).map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-gold-500 rounded-full mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div 
                    className={`w-full py-2 px-3 rounded-lg text-sm font-semibold transition-colors text-center ${
                      store.status === 'available'
                        ? 'bg-gold-500 hover:bg-gold-600 text-white'
                        : store.status === 'reserved'
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}
                  >
                    {store.status === 'available' && 'View Details'}
                    {store.status === 'reserved' && 'View Details'}
                    {store.status === 'sold' && 'Sold Out'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
      
      {/* Schedule Dialog */}
      <ScheduleDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        type="tour"
        propertyName={tower?.name}
      />
    </div>
  )
}

export default TowerDetailPage
