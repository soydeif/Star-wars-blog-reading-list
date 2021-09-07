const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			character: [],
			planet: [],
			singleProperties: {},
			singlePropertiesPlanet: {}
		},
		actions: {
			getData: async () => {
				const data = await fetch("https://www.swapi.tech/api/people/");
				const object = await data.json();
				//console.log(users.result);
				setStore({ character: object.results });
			},
			getData2: async () => {
				const data = await fetch("https://www.swapi.tech/api/planets/");
				const object = await data.json();
				//console.log(users.result);
				setStore({ planet: object.results });
			},
			getPropperties: async id => {
				const data = await fetch("https://www.swapi.tech/api/people/" + id);
				const object = await data.json();
				const variable = object.result;
				setStore({ singleProperties: variable });
			},
			getPropperties2: async id => {
				//console.log("aloha");
				const data = await fetch("https://www.swapi.tech/api/planets/" + id);
				//console.log(data);
				const object = await data.json();
				//console.log(await data.json());
				const variable2 = object.result;

				//console.log(variable2);
				setStore({ singlePropertiesPlanet: variable2 });
			},
			addFavorites: name => {
				setStore({ favorites: [...getStore().favorites, name] });
			},
			removeFavorites: index => {
				setStore({ favorites: getStore().favorites.filter((item, i) => index != i) });
			}
		}
	};
};

export default getState;
