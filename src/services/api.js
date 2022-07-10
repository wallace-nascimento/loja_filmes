import axios from 'axios';

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=bb6f38d5646bd71fd951bda332daa555&language=en-US&page=1",
});

export default api;

//https://pokeapi.co/api/v2/pokemon/ditto