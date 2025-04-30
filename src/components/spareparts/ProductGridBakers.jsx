import React from 'react';
import Acdelco from '../../assets/sparepartspage/viewdetails/Acdelco.png';
import Bosch from '../../assets/sparepartspage/viewdetails/Bosch.png';
import Denso from '../../assets/sparepartspage/viewdetails/Denso.png';
import Dorman from '../../assets/sparepartspage/viewdetails/Dorman.png';
import Kyb from '../../assets/sparepartspage/viewdetails/Kyb.png';
import Osc from '../../assets/sparepartspage/viewdetails/Osc.png';

export const currentProducts = [
  {
    id: 1,
    name: 'ACDelco Brake Rotor Kit',
    price: 1800,
    image: Acdelco,
    description: 'High-performance OEM brake rotor for safe driving.',
    stock: 'Sold out',
    brand: 'ACDelco',
  },
  {
    id: 2,
    name: 'Bosch Disc Brake Pad Set',
    price: 1800,
    image: Bosch,
    description: 'Reliable and durable brake pads from Bosch.',
    stock: 'In stock',
    brand: 'Bosch',
  },
  {
    id: 3,
    name: 'Denso ABS Speed Sensor',
    price: 1800,
    image: Denso,
    description: 'Precision ABS sensor for accurate speed detection.',
    stock: 'In stock',
    brand: 'Denso',
  },
  {
    id: 4,
    name: 'Dorman Brake Caliper Repair Kit',
    price: 1800,
    image: Dorman,
    description: 'Comprehensive repair kit for brake calipers.',
    stock: 'In stock',
    brand: 'Dorman',
  },
  {
    id: 5,
    name: 'KYB Brake',
    price: 1800,
    image: Kyb,
    description: 'High-quality brake components from KYB.',
    stock: 'Sold out',
    brand: 'KYB',
  },
  {
    id: 6,
    name: 'OSC Premium Brake Rotor',
    price: 1800,
    image: Osc,
    description: 'Premium brake rotor ensuring smooth braking.',
    stock: 'In stock',
    brand: 'OSC',
  },
];

const ProductGridBakers = ({ view }) => {
  const containerClass =
    view === 'grid'
      ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
      : 'flex flex-col gap-6'; // stacked list for list view

  return (
    <div className="px-4 py-6">
      <div className={containerClass}>
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 group"
          >
            {view === 'list' ? (
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-contain"
                />
                <div className="flex-1 space-y-1">
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p><strong>Brand:</strong> {product.brand}</p>
                  <p>
                    <strong>Stock:</strong>{" "}
                    <span className={product.stock === 'Sold out' ? 'text-red-500' : 'text-green-600'}>
                      {product.stock}
                    </span>
                  </p>
                  <p>{product.description}</p>
                  <p className="text-red-600 font-bold text-lg">Rs {product.price}.00</p>
                  <button
                    disabled={product.stock === 'Sold out'}
                    className={`px-6 py-2 rounded-full mt-2 transition-opacity duration-300 ${
                      product.stock === 'Sold out'
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {product.stock === 'Sold out' ? 'Unavailable' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {product.name}
                </h3>
                <p className="text-red-600 font-bold text-center mb-2">
                  Rs {product.price}.00
                </p>
                <div className="flex justify-center">
                  <button
                    disabled={product.stock === 'Sold out'}
                    className={`px-6 py-2 rounded-full transition-opacity duration-300 ${
                      product.stock === 'Sold out'
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-red-600 text-white hover:bg-red-700 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {product.stock === 'Sold out' ? 'Unavailable' : 'Add to Cart'}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGridBakers;
