import React from 'react';

// Correctly import the images
import bestseller1 from '../../assets/homepagebestsellers/bestseller1.png';
import bestseller2 from '../../assets/homepagebestsellers/bestseller2.png';
import bestseller3 from '../../assets/homepagebestsellers/bestseller3.png';

// Dummy Best Seller Data
const bestSellers = [
  {
    title: "Latest & Beauty Headlights",
    subtitle: "From $85",
    buttonText: "Shop Now",
    image: bestseller1,
    bgColor: "bg-blue-900",
  },
  {
    title: "Exclusive Car Bonnets",
    subtitle: "New Design 2020",
    buttonText: "Shop Now",
    image: bestseller2,
    bgColor: "bg-red-800",
  },
  {
    title: "Wheels & Tire Collection",
    subtitle: "Latest Designed",
    buttonText: "Shop Now",
    image: bestseller3,
    bgColor: "bg-gray-800",
  },
];

const BestSellerParts = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 uppercase">
        Best Seller Our Parts
      </h2>

      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3 px-4">
        {bestSellers.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition relative ${item.bgColor}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="absolute inset-0 p-6 flex flex-col justify-center">
              <p className="text-white text-sm mb-2">{item.subtitle}</p>
              <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
              <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded hover:bg-gray-200 transition w-fit">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellerParts;
