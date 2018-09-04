import { INITIAL_STATE, addFollower } from '../model';
import * as actionTypes from '../actionTypes';

function followersReducer(state = INITIAL_STATE.followers, action) {
  switch (action.type) {
    case actionTypes.FOLLOW_USER:
      return {
        ...state,
        [action.payload.followerId]: {
          byId: addFollower(state, action),
        },
      };

    default:
      return state;
  }
}

export default followersReducer;
