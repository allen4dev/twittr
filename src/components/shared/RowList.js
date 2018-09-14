import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul``;

const RowList = ({ listIds, children }) => {
  return <Wrapper>{listIds.map(id => children(id))}</Wrapper>;
};

export default RowList;
