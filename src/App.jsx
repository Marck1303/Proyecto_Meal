import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecetaDetalle from "./pages/RecetaDetalle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receta/:id" element={<RecetaDetalle />} />
    </Routes>
  );
}

export default App;
