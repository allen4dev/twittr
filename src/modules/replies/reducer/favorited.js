import { INITIAL_STATE, addFavoriteReply } from '../model';

import * as actionTypes from '../actionTypes';

function favoritedReducer(state = INITIAL_STATE.favorited, action) {
  if (action.type === actionTypes.FAVORITE_REPLY) {
    return {
      ...state,
      [action.payload.replyId]: addFavoriteReply(state, action),
    };
  }

  return state;
}

export default favoritedReducer;
