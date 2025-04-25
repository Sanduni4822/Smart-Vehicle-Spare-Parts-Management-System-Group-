import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaShoppingCart,
  FaUser,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import Garage from '../../assets/Garage.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <span>vehiclespare@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-600" />
            <span>0479892752</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaPinterestP /></a>
          <div className="flex items-center gap-1">
            <FaUser />
            <a href="#">Login</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Garage}
            alt="Logo"
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <a href="#">Spare Parts</a>
          <a href="#">Find Garages</a>
          <a href="#">Emergency</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <div className="flex items-center gap-1">
            <FaShoppingCart />
            <span className="hidden sm:inline">₹ 0.00</span>
          </div>
          {/* Hamburger */}
          <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="flex flex-col items-center md:hidden bg-white gap-4 py-4 shadow-md text-gray-700 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <a href="#">Spare Parts</a>
          <a href="#">Find Garages</a>
          <a href="#">Emergency</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#"><FaUser className="inline mr-1" /> Login</a>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
