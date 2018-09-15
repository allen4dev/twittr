import React from 'react';
import styled from 'styled-components';

import TweetBar from './TweetBar';
import TweetList from './TweetList';

const Wrapper = styled.section``;

const tweets = ['1', '2', '3', '4'];

const Timeline = ({ className }) => {
  return (
    <Wrapper className={className}>
      <TweetBar />
      <TweetList tweets={tweets} />
    </Wrapper>
  );
};

export default Timeline;
