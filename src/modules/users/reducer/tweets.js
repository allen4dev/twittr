import { INITIAL_STATE, addUserTweets } from '../model';
import * as actionTypes from '../actionTypes';

function tweetsReducer(state = INITIAL_STATE.tweets, action) {
  if (action.type === actionTypes.ADD_TWEETS) {
    return {
      ...state,
      [action.payload.id]: addUserTweets(state, action),
    };
  }

  return state;
}

export default tweetsReducer;
