import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // You also imported FaHeart, but not using it yet.
import Pagination from './Pagination'; // ✅ Import your Pagination component

import Brakers from '../../assets/sparepartspage/Brakers.png';
import Bumpergrills from '../../assets/sparepartspage/Bumpergrills.png';
import Cardoors from '../../assets/sparepartspage/Cardoors.png';
import Carsensor from '../../assets/sparepartspage/Carsensor.png';
import Cooling from '../../assets/sparepartspage/Cooling.png';

const products = [
  { id: 1, name: 'Brakers', image: Brakers },
  { id: 2, name: 'Bumper Grills', image: Bumpergrills },
  { id: 3, name: 'Car Doors', image: Cardoors },
  { id: 4, name: 'Car Sensor', image: Carsensor },
  { id: 5, name: 'Cooling Systems', image: Cooling },
];

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; // 👉 Show 3 products per page

  // Calculate pages
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col px-8">

      {/* Line-by-Line Products */}
      <div className="flex flex-col gap-6">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="flex flex-col md:flex-row items-center justify-between border rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
          >
            {/* Name + Image Section */}
            <div className="flex flex-col items-center w-32 h-40 mb-4 md:mb-0">
              <h3 className="text-md font-semibold truncate max-w-[120px] mb-2 text-center">{product.name}</h3>
              <div className="w-full h-full flex justify-center items-center">
                <img src={product.image} alt={product.name} className="h-24 object-contain" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 md:ml-6 text-center md:text-left" />

            {/* Price and Buttons */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2 items-center">
                {/* View Details Button */}
                <button className="flex items-center justify-center px-4 py-2 border border-blue-400 text-blue-600 rounded-full hover:bg-blue-50">
                  View Details
                </button>

                {/* Add to Cart Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                  <FaShoppingCart className="text-white" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Pagination is here */}
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

    </div>
  );
};

export default ProductGrid;
