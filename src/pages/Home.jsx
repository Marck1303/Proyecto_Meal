import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerRecetas = async () => {
      try {
        // Ejemplo: obtener recetas por categoría "Seafood"
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        setRecetas(data.meals);
      } catch (error) {
        console.error("Error al obtener recetas:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerRecetas();
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando recetas...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recetas de Seafood</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recetas.map((receta) => (
          <Link
            key={receta.idMeal}
            to={`/receta/${receta.idMeal}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={receta.strMealThumb}
              alt={receta.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{receta.strMeal}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
