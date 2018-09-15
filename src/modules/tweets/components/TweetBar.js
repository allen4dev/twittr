import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/Avatar';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input';

import avatar from 'images/avatar.jpg';

const Wrapper = styled.form`
  background-color: white;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TweetBar = () => {
  return (
    <Wrapper>
      <Avatar src={avatar} width="5%" />
      <Input type="text" placeholder="What is on your mind?" />
      <Button>tweet</Button>
    </Wrapper>
  );
};

export default TweetBar;
