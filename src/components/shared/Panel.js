import React from 'react';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';

import Title from 'components/shared/Title';

const Wrapper = styled.section``;

const Panel = ({ title, children }) => {
  return (
    <Wrapper>
      <Title color="darkgray" fsize="1.5rem">
        <FaBell /> {title}
      </Title>
      {children}
    </Wrapper>
  );
};

export default Panel;
