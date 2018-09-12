import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Navigation from './Navigation';
import Searchbar from './Searchbar';

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.skyblue};
  height: ${({ theme }) => theme.sizes.header};
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>Twitter</Logo>
      <Navigation />
      <Searchbar />
    </Wrapper>
  );
};

export default Header;
