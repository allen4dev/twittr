import React from 'react';
import styled from 'styled-components';

import UserDetails from './UserDetails';
import Photo from 'modules/photos/components/Photo';

import Avatar from 'components/shared/Avatar';
import Tag from 'components/shared/Tag';
import StyledLink from 'components/shared/StyledLink';

import banner from 'images/banner.jpg';
import avatar from 'images/avatar.jpg';

const Wrapper = styled.section`
  height: 20vw;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ProfileImage = styled(Photo)`
  height: 50%;
`;

const Information = styled.section`
  height: 50%;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    'avatar heading'
    'avatar edit';
`;

const UserAvatar = styled(Avatar)`
  grid-area: avatar;
  align-self: center;
`;

const Section = styled.header`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Fullname = styled.h3`
  color: white;
  font-weight: normal;
`;

const Details = styled(UserDetails)`
  height: 50%;
`;

const Profilecard = () => {
  return (
    <Wrapper>
      <ProfileImage src={banner} />
      <Information>
        <UserAvatar src={avatar} />
        <Section>
          <Fullname>User Fullname</Fullname>
          <Tag>@username</Tag>
        </Section>
        <Section>
          <Tag color="black">User Location</Tag>
          <StyledLink to="edit" color="gray">
            Edit Profile
          </StyledLink>
        </Section>
      </Information>
      <Details />
    </Wrapper>
  );
};

export default Profilecard;
