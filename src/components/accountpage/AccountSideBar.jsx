import React from "react";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaHeart,
  FaCommentDots,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="w-full max-w-xs p-4 space-y-4">
      {/* Breadcrumb */}
      <h3 className="text-sm text-gray-500 mb-10">
        Home &gt;{" "}
        <span className="text-gray-800 font-medium">My Account</span>
      </h3>

      {/* Sidebar Menu */}
      <ul className="space-y-8 pt-4">
        <li className="flex items-center gap-3 text-red-600 font-medium">
          <FaTachometerAlt />
          Dashboard
        </li>
        <li className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-red-600">
          <FaShoppingCart />
          My Orders
        </li>
        <li className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-red-600">
          <FaHeart />
          My Wishlist
        </li>
        <li className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-red-600">
          <FaCommentDots />
          My Reviews
        </li>
        <li className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-red-600">
          <FaUser />
          My Profile
        </li>
        <li
          className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-red-600"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
