import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: ${({ size }) => (size ? size : '100%')};
`;

const Photo = ({ src, size, className }) => {
  return <Wrapper size={size} src={src} className={className} />;
};

export default Photo;
