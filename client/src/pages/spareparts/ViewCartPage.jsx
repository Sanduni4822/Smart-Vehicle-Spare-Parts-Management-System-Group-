import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CartItem from "../../components/spareparts/shoppingcart/CartItem";
import OrderSummary from "../../components/spareparts/shoppingcart/OrderSummary";
import StepIndicator from '../../components/spareparts/shoppingcart/StepIndicator';

const ViewCartPage = () => {
  const location = useLocation();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(product?.quantity || 1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleShippingMethodChange = (e) => {
    // Handle shipping method change
  };

  const handleProceedToCheckout = () => {
    // Checkout logic
  };

  const totalPrice = product?.price ? product.price * quantity : 0;

  return (
    <div className="container mx-auto p-6">
      <StepIndicator activeStep={1} /> {/* Step 1 for ViewCartPage */}

      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-semibold">Shopping Cart</h2>
          <div className="bg-white shadow-md rounded-lg mt-4 p-4">
            {product?.name ? (
              <CartItem
                product={product}
                quantity={quantity}
                handleQuantityChange={handleQuantityChange}
              />
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>

        <OrderSummary
          totalPrice={totalPrice}
          handleShippingMethodChange={handleShippingMethodChange}
          handleProceedToCheckout={handleProceedToCheckout}
        />
      </div>
    </div>
  );
};

export default ViewCartPage;
