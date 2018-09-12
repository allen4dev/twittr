import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  height: 100%;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.darkblue};
  border: none;
  color: white;
  height: 100%;
  width: 100%;
  padding: 0.5rem 1rem;
`;

const Searchbar = () => {
  return (
    <Wrapper>
      <Input placeholder="Search twitter" />
    </Wrapper>
  );
};

export default Searchbar;
