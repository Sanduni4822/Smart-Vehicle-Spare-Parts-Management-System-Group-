import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  FaTimes,
} from 'react-icons/fa';
import Garage from '../../assets/Garage.png';

const NavBar = ({ handleSidebarToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentlocation = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (currentlocation.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollToContact?.();
      }, 300);
    } else {
      window.scrollToContact?.();
    }
    setMenuOpen(false);
  };

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
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white px-1 py-0 flex justify-between items-center min-h-[50px]">
        <div className="flex items-center">
          <img src={Garage} alt="Logo" className="h-12 md:h-16 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium text-sm">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/emer" className="hover:text-blue-600">Emergency</Link>
          <Link to="/spareparts" className="hover:text-blue-600">Spare Parts</Link>
          <Link to="/garage" className="hover:text-blue-600">Find Garages</Link>
          <Link to="/aboutus" className="hover:text-blue-600">About</Link>
          <button onClick={handleContactClick} className="hover:text-blue-600">Contact</button>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3 text-gray-700 text-sm">
          <button
            className="flex items-center gap-1"
            onClick={handleSidebarToggle} // 🔁 Trigger the Drawer from MainLayout
          >
            <FaShoppingCart />
            <span className="hidden sm:inline">₹ 0.00</span>
          </button>
          <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="flex flex-col items-center md:hidden bg-white gap-4 py-4 shadow-md text-gray-700 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/spareparts" onClick={() => setMenuOpen(false)}>Spare Parts</Link>
          <Link to="/emer" onClick={() => setMenuOpen(false)}>Emergency</Link>
          <Link to="/garage" onClick={() => setMenuOpen(false)}>Find Garages</Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)}>About</Link>
          <button onClick={handleContactClick}>Contact</button>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <FaUser className="inline mr-1" /> Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
