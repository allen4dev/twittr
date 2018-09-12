import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Navigation from './Navigation';
import Searchbar from './Searchbar';

const Wrapper = styled.header``;

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
      <Searchbar />
    </Wrapper>
  );
};

export default Header;
