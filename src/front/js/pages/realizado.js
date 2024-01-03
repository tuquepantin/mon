import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Realizado = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container text-center">
            <h4>Felicidades</h4>


            <div class="alert alert-success" role="alert">
                Tu pago se realizo satisfactoriamente! 
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png" alt="Girl in a jacket" width="200" height="200"></img>
            <br></br>
            <p>Numero de Ref 0031</p>
            <br></br>
            <Link to="/">
                <button className="btn btn-primary">Cerrar</button>
            </Link>
        </div>
    );
};