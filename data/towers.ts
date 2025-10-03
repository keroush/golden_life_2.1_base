export interface Tower {
  id: string
  name: string
  location: string
  country: string
  year: string
  units: string
  rating: string
  price: string
  image: string
  description: string
  features: string[]
  fullDescription?: string
  architect?: string
  developer?: string
  height?: string
  floors?: string
  amenities?: string[]
}

export interface BusinessUnit {
  id: number
  name: string
  description: string
  services: string[]
  contact: {
    phone: string
    email: string
  }
  manager: string
  image: string
}

export interface CommercialStore {
  id: number
  name: string
  type: string
  size: string
  price: string
  floor: string
  description: string
  features: string[]
  image: string
  status: 'available' | 'sold' | 'reserved'
}

export const luxuryTowers: Tower[] = [
  {
    id: 'burj-khalifa-residences',
    name: 'Burj Khalifa Residences',
    location: 'Dubai, UAE',
    country: 'United Arab Emirates',
    year: '2010',
    units: '900',
    rating: '5.0',
    price: 'From $2.5M',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'The world\'s tallest residential tower offering unparalleled luxury and breathtaking views.',
    features: ['Sky Lobbies', 'Infinity Pool', 'Private Elevators', 'Concierge Service'],
    fullDescription: 'Standing as the world\'s tallest building, Burj Khalifa Residences represents the pinnacle of luxury living. These exclusive residences offer unparalleled views of Dubai\'s skyline, the Arabian Gulf, and the vast desert beyond. Each residence is meticulously designed with premium finishes and state-of-the-art amenities.',
    architect: 'Adrian Smith + Gordon Gill Architecture',
    developer: 'Emaar Properties',
    height: '828m',
    floors: '163',
    amenities: ['World-class spa', 'Fine dining restaurants', 'Private cinema', 'Business center', 'Valet parking', '24/7 security']
  },
  {
    id: 'emirates-crown',
    name: 'Emirates Crown',
    location: 'Dubai, UAE',
    country: 'United Arab Emirates',
    year: '2019',
    units: '450',
    rating: '4.9',
    price: 'From $1.8M',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Modern luxury living with panoramic views of Dubai Marina and the Arabian Gulf.',
    features: ['Marina Views', 'Private Beach', 'Yacht Club', 'Spa & Wellness'],
    fullDescription: 'Emirates Crown offers sophisticated waterfront living in the heart of Dubai Marina. This architectural masterpiece combines contemporary design with traditional Arabian hospitality, creating an unmatched residential experience.',
    architect: 'Skidmore, Owings & Merrill',
    developer: 'Dubai Properties',
    height: '395m',
    floors: '95',
    amenities: ['Private marina berths', 'Rooftop infinity pool', 'Tennis court', 'Kids play area', 'Gym & fitness center', 'Concierge services']
  },
  {
    id: 'one-hyde-park',
    name: 'One Hyde Park',
    location: 'London, UK',
    country: 'United Kingdom',
    year: '2011',
    units: '86',
    rating: '4.9',
    price: 'From $15M',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'London\'s most exclusive address with world-class amenities and prime location.',
    features: ['Harrods Access', 'Wine Cellar', 'Spa & Gym', 'Bulletproof Windows'],
    fullDescription: 'One Hyde Park stands as London\'s most prestigious residential address, offering unparalleled luxury in the heart of Knightsbridge. With direct access to Harrods and Hyde Park, residents enjoy the finest in urban living.',
    architect: 'Rogers Stirk Harbour + Partners',
    developer: 'Candy & Candy',
    height: '75m',
    floors: '25',
    amenities: ['Private wine cellar', 'Panic rooms', 'Private cinema', 'Spa with pool', 'Squash court', '24/7 room service']
  },
  {
    id: 'the-shard-residences',
    name: 'The Shard Residences',
    location: 'London, UK',
    country: 'United Kingdom',
    year: '2012',
    units: '10',
    rating: '5.0',
    price: 'From $25M',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c13a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Exclusive residences in Western Europe\'s tallest building with unmatched city views.',
    features: ['360° Views', 'Private Lift', 'Hotel Services', 'Observatory Access'],
    fullDescription: 'The Shard Residences occupy floors 53-65 of Western Europe\'s tallest building, offering the most exclusive living experience in London. Each residence features floor-to-ceiling windows with breathtaking 360-degree views of the capital.',
    architect: 'Renzo Piano',
    developer: 'Sellar Property Group',
    height: '310m',
    floors: '87',
    amenities: ['Hotel services', 'Observatory access', 'Private lifts', 'Concierge', 'Valet parking', 'Private dining']
  },
  {
    id: 'central-park-tower',
    name: 'Central Park Tower',
    location: 'New York, USA',
    country: 'United States',
    year: '2020',
    units: '179',
    rating: '4.8',
    price: 'From $6.5M',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'The tallest residential building in the Western Hemisphere with Central Park views.',
    features: ['Private Club', 'Outdoor Terrace', 'Children\'s Playroom', 'Cigar Lounge'],
    fullDescription: 'Central Park Tower stands as the tallest residential building in the Western Hemisphere, offering unparalleled luxury living with stunning Central Park and city views. This architectural marvel redefines luxury living in Manhattan.',
    architect: 'Adrian Smith + Gordon Gill',
    developer: 'Extell Development',
    height: '472m',
    floors: '131',
    amenities: ['Private club', 'Outdoor terrace', 'Children\'s playroom', 'Cigar lounge', 'Wine cellar', 'Fitness center']
  },
  {
    id: '432-park-avenue',
    name: '432 Park Avenue',
    location: 'New York, USA',
    country: 'United States',
    year: '2015',
    units: '125',
    rating: '4.7',
    price: 'From $7M',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Iconic square tower offering sophisticated living with stunning Manhattan views.',
    features: ['Private Restaurant', 'Fitness Center', 'Library', 'Screening Room'],
    fullDescription: '432 Park Avenue is an iconic supertall residential skyscraper that has redefined the Manhattan skyline. Its distinctive grid facade and square design make it one of the most recognizable buildings in New York City.',
    architect: 'Rafael Viñoly',
    developer: 'CIM Group & Macklowe Properties',
    height: '426m',
    floors: '96',
    amenities: ['Private restaurant', 'Fitness center', 'Library', 'Screening room', 'Billiards room', 'Spa']
  },
  {
    id: 'faena-house',
    name: 'Faena House',
    location: 'Miami, USA',
    country: 'United States',
    year: '2016',
    units: '47',
    rating: '4.9',
    price: 'From $4M',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Oceanfront luxury with contemporary design and world-class amenities.',
    features: ['Private Beach', 'Rooftop Pool', 'Art Gallery', 'Beach Service'],
    fullDescription: 'Faena House represents the pinnacle of oceanfront luxury living in Miami Beach. This architectural masterpiece combines contemporary design with world-class amenities and unparalleled beach access.',
    architect: 'Foster + Partners',
    developer: 'Faena Group',
    height: '60m',
    floors: '18',
    amenities: ['Private beach', 'Rooftop pool', 'Art gallery', 'Beach service', 'Spa', 'Fine dining']
  },
  {
    id: 'porsche-design-tower',
    name: 'Porsche Design Tower',
    location: 'Miami, USA',
    country: 'United States',
    year: '2017',
    units: '132',
    rating: '4.8',
    price: 'From $3.5M',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Revolutionary tower where you can park your car next to your living room.',
    features: ['Car Elevators', 'Private Garages', 'Ocean Views', 'Racing Simulator'],
    fullDescription: 'Porsche Design Tower is a revolutionary residential concept where residents can park their cars directly in their living spaces using innovative car elevators. This unique tower combines luxury living with automotive passion.',
    architect: 'Sieger Suarez Architects',
    developer: 'Dezer Development',
    height: '195m',
    floors: '57',
    amenities: ['Car elevators', 'Private garages', 'Ocean views', 'Racing simulator', 'Spa', 'Beach club']
  },
  {
    id: 'marina-bay-residences',
    name: 'Marina Bay Residences',
    location: 'Singapore',
    country: 'Singapore',
    year: '2018',
    units: '268',
    rating: '4.7',
    price: 'From $3.2M',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Waterfront living with panoramic city and marina views in the heart of Singapore.',
    features: ['Marina Access', 'Sky Garden', 'Business Center', 'Yacht Club'],
    fullDescription: 'Marina Bay Residences offers sophisticated waterfront living in Singapore\'s premier district. With direct marina access and panoramic city views, it represents the epitome of urban luxury living.',
    architect: 'Moshe Safdie',
    developer: 'Marina Bay Development',
    height: '200m',
    floors: '55',
    amenities: ['Marina access', 'Sky garden', 'Business center', 'Yacht club', 'Infinity pool', 'Concierge']
  },
  {
    id: 'wallich-residence',
    name: 'Wallich Residence',
    location: 'Singapore',
    country: 'Singapore',
    year: '2022',
    units: '181',
    rating: '4.9',
    price: 'From $4.5M',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Singapore\'s tallest residential tower with luxury amenities and city views.',
    features: ['Sky Lounge', 'Infinity Pool', 'Private Dining', 'Concierge'],
    fullDescription: 'Wallich Residence stands as Singapore\'s tallest residential tower, offering unparalleled luxury living with breathtaking city and harbor views. This architectural marvel sets new standards for high-end urban living.',
    architect: 'Rafael Viñoly',
    developer: 'GuocoLand',
    height: '290m',
    floors: '64',
    amenities: ['Sky lounge', 'Infinity pool', 'Private dining', 'Concierge', 'Spa', 'Business center']
  },
  {
    id: 'tour-odeon',
    name: 'Tour Odéon',
    location: 'Monaco',
    country: 'France',
    year: '2015',
    units: '70',
    rating: '5.0',
    price: 'From $8M',
    image: 'https://images.unsplash.com/photo-1549180030-48bf079fb38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Monaco\'s tallest building offering the ultimate in Mediterranean luxury living.',
    features: ['Casino Access', 'Helicopter Pad', 'Private Port', 'Michelin Restaurant'],
    fullDescription: 'Tour Odéon stands as Monaco\'s tallest building, offering the ultimate in Mediterranean luxury living. With direct casino access and helicopter landing pad, it represents the pinnacle of exclusive living.',
    architect: 'Alexandre Giraldi',
    developer: 'Groupe Marzocco',
    height: '170m',
    floors: '49',
    amenities: ['Casino access', 'Helicopter pad', 'Private port', 'Michelin restaurant', 'Spa', 'Concierge']
  },
  {
    id: 'les-jardins-de-la-baie',
    name: 'Les Jardins de la Baie',
    location: 'Monaco',
    country: 'France',
    year: '2020',
    units: '65',
    rating: '4.8',
    price: 'From $6M',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Exclusive waterfront residences with Mediterranean elegance and modern luxury.',
    features: ['Sea Views', 'Private Gardens', 'Valet Service', 'Wine Cellar'],
    fullDescription: 'Les Jardins de la Baie offers exclusive waterfront living with Mediterranean elegance and modern luxury. These residences feature private gardens and unobstructed sea views in the heart of Monaco.',
    architect: 'Valode & Pistre',
    developer: 'Bouygues Immobilier',
    height: '90m',
    floors: '26',
    amenities: ['Sea views', 'Private gardens', 'Valet service', 'Wine cellar', 'Spa', 'Beach access']
  }
]

