import React, { useContext, useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	const { store, actions } = useContext(Context);
	const [propperties, setPropperties] = useState();

	useEffect(() => {
		getPropperties(props.url);
	}, []);

	const getPropperties = async proppertiesUrl => {
		const data = await fetch(proppertiesUrl);
		const object = await data.json();
		const variable = object.result;
		setPropperties(variable);
	};

	return (
		<>
			{propperties ? (
				<div
					id="hola"
					className="card-group bg-light mb-3"
					style={{ width: "18rem" }}
					key={store.singleProperties.uid}>
					<img src="" className="card" />
					<div className="card-body">
						<h5 className="card-title">{propperties.properties.name}</h5>
						<div>
							{propperties.properties.height ? (
								<>
									<p className="card-text">
										<li>{propperties.properties.hair_color}</li>
										<li>{propperties.properties.gender}</li>
										<li>{propperties.properties.eye_color}</li>
									</p>
									<Link to={"/character/" + propperties.uid}>
										<button type="button" className="btn btn-primary">
											More Info!
										</button>
									</Link>
									<a className="btn">
										<i className="fas fa-heart" />
									</a>
								</>
							) : (
								<>
									<ul>
										<li>{propperties.properties.climate}</li>
										<li>{propperties.properties.terrain}</li>
									</ul>
									<Link to={"/planet/" + propperties.uid}>
										<button type="button" className="btn btn-primary">
											More Info!
										</button>
									</Link>
									<a className="btn">
										<i className="fas fa-heart" />
									</a>
								</>
							)}
						</div>
					</div>
				</div>
			) : (
				<div className="spinner-border spinner-border-sm" role="status">
					<span className="sr-only" />
				</div>
			)}
		</>
	);
};

Card.propTypes = {
	url: PropTypes.string,
	uid: PropTypes.string
};
