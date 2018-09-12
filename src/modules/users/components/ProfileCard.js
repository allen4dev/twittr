import React from 'react';
import styled from 'styled-components';

import UserDetails from './UserDetails';
import Photo from 'modules/photos/components/Photo';

import Avatar from 'components/shared/Avatar';
import Tag from 'components/shared/Tag';
import StyledLink from 'components/shared/StyledLink';

import banner from 'images/banner.jpg';

const Wrapper = styled.section`
  border: 4px solid red;
  height: 20vw;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProfileImage = styled(Photo)`
  height: 50%;
  border: 2px solid darkorange;
`;
const Information = styled.section`
  height: 50%;
  border: 2px solid blue;
  position: absolute;
`;
const Details = styled(UserDetails)`
  height: 50%;
  border: 2px solid black;
`;
const Heading = styled.header``;
const Fullname = styled.h3``;
const Edit = styled.div``;

const Profilecard = () => {
  return (
    <Wrapper>
      <ProfileImage src={banner} />
      <Information>
        <Avatar />
        <Heading>
          <Fullname>User Fullname</Fullname>
          <Tag>@username</Tag>
        </Heading>
        <Edit>
          <Tag>User Location</Tag>
          <StyledLink to="edit">Edit Profile</StyledLink>
        </Edit>
      </Information>
      <Details />
    </Wrapper>
  );
};

export default Profilecard;
