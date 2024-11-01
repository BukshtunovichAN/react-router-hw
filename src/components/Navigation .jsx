import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/movie"
        className={() =>
          location.pathname.startsWith('/movie') ? 'active-link' : ''
        }
      >
        Movie
      </NavLink>
    </nav>
  );
};

export default Navigation