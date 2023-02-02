import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

const App = () => {
	const searchMovies = async title => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		console.log(data.Search);
	};

	useEffect(() => {
		searchMovies('Batman');
	}, []);

	return <div>App</div>;
};

export default App;
