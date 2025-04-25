import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaShoppingCart, FaUser } from 'react-icons/fa';

const NavBar = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-600" />
          <span>vehiclespare@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-blue-600" />
          <span>0479892752</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span>DriveFix</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Spare Parts</a>
          <a href="#">Find Garages</a>
          <a href="#">Emergency</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Cart & Login */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-700">
            <FaShoppingCart />
            <span>₹ 0.00</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700">
            <FaUser />
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
