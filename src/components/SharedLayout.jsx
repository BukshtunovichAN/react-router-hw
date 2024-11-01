import { Suspense } from "react";
import { Outlet, useLocation  } from "react-router-dom";
import { Container, Header, Logo, Link} from "./SharedLayout.styled";

export const SharedLayout = () => {
    const location = useLocation();

  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            🎥
          </span>{" "}
          GoMovies
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/search"  className={location.pathname.startsWith("/search") || location.pathname.startsWith("/movie") ? "active" : ""}>Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};


export default SharedLayout

