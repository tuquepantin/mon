import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Prep = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
			<h4>PREP</h4>

			<div className="alert alert-info">
				<div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Comunicacion en Gastronomia</button>
					</Link>
				</div>
				<div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Ciencia de Datos para Negocios</button>
					</Link>
				</div>
				<div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Negociacion y Contratos</button>
					</Link>
				</div>
                <div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Diseno de Juegos</button>
					</Link>
				</div>

			</div>
			<Link to="/demo">
				<button className="btn btn-primary">Go Back</button>
			</Link>
		</div>
	);
};
