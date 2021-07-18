import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanet } from "../component/cardPlanet";
import PropTypes from "prop-types";

const ItemList = props => {
	const htmlItems = props.items.map((item, index) => {
		return <a key={index} detail={item} />;
	});
	return <div>{htmlItems}</div>;
};

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="container">
			<h1>Characters</h1>
			<div className="container2">
				<br />
				<CardCharacter />
			</div>
			<h1>Planets</h1>
			<div className="container2">
				<br />
				<CardPlanet />
			</div>
		</div>
	);
};

ItemList.propTypes = {
	items: PropTypes.array
};
