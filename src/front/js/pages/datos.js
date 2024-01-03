import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Datos = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mx-auto">
			<h4>Datos</h4>

			<div className="alert alert-info m-5">
				
				
            <input className="form-control form-control-lg m-2" type="text" placeholder="Cedula" aria-label=".form-control-lg example"/>
            <input className="form-control form-control-lg m-2" type="text" placeholder="Semestre/Trimestre" aria-label=".form-control-lg example"/>
			</div>
			<Link to="/pago">
				<button className="btn btn-primary">Continuar</button>
			</Link>
		</div>
	);
};
