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
		console.log(store.singleProperties);
	}, []);

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.singleProperties.description}</h1>
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
