import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import styled from  "styled-components" ;

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(()=> import("../components/MovieDetails"))
const Cast = lazy(() => import("../components/Cast"));
const Reviews = lazy(() => import("../components/Reviews"))


const  StyledLink = styled ( NavLink ) `
  color: black;
text-decoration: none;

  &.active {
    color: orange;
  }
` ;


const App = ()=>{
  return (
    <div>
      <nav>
        <ul>
          <li><StyledLink to="/">Home</StyledLink ></li>
          <li><StyledLink  to="/search">Movies</StyledLink ></li>
        </ul>
        
        
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
        </Routes>
        </Suspense>
    </div>
  );
}

export default App