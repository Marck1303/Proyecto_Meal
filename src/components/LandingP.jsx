import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingP() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#ffa300] min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/landingAma.png')" }}
    >
      <div
        className="bg-black w-[70%] h-[480px] md:h-[80%] rounded-lg text-center shadow-2xl px-10 py-20"
        style={{ background: "url('/texturaNegro.jpg')" }}
      >
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center justify-center">
            <div
              className="w-48 h-80 rounded-lg shadow-lg flex items-center justify-center"
              style={{
                backgroundImage: "url('/FondoPlatos.jpg')",
                objectFit: "cover",
              }}
            >
              <img
                src="/plato1.png"
                alt="Plato 1"
                className="w-[300px] max-w-none ml-[-60px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div
              className="w-48 h-80 rounded-lg shadow-lg flex items-center justify-center"
              style={{
                backgroundImage: "url('/FondoPlatos.jpg')",
                objectFit: "cover",
              }}
            >
              <img
                src="/plato2.png"
                alt="Plato 2"
                className="w-[300px] max-w-none mr-[-60px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-[-50px] md:mt-[-350px]">
          <img
            src="/LogoRed.png"
            alt="LogoCFRound"
            className="w-52 h-52 mx-auto mb-4"
          />
          <img
            src="/ClickFoodBlanco.png"
            alt="ClickFood"
            className="w-80 h-20 mx-auto"
          />
          <h2 className="text-white mt-2">SATISFY YOUR CRAVINGS</h2>
        </div>

        <button
          onClick={() => navigate("/home")}
          className="border border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition font-semibold mt-6"
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
