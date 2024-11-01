import React from 'react';
import { useState, useEffect,Suspense } from "react";
import axios from 'axios';
import { useParams, useLocation, Outlet } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import noPhotoImg from '../img/no-photo.png'
import { Container, Poster, Info, Title,Score,Overview, Genres, AdditionalInfo, PosterContainer, InfoLink, InfoList   } from "./MovieDetails.styled";
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
    
      <Container>

        <PosterContainer>
             {data.poster_path ? 
        <Poster src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} width="200" /> : <Poster src={noPhotoImg} alt="no-img" width="200"/>
      }
       </PosterContainer>
        <Info>
          <Title>{data.title}</Title>
      <Score>User Score: {data.vote_average * 10}%</Score>
      <Overview>Overview</Overview>
      <p>{data.overview}</p>
      <Genres>Genres</Genres>
      <ul>
        {data.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      </Info>
      </Container>
      <AdditionalInfo>Additional information:</AdditionalInfo>
      <InfoList>
        <li><InfoLink to="cast">Cast</InfoLink></li>
        <li><InfoLink to="reviews">Reviews</InfoLink></li>
      </InfoList>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;