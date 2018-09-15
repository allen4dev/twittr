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

function renderNotification(id) {
  return <Notification key={id} id={id} />;
}

function renderList(ids) {
  return <RowList listIds={ids}>{id => renderNotification(id)}</RowList>;
}

const Sidebar = () => {
  return (
    <Wrapper>
      <ProfileCard />
      <Panel title="Notifications" />
      {renderList(ids)}
    </Wrapper>
  );
};

export default Sidebar;
