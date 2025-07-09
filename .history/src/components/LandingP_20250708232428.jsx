import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingP() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#ffa300] min-h-screen flex items-center justify-center">
      <div className="bg-black p-10 rounded-lg text-center shadow-2xl">
        <div className="flex justify-between mb-8 gap-8">
          <div className="bg-[#ffa300] w-40 h-40 rounded-lg shadow-lg flex items-center justify-center text-black font-semibold text-lg">
            Plato 1
          </div>
          <div className="bg-[#ffa300] w-40 h-40 rounded-lg shadow-lg flex items-center justify-center text-black font-semibold text-lg">
            Plato 2
          </div>
        </div>

        <h1 className="text-7xl font-extrabold text-white mb-2">CF</h1>
        <h2 className="text-3xl font-bold text-white mb-6">ClickFood</h2>

        <button
          onClick={() => navigate("/home")}
          className="border border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition font-semibold"
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
