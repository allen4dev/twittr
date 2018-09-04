import { INITIAL_STATE, addUserTweets } from '../model';
import * as actionTypes from '../actionTypes';

function tweetsReducer(state = INITIAL_STATE.tweets, action) {
  switch (action.type) {
    case actionTypes.ADD_TWEETS:
      return {
        ...state,
        [action.payload.id]: {
          byId: addUserTweets(state, action),
        },
      };

    default:
      return state;
  }
}

export default tweetsReducer;
