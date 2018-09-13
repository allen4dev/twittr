import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  text-align: center;
`;

const Count = styled.span`
  margin-bottom: 0.2rem;
`;

const Name = styled.span`
  color: gray;
  font-weight: bold;
  font-size: 0.7rem;
  text-transform: uppercase;
`;

const UserDetails = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Item>
        <Count>5487</Count>
        <Name>Tweets</Name>
      </Item>

      <Item>
        <Count>100487</Count>
        <Name>Followers</Name>
      </Item>

      <Item>
        <Count>470</Count>
        <Name>Following</Name>
      </Item>
    </Wrapper>
  );
};

export default UserDetails;
