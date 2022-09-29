const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null
		},
		actions: {
			// Get action
			getAllUsers: ()=>{
				fetch("http://127.0.0.1:8000/api/users/")
				.then(res=>res.json())
				.then(data=>{
					console.log(data);
					setStore({users:data});
				});
			},
			getAllRolls: ()=>{
				fetch("http://127.0.0.1:8000/api/rolls/")
				.then(res=>res.json())
				.then(data=>{
					console.log(data);
					setStore({rolls:data});
				});
			},
			getAllBases:()=>{
				fetch("http://127.0.0.1:8000/api/bases/")
				.then(res=>res.json())
				.then(data=>{
					console.log(data);
					setStore({bases:data});
				});
			},
			getAllToppings:()=>{
				fetch("http://127.0.0.1:8000/api/salsas/")
				.then(res=>res.json())
				.then(data=>{
					console.log(data);
					setStore({toppings:data});
				});
			},
			getAllAggregates:()=>{
				fetch("http://127.0.0.1:8000/api/agregados/")
				.then(res=>res.json())
				.then(data=>{
					console.log(data);
					setStore({aggregates:data});
				});
			},
			// Post action
			login: (username, password) => {
				fetch("http://127.0.0.1:8000/api/token/", {
					method: 'POST',
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				})
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data);
					setStore({user: data});
				});
				return true;
			},
			postBase: (name, brand)=>{
				fetch("http://127.0.0.1:8000/api/base", {
					method: 'POST',
					headers: {
						"Content-type": "application/json",
						// "Authentication": {"Bearer " + token} u otro metodo
					},
					body: JSON.stringify({
						name: name,
						brand: brand
					})
				})
				.then(res=>res.json())
				.then(message=>{
					console.log(message);
					// setStore({data:data}) si es necesrio
				})
				.catch(error=>console.log(error));
			},
			// getMessage: async () => {
			// 	try{
			// 		// fetching data from the backend
			// 		// Cambiar ruta por porecess.env.BACKEND_URL cuando termine la pagina
			// 		const resp = await fetch("http://127.0.0.1:8000/api/hello");
			// 		const data = await resp.json();
			// 		setStore({ message: data.mssg });
			// 		// don't forget to return something, that is how the async resolves
			// 		return console.log(data);
			// 	}catch(error){
			// 		console.log("Error loading message from backend", error);
			// 	}
			// },
			
		}
	};
};

export default getState;