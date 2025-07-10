// Solo para pobrar utilice el mismo codigo de las card de alan
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMealData from "../hook/data";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

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
      <SearchBar />
      <h1 className="text-2xl font-bold mb-6">Comidas en {categoryName}</h1>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8 p-4 md:px-16">
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
