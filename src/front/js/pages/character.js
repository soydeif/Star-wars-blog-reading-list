import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Vader from "../../img/klipartz.com.png";
import { Card } from "../component/card";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const { characterId } = useParams();

	useEffect(() => {
		actions.getPropperties(characterId);
	}, []);

	return (
		<div className="jumbotron">
			<img src={Vader} style={{ width: "150px", heigth: "100px" }} />
			<h1 className="display-4">
				{store.singleProperties.uid ? store.singleProperties.properties.name : " "}
				{store.singleProperties.uid ? ".      " + store.singleProperties.description : " "}
				<ul>
					<li>{store.singleProperties.uid ? store.singleProperties.properties.gender : "Loading"}</li>
					<li>{store.singleProperties.uid ? store.singleProperties.properties.hair_color : " Loading "}</li>
					<li>{store.singleProperties.uid ? store.singleProperties.properties.skin_color : "Loading "}</li>
					<li>{store.singleProperties.uid ? store.singleProperties.properties.eye_color : " Loading"}</li>
					<li>{store.singleProperties.uid ? store.singleProperties.properties.birth_year : " Loading"}</li>
				</ul>
			</h1>

			<hr className="my-4" />
		</div>
	);
};

Character.propTypes = {
	match: PropTypes.object,
	url: PropTypes.string,
	uid: PropTypes.string
};
