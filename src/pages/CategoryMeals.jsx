// Solo para pobrar utilice el mismo codigo de las card de alan
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMealData from "../hook/data";
import Card from "../components/cards/card";

export default function CategoryMeals() {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      const data = await fetchMealData("filter.php", `c=${categoryName}`);
      setMeals(data);
    };
    loadMeals();
  }, [categoryName]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Comidas en {categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <Card
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            category={categoryName}
            image={meal.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}
