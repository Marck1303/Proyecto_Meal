import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import CategoryMeals from "./pages/CategoryMeals.jsx";
import Categories from "./pages/Categories.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const location = useLocation();
  const hideNavOnPaths = ["/landing"]; // por si agregás otras vistas en el futuro

  const shouldShowNav = !hideNavOnPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNav && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryMeals />} />
      </Routes>
    </>
  );
}

export default App;
