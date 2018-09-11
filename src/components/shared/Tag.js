import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  bakground-color: ${({ bgColor }) => bgColor && bgColor};
  color: ${({ color }) => (color ? color : 'white')};
  font-weight: ${({ emphasize }) => emphasize && 'bold'};
  font-style: ${({ emphasize }) => emphasize && 'italic'};
`;

const Tag = ({ color, bgColor, children, emphasize }) => {
  return (
    <Wrapper color={color} bgColor={bgColor} emphasize={emphasize}>
      {children}
    </Wrapper>
  );
};

export default Tag;
