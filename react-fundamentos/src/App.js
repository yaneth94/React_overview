import React from "react";
import TarjetaFruta from "./componentes/TarjetaFruta"

const App = () => (
    <div>
        <TarjetaFruta name="Sandia" price={2.0} />
        <TarjetaFruta name="Naranja" price={3.0} />
        <TarjetaFruta name="Manzana" price={3.0} />
    </div>
);

export default App
