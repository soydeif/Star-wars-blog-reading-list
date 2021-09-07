import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Ball from "../../img/iEv6pmS4gfbefs5JbwHWiJ.png";
import { Card } from "../component/card";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const { planetId } = useParams();

	useEffect(() => {
		actions.getPropperties2(planetId);
	}, []);

	return (
		<div className="jumbotron">
			<img src={Ball} style={{ width: "150px", heigth: "150px" }} />
			<h1 className="display-4">
				{store.singlePropertiesPlanet.uid ? store.singlePropertiesPlanet.properties.name : "  "}
				{store.singlePropertiesPlanet.uid ? ".      " + store.singlePropertiesPlanet.description : " "}
				<ul>
					<li>
						{store.singlePropertiesPlanet.uid
							? store.singlePropertiesPlanet.properties.diameter
							: " Loading "}
					</li>
					<li>
						{store.singlePropertiesPlanet.uid
							? store.singlePropertiesPlanet.properties.gravity
							: "  Loading "}
					</li>
					<li>
						{store.singlePropertiesPlanet.uid
							? store.singlePropertiesPlanet.properties.population
							: " Loading "}
					</li>
					<li>
						{store.singlePropertiesPlanet.uid
							? store.singlePropertiesPlanet.properties.climate
							: " Loading "}
					</li>
					<li>
						{store.singlePropertiesPlanet.uid
							? store.singlePropertiesPlanet.properties.terrain
							: " Loading "}
					</li>
				</ul>
			</h1>

			<hr className="my-4" />
		</div>
	);
};
Planet.propTypes = {
	match: PropTypes.object,
	url: PropTypes.string,
	uid: PropTypes.string
};
