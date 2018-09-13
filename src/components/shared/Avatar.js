import React from 'react';
import styled from 'styled-components';

// import Photo from 'modules/photos/components/Photo';
import Image from 'components/shared/Image';

// const Avatar = styled(Photo)`
//   border-radius: 50%;
//   border: 2px solid white;
// `;

const Wrapper = styled.figure`
  border-radius: 50%;
  border: 2px solid white;
  overflow: hidden;
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
