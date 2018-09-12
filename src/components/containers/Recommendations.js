import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section``;

const Recommendations = ({ className }) => {
  return (
    <Wrapper className={className}>
      <h1>Recommendations</h1>
    </Wrapper>
  );
};

export default Recommendations;
