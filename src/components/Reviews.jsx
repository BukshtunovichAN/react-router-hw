
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_KEY = '3556469a3deea69b9ea3bf68fe390f35';

const Reviews = () => {
     const [reviews, setCast] = useState([]);
  const { id } = useParams();

 useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`);
        setCast(response.data.results);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }; fetchReviews();
  }, [id]);

    return (
      <div>
        <h3>Reviews</h3>
         {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
        </div>
     
  
  )
};

export  default Reviews