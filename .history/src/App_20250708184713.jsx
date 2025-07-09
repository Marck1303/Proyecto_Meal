import { useEffect, useState } from "react";
import FooterFood from "./components/FooterFood";
import SearchBar from "./components/SearchBar";
import fetchMealData from "./hook/data";

function App() {
  /* const [resultados, setResultados] = useState([]); */

  const buscarFood = async (BusquedaUsuario) => {
    const data = await fetchMealData("search.php", `s=${BusquedaUsuario}`);
    /* setResultados(data);
    console.log(data); */
  };

  useEffect(() => {
    buscarFood("");
  }, []);

  return (
    <div className="p-10 border-b-3 border-[#fbc81d]">
      <FooterFood />
      <SearchBar buscarFood={buscarFood} />

      {/* <div className="w-[90%] h-[40%] m-10 grid grid-cols-3 gap-15">
        {resultados && resultados.length > 0 ? (
          resultados.map((meal) => (
            <div key={meal.idMeal} className="border p-4 rounded shadow">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded mb-2"
              />
              <h2 className="font-bold">{meal.strMeal}</h2>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">
            No se encontraron resultados.
          </p>
        )}
      </div> */}
    </div>
  );
}

export default App;
