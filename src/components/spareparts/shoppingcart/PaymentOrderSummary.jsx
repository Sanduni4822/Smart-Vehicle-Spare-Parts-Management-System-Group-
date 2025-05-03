import React, { useState } from "react";

const PaymentOrderSummary = () => {
  const [shipping, setShipping] = useState("free");

  const handleShippingChange = (method) => {
    setShipping(method);
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow max-w-md w-full">
      {/* Order Summary Header */}
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <hr className="border-red-500 w-12 my-2" />

      {/* Product Info */}
      <div className="flex justify-between mb-4">
        <p className="text-gray-800">
          Honda Genuine HCF-2 Transmission Fluid 08260-99964 FOR VEZEL, CIVIC,
          CRV, FIT, SHUTTLE, GRACE x2
        </p>
        <p className="font-semibold">LKR 22,000.00</p>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between mb-4">
        <span className="text-gray-800">Subtotal</span>
        <span className="font-semibold">LKR 44,000.00</span>
      </div>

      {/* Shipping Method */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Shipping Method</h3>
        <div className="flex items-center justify-between mb-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping"
              className="accent-red-600"
              checked={shipping === "free"}
              onChange={() => handleShippingChange("free")}
            />
            Free Shipping
          </label>
          <span>LKR 0.00</span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping"
              className="accent-red-600"
              checked={shipping === "local"}
              onChange={() => handleShippingChange("local")}
            />
            Local Pickup
          </label>
          <span>LKR 0.00</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping"
              className="accent-red-600"
              checked={shipping === "flat"}
              onChange={() => handleShippingChange("flat")}
            />
            Flat Rate
          </label>
          <span>LKR 300.00</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center text-xl font-semibold mb-4">
        <span>Total</span>
        <span>LKR 44,000.00</span>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        <label>
          I agree to the{" "}
          <span className="text-red-600 font-medium">Terms & Conditions</span>
        </label>
      </div>

      {/* Place Order Button */}
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded">
        PLACE ORDER
      </button>
    </div>
  );
};

export default PaymentOrderSummary;
