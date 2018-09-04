import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';
import { addTweetReplies } from '../model';

function repliesReducer(state = INITIAL_STATE.replies, action) {
  switch (action.type) {
    case actionTypes.ADD_REPLIES:
      return {
        ...state,
        [action.payload.id]: {
          byId: addTweetReplies(state, action),
        },
      };

    default:
      return state;
  }
}

export default repliesReducer;
