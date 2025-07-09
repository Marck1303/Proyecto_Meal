import { useState } from "react";

function App() {
  const [buscarT, setBuscarT] = useState("");
  return (
    <>
      <div>
        <h3>stevfen</h3>
        <h4>stevfen</h4>
        <h5>stevfen</h5>

        <FooterFood />
        <SearchBar
          setTitulo={setTitulo}
          buscarT={buscarT}
          setBuscarT={setBuscarT}
          buscarFotos={fetchData}
        />
      </div>
    </>
  );
}

export default App;
