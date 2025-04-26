import React, { useState, useEffect } from 'react';
import Tire from '../../assets/Tire.jpeg'; // Correct relative path

function FlashDeals() {
  const [seconds, setSeconds] = useState(52); // 🔥 Start at 52

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 59)); // 🔄 Decrease every second
    }, 1000);

    return () => clearInterval(interval); // 🧹 Cleanup on unmount
  }, []);

  return (
    <div className="w-full bg-color: #f5f5f5 py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10">
      
      {/* Tire Image Section */}
      <div className="w-auto bg-gray-100 rounded flex items-center justify-center">
        <img
          src={Tire}
          alt="Tire"
          className="w-[280px] md:w-[350px] object-contain bg-gray-100"
        />
      </div>

      {/* Deal Content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">FLASH DEALS</h2>
        <p className="text-xl text-gray-600 mb-5">HURRY UP AND GET 25% DISCOUNT</p>

        {/* CTA Button */}
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 px-6 rounded mb-6">
          ADD TO CART
        </button>

        {/* Countdown Timer */}
        <div className="flex gap-4 justify-center md:justify-start">
          {[
            { value: '15', label: 'days' },
            { value: '10', label: 'hours' },
            { value: '24', label: 'min' },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 text-white px-4 py-2 rounded text-center">
              <div className="text-xl font-bold">{item.value}</div>
              <div className="text-sm">{item.label}</div>
            </div>
          ))}

          {/* 🔥 Only "sec" value dynamic */}
          <div className="bg-gray-800 text-white px-4 py-2 rounded text-center">
            <div className="text-xl font-bold">{seconds}</div>
            <div className="text-sm">sec</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default FlashDeals;
