import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

export default function CardsContainer({ resultados }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((err) => {
        console.error("Error al traer los datos:", err);
      });
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8 p-4 md:px-16 ">
      {(resultados && resultados.length > 0 ? resultados : meals)?.map(
        (meal) => (
          <Card
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            category={meal.strCategory}
            image={meal.strMealThumb}
          />
        )
      )}
    </div>
  );
}
