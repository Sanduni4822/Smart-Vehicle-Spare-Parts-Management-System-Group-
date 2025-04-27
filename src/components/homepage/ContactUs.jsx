import React from 'react';

const ContactUs = () => {
  return (
    <div className="py-16 bg-[#02002c] text-white flex flex-col items-center px-4">
      <h2 className="text-4xl font-bold text-orange-500 mb-4 uppercase">Contact Us</h2>
      <p className="text-2xl mb-10">Stay connected with us</p>

      <form className="w-full max-w-md flex flex-col gap-6">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded focus:outline-none text-black"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 rounded focus:outline-none text-black"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded focus:outline-none text-black"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded font-semibold transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
