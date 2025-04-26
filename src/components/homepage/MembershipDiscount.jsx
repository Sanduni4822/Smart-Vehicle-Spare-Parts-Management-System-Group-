import React from 'react';
import { FaSearch } from 'react-icons/fa'; // import a clean search icon
import membershipCar from '../../assets/homepagemembership/membershipcar.png'; // correct background image

const MembershipDiscount = () => {
  return (
    <div className="relative text-white py-16 overflow-hidden">
      {/* Background Image without opacity */}
      <img
        src={membershipCar}
        alt="Membership Car Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-center uppercase drop-shadow-lg">
          Get Instant Discount for Membership
        </h2>
        <p className="text-center text-lg mb-8 drop-shadow-md">
          Subscribe our newsletter and all latest news of our latest product, promotion and offers
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Subscribe"
            className="px-4 py-2 rounded-l-lg text-black focus:outline-none"
          />
          <button className="bg-gray-800 hover:bg-gray-700 px-4 rounded-r-lg flex items-center justify-center px-4">
            <FaSearch className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipDiscount;
