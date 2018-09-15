import React from 'react';
import styled from 'styled-components';

import TweetActions from './TweetActions';

const Wrapper = styled.article``;

const TweetCard = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <TweetActions>TweetActions here</TweetActions>
    </Wrapper>
  );
};

export default TweetCard;
