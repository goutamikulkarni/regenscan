import React from 'react';
import { Leaf, Recycle, AlertCircle } from 'lucide-react';
import Card, { CardContent } from '../components/UI/Card';

const About: React.FC = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">About EcoScan</h1>
            <p className="text-lg text-gray-600">
              Empowering consumers to make more sustainable choices
              through product transparency.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                EcoScan was created with a simple but powerful mission: to help consumers understand 
                the environmental impact of their purchases and make more sustainable choices. 
                By providing clear information about product recyclability, estimated lifespan, 
                and sustainable alternatives, we aim to reduce waste and promote more conscious consumption.
              </p>
              <p className="text-gray-700">
                We believe that transparency is key to sustainability. When consumers have access to 
                accurate information about the products they buy, they can make choices aligned with 
                their environmental values. Our goal is to make this information accessible, understandable, 
                and actionable for everyone.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Recycle className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">How It Works</h2>
                </div>
                <p className="text-gray-700 mb-3">
                  EcoScan uses a combination of barcode scanning, image recognition, and a 
                  comprehensive product database to provide sustainability information about products.
                </p>
                <p className="text-gray-700">
                  Our recyclability assessments are based on material composition and local recycling 
                  capabilities. Lifespan estimates are derived from product category averages and 
                  usage patterns. We continuously update our database to ensure the most accurate 
                  information possible.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Data Sources</h2>
                </div>
                <p className="text-gray-700 mb-3">
                  We gather information from multiple sources including manufacturer specifications, 
                  industry research, environmental organizations, and recycling facilities. This allows 
                  us to provide comprehensive sustainability profiles for a wide range of products.
                </p>
                <p className="text-gray-700">
                  Our sustainability scores are calculated using a proprietary algorithm that 
                  considers factors such as recyclability, durability, energy efficiency, and 
                  environmental impact throughout the product lifecycle.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We're building a community of environmentally conscious consumers who want to make 
              better choices for the planet. By using EcoScan, you're not just making more sustainable 
              choices—you're helping to create demand for more eco-friendly products.
            </p>
            <p className="text-gray-700">
              Together, we can drive positive change in how products are designed, manufactured, 
              and disposed of. Every scan is a step toward a more sustainable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;