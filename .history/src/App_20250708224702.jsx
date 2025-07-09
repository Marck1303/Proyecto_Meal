import React from "react";

export default function LandingP() {
  return (
    <div className="relative bg-[#ffa300] text-white py-20 px-10 flex flex-col items-center">
      <div className="absolute inset-0">
        <img src="/public/textured-black-background-vector.jpg" alt="" />
      </div>

      <div className="relative z-10 w-full text-center">
        <h3 className="text-white font-serif text-9xl tracking-widest mb-2 uppercase">
          CF
        </h3>
        <h1 className="text-5xl font-semibold mb-4 font-serif">ClickFood</h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-[#ffa300] text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition">
          ORDER NOW
        </button>
      </div>

      {/* Imágenes de platos */}
      <div className="relative z-10 mt-10 flex gap-8 justify-center items-center">
        <div className="bg-[#ffa300] p-2 rounded-lg">
          <img
            src="/public/plato1.jpg"
            alt="Plato 1"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-[#ffa300] p-2 rounded-lg">
          <img
            src="/public/plato2.jpg"
            alt="Plato 2"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
