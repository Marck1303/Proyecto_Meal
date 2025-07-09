import React from "react";

export default function LandingP() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#ffa300] min-h-screen flex items-center justify-center">
      <div className="bg-black p-10 rounded-lg text-center">
        <div className="flex justify-between mb-5">
          <div className="bg-[#ffa300] w-40 h-40 rounded-lg shadow-lg flex items-center justify-center">
            Plato 1
          </div>
          <div className="bg-[#ffa300] w-40 h-40 rounded-lg shadow-lg flex items-center justify-center">
            Plato 2
          </div>
        </div>

        <h1 className="text-6xl font-bold text-white">CF</h1>
        <h2 className="text-3xl font-semibold text-white">ClickFood</h2>

        <button
          onClick={() => navigate("/home")}
          className="mt-5 border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition"
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
