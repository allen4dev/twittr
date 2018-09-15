import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  bakground-color: ${({ bgColor }) => bgColor && bgColor};
  color: ${({ color }) => (color ? color : 'white')};
  font-weight: ${({ emphasize }) => emphasize && 'bold'};
  font-style: ${({ emphasize }) => emphasize && 'italic'};
  font-size: ${({ fsize }) => fsize && fsize};
`;

const Tag = ({ color, bgColor, children, emphasize, fsize, className }) => {
  return (
    <Wrapper
      fsize={fsize}
      color={color}
      bgColor={bgColor}
      emphasize={emphasize}
      className={className}>
      {children}
    </Wrapper>
  );
};

export default Tag;
