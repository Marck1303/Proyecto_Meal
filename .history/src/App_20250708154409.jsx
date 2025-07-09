import { useState } from "react";
import FooterFood from "./FooterFood";
import SearchBar from "./SearchBar";
import fetchMealData from "./data";

function App() {
  const [buscarT, setBuscarT] = useState("");
  const [resultados, setResultados] = useState([]);

  const buscarFotos = async (BusquedaUsuario) => {
    const data = await fetchMealData("search.php", `s=${BusquedaUsuario}`);
    setResultados(data);
    console.log(data);
  };

  return (
    <>
      <div>
        <h3>stevfen</h3>
        <h4>stevfen</h4>
        <h5>stevfen</h5>

        <FooterFood />
        <SearchBar
          buscarT={buscarFotos}
          setbuscarT={setbuscarFotos}
          buscarFotos={buscarFotos}
        />
      </div>
    </>
  );
}

export default App;
