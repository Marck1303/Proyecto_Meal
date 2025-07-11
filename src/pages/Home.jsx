import CardsContainer from "../components/cards/CardsContainer";
import SearchBar from "../components/SearchBar";
import FooterFood from "../components/FooterFood";
import { useEffect, useState } from "react";
import fetchMealData from "../hook/data";
import DarkMode from "../components/DarkMode";

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
      <div className="bg-orange-200 min-h-screen flex flex-col justify-between border-b-3 dark:bg-[rgb(15,9,19)]">
        <DarkMode></DarkMode>
        <SearchBar buscarFood={buscarFood} />
        <h1 className="text-3xl font-bold text-center p-6 dark:text-cyan-300">
          Todas las Comidas
        </h1>
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
