import React from 'react';

import Brakers from '../../assets/sparepartspage/Brakers.png';
import Bumpergrills from '../../assets/sparepartspage/Bumpergrills.png';
import Cardoors from '../../assets/sparepartspage/Cardoors.png';

const products = [
  {
    id: 1,
    name: 'Brake Pads Set',
    price: 8166,
    image: Brakers,
  },
  {
    id: 2,
    name: 'Bumper Grills',
    price: 2595,
    image: Bumpergrills,
  },
  {
    id: 3,
    name: 'Car Doors',
    price: 504,
    image: Cardoors,
  },
  // Add more products...
];

const ProductGrid = () => {
  return (
    <div className="flex flex-col px-8">

      {/* Line-by-Line Products */}
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="flex flex-col md:flex-row items-center justify-between border rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
          >
            {/* Name + Image Section */}
            <div className="flex flex-col items-center w-32 h-40 mb-4 md:mb-0">
              {/* Product Name above */}
              <h3 className="text-md font-semibold truncate max-w-[120px] mb-2 text-center">{product.name}</h3>
              
              {/* Image below */}
              <div className="w-full h-full flex justify-center items-center">
                <img src={product.image} alt={product.name} className="h-24 object-contain" />
              </div>
            </div>

            {/* Info (Empty here if you want to add more later) */}
            <div className="flex-1 md:ml-6 text-center md:text-left" />

            {/* Price and Buttons */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-blue-700 font-bold text-xl">₹{product.price}</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100">
                  View Details
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
