import { INITIAL_STATE, userFollowed } from '../model';
import * as actionTypes from '../actionTypes';

function followingsReducer(state = INITIAL_STATE.followings, action) {
  switch (action.type) {
    case actionTypes.FOLLOW_USER:
      return {
        ...state,
        [action.payload.followerId]: {
          byId: userFollowed(state, action),
        },
      };

    default:
      return state;
  }
}

export default followingsReducer;
