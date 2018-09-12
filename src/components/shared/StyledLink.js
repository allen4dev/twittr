import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: ${({ color }) => (color ? color : 'white')};
  padding: 0.5rem;
  text-decoration: none;
`;

export default StyledLink;
