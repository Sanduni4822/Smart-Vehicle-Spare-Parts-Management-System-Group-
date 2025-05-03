import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShoppingCartDrawer = ({ isSidebarVisible, handleCloseSidebar, product, quantity }) => {
  const subtotal = product?.price * quantity;

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
        <div className="flex flex-col h-full">
          {/* Top Bar */}
          <div className="bg-red-600 text-white px-6 py-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Shopping Cart</h3>
            <button onClick={handleCloseSidebar} className="text-white">
              <X />
            </button>
          </div>

          {/* Product Info */}
          <div className="p-6 flex-grow overflow-auto">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-14 h-14 object-cover rounded"
              />
              <div className="flex flex-col">
                <p className="font-medium text-sm truncate w-52">{product?.name}</p>
                <p className="text-sm text-gray-600">
                  {quantity} × LKR {product?.price?.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Subtotal Section */}
          <div className="border-t px-6 py-4">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium">Subtotal</span>
              <span className="text-base font-semibold text-red-600">
                LKR {subtotal?.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 border-t flex gap-4">
            <Link
              to="/shopping-cart"
              className="w-1/2 py-2 bg-white border border-red-500 text-black text-center font-bold rounded hover:bg-white transition"
            >
              VIEW CART
            </Link>
            <Link
              to="/checkout"
              className="w-1/2 py-2 bg-red-600 text-white text-center font-bold rounded hover:bg-red-700 transition"
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartDrawer;
