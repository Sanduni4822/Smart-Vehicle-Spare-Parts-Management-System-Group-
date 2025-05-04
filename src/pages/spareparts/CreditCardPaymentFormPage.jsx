import React from "react";

const CreditCardPaymentFormPage = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-lg mx-auto border border-gray-200">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">PAYMENT METHOD</h2>

      {/* Credit/Debit Card Section */}
      <div className="border border-gray-300 rounded p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-gray-800">CREDIT / DEBIT CARD</h3>
          <div className="flex gap-2">
            <img src="https://img.icons8.com/color/32/000000/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/32/000000/mastercard.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/32/000000/amex.png" alt="Amex" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          You may be directed to your bank's 3D secure process to authenticate your information.
        </p>

        {/* Card Number */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
          <input
            type="text"
            placeholder="**** **** **** 6350"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Expiry Date and CVC */}
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CVC / CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Name on Card */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name on card</label>
          <input
            type="text"
            placeholder="Samanta Smith"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCardPaymentFormPage;
