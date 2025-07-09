import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import CategoryMeals from './pages/CategoryMeals.jsx';
import Categories from './pages/Categories.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryMeals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

