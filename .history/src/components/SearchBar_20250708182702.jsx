import React from "react";

export default function SearchBar({ buscarFood }) {
  const [texto, setTexto] = React.useState("");

  const handleSearch = () => {
    buscarFood(texto);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTexto(value);

    if (value.trim() === "") {
      buscarFood("");
    }
  };

  return (
    <div className="font-sans text-gray-400 flex items-center justify-center mt-12">
      <input
        type="text"
        placeholder="Search..."
        value={texto}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            buscarFood(texto);
          }
        }}
        className="border-3 border-[#fbc81d] bg-white rounded-l px-4 py-2 w-2xs md:w-[400px] focus:outline-none border-r-0"
      />

      <button
        onClick={handleSearch}
        className="border-3 border-[#fbc81d] cursor-pointer bg-white text-white rounded-r hover:bg-[#fff388]"
      >
        <img src="/Lupa.png" className="w-8 h-8 object-cover" alt="Buscador" />
      </button>
    </div>
  );
}
