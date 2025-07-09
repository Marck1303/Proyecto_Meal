import React from "react";

export default function SearchBar({ buscarFood }) {
  const [texto, setTexto] = React.useState("");

  const handleSearch = () => {
    buscarFood(texto);
  };

  return (
    <div className="font-sans text-gray-500 flex items-center justify-center mt-12">
      <input
        type="text"
        placeholder="Search..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            buscarFood(texto);
          }
        }}
        className="border-3 border-gray-300 bg-gray-100 rounded-l px-4 py-2 w-2xs md:w-[400px] focus:outline-none border-r-0"
      />

      <button
        onClick={handleSearch}
        className="border-3 border-gray-300 md:border-0 cursor-pointer md:bg-gray-100 text-white px-4 py-1 md:py-6 rounded-r hover:bg-[#051b37]"
      >
        <img src="/search.svg" alt="Buscador" />
      </button>
    </div>
  );
}
