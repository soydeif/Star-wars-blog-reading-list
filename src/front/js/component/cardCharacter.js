import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card";

export const CardCharacter = () => {
	const { store } = useContext(Context);

	const resultCharacters = store.character.map(item => {
		return <Card key={item.id} url={item.url} />;
	});
	return <div id="caracteres">{resultCharacters}</div>;
};
