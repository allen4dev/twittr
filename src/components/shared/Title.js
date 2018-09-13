import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: ${({ color }) => color && color};
  font-size: ${({ fsize }) => fsize && fsize};
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Title = ({ color, fsize, children }) => {
  return (
    <Wrapper color={color} fsize={fsize}>
      {children}
    </Wrapper>
  );
};

export default Title;
