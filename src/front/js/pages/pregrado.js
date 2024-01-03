import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Pregrado = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
			<h4>Pregrado</h4>

			<div className="alert alert-info">
				<div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Derecho</button>
					</Link>
				</div>
				<div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Educacion</button>
					</Link>
				</div>
				<div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Ciencias administrativas</button>
					</Link>
				</div>
                <div className="ml-auto mt-3">
					<Link to="/datos">
						<button className="btn btn-success">Comunicacion social</button>
					</Link>
				</div>

			</div>
			<Link to="/demo">
				<button className="btn btn-primary">Go Back</button>
			</Link>
		</div>
	);
};
