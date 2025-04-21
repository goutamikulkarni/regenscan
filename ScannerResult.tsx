import React from 'react';
import { Product, Material, RecyclingLocation } from '../../types';
import { 
  getSustainabilityColor, 
  formatLifespan, 
  getLifespanAssessment,
  getRecyclabilityStatement
} from '../../utils/recycleUtils';
import Card, { CardHeader, CardContent, CardFooter } from '../UI/Card';
import Badge from '../UI/Badge';
import Button from '../UI/Button';
import { ArrowLeft, Recycle, Clock, ShoppingBag, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ScannerResultProps {
  product: Product;
}

const ScannerResult: React.FC<ScannerResultProps> = ({ product }) => {
  const sustainabilityColor = getSustainabilityColor(product.sustainabilityScore);
  const recyclabilityStatement = getRecyclabilityStatement(product.materials);
  
  return (
    <div className="max-w-2xl mx-auto">
      <Link to="/" className="inline-flex items-center text-green-600 mb-4 hover:text-green-700">
        <ArrowLeft size={16} className="mr-1" />
        Back to scanner
      </Link>
      
      <Card className="mb-6 overflow-visible">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 sm:h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
            />
          </div>
          
          <div className="sm:w-2/3 p-6">
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mb-3">{product.brand}</p>
            
            <div className="flex items-center mb-4">
              <div className="mr-2">Sustainability Score:</div>
              <div className="flex items-center">
                <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${sustainabilityColor}`}
                    style={{ width: `${product.sustainabilityScore}%` }}
                  ></div>
                </div>
                <span className="ml-2 font-semibold">{product.sustainabilityScore}/100</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge 
                variant={product.sustainabilityScore >= 70 ? 'success' : 
                  product.sustainabilityScore >= 40 ? 'warning' : 'error'}
              >
                {product.category}
              </Badge>
              <Badge variant="info">{recyclabilityStatement}</Badge>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="bg-green-50">
            <div className="flex items-center">
              <Recycle className="h-5 w-5 text-green-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Recyclability Information</h2>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {product.materials.map((material, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{material.name}</span>
                    <span>{material.percentage}%</span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={material.recyclable ? 'bg-green-500 h-full' : 'bg-red-500 h-full'}
                        style={{ width: `${material.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-1">
                    <span className={material.recyclable ? 'text-green-600' : 'text-red-600'}>
                      {material.recyclable ? 'Recyclable' : 'Not Recyclable'}
                    </span>
                    {material.recyclable && ` - ${material.recyclingMethod}`}
                  </p>
                  
                  {material.recyclingImage && (
                    <div className="mt-2 mb-3">
                      <img 
                        src={material.recyclingImage} 
                        alt={`Recycling example for ${material.name}`}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                  )}
                  
                  {material.reuseIdeas && material.reuseIdeas.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-700">Reuse ideas:</p>
                      <ul className="text-sm text-gray-600 list-disc list-inside">
                        {material.reuseIdeas.map((idea, i) => (
                          <li key={i}>{idea}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="bg-blue-50">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Lifespan Information</h2>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="mb-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {formatLifespan(product.estimatedLifespan.value, product.estimatedLifespan.unit)}
              </div>
              <p className="text-gray-600">Estimated product lifespan</p>
            </div>
            
            <div className="bg-blue-50 rounded-md p-3 mb-4">
              <p className="text-sm text-blue-800">{getLifespanAssessment(product)}</p>
            </div>
            
            <div className="text-sm text-gray-600">
              <p className="mb-2">To maximize this product's lifespan:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Follow manufacturer care instructions</li>
                <li>Store properly when not in use</li>
                <li>Perform regular maintenance as needed</li>
                <li>Repair instead of replace when possible</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {product.recyclingLocations && product.recyclingLocations.length > 0 && (
        <Card className="mb-6">
          <CardHeader className="bg-purple-50">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-purple-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Nearby Recycling Locations</h2>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {product.recyclingLocations.map((location, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-medium text-gray-900">{location.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{location.address}</p>
                  <p className="text-sm text-blue-600 mb-2">{location.distance} away</p>
                  <div className="flex flex-wrap gap-2">
                    {location.acceptedMaterials.map((material, i) => (
                      <Badge key={i} variant="info">{material}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      
      {product.sustainableAlternatives && product.sustainableAlternatives.length > 0 && (
        <Card className="mb-6">
          <CardHeader className="bg-yellow-50">
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5 text-yellow-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Sustainable Alternatives</h2>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.sustainableAlternatives.map((alt) => (
                <div key={alt.id} className="border border-gray-100 rounded-md overflow-hidden">
                  <div className="aspect-video bg-gray-100">
                    <img 
                      src={alt.image} 
                      alt={alt.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-gray-900">{alt.name}</h3>
                      <Badge variant="success">{alt.sustainabilityScore}/100</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{alt.brand}</p>
                    <p className="text-sm text-gray-700">{alt.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          
          <CardFooter>
            <p className="text-sm text-gray-600 italic">
              These alternatives have higher sustainability scores and may be better choices for the environment.
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ScannerResult;