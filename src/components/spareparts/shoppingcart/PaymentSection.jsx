import React, { useState } from "react";

const PaymentSection = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <div className="bg-blue-50 pt-10 pb-10 px-6 rounded shadow w-full max-w-md">
      {/* Payment Method */}
      <h3 className="font-semibold text-lg">Payment Method</h3>
      <hr className="border-red-500 w-12 my-2" />

      {/* Payment Options */}
      <div className="flex flex-col gap-3 mb-4">
        <label className="flex gap-2 items-start">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={selectedMethod === "card"}
            onChange={() => setSelectedMethod("card")}
            className="mt-1 accent-red-600"
          />
          <span>
            <span className="font-medium text-gray-800">Credit or Debit Card</span><br />
            Pay securely using your Visa or MasterCard.
          </span>
        </label>

        <label className="flex gap-2 items-start">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={selectedMethod === "cod"}
            onChange={() => setSelectedMethod("cod")}
            className="mt-1 accent-red-600"
          />
          <span>
            <span className="font-medium text-gray-800">Cash on Delivery</span><br />
            Pay with cash upon receiving the order.
          </span>
        </label>

        <label className="flex gap-2 items-start">
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={selectedMethod === "paypal"}
            onChange={() => setSelectedMethod("paypal")}
            className="mt-1 accent-red-600"
          />
          <span>
            <span className="font-medium text-gray-800">PayPal</span><br />
            Pay using your PayPal account.
          </span>
        </label>
      </div>

      {/* Payment Instructions */}
      <h3 className="font-semibold text-lg">Payment Instructions</h3>
      <hr className="border-red-500 w-12 my-2" />
      <p className="text-gray-800 mb-4">
        {selectedMethod === "card" && "Enter your card details at the next step after placing the order."}
        {selectedMethod === "cod" && "Ensure you have the exact amount ready. Our courier will collect payment upon delivery."}
        {selectedMethod === "paypal" && "You will be redirected to PayPal to complete the payment."}
      </p>

      {/* Coupon Verification */}
      <h3 className="font-semibold text-lg">Coupon Verification</h3>
      <hr className="border-red-500 w-12 my-2" />
      <div className="flex mt-2">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="border rounded-l px-4 py-2 w-full text-sm"
        />
        <button className="bg-red-600 text-white text-xs px-4 py-2 rounded-r font-semibold hover:bg-red-700 whitespace-nowrap">
          APPLY COUPON
        </button>
      </div>
    </div>
  );
};

export default PaymentSection;
