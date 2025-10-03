'use client'

import { useState } from 'react'
import { MapPin, Calendar, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import ScheduleDialog from './ScheduleDialog'

const IconicBuildings = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState('')

  const buildings = [
    {
      name: 'Burj Khalifa Residences',
      location: 'Dubai, UAE',
      year: '2010',
      units: '900',
      rating: '5.0',
      price: 'From $2.5M',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'The world\'s tallest residential tower offering unparalleled luxury and breathtaking views.',
      features: ['Sky Lobbies', 'Infinity Pool', 'Private Elevators', 'Concierge Service']
    },
    {
      name: 'One Hyde Park',
      location: 'London, UK',
      year: '2011',
      units: '86',
      rating: '4.9',
      price: 'From $15M',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'London\'s most exclusive address with world-class amenities and prime location.',
      features: ['Harrods Access', 'Wine Cellar', 'Spa & Gym', 'Bulletproof Windows']
    },
    {
      name: 'Central Park Tower',
      location: 'New York, USA',
      year: '2020',
      units: '179',
      rating: '4.8',
      price: 'From $6.5M',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'The tallest residential building in the Western Hemisphere with Central Park views.',
      features: ['Private Club', 'Outdoor Terrace', 'Children\'s Playroom', 'Cigar Lounge']
    },
    {
      name: 'Faena House',
      location: 'Miami, USA',
      year: '2016',
      units: '47',
      rating: '4.9',
      price: 'From $4M',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Oceanfront luxury with contemporary design and world-class amenities.',
      features: ['Private Beach', 'Rooftop Pool', 'Art Gallery', 'Beach Service']
    },
    {
      name: 'Marina Bay Residences',
      location: 'Singapore',
      year: '2018',
      units: '268',
      rating: '4.7',
      price: 'From $3.2M',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Waterfront living with panoramic city and marina views in the heart of Singapore.',
      features: ['Marina Access', 'Sky Garden', 'Business Center', 'Yacht Club']
    },
    {
      name: 'Tour Odéon',
      location: 'Monaco',
      year: '2015',
      units: '70',
      rating: '5.0',
      price: 'From $8M',
      image: 'https://images.unsplash.com/photo-1549180030-48bf079fb38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Monaco\'s tallest building offering the ultimate in Mediterranean luxury living.',
      features: ['Casino Access', 'Helicopter Pad', 'Private Port', 'Michelin Restaurant']
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % buildings.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + buildings.length) % buildings.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleScheduleTour = (propertyName: string) => {
    setSelectedProperty(propertyName)
    setIsDialogOpen(true)
  }

  return (
    <section id="properties" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Iconic Buildings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of the world's most prestigious residential towers, 
            each representing the pinnacle of architectural excellence and luxury living.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {buildings.map((building, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div 
                    className="relative min-h-[600px] group cursor-pointer"
                    style={{ 
                      backgroundImage: `url('${building.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                    
                    {/* Price Tag */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-gold-500 text-white px-4 py-2 rounded-full font-semibold">
                        {building.price}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center space-x-1">
                        <Star className="w-4 h-4 text-gold-500 fill-current" />
                        <span className="font-semibold text-navy-900">{building.rating}</span>
                      </div>
                    </div>

                    {/* Basic Info - Always Visible */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="font-luxury text-3xl md:text-4xl font-bold mb-2">
                        {building.name}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {building.location}
                      </p>
                    </div>

                    {/* Detailed Info - Appears on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-white text-center max-w-2xl mx-auto px-8">
                        <h3 className="font-luxury text-3xl md:text-4xl font-bold mb-4">
                          {building.name}
                        </h3>
                        <p className="text-gray-200 text-lg leading-relaxed mb-8">
                          {building.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                          <div className="text-center">
                            <MapPin className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                            <div className="text-sm text-gray-300">Location</div>
                            <div className="font-semibold">{building.location}</div>
                          </div>
                          <div className="text-center">
                            <Calendar className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                            <div className="text-sm text-gray-300">Completed</div>
                            <div className="font-semibold">{building.year}</div>
                          </div>
                          <div className="text-center">
                            <Users className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                            <div className="text-sm text-gray-300">Units</div>
                            <div className="font-semibold">{building.units}</div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                          <h4 className="font-semibold mb-4 text-gold-500">Premium Features</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            {building.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center justify-center">
                                <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex space-x-4 justify-center">
                          <button 
                            className="btn-primary"
                            onClick={() => handleScheduleTour(building.name)}
                          >
                            Schedule Tour
                          </button>
                          <button className="btn-secondary">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-navy-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-navy-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3">
          {buildings.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-gold-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {buildings.map((building, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                currentSlide === index 
                  ? 'ring-4 ring-gold-500 scale-105' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${building.image}')` }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-white text-xs font-semibold truncate">
                  {building.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Schedule Dialog */}
      <ScheduleDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        type="tour"
        propertyName={selectedProperty}
      />
    </section>
  )
}

export default IconicBuildings
