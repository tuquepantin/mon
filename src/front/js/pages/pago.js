import React, { useState } from "react";

const Pago = () => {
    const [numero, setNumero] = useState(Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500);

    return (

        <div className="container text-center mx-auto">
            <h4>Datos</h4>


            <div className="alert alert-info m-5">


                <div>
                    <h1>Monto a Pagar</h1>
                    <h2>{numero}Bss</h2>
                </div>
            </div>

        </div>
    );
};

export default Pago;