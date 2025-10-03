'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Calendar, Users, Star, ArrowLeft, Building2, Phone, Mail, Store, CheckCircle, Clock, XCircle, Award, Shield, Zap, DollarSign, Square, Layers, Map, ExternalLink } from 'lucide-react'
import { commercialStores } from '../../../data/towers'
import ScheduleDialog from '../../../components/ScheduleDialog'

const CommercialSpaceDetailPage = () => {
  const params = useParams()
  const [space, setSpace] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const foundSpace = commercialStores.find(s => s.id.toString() === params.id)
    setSpace(foundSpace || null)
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading commercial space details...</p>
        </div>
      </div>
    )
  }

  if (!space) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Store className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-2">Commercial Space Not Found</h2>
          <p className="text-gray-500 mb-6">The commercial space you're looking for doesn't exist.</p>
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
              <span className="font-semibold">Back to Towers</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="font-luxury text-2xl md:text-3xl font-bold text-navy-900">
              {space.name}
            </h1>
            <div className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 ${
              space.status === 'available' 
                ? 'bg-green-100 text-green-800' 
                : space.status === 'reserved'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {space.status === 'available' && <CheckCircle className="w-4 h-4" />}
              {space.status === 'reserved' && <Clock className="w-4 h-4" />}
              {space.status === 'sold' && <XCircle className="w-4 h-4" />}
              <span className="capitalize">{space.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Information Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Basic Info */}
            <div className="lg:col-span-2">
              <h2 className="font-luxury text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                {space.name}
              </h2>
              <div className="flex items-center space-x-6 text-lg text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <Store className="w-5 h-5 text-gold-500" />
                  <span>{space.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-gold-500" />
                  <span>{space.floor}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Square className="w-5 h-5 text-gold-500" />
                  <span>{space.size}</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {space.description}
              </p>
            </div>
            
            {/* Price & Status */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-6 rounded-2xl shadow-lg text-white mb-4">
                <div className="text-3xl font-bold mb-2">{space.price}</div>
                <div className="text-gold-100 text-sm mb-3">Investment Price</div>
                <div className="flex items-center space-x-2 text-sm">
                  <DollarSign className="w-4 h-4" />
                  <span>Commercial Property</span>
                </div>
              </div>
              
              <div className={`px-4 py-3 rounded-xl text-center font-semibold flex items-center justify-center space-x-2 ${
                space.status === 'available' 
                  ? 'bg-green-100 text-green-800' 
                  : space.status === 'reserved'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {space.status === 'available' && <CheckCircle className="w-5 h-5" />}
                {space.status === 'reserved' && <Clock className="w-5 h-5" />}
                {space.status === 'sold' && <XCircle className="w-5 h-5" />}
                <span className="capitalize text-lg">{space.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Center Image Section */}
      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="relative aspect-[16/9] max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${space.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            {/* Extended Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="font-luxury text-2xl font-bold text-navy-900 mb-4">About This Commercial Space</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                This premium commercial space offers exceptional visibility and foot traffic, making it ideal for {space.type.toLowerCase()} operations. Located on the {space.floor.toLowerCase()}, it provides easy access for customers and excellent exposure for your business.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The space features modern infrastructure, flexible layout options, and is situated in a luxury residential tower with high-net-worth residents, ensuring a premium customer base for your business.
              </p>
            </div>

            {/* Features & Specifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="font-luxury text-2xl font-bold text-navy-900 mb-6">Features & Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {space.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award className="w-4 h-4 text-gold-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Space Details</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Square className="w-4 h-4 text-gold-500" />
                      <span className="text-gray-600">Size: {space.size}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Layers className="w-4 h-4 text-gold-500" />
                      <span className="text-gray-600">Floor: {space.floor}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Store className="w-4 h-4 text-gold-500" />
                      <span className="text-gray-600">Type: {space.type}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-4 h-4 text-gold-500" />
                      <span className="text-gray-600">Price: {space.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Highlights */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-luxury text-2xl font-bold text-navy-900 mb-6">Investment Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-navy-900 mb-2">Prime Location</h4>
                  <p className="text-gray-600 text-sm">Located in a luxury residential tower with high-net-worth residents and excellent foot traffic.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-navy-900 mb-2">Growth Potential</h4>
                  <p className="text-gray-600 text-sm">Strong appreciation potential in a premium development with limited commercial inventory.</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-navy-900 mb-2">Premium Amenities</h4>
                  <p className="text-gray-600 text-sm">Access to building amenities and services that attract affluent customers.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-navy-900 mb-2">Flexible Use</h4>
                  <p className="text-gray-600 text-sm">Versatile space suitable for various business types and configurations.</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
              <h3 className="font-luxury text-xl font-bold text-navy-900 mb-4">Contact Information</h3>
              <div className="space-y-3 grid grid-cols-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <div>
                    <p className="font-semibold text-navy-900">Sales Hotline</p>
                    <p className="text-gray-600">+971-4-123-COMM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <div>
                    <p className="font-semibold text-navy-900">Email</p>
                    <p className="text-gray-600">commercial@luxurytowers.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl shadow-lg p-6 text-white mb-8">
              <h3 className="font-luxury text-xl font-bold mb-2">Interested in This Space?</h3>
              <p className="text-gold-100 mb-4">Contact our commercial sales team for more information, pricing details, and to schedule a private viewing.</p>
              <div className="space-y-3">
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    space.status === 'available'
                      ? 'bg-white text-gold-600 hover:bg-gray-50'
                      : space.status === 'reserved'
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                      : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                  disabled={space.status === 'sold'}
                  onClick={() => space.status === 'available' && setIsDialogOpen(true)}
                >
                  {space.status === 'available' && 'Schedule Viewing'}
                  {space.status === 'reserved' && 'Join Waitlist'}
                  {space.status === 'sold' && 'Sold Out'}
                </button>
                <button className="w-full border border-white text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Download Details
                </button>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="font-luxury text-xl font-bold text-navy-900 mb-4">Space Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Type</span>
                  <span className="font-semibold text-navy-900">{space.type}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Size</span>
                  <span className="font-semibold text-navy-900">{space.size}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Floor</span>
                  <span className="font-semibold text-navy-900">{space.floor}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 bg-gradient-to-r from-gold-50 to-gold-100 -mx-2 px-4 rounded-lg">
                  <span className="text-gray-700 font-medium">Investment Price</span>
                  <div className="text-right">
                    <div className="font-bold text-xl text-gold-700">{space.price}</div>
                    <div className="text-xs text-gold-600">Commercial Property</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Status</span>
                  <span className={`font-semibold capitalize ${
                    space.status === 'available' 
                      ? 'text-green-600' 
                      : space.status === 'reserved'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}>
                    {space.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="font-luxury text-xl font-bold text-navy-900 mb-4">Location & Map</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  <div>
                    <p className="font-semibold text-navy-900">Address</p>
                    <p className="text-gray-600">Luxury Tower, Downtown District</p>
                  </div>
                </div>
                <button 
                  onClick={() => window.open('https://maps.google.com/?q=Luxury+Tower+Downtown+District', '_blank')}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Map className="w-5 h-5" />
                  <span>Show on Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500 text-center">
                  View exact location, nearby amenities, and transportation options
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Schedule Dialog */}
      <ScheduleDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        type="viewing"
        propertyName={space?.name}
      />
    </div>
  )
}

export default CommercialSpaceDetailPage
