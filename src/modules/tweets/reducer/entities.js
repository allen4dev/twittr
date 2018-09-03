import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  switch (action.type) {
    case actionTypes.ADD_TWEETS:
      return {
        ...state,
        ...action.payload.tweets,
      };

    default:
      return state;
  }
}

export default entitiesReducer;
