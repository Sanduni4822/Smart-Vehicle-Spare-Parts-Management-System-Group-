import React from 'react';
import Tire from '../../assets/Tire.jpeg'; // ✅ Correct relative path

function FlashDeals() {
  return (
    <div className="w-full bg-gray-100 py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10">
      <div className='w-auto'>
      {/* 📸 Product Image */}
      <img
        src={Tire}
        alt="Tire"
        className="w-[280px] md:w-[350px] object-contain"
      />
      </div>
      {/* 📣 Deal Content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">FLASH DEALS</h2>
        <p className="text-xl text-gray-600 mb-5">HURRY UP AND GET 25% DISCOUNT</p>

        {/* 🛒 CTA Button */}
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 px-6 rounded mb-6">
          ADD TO CART
        </button>

        {/* ⏰ Countdown Timer (Static values) */}
        <div className="flex gap-4 justify-center md:justify-start">
          {[
            { value: '15', label: 'days' },
            { value: '10', label: 'hours' },
            { value: '24', label: 'min' },
            { value: '52', label: 'sec' },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 text-white px-4 py-2 rounded text-center">
              <div className="text-xl font-bold">{item.value}</div>
              <div className="text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlashDeals;
