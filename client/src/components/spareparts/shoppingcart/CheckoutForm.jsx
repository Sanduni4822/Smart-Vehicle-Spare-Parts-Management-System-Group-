import React, { useState, useImperativeHandle, forwardRef } from "react";

const CheckoutForm = forwardRef((props, ref) => {
  const [createAccount, setCreateAccount] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    zip: '',
    country: 'Sri Lanka',
    state: '',
  });

  const [errors, setErrors] = useState({});

  // Validation logic exposed via ref
  useImperativeHandle(ref, () => ({
    validateForm: () => {
      const newErrors = {};

      if (!formData.email) newErrors.email = "The email field is required.";
      if (!formData.firstName) newErrors.firstName = "The first name field is required.";
      if (!formData.lastName) newErrors.lastName = "The last name field is required.";
      if (!formData.address1) newErrors.address1 = "The address line 1 field is required.";
      if (!formData.city) newErrors.city = "The city field is required.";
      if (!formData.zip) newErrors.zip = "The postcode / zip field is required.";
      if (!formData.state) newErrors.state = "The state / province field is required.";

      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    }
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error as user types
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const inputClass = (field) =>
    `w-full border rounded px-3 py-2 ${errors[field] ? "border-red-500" : ""}`;

  return (
    <div className="bg-blue-50 p-11 rounded shadow">
      {/* Account Details */}
      <h2 className="text-lg font-semibold mb-2">Account Details</h2>
      <hr className="border-red-500 w-10 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Email <span className="text-red-500">*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            className={inputClass("email")} placeholder="Enter your email" />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
            className={inputClass("phone")} placeholder="Enter your phone number" />
        </div>
      </div>

      {/* Create Account */}
      <div className="mt-3">
        <label className="inline-flex items-center">
          <input type="checkbox" className="mr-2" checked={createAccount} onChange={() => setCreateAccount(!createAccount)} />
          <span className="text-sm">Create an account?</span>
        </label>
      </div>

      {createAccount && (
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            You can create your account after checkout.
            <br />
            Already have an account?{" "}
            <a href="/login" className="text-red-600 font-semibold hover:underline">
              Login here
            </a>
          </p>
        </div>
      )}

      {/* Billing Details */}
      <h2 className="text-lg font-semibold mt-8 mb-2">Billing Details</h2>
      <hr className="border-red-500 w-10 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">First Name <span className="text-red-500">*</span></label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
            className={inputClass("firstName")} />
          {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block font-medium mb-1">Last Name <span className="text-red-500">*</span></label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
            className={inputClass("lastName")} />
          {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-medium mb-1">Street Address <span className="text-red-500">*</span></label>
        <input type="text" name="address1" value={formData.address1} onChange={handleChange}
          className={inputClass("address1")} placeholder="Address Line 1" />
        {errors.address1 && <p className="text-red-600 text-sm">{errors.address1}</p>}

        <input type="text" name="address2" value={formData.address2} onChange={handleChange}
          className="w-full border rounded px-3 py-2 mt-2" placeholder="Address Line 2 (optional)" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-medium mb-1">City <span className="text-red-500">*</span></label>
          <input type="text" name="city" value={formData.city} onChange={handleChange}
            className={inputClass("city")} />
          {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
        </div>
        <div>
          <label className="block font-medium mb-1">Postcode / ZIP <span className="text-red-500">*</span></label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange}
            className={inputClass("zip")} />
          {errors.zip && <p className="text-red-600 text-sm">{errors.zip}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-medium mb-1">Country</label>
          <select name="country" value={formData.country} onChange={handleChange}
            className="w-full border rounded px-3 py-2">
            <option>Sri Lanka</option>
            <option>India</option>
            <option>USA</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">State / Province <span className="text-red-500">*</span></label>
          <input type="text" name="state" value={formData.state} onChange={handleChange}
            className={inputClass("state")} />
          {errors.state && <p className="text-red-600 text-sm">{errors.state}</p>}
        </div>
      </div>

      {/* Order Note */}
      <div className="mt-4">
        <label className="block font-medium mb-1">Order Note</label>
        <textarea rows="4" className="w-full border rounded px-3 py-2" placeholder="Special note for delivery" />
      </div>
    </div>
  );
});

export default CheckoutForm;
