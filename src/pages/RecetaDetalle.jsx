import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecetaDetalle = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ingredienteActivo, setIngredienteActivo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const detectarDispositivo = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    detectarDispositivo();
    window.addEventListener("resize", detectarDispositivo);
    return () => window.removeEventListener("resize", detectarDispositivo);
  }, []);

  // Obtener receta desde la API
  useEffect(() => {
    const obtenerReceta = async () => {
      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setReceta(data.meals[0]);
      } catch (error) {
        console.error("Error al obtener la receta:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerReceta();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Cargando receta...</p>;
  if (!receta) return <p className="text-center mt-10 text-red-600">Receta no encontrada</p>;

  // Extraer ingredientes
  const obtenerIngredientes = () => {
    const ingredientes = [];
    for (let i = 1; i <= 20; i++) {
      const nombre = receta[`strIngredient${i}`];
      const medida = receta[`strMeasure${i}`];
      if (nombre && nombre.trim() !== "") {
        ingredientes.push({ nombre, medida });
      }
    }
    return ingredientes;
  };

  const ingredientes = obtenerIngredientes();

  // Manejar cierre del popup al tocar fuera
  const cerrarPopup = (e) => {
    if (e.target.id === "popup-fondo") {
      setIngredienteActivo(null);
    }
  };

  return (
    <>
      {/* Popup para móvil */}
      {isMobile && ingredienteActivo && (
        <div
          id="popup-fondo"
          onClick={cerrarPopup}
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
        >
          <div className="bg-white rounded shadow-lg p-4 w-64 max-w-full">
            <div className="text-right mb-2">
              <button
                onClick={() => setIngredienteActivo(null)}
                className="text-red-600 font-bold text-sm"
              >
                ❌ Cerrar
              </button>
            </div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${ingredienteActivo}.png`}
              alt={ingredienteActivo}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Lado izquierdo */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{receta.strMeal}</h1>

          <h2 className="text-xl font-semibold mb-2">Ingredientes:</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            {ingredientes.map(({ nombre, medida }, index) => (
              <li
                key={index}
                className="relative group cursor-pointer text-blue-800 hover:underline"
                onMouseEnter={() => !isMobile && setIngredienteActivo(nombre)}
                onMouseLeave={() => !isMobile && setIngredienteActivo(null)}
                onClick={() => isMobile && setIngredienteActivo(nombre)}
              >
                {nombre} - {medida}

                {/* Imagen flotante (solo PC) */}
                {!isMobile && ingredienteActivo === nombre && (
                  <div className="absolute z-10 bg-white p-2 rounded shadow-lg border top-0 left-48 w-40">
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${nombre}.png`}
                      alt={nombre}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">Preparación:</h2>
          <p className="text-gray-700 whitespace-pre-line">{receta.strInstructions}</p>
        </div>

        {/* Lado derecho */}
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            src={receta.strMealThumb}
            alt={receta.strMeal}
            className="rounded-lg shadow-lg mb-4 w-full"
          />
          {receta.strYoutube && (
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${receta.strYoutube.split("v=")[1]}`}
              title="Video de preparación"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RecetaDetalle;
