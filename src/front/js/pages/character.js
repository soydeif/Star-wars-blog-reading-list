import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Card } from "../component/card";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const { characterId } = useParams();

	useEffect(() => {
		actions.getPropperties(characterId);
		//console.log(store.character.properties);

		//console.log(store.character.properties.name);
	}, []);

	/*const mapeo = obj => {
		let firstPart = Object.entries(obj)
			.slice(0, Object.entries(obj).length / 2)
			.map(property => {
				return (
					<li key={property[0]} className="col-12 text-Dark  list-unstyled">
						{property[0]} : {property[1]}
					</li>
				);
			});
		return <ul className=" col-6">{firstPart}</ul>;
	};
*/
	return (
		<div className="jumbotron">
			<h1 className="display-4">
				{store.singleProperties ? store.singleProperties.properties.name : " "} -
				{store.singleProperties ? store.singleProperties.description : " "}
			</h1>
			<img src={rigoImageUrl} />
			<hr className="my-4" />
		</div>
	);
};

Character.propTypes = {
	match: PropTypes.object,
	url: PropTypes.string,
	uid: PropTypes.string
};
