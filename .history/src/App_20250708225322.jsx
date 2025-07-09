import React from "react";

export default function LandingP() {
  return (
    <div className="relative bg-[#ffa300] text-white py-20 px-10 flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src="/textured-black-background-vector.jpg"
          alt="Fondo"
          className="w-[70%] h-[80%] object-cover"
        />
      </div>

      <div className="relative z-10 w-full text-center">
        <h3 className="text-white font-serif text-9xl tracking-widest mb-2 uppercase">
          CF
        </h3>
        <h1 className="text-5xl font-semibold mb-4 font-serif">ClickFood</h1>
        <button className="bg-black text-[#ffa300] border-2 border-[#ffa300] font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition">
          ORDER NOW
        </button>
      </div>

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
