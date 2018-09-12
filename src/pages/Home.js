import React from 'react';
import styled from 'styled-components';

import ProfileCard from 'modules/users/components/ProfileCard';
import Timeline from 'modules/tweets/components/Timeline';

import Recommendations from 'components/containers/Recommendations';

import Header from 'components/shared/Header';
import Panel from 'components/shared/Panel';
import RowList from 'components/shared/RowList';

const Wrapper = styled.section`
  margin-top: ${({ theme }) => theme.sizes.header};
`;

const Content = styled.section`
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  overflow: hidden;
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  grid-template-areas: 'sidebar timeline recommendations';
`;

const Sidebar = styled.section`
  background-color: #bada55;
  grid-area: sidebar;
`;
const StyledTimeline = styled(Timeline)`
  background-color: hotpink;
  grid-area: timeline;
`;
const StyledRecommendations = styled(Recommendations)`
  background-color: orange;
  grid-area: recommendations;
`;

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Sidebar>
          <ProfileCard />
          <Panel>
            <RowList />
          </Panel>
        </Sidebar>
        <StyledTimeline />
        <StyledRecommendations />
      </Content>
    </Wrapper>
  );
};

export default Home;
