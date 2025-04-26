import React from 'react';

// 📥 Importing images properly from assets
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
    description: "Pistons are most important engine parts compared to others. The piston is a cylindrical plug that moves up and down in the cylinder.",
    image: Piston,
  },
  {
    name: "Blind Spot Mirrors XLarge",
    price: "$80",
    quantity: 346,
    description: "Find here Car Side Mirror, ORVM manufacturers, suppliers & exporters in India. Rear View Mirror Black Plastic For Willys MB Ford GPW.",
    image: Blindspot,
  },
  {
    name: "Auto Clutch & Brake",
    price: "$55",
    quantity: 8,
    description: "Auto Brake Clutch & Gear started in the early 1950s, primarily as an auto and truck brake, clutch and gear parts retailer.",
    image: Autoclutch,
  },
  {
    name: "Car Seats chair",
    price: "$55.5",
    quantity: 4672,
    description: "Shop the top car seat options for infants, toddlers and big kids. Choose from contactless Same Day Delivery or Drive Up and pickup.",
    image: Carseatchair,
  },
  {
    name: "AIR INTAKE SYSTEM",
    price: "$30",
    quantity: 642,
    description: "Function of the air intake system is to allow air to reach the engine. Oxygen in the air is one of the necessary ingredients for combustion.",
    image: Airintake,
  },
  {
    name: "Hanging 4K Camera",
    price: "$90",
    quantity: 227,
    description: "Hanging 4K Camera. Pursue pleasure rationally and avoid consequences that are extremely painful.",
    image: Hangingcamera,
  },
];

const NewParts = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-8 uppercase">
        New Our Parts
      </h2>
      <div className="max-w-7xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200 p-6 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-800">
              Price: <strong>{product.price}</strong>
            </p>
            <p className="text-gray-800 mb-2">
              Quantity: <strong>{product.quantity}</strong>
            </p>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-auto">
              BOOK NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewParts;
