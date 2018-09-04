import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  if (action.type === actionTypes.ADD_REPLIES) {
    return {
      ...state,
      ...action.payload.replies,
    };
  }

  return state;
}

export default entitiesReducer;
