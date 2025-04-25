import React from 'react';

function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* 🔁 Fullscreen Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/homepagevedio.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* 🌫️ Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* 📝 Overlay Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Smart Vehicle Spare Parts
        </h1>
        <p className="text-white text-lg md:text-xl max-w-xl drop-shadow-md">
          Your one-stop solution for reliable spare parts and expert vehicle services.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
