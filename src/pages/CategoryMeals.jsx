import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMealData from "../hook/data";
import Card from "../components/cards/Card";
import SearchBar from "../components/SearchBar";

export default function CategoryMeals() {
  const { categoryName } = useParams();
  const [originalMeals, setOriginalMeals] = useState([]);
  const [filtroMeals, setfiltroMeals] = useState([]);
  const [noEncontrado, setNoEncontrado] = useState(false);

  useEffect(() => {
    const loadMeals = async () => {
      const data = await fetchMealData("filter.php", `c=${categoryName}`);
      setOriginalMeals(data);
      setfiltroMeals(data);
      setNoEncontrado(false);
    };
    loadMeals();
  }, [categoryName]);

  const buscarComidas = (texto) => {
    if (!texto.trim()) {
      setfiltroMeals(originalMeals);
      setNoEncontrado(false);
      return;
    }

    const resultado = originalMeals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(texto.toLowerCase())
    );

    setfiltroMeals(resultado);
    setNoEncontrado(resultado.length === 0);
  };

  return (
    <div className="p-6">
      <SearchBar buscarFood={buscarComidas} />
      <h1 className="text-2xl font-bold mb-6 dark:text-cyan-500 text-center">
        Comidas en {categoryName}
      </h1>

      {noEncontrado ? (
        <div className="text-center text-4xl font-bold text-red-500 mt-10">
          No se encontraron resultados.
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8 p-4 md:px-16">
          {filtroMeals.map((meal) => (
            <Card
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              category={categoryName}
              image={meal.strMealThumb}
            />
          ))}
        </div>
      )}
    </div>
  );
}
