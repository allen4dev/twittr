import * as actionTypes from '../actionTypes';
import { INITIAL_STATE, addFavoritedTweet } from '../model';

function favoritedReducer(state = INITIAL_STATE.favorited, action) {
  switch (action.type) {
    case actionTypes.FAVORITE_TWEET:
      return {
        ...state,
        [action.payload.tweetId]: addFavoritedTweet(state, action),
      };

    default:
      return state;
  }
}

export default favoritedReducer;
