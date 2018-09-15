import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/Avatar';
import Tag from 'components/shared/Tag';
import Text from 'components/shared/Text';

import avatar from 'images/avatar.jpg';

const Wrapper = styled.article`
  border: 2px solid green;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
`;

const Content = styled.section`
  flex: 1;
  margin-left: 0.5rem;
  padding: 0.5rem;
`;

const Heading = styled.header`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const Fullname = styled(Tag)`
  margin-right: 0.5rem;
`;

const Tweet = () => {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Content>
        <Heading>
          <Fullname color="black">Allen Walker</Fullname>
          <Tag color="gray" fsize=".8rem">
            @allen
          </Tag>
        </Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          voluptas animi laborum dicta optio mollitia ut quia ducimus totam
          tenetur magnam earum sed, enim fugiat vero, ipsum provident molestiae.
          Doloribus.
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Tweet;
