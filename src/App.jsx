// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import CategoryMeals from "./pages/CategoryMeals.jsx";
import Categories from "./pages/Categories.jsx";
import Reseñas from "./pages/Reseñas.jsx"; // Importar el nuevo componente
import LandingP from "./components/LandingP.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const location = useLocation();
  const hideNavOnPaths = ["/"];

  const shouldShowNav = !hideNavOnPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNav && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingP />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryMeals />} />
        <Route path="/reseñas" element={<Reseñas />} /> {/* Nueva ruta */}
      </Routes>
    </>
  );
}

export default App;