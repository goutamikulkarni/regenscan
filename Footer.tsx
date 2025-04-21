import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="ml-2 text-lg font-semibold text-gray-900">Regenscan</span>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Helping you make sustainable choices, one product at a time.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm text-gray-500">Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span className="text-sm text-gray-500">for the planet</span>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-sm text-center text-gray-500">
            © {new Date().getFullYear()} Regenscan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;