import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanet } from "../component/cardPlanet";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="container">
			<h1>Characters</h1>
			<div className="container">
				<br />
				<CardCharacter />
			</div>
			<h1>Planets</h1>
			<div className="container">
				<br />
				<CardPlanet />
			</div>
		</div>
	);
};
