import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: ${({ color }) => (color ? color : 'white')};
`;

export default StyledLink;
