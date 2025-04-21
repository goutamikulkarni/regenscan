import React, { useState, useRef } from 'react';
import { Camera, Image, RefreshCcw } from 'lucide-react';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import { scanProduct } from '../../data/mockProducts';

const Scanner: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const navigate = useNavigate();
  
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          aspectRatio: 4/3,
          width: { ideal: 1920 },
          height: { ideal: 1440 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please ensure camera permissions are granted.');
    }
  };
  
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };
  
  const captureImage = async () => {
    if (!videoRef.current) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.drawImage(videoRef.current, 0, 0);
    const imageUrl = canvas.toDataURL('image/jpeg');
    setPreviewUrl(imageUrl);
    
    // Stop the camera after capturing
    stopCamera();
    
    // Process the image
    processImage(imageUrl);
  };
  
  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setPreviewUrl(imageUrl);
        processImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const processImage = (imageUrl: string) => {
    setIsUploading(true);
    
    // In a real app, this would send the image to a server for processing
    // For demo purposes, we'll simulate processing after a delay
    setTimeout(() => {
      const productId = scanProduct('mock-image');
      setIsUploading(false);
      
      if (productId) {
        navigate(`/scan-result/${productId}`);
      } else {
        alert('Product not found in the image. Please try again.');
        setPreviewUrl(null);
      }
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 2000);
  };
  
  const resetScanner = () => {
    setPreviewUrl(null);
    setIsUploading(false);
    stopCamera();
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Scan a Product</h2>
      
      <div className="flex flex-col space-y-4">
        <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden relative">
          {previewUrl ? (
            <img 
              src={previewUrl} 
              alt="Captured product" 
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    videoRef.current.play();
                  }
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400">
                  <Camera size={64} strokeWidth={1} />
                </div>
              </div>
            </>
          )}
          
          {isUploading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white flex items-center">
                <RefreshCcw className="animate-spin h-6 w-6 mr-2" />
                <span>Analyzing image...</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          {!previewUrl && !isUploading && (
            <>
              <Button 
                variant="primary" 
                onClick={startCamera}
                icon={<Camera size={18} />}
                fullWidth
              >
                Open Camera
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleFileUpload}
                icon={<Image size={18} />}
                fullWidth
              >
                Upload Image
              </Button>
            </>
          )}
          
          {videoRef.current?.srcObject && !previewUrl && (
            <Button 
              variant="primary" 
              onClick={captureImage}
              icon={<Camera size={18} />}
              fullWidth
            >
              Capture Image
            </Button>
          )}
          
          {(previewUrl || isUploading) && (
            <Button 
              variant="outline" 
              onClick={resetScanner}
              fullWidth
            >
              Scan Another Product
            </Button>
          )}
          
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
          />
        </div>
        
        <div className="text-sm text-gray-500 text-center">
          <p>For demo purposes, scanning will show a random product.</p>
        </div>
      </div>
    </div>
  );
};

export default Scanner;