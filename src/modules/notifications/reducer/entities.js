import { INITIAL_STATE } from '../model';

import * as actionTypes from '../actionTypes';

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  switch (action.type) {
    case actionTypes.ADD_NOTIFICATIONS:
      return {
        ...state,
        ...action.payload.notifications,
      };

    default:
      return state;
  }
}

export default entitiesReducer;
