import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
			<h4>Selecciona tu grado</h4>

			<div className="alert alert-info">
				<div className="ml-auto mt-3">
					<Link to="/">
						<button className="btn btn-success">Pregrado</button>
					</Link>
				</div>
				<div className="ml-auto mt-3">
					<Link to="/demo">
						<button className="btn btn-success">Posgrado</button>
					</Link>
				</div>
				<div className="ml-auto mt-3">
					<Link to="/demo">
						<button className="btn btn-success">PREP</button>
					</Link>
				</div>

			</div>
			<Link to="/">
				<button className="btn btn-primary">Go Back</button>
			</Link>
		</div>
	);
};
