import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
 border: 2px dashed  gray;
  align-items: center;
  gap: 4px;
  padding: 8px 2px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;
