import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import { useEffect, useState } from "react";
import FooterFood from "./components/FooterFood";
import SearchBar from "./components/SearchBar";
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import CategoryMeals from './pages/CategoryMeals.jsx';
import fetchMealData from "./hook/data";

function App() {
  const [resultados, setResultados] = useState([]);

  const buscarFood = async (BusquedaUsuario) => {
    const data = await fetchMealData("search.php", `s=${BusquedaUsuario}`);

    setResultados(data);
    console.log(data);
  };

  useEffect(() => {
    buscarFood("");
  }, []);

  return (
    <div className="bg-[#ffa300] min-h-screen flex flex-col justify-between border-b-3">
      <LandingP />
      <SearchBar buscarFood={buscarFood} />
      <FooterFood />
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/category/:categoryName" element={<CategoryMeals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

