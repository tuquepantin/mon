import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Comenzar</button>
					</Link>
				</div>

			</div>

		</div>
	);
};
