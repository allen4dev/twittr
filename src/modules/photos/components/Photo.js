import React from 'react';
import styled from 'styled-components';

import Image from 'components/shared/Image';

const Wrapper = styled.figure`
  width: ${({ size }) => (size ? `${size}px` : '100%')};
`;

const Photo = ({ src, size }) => {
  return (
    <Wrapper size={size}>
      <Image src={src} />
    </Wrapper>
  );
};

export default Photo;
