import React from 'react';

// Import images
import Piston from '../../assets/homepagenewparts/Piston.jpeg';
import Blindspot from '../../assets/homepagenewparts/Blindspot.jpeg';
import Autoclutch from '../../assets/homepagenewparts/Autoclutch.jpeg';
import Carseatchair from '../../assets/homepagenewparts/Carseatchair.jpeg';
import Airintake from '../../assets/homepagenewparts/Airintake.jpeg';
import Hangingcamera from '../../assets/homepagenewparts/Hangingcamera.jpeg';

const products = [
  {
    name: "Pistons",
    price: "$70",
    quantity: 718,
    description: "Pistons are most important engine parts compared to others.",
    image: Piston,
  },
  {
    name: "Blind Spot Mirrors XLarge",
    price: "$80",
    quantity: 346,
    description: "Find here Car Side Mirror, ORVM manufacturers, suppliers & exporters in India.",
    image: Blindspot,
  },
  {
    name: "Auto Clutch & Brake",
    price: "$55",
    quantity: 8,
    description: "Auto Brake Clutch & Gear started in the early 1950s.",
    image: Autoclutch,
  },
  {
    name: "Car Seats chair",
    price: "$55.5",
    quantity: 4672,
    description: "Shop the top car seat options for infants, toddlers and kids.",
    image: Carseatchair,
  },
  {
    name: "AIR INTAKE SYSTEM",
    price: "$30",
    quantity: 642,
    description: "Allows air to reach the engine. Oxygen in the air is needed for combustion.",
    image: Airintake,
  },
  {
    name: "Hanging 4K Camera",
    price: "$90",
    quantity: 227,
    description: "Professional Hanging 4K Camera for monitoring solutions.",
    image: Hangingcamera,
  },
];

const NewParts = () => {
  return (
    <div className="py-10 bg-[#f9f9f9]">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-12 uppercase">
        New Our Parts
      </h2>
      <div className="max-w-7xl mx-auto px-4 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 p-8 flex flex-col items-center text-center transform hover:-translate-y-2"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-800 text-lg">
              Price: <strong>{product.price}</strong>
            </p>
            <p className="text-gray-800 text-lg mb-3">
              Quantity: <strong>{product.quantity}</strong>
            </p>
            <p className="text-gray-600 text-sm mb-6">{product.description}</p>
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 px-6 rounded-full mt-auto">
              BOOK NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewParts;
