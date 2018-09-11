import React from 'react';
import styled from 'styled-components';

import UserDetails from './UserDetails';
import Photo from 'modules/photos/components/Photo';

import Avatar from 'components/shared/Avatar';
import Tag from 'components/shared/Tag';
import StyledLink from 'components/shared/StyledLink';

const Wrapper = styled.section``;
const ProfileImage = styled(Photo)``;
const Information = styled.section``;
const UserAvatar = styled(Avatar)``;
const Heading = styled.header``;
const Fullname = styled.h3``;
const Edit = styled.div``;

const Profilecard = () => {
  return (
    <Wrapper>
      <ProfileImage />
      <Information>
        <UserAvatar />
        <Heading>
          <Fullname>User Fullname</Fullname>
          <Tag>@username</Tag>
        </Heading>
        <Edit>
          <Tag>User Location</Tag>
          <StyledLink to="edit">Edit Profile</StyledLink>
        </Edit>
      </Information>

      <UserDetails />
    </Wrapper>
  );
};

export default Profilecard;
