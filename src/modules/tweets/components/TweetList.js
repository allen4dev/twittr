import React from 'react';
import styled from 'styled-components';

import TweetCard from './TweetCard';
import Tweet from './Tweet';

const Wrapper = styled.section``;

const TweetList = ({ tweets }) => {
  return (
    <Wrapper>
      {tweets.map(id => (
        <TweetCard key={id}>
          <Tweet id={id} />
        </TweetCard>
      ))}
    </Wrapper>
  );
};

export default TweetList;
