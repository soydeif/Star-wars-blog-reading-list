import React, { useContext } from "react";

import { Card } from "./card";
import { Context } from "../store/appContext";

export const CardPlanet = () => {
	const { store } = useContext(Context);

	const resultPlanets = store.planet.map(item => {
		return <Card key={item.uid} url={item.url} />;
	});

	return <div id="planetas">{resultPlanets}</div>;
};
