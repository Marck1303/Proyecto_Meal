import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useDetallePorId from "../hook/useDetallePorId";
import IngredienteItem from "../components/recetas/IngredienteItem";
import ImagenReceta from "../components/recetas/ImagenReceta";
import VideoModal from "../components/recetas/VideoModal";

const RecetaDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { receta, loading } = useDetallePorId(id);
  const [ingredienteActivo, setIngredienteActivo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mostrarVideo, setMostrarVideo] = useState(false);

  useEffect(() => {
    const detectarDispositivo = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    detectarDispositivo();
    window.addEventListener("resize", detectarDispositivo);
    return () => window.removeEventListener("resize", detectarDispositivo);
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando receta...</p>;
  if (!receta) return <p className="text-center mt-10 text-red-600">Receta no encontrada</p>;

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

  return (
    <>
      {/* Botones superiores */}
      <div className="p-4 flex gap-4 items-center">
        <button
          onClick={() => navigate(-1)}
          className="hover:scale-110 transition-transform"
          title="Volver"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => navigate("/")}
          className="hover:scale-110 transition-transform"
          title="Inicio"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10h4v-6h8v6h4V10" />
          </svg>
        </button>
      </div>

      {/* Modal de video */}
      {mostrarVideo && (
        <VideoModal
          videoId={receta.strYoutube?.split("v=")[1]}
          onClose={() => setMostrarVideo(false)}
        />
      )}

      <div className="container mx-auto px-4 md:px-32 py-6 flex flex-col gap-8">
        {/* Ingredientes + Imagen */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:max-w-sm w-full">
            <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{receta.strMeal}</h1>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ingredientes</h2>
            <div className="grid grid-cols-1 gap-3">
              {ingredientes.map(({ nombre, medida }, index) => (
                <IngredienteItem
                  key={index}
                  nombre={nombre}
                  medida={medida}
                  isMobile={isMobile}
                  ingredienteActivo={ingredienteActivo}
                  setIngredienteActivo={setIngredienteActivo}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 relative flex flex-col justify-start">
            <ImagenReceta
              src={receta.strMealThumb}
              alt={receta.strMeal}
              mostrarBotonVideo={!!receta.strYoutube}
              onVideoClick={() => setMostrarVideo(true)}
            />
          </div>
        </div>

        {/* Preparación */}
        <div className="w-full text-center">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Preparación</h2>
          <p className="text-gray-700 whitespace-pre-line max-w-3xl mx-auto">{receta.strInstructions}</p>
        </div>
      </div>
    </>
  );
};

export default RecetaDetalle;
