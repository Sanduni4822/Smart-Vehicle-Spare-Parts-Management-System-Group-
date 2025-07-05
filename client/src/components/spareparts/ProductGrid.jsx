import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import Brakers from '../../assets/sparepartspage/Brakers.png';
import Bumpergrills from '../../assets/sparepartspage/Bumpergrills.png';
import Cardoors from '../../assets/sparepartspage/Cardoors.png';
import Carsensor from '../../assets/sparepartspage/Carsensor.png';
import Cooling from '../../assets/sparepartspage/Cooling.png';
import Drivetrain from '../../assets/sparepartspage/Drivetrain.png';
import Fenders from '../../assets/sparepartspage/Fenders.png';
import Foglight from '../../assets/sparepartspage/Foglight.png';
import Frontbumpers from '../../assets/sparepartspage/Frontbumpers.png';
import Fuelair from '../../assets/sparepartspage/Fuelair.png';
import Headlight from '../../assets/sparepartspage/Headlight.png';
import Hoods from '../../assets/sparepartspage/Hoods.png';
import Mirrors from '../../assets/sparepartspage/Mirrors.png';
import Quaterpanel from '../../assets/sparepartspage/Quaterpanel.png';
import Raditorsupport from '../../assets/sparepartspage/Raditorsupport.png';
import Realbumpers from '../../assets/sparepartspage/Realbumpers.png';
import Steering from '../../assets/sparepartspage/Steering.png';
import Suspension from '../../assets/sparepartspage/Suspension.png';
import Tailgate from '../../assets/sparepartspage/Tailgate.png';
import Taillight from '../../assets/sparepartspage/Taillight.png';

const products = [
  { id: 1, name: 'Brakers', image: Brakers },
  { id: 2, name: 'Bumper Grills', image: Bumpergrills },
  { id: 3, name: 'Car Doors', image: Cardoors },
  { id: 4, name: 'Car Sensor', image: Carsensor },
  { id: 5, name: 'Cooling Systems', image: Cooling },
  { id: 6, name: 'Drivetrain', image: Drivetrain },
  { id: 7, name: 'Fenders', image: Fenders },
  { id: 8, name: 'Fog Lights', image: Foglight },
  { id: 9, name: 'Front Bumpers', image: Frontbumpers },
  { id: 10, name: 'Fuel & Air', image: Fuelair },
  { id: 11, name: 'Headlights', image: Headlight },
  { id: 12, name: 'Hoods', image: Hoods },
  { id: 13, name: 'Mirrors', image: Mirrors },
  { id: 14, name: 'Quater Panels', image: Quaterpanel },
  { id: 15, name: 'Radiator Support', image: Raditorsupport },
  { id: 16, name: 'Real Bumpers', image: Realbumpers },
  { id: 17, name: 'Steering', image: Steering },
  { id: 18, name: 'Suspension', image: Suspension },
  { id: 19, name: 'Tailgates', image: Tailgate },
  { id: 20, name: 'Tail Lights', image: Taillight },
];

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const navigate = useNavigate(); 

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col px-8">
      <div className="flex flex-col gap-6">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="flex flex-col md:flex-row items-center justify-between border rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center w-32 h-45 mb-4 md:mb-5">
              <h3 className="text-md font-semibold truncate max-w-[120px] mb-4 text-center">{product.name}</h3>
              <div className="w-full h-full flex justify-center items-center">
                <img src={product.image} alt={product.name} className="h-24 object-contain" />
              </div>
            </div>

            <div className="flex-1 md:ml-6 text-center md:text-left" />

            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => {
                    if (product.name.toLowerCase() === 'brakers') {
                      navigate('/braker'); //  Navigate to Brakers page
                    }
                    if (product.name.toLowerCase() === 'bumper grills') {
                      navigate('/bumper'); //  Navigate to Bumpers page
                    }
                    if (product.name.toLowerCase() === 'car doors') {
                      navigate('/cardoor'); //  Navigate to Car Doors page
                    }
                    if (product.name.toLowerCase() === 'car sensor') {
                      navigate('/carsensor'); //  Navigate to Car Sensor page
                    }
                    if (product.name.toLowerCase() === 'cooling systems') {
                      navigate('/coolingsystem'); 
                    }
                    if (product.name.toLowerCase() === 'drivetrain') {
                      navigate('/drivetrain'); 
                    }
                    if (product.name.toLowerCase() === 'fenders') {
                      navigate('/fender'); 
                    }
                    if (product.name.toLowerCase() === 'fog lights') {
                      navigate('/foglight'); 
                    }
                    if (product.name.toLowerCase() === 'front bumpers') {
                      navigate('/frontbumpers'); 
                    }
                    if (product.name.toLowerCase() === 'fuel & air') {
                      navigate('/fuelair'); 
                    }
                    if (product.name.toLowerCase() === 'headlights') {
                      navigate('/headlight'); 
                    }
                  }}
                  className="flex items-center justify-center px-4 py-2 border border-blue-400 text-blue-600 rounded-full hover:bg-blue-50"
                >
                  View Details
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductGrid;
