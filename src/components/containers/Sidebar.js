import React from 'react';
import styled from 'styled-components';

import ProfileCard from 'modules/users/components/ProfileCard';
import Notification from 'modules/notifications/components/Notification';

import Panel from 'components/shared/Panel';
import RowList from 'components/shared/RowList';

const Wrapper = styled.section`
  background-color: #bada55;
  grid-area: sidebar;
`;

const ids = ['1', '2', '3', '4'];

const Sidebar = () => {
  return (
    <Wrapper>
      <ProfileCard />
      <Panel title="Notifications">
        <RowList listIds={ids}>
          {id => <Notification key={id} id={id} />}
        </RowList>
      </Panel>
    </Wrapper>
  );
};

export default Sidebar;
