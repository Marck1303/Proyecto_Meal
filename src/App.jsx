import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RecetaDetalle from "./pages/RecetaDetalle.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<RecetaDetalle />} />
    </Routes>
  );
}

export default App;