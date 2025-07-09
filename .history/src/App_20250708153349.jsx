import { useState } from "react";
import FooterFood from "./FooterFood"; // Asegúrate de importar bien
import SearchBar from "./SearchBar"; // Asegúrate de importar bien
import fetchMealData from "./data"; // Tu función de llamada a la API

function App() {
  const [buscarT, setBuscarT] = useState("");
  const [resultados, setResultados] = useState([]); // Estado para guardar los resultados

  // Función para buscar platos
  const buscarFotos = async (termino) => {
    const data = await fetchMealData("search.php", `s=${termino}`);
    setResultados(data);
    console.log(data); // Por ahora solo mostramos en consola
  };

  return (
    <>
      <div>
        <h3>stevfen</h3>
        <h4>stevfen</h4>
        <h5>stevfen</h5>

        <FooterFood />
        <SearchBar
          buscarT={buscarT}
          setBuscarT={setBuscarT}
          buscarFotos={buscarFotos}
        />
      </div>
    </>
  );
}

export default App;
