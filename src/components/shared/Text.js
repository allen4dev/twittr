import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p``;

const Text = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Text;
