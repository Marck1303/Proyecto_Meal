import { useEffect, useState } from "react";
import fetchMealData from "./data";

export default function useDetallePorId(id) {
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerReceta = async () => {
      try {
        const data = await fetchMealData("lookup.php", `i=${id}`);
        setReceta(data[0]);
      } catch (err) {
        console.error("Error en useDetallePorId:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) obtenerReceta();
  }, [id]);

  return { receta, loading, error };
}
