const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			planet: [],
			singleProperties: {}
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
			}
		}
	};
};

export default getState;
