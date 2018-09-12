import React from 'react';
import styled from 'styled-components';

import StyledLink from './StyledLink';

const NavLink = styled(StyledLink)`
  padding: 0.5rem 1rem;
  margin: 0 1rem;
`;

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/notifications">Notifications</NavLink>
      <NavLink to="/activities">Activities</NavLink>
    </Wrapper>
  );
};

export default Navigation;
