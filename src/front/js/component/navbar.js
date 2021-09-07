import React, { Component, useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { CardCharacter } from "../component/cardCharacter";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/286px-Star_wars_1977_us.svg.png"
					className="theLogo"
				/>
			</Link>
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favorites.map((item, index) => {
						return (
							<Dropdown.Item key={index}>
								{item}
								<button onClick={() => actions.removeFavorites(index)} className="delete">
									<div className="col">🗑</div>
								</button>
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
