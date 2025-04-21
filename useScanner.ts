import { useState } from 'react';
import { scanProduct } from '../data/mockProducts';
import { ScanResult } from '../types';

export const useScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  
  const startScan = () => {
    setIsScanning(true);
    setResult(null);
    
    // In a real app, this would activate the camera and scan a barcode
    // For demo purposes, we'll simulate a scan after a delay
    setTimeout(() => {
      const productId = scanProduct('mock-barcode');
      
      if (productId) {
        setResult({
          success: true,
          productId
        });
      } else {
        setResult({
          success: false,
          error: 'Product not found'
        });
      }
      
      setIsScanning(false);
    }, 2000);
  };
  
  const cancelScan = () => {
    setIsScanning(false);
    setResult(null);
  };
  
  const processImage = (file: File): Promise<ScanResult> => {
    setIsScanning(true);
    setResult(null);
    
    return new Promise((resolve) => {
      // In a real app, this would upload and process the image
      // For demo purposes, we'll simulate a scan after a delay
      setTimeout(() => {
        const productId = scanProduct('mock-barcode');
        
        const result = productId 
          ? { success: true, productId }
          : { success: false, error: 'Product not found in image' };
          
        setResult(result);
        setIsScanning(false);
        resolve(result);
      }, 2000);
    });
  };
  
  return {
    isScanning,
    result,
    startScan,
    cancelScan,
    processImage
  };
};