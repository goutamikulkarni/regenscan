import { Product } from '../types';

const mockProducts: Product[] = [
  {
    id: 'prod-001',
    name: 'Eco-Friendly Water Bottle',
    brand: 'GreenHydro',
    image: 'https://images.pexels.com/photos/3735238/pexels-photo-3735238.jpeg',
    category: 'Drinkware',
    materials: [
      {
        name: 'Stainless Steel',
        percentage: 95,
        recyclable: true,
        recyclingMethod: 'Metal recycling facilities',
        reuseIdeas: [
          'Repurpose as a flower vase',
          'Use as a pen holder',
          'Create a DIY lamp base'
        ],
        recyclingImage: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg'
      },
      {
        name: 'Silicone',
        percentage: 5,
        recyclable: false,
        recyclingMethod: 'Special silicone recycling programs only',
        reuseIdeas: [
          'Remove and reuse as a grip for other items'
        ]
      }
    ],
    estimatedLifespan: {
      value: 10,
      unit: 'years'
    },
    sustainabilityScore: 85,
    sustainableAlternatives: [],
    recyclingLocations: [
      {
        name: 'City Metal Recycling Center',
        address: '123 Green Street',
        distance: '2.5 miles',
        acceptedMaterials: ['Metal', 'Stainless Steel', 'Aluminum']
      }
    ]
  },
  {
    id: 'prod-002',
    name: 'Plastic Food Container',
    brand: 'KitchenBasics',
    image: 'https://images.pexels.com/photos/5217570/pexels-photo-5217570.jpeg',
    category: 'Food Storage',
    materials: [
      {
        name: 'Polypropylene (PP)',
        percentage: 90,
        recyclable: true,
        recyclingMethod: 'Plastic recycling - Type 5 (PP)',
        reuseIdeas: [
          'Use for organizing small items',
          'Create a mini greenhouse for seedlings',
          'Turn into craft supplies storage'
        ],
        recyclingImage: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg'
      },
      {
        name: 'Silicone Seal',
        percentage: 10,
        recyclable: false,
        recyclingMethod: 'Special silicone recycling programs only',
        reuseIdeas: [
          'Reuse as a waterproof seal for other containers'
        ]
      }
    ],
    estimatedLifespan: {
      value: 3,
      unit: 'years'
    },
    sustainabilityScore: 45,
    sustainableAlternatives: [
      {
        id: 'alt-002-1',
        name: 'Glass Food Container',
        brand: 'EcoStorage',
        image: 'https://images.pexels.com/photos/6066051/pexels-photo-6066051.jpeg',
        sustainabilityScore: 85,
        description: 'Durable glass container with bamboo lid, no plastic components'
      },
      {
        id: 'alt-002-2',
        name: 'Stainless Steel Lunch Box',
        brand: 'EverGreen',
        image: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg',
        sustainabilityScore: 90,
        description: 'Long-lasting stainless steel container with silicone seal'
      }
    ],
    recyclingLocations: [
      {
        name: 'EcoRecycle Center',
        address: '456 Recycling Way',
        distance: '1.8 miles',
        acceptedMaterials: ['Plastic', 'PP', 'PET', 'HDPE']
      }
    ]
  },
  {
    id: 'prod-003',
    name: 'Smartphone Case',
    brand: 'TechGuard',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
    category: 'Electronics Accessories',
    materials: [
      {
        name: 'Thermoplastic Polyurethane (TPU)',
        percentage: 100,
        recyclable: false,
        recyclingMethod: 'Not commonly accepted in recycling programs',
        reuseIdeas: [
          'Donate if in good condition',
          'Use as a holder for small items',
          'Repurpose as a cord organizer'
        ],
        recyclingImage: 'https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg'
      }
    ],
    estimatedLifespan: {
      value: 18,
      unit: 'months'
    },
    sustainabilityScore: 25,
    sustainableAlternatives: [
      {
        id: 'alt-003-1',
        name: 'Biodegradable Phone Case',
        brand: 'EcoCase',
        image: 'https://images.pexels.com/photos/6362722/pexels-photo-6362722.jpeg',
        sustainabilityScore: 85,
        description: 'Made from plant-based materials, fully compostable'
      },
      {
        id: 'alt-003-2',
        name: 'Bamboo Phone Case',
        brand: 'NatureTech',
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
        sustainabilityScore: 75,
        description: 'Sustainable bamboo with minimal plastic components'
      }
    ],
    recyclingLocations: [
      {
        name: 'Electronics Recycling Depot',
        address: '789 Tech Boulevard',
        distance: '3.2 miles',
        acceptedMaterials: ['Electronics', 'Batteries', 'Accessories']
      }
    ]
  }
];

export default mockProducts;

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

// Simulate a barcode scan result
export const scanProduct = (barcode: string): string | null => {
  // This is a mock function - in a real app, this would call an API
  // For demo purposes, we'll just return a random product ID
  const productIds = mockProducts.map(p => p.id);
  const randomIndex = Math.floor(Math.random() * productIds.length);
  return productIds[randomIndex];
};