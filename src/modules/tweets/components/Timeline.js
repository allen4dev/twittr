import React from 'react';
import styled from 'styled-components';

import TweetBar from './TweetBar';

const Wrapper = styled.section``;

const Timeline = ({ className }) => {
  return (
    <Wrapper className={className}>
      <TweetBar />
    </Wrapper>
  );
};

export default Timeline;
