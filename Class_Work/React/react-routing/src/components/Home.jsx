import React from "react";

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/33754560/pexels-photo-33754560.jpeg')",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">
          Explore The World With Us 🌍
        </h1>
        <p className="text-lg mb-8">
          Discover amazing places at exclusive deals and unforgettable journeys
        </p>
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl shadow-lg transition">
          Book Your Journey
        </button>
      </div>
    </div>
  );
};

export default Home;
