import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"

const MovieList = ({ movies }) => {
     const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;