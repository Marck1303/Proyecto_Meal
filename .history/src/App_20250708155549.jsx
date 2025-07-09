import { useState } from "react";
import FooterFood from "./components/FooterFood";
import SearchBar from "./components/SearchBar";
import fetchMealData from "./hook/data";

function App() {
  const [resultados, setResultados] = useState([]);

  const buscarFood = async (BusquedaUsuario) => {
    const data = await fetchMealData("search.php", `s=${BusquedaUsuario}`);
    setResultados(data);
    console.log(data);
  };

  return (
    <div>
      <h3>stevfen</h3>
      <h4>stevfen</h4>
      <h5>stevfen</h5>

      <FooterFood />
      <SearchBar buscarFood={buscarFood} />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
      </div>
    </div>
  );
}

export default App;
