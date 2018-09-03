import * as actionTypes from './actionTypes';

export function addReplies(replies) {
  return {
    type: actionTypes.ADD_REPLIES,
    payload: { replies },
  };
}
