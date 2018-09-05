import * as actionTypes from '../actionTypes';
import { INITIAL_STATE, retweetedTweet } from '../model';

function retweetedReducer(state = INITIAL_STATE.retweeted, action) {
  switch (action.type) {
    case actionTypes.RETWEET:
      return {
        ...state,
        [action.payload.id]: retweetedTweet(state, action),
      };

    default:
      return state;
  }
}

export default retweetedReducer;
