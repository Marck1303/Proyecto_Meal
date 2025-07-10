import CategoryCardsContainer from "../components/cards/CategoryCardsContainer";
import CardsContainer from "../components/cards/CardsContainer";
import SearchBar from "../components/SearchBar";
import FooterFood from "../components/FooterFood";
import { useEffect, useState } from "react";
import fetchMealData from "../hook/data";

export default function Home() {
  const [resultados, setResultados] = useState([]);
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarFood = async (BusquedaUsuario) => {
    const data = await fetchMealData("search.php", `s=${BusquedaUsuario}`);
    setResultados(data);

    if (!data || data.length === 0) {
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }
  };

  useEffect(() => {
    buscarFood("");
  }, []);

  return (
    <div>
      <div className="bg-[#ffa300] min-h-screen flex flex-col justify-between border-b-3">
        <SearchBar buscarFood={buscarFood} />

        {noEncontrado ? (
          <div className="flex items-center justify-center flex-grow min-h-[300px]">
            <h1 className="text-5xl text-white font-bold text-center">
              No se encontraron resultados.
            </h1>
          </div>
        ) : (
          <CardsContainer resultados={resultados} />
        )}
      </div>
      <FooterFood />
    </div>
  );
}
