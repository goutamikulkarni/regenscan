import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Info, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Regenscan</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600"
            >
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600"
            >
              <Info className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;