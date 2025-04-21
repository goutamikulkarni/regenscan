import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProductById } from '../data/mockProducts';
import ScannerResult from '../components/Scanner/ScannerResult';

const ScanResult: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : undefined;
  
  if (!product) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScannerResult product={product} />
      </div>
    </div>
  );
};

export default ScanResult;