import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
const API_KEY = '3556469a3deea69b9ea3bf68fe390f35';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
      setMovies(response.data.results);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;