export const businessUnits: BusinessUnit[] = [
  {
    id: 1,
    name: 'Property Management',
    description: 'Comprehensive property management services ensuring optimal maintenance and resident satisfaction.',
    services: ['24/7 Maintenance', 'Resident Services', 'Security Management', 'Facility Operations'],
    contact: {
      phone: '+971-4-123-4567',
      email: 'property@luxurytowers.com'
    },
    manager: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Concierge Services',
    description: 'Premium concierge services providing personalized assistance for all resident needs.',
    services: ['Personal Shopping', 'Travel Planning', 'Event Coordination', 'Restaurant Reservations'],
    contact: {
      phone: '+971-4-123-4568',
      email: 'concierge@luxurytowers.com'
    },
    manager: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Security & Safety',
    description: 'Advanced security systems and professional security personnel ensuring resident safety.',
    services: ['24/7 Security', 'Access Control', 'CCTV Monitoring', 'Emergency Response'],
    contact: {
      phone: '+971-4-123-4569',
      email: 'security@luxurytowers.com'
    },
    manager: 'David Rodriguez',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Wellness & Recreation',
    description: 'World-class wellness facilities and recreational activities for residents.',
    services: ['Spa Services', 'Fitness Training', 'Pool Management', 'Recreational Activities'],
    contact: {
      phone: '+971-4-123-4570',
      email: 'wellness@luxurytowers.com'
    },
    manager: 'Emma Thompson',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export const commercialStores: CommercialStore[] = [
  {
    id: 1,
    name: 'Premium Retail Space A',
    type: 'Retail Store',
    size: '1,200 sq ft',
    price: '$850K',
    floor: 'Ground Floor',
    description: 'Prime retail location with high foot traffic and excellent visibility from the main entrance.',
    features: ['Street Facing', 'High Ceilings', 'Premium Finishes', 'Storage Area'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'available'
  },
  {
    id: 2,
    name: 'Luxury Boutique Space',
    type: 'Fashion Boutique',
    size: '800 sq ft',
    price: '$650K',
    floor: 'Ground Floor',
    description: 'Elegant boutique space perfect for high-end fashion brands and luxury goods.',
    features: ['Corner Location', 'Large Windows', 'Fitting Rooms', 'Display Areas'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'available'
  },
  {
    id: 3,
    name: 'Fine Dining Restaurant',
    type: 'Restaurant',
    size: '2,500 sq ft',
    price: '$1.2M',
    floor: 'Ground Floor',
    description: 'Spacious restaurant space with outdoor terrace access and premium kitchen facilities.',
    features: ['Outdoor Terrace', 'Commercial Kitchen', 'Wine Storage', 'Private Dining'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'reserved'
  },
  {
    id: 4,
    name: 'Wellness & Spa Center',
    type: 'Wellness Center',
    size: '1,800 sq ft',
    price: '$950K',
    floor: 'Second Floor',
    description: 'Tranquil wellness space ideal for spa services, yoga studio, or medical practice.',
    features: ['Soundproof Rooms', 'Natural Light', 'Reception Area', 'Private Entrance'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',    status: 'available'
  },
  {
    id: 5,
    name: 'Tech Showroom',
    type: 'Electronics Store',
    size: '1,500 sq ft',
    price: '$780K',
    floor: 'Ground Floor',
    description: 'Modern showroom space perfect for technology products and electronics retail.',
    features: ['Modern Design', 'Demo Areas', 'Security Systems', 'Climate Control'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',    status: 'sold'
  },
  {
    id: 6,
    name: 'Artisan Coffee Shop',
    type: 'Café',
    size: '600 sq ft',
    price: '$420K',
    floor: 'Ground Floor',
    description: 'Cozy coffee shop space with excellent foot traffic and morning sun exposure.',
    features: ['Corner Unit', 'Outdoor Seating', 'Barista Station', 'Storage Room'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'available'
  }
]
