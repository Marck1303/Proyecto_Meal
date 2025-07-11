import React from "react";
import CategoryCardsContainer from "../components/cards/CategoryCardsContainer";
import SearchBar from "../components/SearchBar";
import FooterFood from "../components/FooterFood";

export default function Categories() {
  return (
    <div>
      <div className="bg-orange-200 min-h-screen flex flex-col justify-between border-b-3 dark:bg-violet-950">
        <SearchBar />
        <h1 className="text-5xl font-bold text-center p-6 dark:text-purple-500">
          Explorar Categorías
        </h1>
        <CategoryCardsContainer />
      </div>
      <FooterFood />
    </div>
  );
}
