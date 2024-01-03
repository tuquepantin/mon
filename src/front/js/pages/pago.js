import React, { useState } from "react";

const Pago = () => {
  const [numero, setNumero] = useState(Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500);

  return (
    <div>
      <h1>Generar número aleatorio</h1>
      <p>Número aleatorio: {numero}</p>
    </div>
  );
};

export default Pago;