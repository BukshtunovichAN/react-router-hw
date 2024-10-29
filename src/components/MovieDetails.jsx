import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { BackLink } from "../components/BackLink";
const API_KEY = '3556469a3deea69b9ea3bf68fe390f35';

const MovieDetails = () => {

  const [data, setData] = useState()
  const { id } = useParams();
   const location = useLocation();
  const backLinkHref = location.state?.from ?? "/search"
useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

        fetchMovieDetails ();
    }, [id]);


  if (!data) return <div>Loading...</div>;


  return (
    <div>

         <BackLink to={backLinkHref}>Go back</BackLink>
    
      <h2>{data.title}</h2>
      

      {data.backdrop_path && (
        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.title} width="200" />
      )}
      <p>User Score: {data.popularity }%</p>
      <h3>Overview</h3>
      <p>{data.overview}</p>
      <h3>Genres</h3>
      <ul>
        {data.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <p>Additional information</p>
      <nav>
        <li><NavLink to="cast">Cast</NavLink></li>
        <li><NavLink to="reviews">Reviews</NavLink></li>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetails;