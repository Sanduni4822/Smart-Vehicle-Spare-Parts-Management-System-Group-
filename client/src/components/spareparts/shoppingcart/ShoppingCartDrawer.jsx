import React, { useState } from 'react';
import { X } from 'lucide-react';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ShoppingCartDrawer = ({ isSidebarVisible, handleCloseSidebar, product, quantity }) => {
  const [cartProduct, setCartProduct] = useState(product);
  const [cartQuantity, setCartQuantity] = useState(quantity);
  const navigate = useNavigate();

  const subtotal = cartProduct?.price * cartQuantity;

  const handleViewCart = () => {
    handleCloseSidebar();
    navigate("/view-cart", { state: { product: { ...cartProduct, quantity: cartQuantity } } });
  };

  const handleRemoveProduct = () => {
    setCartProduct(null);
    setCartQuantity(0);
  };

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
          {/* Header */}
          <div className="bg-red-600 text-white px-6 py-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Shopping Cart</h3>
            <button onClick={handleCloseSidebar} className="text-white">
              <X />
            </button>
          </div>

          {/* Content */}
          <div className="flex-grow flex items-center justify-center overflow-auto p-6">
            {!cartProduct ? (
              <div className="flex flex-col items-center justify-center text-center">
                <FiShoppingCart
                  className="text-red-600 w-24 h-24 mb-4"
                  style={{ transform: 'rotate(-20deg)' }}
                />
                <p className="text-lg text-gray-700">Your cart is empty</p>
              </div>
            ) : (
              <div className="flex justify-between items-start gap-4 w-full">
                <img
                  src={cartProduct.image}
                  alt={cartProduct.name}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm truncate w-52">{cartProduct.name}</p>
                  <p className="text-sm text-gray-600">
                    {cartQuantity} × LKR {cartProduct.price?.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={handleRemoveProduct}
                  className="text-gray-500 hover:text-red-600 text-lg"
                >
                  <X size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Subtotal */}
          {cartProduct && (
            <div className="border-t px-6 py-4">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium">Subtotal</span>
                <span className="text-base font-semibold text-red-600">
                  LKR {subtotal?.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {/* Footer Buttons */}
          {cartProduct && (
            <div className="px-6 py-4 border-t flex gap-4">
              <button
                onClick={handleViewCart}
                className="w-1/2 py-2 bg-white border border-red-600 text-red-600 text-center font-bold rounded hover:bg-red-600 hover:text-white transition"
              >
                VIEW CART
              </button>
              <button
                onClick={() => {
                  handleCloseSidebar();
                  navigate("/checkout");
                }}
                className="w-1/2 py-2 bg-red-600 text-white text-center font-bold rounded hover:bg-red-700 transition"
              >
                CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCartDrawer;
