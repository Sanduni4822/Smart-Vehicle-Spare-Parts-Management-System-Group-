import React from "react";
import {
  FaTachometerAlt, FaShoppingCart, FaHeart, FaCommentDots, FaUser, FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountSidebar = ({ selectedTab, setSelectedTab }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const tabItem = (icon, label, tabKey) => (
    <li
      className={`flex items-center gap-3 cursor-pointer ${
        selectedTab === tabKey ? 'text-red-600 font-medium' : 'text-gray-700 hover:text-red-600'
      }`}
      onClick={() => setSelectedTab(tabKey)}
    >
      {icon}
      {label}
    </li>
  );

  return (
    <div className="w-full max-w-xs p-4 space-y-4">
      <h3 className="text-sm text-gray-500 mb-10">
        Home &gt; <span className="text-gray-800 font-medium">My Account</span>
      </h3>
      <ul className="space-y-8 pt-4">
        {tabItem(<FaTachometerAlt />, 'Dashboard', 'dashboard')}
        {tabItem(<FaShoppingCart />, 'My Orders', 'orders')}
        {tabItem(<FaHeart />, 'My Wishlist', 'wishlist')}
        {tabItem(<FaCommentDots />, 'My Reviews', 'reviews')}
        {tabItem(<FaUser />, 'My Profile', 'editProfile')}
        <li
          className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-red-600"
          onClick={handleLogout}
        >
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
