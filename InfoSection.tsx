import React from 'react';
import { Leaf, Recycle, Clock, AlertCircle } from 'lucide-react';

const InfoSection: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Product Lifespan',
      description: 'Learn how long products typically last and how to extend their useful life through proper care and maintenance.'
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: 'Recyclability Details',
      description: 'Discover what materials make up your products, which components can be recycled, and the best methods for disposal.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: 'Sustainable Alternatives',
      description: 'Find more eco-friendly options with better sustainability scores and lower environmental impact.'
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-yellow-600" />,
      title: 'Environmental Impact',
      description: 'Understand the environmental consequences of your purchases and learn how to make more sustainable choices.'
    },
  ];
  
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Make Informed Sustainability Choices</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            EcoScan helps you understand the environmental impact of products and make better choices for the planet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;