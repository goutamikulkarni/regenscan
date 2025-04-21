import React from 'react';
import { Leaf } from 'lucide-react';
import Scanner from '../components/Scanner/Scanner';
import InfoSection from '../components/InfoSection';

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Leaf className="h-12 w-12 text-green-600 mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Scan Products for Sustainability Info
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Discover how recyclable your products are, learn about their lifespan, 
              and find more eco-friendly alternatives.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Scanner />
          </div>
        </div>
      </div>
      
      <InfoSection />
      
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-12">
              Get detailed sustainability information about any product in three simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">Scan Product</h3>
              <p className="text-gray-600">
                Use your camera to scan the product's barcode or QR code, or upload an image of the product.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">Get Details</h3>
              <p className="text-gray-600">
                View the product's sustainability score, recyclability information, and estimated lifespan.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">Make Better Choices</h3>
              <p className="text-gray-600">
                Discover more sustainable alternatives and learn how to properly recycle or reuse the product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;