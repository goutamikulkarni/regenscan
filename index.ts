export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  category: string;
  materials: Material[];
  estimatedLifespan: {
    value: number;
    unit: 'days' | 'weeks' | 'months' | 'years';
  };
  sustainabilityScore: number; // 0-100
  sustainableAlternatives?: SustainableAlternative[];
  recyclingLocations?: RecyclingLocation[];
}

export interface Material {
  name: string;
  percentage: number;
  recyclable: boolean;
  recyclingMethod: string;
  reuseIdeas?: string[];
  recyclingImage?: string;
}

export interface SustainableAlternative {
  id: string;
  name: string;
  brand: string;
  image: string;
  sustainabilityScore: number;
  description: string;
}

export interface RecyclingLocation {
  name: string;
  address: string;
  distance: string;
  acceptedMaterials: string[];
}

export interface ScanResult {
  success: boolean;
  productId?: string;
  error?: string;
}