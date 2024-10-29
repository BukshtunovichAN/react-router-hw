import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_KEY = '3556469a3deea69b9ea3bf68fe390f35';

const Cast = () => {
     const [cast, setCast] = useState([]);
     console.log("Cast  cast:", cast)
  const { id } = useParams();

 useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    }; fetchCast();
  }, [id]);

  return ( <div>
      <h3>Cast</h3>
      <ul>
        {cast.map(actor => (
            <li key={actor.id}>
               {actor.profile_path && (
        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} width="200" />
                )}
                <h4>{actor.name}</h4>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>)
};

export  default Cast