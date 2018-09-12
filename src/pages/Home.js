import React from 'react';
import styled from 'styled-components';

import ProfileCard from 'modules/users/components/ProfileCard';
import Timeline from 'modules/tweets/components/Timeline';

import Recommendations from 'components/containers/Recommendations';

import Header from 'components/shared/Header';
import Panel from 'components/shared/Panel';
import RowList from 'components/shared/RowList';

const Wrapper = styled.section`
  display: grid;
  margin-top: ${({ theme }) => theme.sizes.header};
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
`;
const Sidebar = styled.section`
  background-color: #bada55;
`;
const StyledTimeline = styled(Timeline)`
  background-color: hotpink;
`;
const StyledRecommendations = styled(Recommendations)`
  background-color: orange;
`;

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar>
        <ProfileCard />
        <Panel>
          <RowList />
        </Panel>
      </Sidebar>
      <StyledTimeline />
      <StyledRecommendations />
    </Wrapper>
  );
};

export default Home;
