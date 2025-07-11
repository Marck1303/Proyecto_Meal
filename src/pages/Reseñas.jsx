import { useState, useEffect } from "react";
import reseñasEjemplo from "../hook/reseñas"; // Importamos el array de reseñas

const STORAGE_KEY = "reseñas";

// Componente para mostrar las estrellas fijas (no interactivo)
const Estrellas = ({ cantidad }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`mr-1 text-2xl ${i < cantidad ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ))}
  </div>
);

// Modal genérico
function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded shadow-lg max-w-lg w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl leading-none"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default function Reseñas() {
  const [reseñas, setReseñas] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  // Cargar reseñas de localStorage o ejemplo
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) setReseñas(JSON.parse(data));
    else setReseñas(reseñasEjemplo);
  }, []);

  // Agregar y guardar en localStorage (nuevas reseñas al inicio)
  const agregarReseña = (nueva) => {
    const lista = [nueva, ...reseñas];
    setReseñas(lista);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
  };

  return (
    <div className="max-w-2xl mt-8 mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Reseñas</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-amber-600 text-white hover:bg-amber-700 px-4 py-2 rounded mb-4"
      >
        Dejar una reseña
      </button>

      {reseñas.map((r) => (
        <div key={r.id} className="border p-2 mb-2 rounded">
          <div className="font-semibold">{r.nombre}</div>
          <div>{r.comentario}</div>
          <Estrellas cantidad={r.estrellas} />
        </div>
      ))}

      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <ModalContent
            onAdd={(nueva) => {
              agregarReseña(nueva);
              setModalOpen(false);
            }}
            onClose={() => setModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}

// Contenido del modal para agregar reseñas
function ModalContent({ onAdd, onClose }) {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [estrellas, setEstrellas] = useState(0);

  const handleEnviar = () => {
    if (!nombre || !comentario || estrellas === 0) return;
    const nueva = { id: Date.now(), nombre, comentario, estrellas };
    onAdd(nueva);
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Dejar una reseña</h2>
      <label className="block mb-4">
        Nombre
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border rounded px-2 py-1 mt-1"
        />
      </label>
      <label className="block mb-4">
        Comentario
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          className="w-full border rounded px-2 py-1 mt-1"
        />
      </label>
      <div className="mb-4">
        <div>Calificación</div>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              onClick={() => setEstrellas(i + 1)}
              className="focus:outline-none mr-1 text-2xl"
            >
              <span className={i < estrellas ? "text-yellow-400" : "text-gray-300"}>
                ★
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleEnviar}
          className="bg-orange-500 text-white px-4 py-2 rounded mr-2"
        >
          Enviar
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
