import React, { useState } from "react";

const PaymentOrderSummary = ({ agreed, setAgreed, onPlaceOrder }) => {
  const [shipping, setShipping] = useState("free");

  return (
    <div className="bg-gray-100 p-6 rounded shadow max-w-md w-full">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <hr className="border-red-500 w-12 my-2" />

      <div className="flex justify-between mb-4">
        <p className="text-gray-800">
          Honda Genuine HCF-2 Transmission Fluid 08260-99964 FOR VEZEL, CIVIC,
          CRV, FIT, SHUTTLE, GRACE x2
        </p>
        <p className="font-semibold">LKR 22,000.00</p>
      </div>

      <div className="flex justify-between mb-4">
        <span className="text-gray-800">Subtotal</span>
        <span className="font-semibold">LKR 44,000.00</span>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Shipping Method</h3>
        {["Free Shipping", "Local Pickup", "Flat Rate"].map((label, i) => (
          <div key={i} className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="shipping"
                className="accent-red-600"
                checked={shipping === label.toLowerCase().split(" ")[0]}
                onChange={() => setShipping(label.toLowerCase().split(" ")[0])}
              />
              {label}
            </label>
            <span>{label === "Flat Rate" ? "LKR 300.00" : "LKR 0.00"}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center text-xl font-semibold mb-4">
        <span>Total</span>
        <span>LKR 44,000.00</span>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <label>
          I agree to the <span className="text-red-600 font-medium">Terms & Conditions</span>
        </label>
      </div>

      <button
        onClick={onPlaceOrder}
        className={`w-full py-3 rounded font-semibold transition-colors duration-300 ${
          agreed ? "bg-red-600 hover:bg-red-700 text-white" : "bg-blue-500 text-white cursor-not-allowed"
        }`}
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default PaymentOrderSummary;
