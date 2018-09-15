import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  border: 2px solid yellow;
`;

const Actions = styled.div``;

const Published = styled.span``;

const TweetActions = () => {
  return (
    <Wrapper>
      <Actions>Actions</Actions>
      <Published>12 Min Ago</Published>
    </Wrapper>
  );
};

// // FavoriteButton
// Change to sfc
// class FavoriteButton extends Component {
//   favorite = (id) => {
//     await dispatch(props.handleFavorite(uid, id))
//   }

//   return (
//     <Button onClick={this.favorite}>⭐</Button>
//   )
// }

// // Component
// id = '1';
// favorite = props.favorite
// return (
//     
//   <FavoriteButton
//     handleFavorite={favorite}
//     id={id}
//   />
// )

export default FavoriteButton;

export default TweetActions;
