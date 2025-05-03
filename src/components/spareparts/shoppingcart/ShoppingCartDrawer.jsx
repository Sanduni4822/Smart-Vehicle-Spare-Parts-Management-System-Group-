import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShoppingCartDrawer = ({ isSidebarVisible, handleCloseSidebar, product, quantity }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isSidebarVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={handleCloseSidebar}
      ></div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative h-full p-6">
          {/* Close button */}
          <button
            onClick={handleCloseSidebar}
            className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-800"
          >
            <X />
          </button>

          <h3 className="text-xl font-bold mb-6">Shopping Cart</h3>

          {/* Product Info */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="font-medium">{product?.name}</p>
              <p className="text-sm text-gray-600">
                {quantity} × LKR {product?.price?.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Subtotal */}
          <p className="text-lg font-semibold mb-6">
            Subtotal: LKR {(product?.price * quantity).toLocaleString()}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-auto">
            <Link
              to="/shopping-cart"
              className="py-2 text-center bg-red-500 text-white rounded hover:bg-red-600 font-semibold"
            >
              View Cart
            </Link>
            <Link
              to="/checkout"
              className="py-2 text-center bg-gray-200 text-black rounded hover:bg-gray-300 font-semibold"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartDrawer;
