import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import Home from "../pages/Home";
// import Movies from "../pages/Movies";
import NotFound from "../components/NotFound";
import { SharedLayout } from "./SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(()=> import("../components/MovieDetails"))
const Cast = lazy(() => import("../components/Cast"));
const Reviews = lazy(() => import("../components/Reviews"))


const App = ()=>{
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound/>} />

        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Route>
        </Routes>
  );
}

export default App