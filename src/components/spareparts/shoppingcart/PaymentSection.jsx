import React from "react";

const PaymentSection = () => {
  return (
    <div className="bg-blue-50 p-6 rounded shadow w-full max-w-md">
      {/* Payment Method */}
      <h3 className="font-semibold text-lg">Payment Method</h3>
      <hr className="border-red-500 w-12 my-2" />
      <div className="flex items-start gap-2 mb-4">
        <input
          type="radio"
          name="paymentMethod"
          className="mt-1 accent-red-600"
          defaultChecked
        />
        <p>
          <span className="font-medium text-gray-500">Bank Transfer</span> Make
          your payment directly into our bank account.
        </p>
      </div>

      {/* Payment Instructions */}
      <h3 className="font-semibold text-lg">Payment Instructions</h3>
      <hr className="border-red-500 w-12 my-2" />
      <p className="text-gray-800 mb-4">
        Please use your Order ID as the payment reference.
      </p>

      {/* Coupon Verification */}
      <h3 className="font-semibold text-lg">Coupon Verification</h3>
      <hr className="border-red-500 w-12 my-2" />
      <div className="flex mt-2">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="border rounded-l px-4 py-2 w-full"
        />
        <button className="bg-red-600 text-white px-4 py-2 rounded-r font-semibold hover:bg-red-700">
          APPLY COUPON
        </button>
      </div>
    </div>
  );
};

export default PaymentSection;
