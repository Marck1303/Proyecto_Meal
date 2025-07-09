export default function IngredienteItem({ nombre, medida, isMobile, ingredienteActivo, setIngredienteActivo }) {
  const mostrarImagen = !isMobile && ingredienteActivo === nombre;

  return (
    <div
      className="flex items-center gap-3 p-3 border rounded-lg shadow-sm bg-white hover:bg-gray-50 relative"
      onMouseEnter={() => !isMobile && setIngredienteActivo(nombre)}
      onMouseLeave={() => !isMobile && setIngredienteActivo(null)}
    >
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      />
      <span
        className="text-blue-800 font-medium cursor-pointer"
        onClick={() => isMobile && setIngredienteActivo(nombre)}
      >
        {nombre} - {medida}
      </span>

      {mostrarImagen && (
        <div className="absolute z-10 bg-white p-2 rounded shadow-lg border top-0 left-full ml-4 w-40">
          <img
            src={`https://www.themealdb.com/images/ingredients/${nombre}.png`}
            alt={nombre}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}
