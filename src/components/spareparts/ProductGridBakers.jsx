import React from 'react';
import Acdelco from '../../assets/sparepartspage/viewdetails/Acdelco.png';
import Bosch from '../../assets/sparepartspage/viewdetails/Bosch.png';
import Denso from '../../assets/sparepartspage/viewdetails/Denso.png';
import Dorman from '../../assets/sparepartspage/viewdetails/Dorman.png';
import Kyb from '../../assets/sparepartspage/viewdetails/Kyb.png';
import Osc from '../../assets/sparepartspage/viewdetails/Osc.png';

const currentProducts = [
  { id: 1, name: 'ACDelco Brake Rotor Kit', price: 1800, image: Acdelco },
  { id: 2, name: 'Bosch Disc Brake Pad Set', price: 1800, image: Bosch },
  { id: 3, name: 'Denso ABS Speed Sensor ', price: 1800, image: Denso },
  { id: 4, name: 'Dorman Brake Caliper Repair Kit', price: 1800, image: Dorman },
  { id: 5, name: 'KYB Brake', price: 1800, image: Kyb },
  { id: 6, name: 'OSC Premium Brake Rotor', price: 1800, image: Osc },
];

const ProductGridBakers = () => {
  return (
    <div className="px-4 py-6">
      {/* Removed product count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-red-600 font-bold mb-2">Rs {product.price}.00</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGridBakers;
