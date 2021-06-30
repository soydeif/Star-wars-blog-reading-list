import React, { useContext, useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Card = props => {
	const { store, actions } = useContext(Context);

	const [propperties, setPropperties] = useState();

	useEffect(() => {
		getPropperties(props.url);
	}, []);

	const getPropperties = async proppertiesUrl => {
		const data = await fetch(proppertiesUrl);
		const object = await data.json();
		//console.log(users.result);
		console.log(object);
		setPropperties(object.result);
	};

	return (
		<>
			{propperties ? (
				<div id="hola" className="card-group bg-light mb-3" style={{ width: "18rem" }} key={propperties.uid}>
					<img src="" className="card" />
					<div className="card-body">
						<h5 className="card-title">{propperties.properties.name}</h5>
						<p className="card-text">
							{propperties.properties.height ? (
								<>
									<li>{propperties.properties.hair_color}</li>
									<li>{propperties.properties.gender}</li>
									<li>{propperties.properties.eye_color}</li>
								</>
							) : (
								<>
									<li>{propperties.properties.climate}</li>
									<li>{propperties.properties.terrain}</li>
								</>
							)}
						</p>

						<a href="#" className="btn btn-primary">
							More Info!
						</a>
						<a href="#" className="btn">
							<i className="fas fa-heart" />
						</a>
					</div>
				</div>
			) : (
				"loading"
			)}
		</>
	);
};

Card.propTypes = {
	url: PropTypes.string
};
