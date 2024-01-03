import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Posgrado = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
			<h4>Posgrado</h4>

			<div className="alert alert-info">
				<div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Planificacion, Desarrollo y Gestion de Proyectos</button>
					</Link>
				</div>
				<div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Derecho Procesal Constitucional</button>
					</Link>
				</div>
				<div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Derecho de la Economia</button>
					</Link>
				</div>
                <div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Atencion Psicoeducativa del Autismo</button>
					</Link>
				</div>
                <div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Periodismo Digital</button>
					</Link>
				</div>
                <div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Proyectos Educativos Comunitarios</button>
					</Link>
				</div>
                <div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Comunicacion Organizacional</button>
					</Link>
				</div>
                <div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Propiedad Intelectual</button>
					</Link>
				</div>
                <div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Evaluacion Educativa</button>
					</Link>
				</div>

			</div>
			<Link to="/demo">
				<button className="btn btn-primary">Go Back</button>
			</Link>
		</div>
	);
};
