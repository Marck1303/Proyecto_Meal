import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function CardsContainer() {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {meals?.map((meal) => (
        <Card
          key={meal.idMeal}
          id={meal.idMeal}
          name={meal.strMeal}
          category={meal.strCategory}
          image={meal.strMealThumb}
        />
      ))}
    </div>
  );
}
