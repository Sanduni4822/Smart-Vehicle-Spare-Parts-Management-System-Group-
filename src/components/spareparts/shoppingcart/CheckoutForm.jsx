import React, { useState } from "react";

const CheckoutForm = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);

  return (
    <div className="bg-blue-50 p-11 rounded shadow">
      {/* Account Details */}
      <h2 className="text-lg font-semibold mb-2">Account Details</h2>
      <hr className="border-red-500 w-10 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="tel"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div className="mt-3">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={createAccount}
            onChange={() => setCreateAccount(!createAccount)}
          />
          <span className="text-sm">Create an account?</span>
        </label>
      </div>

      {createAccount && (
        <div className="mt-4">
          <p className="text-sm text-gray-700 mb-2">
            Create an account by entering the information below. If you are a returning customer please login from the top of the page.
          </p>
          <label className="block font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your password"
          />
        </div>
      )}

      {/* Billing Details */}
      <h2 className="text-lg font-semibold mt-8 mb-2">Billing Details</h2>
      <hr className="border-red-500 w-10 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-medium mb-1">
          Street Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 mb-2"
          placeholder="Address Line 1"
        />
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          placeholder="Address Line 2 (optional)"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-medium mb-1">
            City <span className="text-red-500">*</span>
          </label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Postcode / ZIP <span className="text-red-500">*</span>
          </label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-medium mb-1">
            Country <span className="text-red-500">*</span>
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>Sri Lanka</option>
            <option>India</option>
            <option>USA</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">
            State / Province <span className="text-red-500">*</span>
          </label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
      </div>

      {/* Shipping Address Toggle */}
      <div className="mt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={shipToDifferentAddress}
            onChange={() => setShipToDifferentAddress(!shipToDifferentAddress)}
          />
          <span className="text-sm">Ship to a different address</span>
        </label>
      </div>

      {/* Shipping Details Form */}
      {shipToDifferentAddress && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Shipping Details</h2>
          <hr className="border-red-500 w-10 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-medium mb-1">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 mb-2"
              placeholder="Address Line 1"
            />
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Address Line 2 (optional)"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block font-medium mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Postcode / ZIP <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block font-medium mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>Sri Lanka</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">
                State / Province <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
          </div>
        </div>
      )}

      {/* Order Note */}
      <div className="mt-4">
        <label className="block font-medium mb-1">Order Note</label>
        <textarea
          rows="4"
          className="w-full border rounded px-3 py-2"
          placeholder="Special note for delivery"
        ></textarea>
      </div>
    </div>
  );
};

export default CheckoutForm;
