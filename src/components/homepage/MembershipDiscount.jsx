import React from 'react';
import membershipCar from '../../assets/homepagemembership/membershipcar.png'; // your new background image without text

const MembershipDiscount = () => {
  return (
    <div className="relative bg-black text-white py-16">
      <img
        src={membershipCar}
        alt="Membership Car Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-center uppercase">
          Get Instant Discount for Membership
        </h2>
        <p className="text-center text-lg mb-8">
          Subscribe our newsletter and all latest news of our latest product, promotion and offers
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Subscribe"
            className="px-4 py-2 rounded-l-lg text-black focus:outline-none"
          />
          <button className="bg-gray-800 hover:bg-gray-700 px-4 rounded-r-lg">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipDiscount;
