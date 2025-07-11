// src/pages/Reseñas.jsx
import { useState,} from "react";
import { useNavigate } from "react-router-dom";
import VideoModal from "../components/recetas/VideoModal"; // Reutilizamos el modal como base
import reseñasEjemplo from "../hook/reseñas"; // Importamos el array de reseñas

// Componente para mostrar las estrellas
const Estrellas = ({ cantidad }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < cantidad ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.27 9.397c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
    </div>
  );
};

// Modal para dejar reseñas
const ReseñaModal = ({ onClose }) => {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [estrellas, setEstrellas] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la reseña (puede ser un console.log por ahora)
    console.log("Nueva reseña:", { nombre, comentario, estrellas });
    onClose();
  };

  return (
    <div
      id="reseña-modal-fondo"
      onClick={(e) => e.target.id === "reseña-modal-fondo" && onClose()}
      className="fixed inset-0 bg-transparent bg-opacity-80 z-50 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Dejar una reseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Comentario</label>
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Calificación</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setEstrellas(num)}
                  className={`w-8 h-8 flex items-center justify-center ${
                    num <= estrellas ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.27 9.397c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function Reseñas() {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      {/* Botones superiores (igual que Detail.jsx) */}
      <div className="bg-orange-200 p-4 flex gap-4 items-center">
        <button
          onClick={() => navigate(-1)}
          className="hover:scale-110 transition-transform"
          title="Volver"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => navigate("/")}
          className="hover:scale-110 transition-transform"
          title="Inicio"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l9-9 9 9M4 10v10h4v-6h8v6h4V10"
            />
          </svg>
        </button>
      </div>

      {/* Modal para nuevas reseñas */}
      {mostrarModal && <ReseñaModal onClose={() => setMostrarModal(false)} />}

      {/* Contenido principal */}
      <div className="container mx-auto px-4 md:px-32 py-6 bg-orange-200 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Reseñas</h1>
        <div className="text-center mb-8">
          <button
            onClick={() => setMostrarModal(true)}
            className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 font-semibold"
          >
            Dejar reseñas
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reseñasEjemplo.map((reseña) => (
            <div
              key={reseña.id}
              className="bg-white p-4 rounded-lg shadow-md border border-amber-600"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{reseña.nombre}</h3>
                <Estrellas cantidad={reseña.estrellas} />
              </div>
              <p className="text-gray-700">{reseña.comentario}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}