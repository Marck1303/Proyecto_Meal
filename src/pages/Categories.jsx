// src/pages/Categories.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCardsContainer from "../components/cards/CategoryCardsContainer";
import SearchBar from "../components/SearchBar";
import FooterFood from "../components/FooterFood";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Botones superiores (igual que Detail.jsx) */}
      <div className="bg-orange-200 p-4 flex gap-4 items-center">
        <button
          onClick={() => navigate(-1)}
          className="hover:scale-110 transition-transform"
          title="Volver"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => navigate("/")}
          className="hover:scale-110 transition-transform"
          title="Inicio"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l9-9 9 9M4 10v10h4v-6h8v6h4V10"
            />
          </svg>
        </button>
      </div>

      <div className="bg-orange-200 min-h-screen flex flex-col justify-between border-b-3">
        <SearchBar />
        <h1 className="text-3xl font-bold text-center p-6">
          Explorar Categorías
        </h1>
        <CategoryCardsContainer />
      </div>
      <FooterFood />
    </div>
  );
}