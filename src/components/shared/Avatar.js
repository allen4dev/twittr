import React from 'react';
import styled from 'styled-components';

import Image from 'components/shared/Image';

const Wrapper = styled.figure`
  border-radius: 50%;
  border: 2px solid white;
  overflow: hidden;
  max-width: 75px;
  min-width: 48px;
  width: ${({ width }) => (width ? width : '100%')};
`;

const Avatar = ({ src, width, className }) => {
  return (
    <Wrapper width={width} className={className}>
      <Image src={src} />
    </Wrapper>
  );
};

export default Avatar;
