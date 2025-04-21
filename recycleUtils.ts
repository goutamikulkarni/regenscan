import { Material, Product } from '../types';

// Calculate overall recyclability percentage
export const calculateRecyclability = (materials: Material[]): number => {
  const recyclableWeight = materials.reduce((total, material) => {
    return total + (material.recyclable ? material.percentage : 0);
  }, 0);
  
  return recyclableWeight;
};

// Get color based on sustainability score
export const getSustainabilityColor = (score: number): string => {
  if (score >= 80) return 'bg-green-500';
  if (score >= 60) return 'bg-green-400';
  if (score >= 40) return 'bg-yellow-500';
  if (score >= 20) return 'bg-orange-500';
  return 'bg-red-500';
};

// Format lifespan for display
export const formatLifespan = (value: number, unit: string): string => {
  if (value === 1) {
    // Remove trailing 's' for singular
    return `${value} ${unit.slice(0, -1)}`;
  }
  return `${value} ${unit}`;
};

// Get lifespan assessment
export const getLifespanAssessment = (product: Product): string => {
  const { value, unit } = product.estimatedLifespan;
  
  // Convert lifespan to months for comparison
  let lifespanInMonths = 0;
  
  switch (unit) {
    case 'days':
      lifespanInMonths = value / 30;
      break;
    case 'weeks':
      lifespanInMonths = value / 4.3;
      break;
    case 'months':
      lifespanInMonths = value;
      break;
    case 'years':
      lifespanInMonths = value * 12;
      break;
  }
  
  // Compare to typical products in the same category
  // This is a simplified approach - a real app would use a database
  const assessments = {
    'Drinkware': {
      short: 6,
      average: 24,
      long: 60
    },
    'Food Storage': {
      short: 3,
      average: 12,
      long: 36
    },
    'Electronics Accessories': {
      short: 6,
      average: 18,
      long: 36
    }
  };
  
  const categoryAssessment = assessments[product.category as keyof typeof assessments] || 
    { short: 12, average: 24, long: 48 };
  
  if (lifespanInMonths >= categoryAssessment.long) {
    return 'Excellent lifespan - much longer than average products in this category';
  } else if (lifespanInMonths >= categoryAssessment.average) {
    return 'Good lifespan - better than average for this type of product';
  } else if (lifespanInMonths >= categoryAssessment.short) {
    return 'Average lifespan for this product category';
  } else {
    return 'Below average lifespan - consider alternatives with longer durability';
  }
};

// Get a readable recyclability statement
export const getRecyclabilityStatement = (materials: Material[]): string => {
  const recyclablePercentage = calculateRecyclability(materials);
  
  if (recyclablePercentage >= 95) {
    return 'Fully recyclable product';
  } else if (recyclablePercentage >= 75) {
    return 'Mostly recyclable';
  } else if (recyclablePercentage >= 50) {
    return 'Partially recyclable';
  } else if (recyclablePercentage > 0) {
    return 'Minimally recyclable';
  } else {
    return 'Not recyclable';
  }
};