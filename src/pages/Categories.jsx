import React, { useEffect, useState } from "react";
import CategoryCardsContainer from "../components/cards/CategoryCardsContainer";
import SearchBar from "../components/SearchBar";
import FooterFood from "../components/FooterFood";
import fetchMealData from "../hook/data";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [filtrarCategories, setFiltrarCategories] = useState([]);
  const [noEncontrado, setNoEncontrado] = useState(false);

  useEffect(() => {
    const CargarCategories = async () => {
      const data = await fetchMealData("categories.php");
      setCategories(data);
      setFiltrarCategories(data);
    };
    CargarCategories();
  }, []);

  const buscarCategorias = (texto) => {
    if (!texto.trim()) {
      setFiltrarCategories(categories);
      setNoEncontrado(false);
      return;
    }

    const resultado = categories.filter((item) =>
      item.strCategory.toLowerCase().includes(texto.toLowerCase())
    );

    setFiltrarCategories(resultado);
    setNoEncontrado(resultado.length === 0);
  };

  return (
    <div>
      <div className="bg-orange-200 min-h-screen flex flex-col justify-between border-b-3">
        <SearchBar buscarFood={buscarCategorias} />

        <h1 className="text-3xl font-bold text-center p-6">
          Explorar Categorías
        </h1>

        {noEncontrado ? (
          <div className="flex items-center mb-30 justify-center flex-grow min-h-[300px]">
            <h1 className="text-4xl text-red-500 font-bold text-center">
              No se encontraron resultados.
            </h1>
          </div>
        ) : (
          <CategoryCardsContainer categories={filtrarCategories} />
        )}
      </div>
      <FooterFood />
    </div>
  );
}
