import React from "react";

export default function SearchBar({ buscarFood }) {
  const [texto, setTexto] = React.useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTexto(value);
    buscarFood(value);
  };

  const handleSearch = () => {
    buscarFood(texto);
  };

  return (
    <div className="font-sans flex items-center justify-center mt-4">
      <input
        type="text"
        placeholder="Search..."
        value={texto}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="border-3 border-[#fbc81d] text-xl placeholder-orange-200 text-black font-bold  bg-white rounded-l px-4 py-2 w-2xs md:w-[400px] focus:outline-none border-r-0 dark:border-purple-700 dark:placeholder-neutral-400 dark:bg-cyan-950 dark:text-white"
      />
      <button
        onClick={handleSearch}
        className="border-3 border-[#fbc81d] cursor-pointer bg-white text-white rounded-r hover:bg-[#fccd86] p-2 dark:border-purple-700 dark:hover:bg-purple-300 dark:bg-cyan-950 dark:text-white"
      >
        <img src="/Lupa.png" className="w-7 h-7 object-cover" alt="Buscador" />
      </button>
    </div>
  );
}
