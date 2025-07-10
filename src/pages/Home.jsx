import CategoryCardsContainer from "../components/cards/CategoryCardsContainer";
import CardsContainer from "../components/cards/CardsContainer";
import SearchBar from "../components/SearchBar";
import FooterFood from "../components/FooterFood";
import { useEffect, useState } from "react";
import fetchMealData from "../hook/data";

export default function Home() {
  const [resultados, setResultados] = useState([]);

  const buscarFood = async (BusquedaUsuario) => {
    const data = await fetchMealData("search.php", `s=${BusquedaUsuario}`);

    setResultados(data);
    console.log(data);
  };

  useEffect(() => {
    buscarFood("");
  }, []);

  return (
    <div>
      <div className="bg-[#ffa300] min-h-screen flex flex-col justify-between border-b-3">
        <SearchBar buscarFood={buscarFood} />
        <h1 className="text-3xl font-bold text-center p-6">
          Todas las Comidas
        </h1>
        <CardsContainer resultados={resultados} />
      </div>
      <FooterFood />
    </div>
  );
}
