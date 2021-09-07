import React, { useContext, useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Vader from "../../img/klipartz.com.png";
import Ball from "../../img/iEv6pmS4gfbefs5JbwHWiJ.png";

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
				<div id="hola" className="card" style={{ width: "18rem" }} key={store.singleProperties.uid}>
					<div className="card-body">
						<h5 className="card-title">{propperties.properties.name}</h5>

						{propperties.properties.height ? (
							<>
								<img src={Vader} className="card-img-top" />
								<div className="card-text">
									<p>
										<li>{propperties.properties.hair_color}</li>
										<li>{propperties.properties.gender}</li>
										<li>{propperties.properties.eye_color}</li>
									</p>
								</div>
								<div id="card-footer">
									<Link to={"/character/" + propperties.uid}>
										<button type="button" className="btn btn-primary">
											More Info!
										</button>
									</Link>

									<p
										onClick={() => {
											if (!store.favorites.includes(propperties.properties.name)) {
												actions.addFavorites(propperties.properties.name);
											}
										}}
										className="btn">
										<i className="fas fa-heart" />
									</p>
								</div>
							</>
						) : (
							<>
								<img src={Ball} className="card-img-top" />
								<div className="card-text">
									<ul>
										<li>{propperties.properties.climate}</li>
										<li>{propperties.properties.terrain}</li>
									</ul>
								</div>
								<div id="card-footer">
									<Link to={"/planet/" + propperties.uid}>
										<button type="button" className="btn btn-primary">
											More Info!
										</button>
									</Link>

									<p
										onClick={() => {
											if (!store.favorites.includes(propperties.properties.name)) {
												actions.addFavorites(propperties.properties.name);
											}
										}}
										className="btn">
										<i className="fas fa-heart" />
									</p>
								</div>
							</>
						)}
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
