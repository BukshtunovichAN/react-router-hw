import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import axios from 'axios';
import MovieList from "components/MovieList";

const API_KEY = '3556469a3deea69b9ea3bf68fe390f35';

const fetchMovies = async (title) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

const Movies = () => {
    const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get("title") ?? "";
    console.log("Movies  title:", title)


    useEffect(() => {
        if (!title) return;

        const fetchAndSetMovies = async () => {
            const fetchedMovies = await fetchMovies(title);
            setMovies(fetchedMovies);
        }
             fetchAndSetMovies();
    }, [title]);



    const updateQueryString = (e) => { 
        e.preventDefault();

         const searchValue = e.currentTarget.elements.title.value.trim();
        if (searchValue){
        return setSearchParams({ title: searchValue})
        } else {setSearchParams({})}

        e.currentTarget.reset();
    }


  
    return (
        <>
            <h1>Это Search Movies</h1>
            <form   onSubmit={updateQueryString}>
            <input type="text" name="title" placeholder="Search for a movie..."/>
            <button type="Submit">Search</button>
            </form>
            
            <MovieList movies={movies}/>
        </>
    )

}
export default Movies