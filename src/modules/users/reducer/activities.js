import { combineReducers } from 'redux';
import { INITIAL_STATE } from '../model';

import activitiesModule from 'modules/activities';

const ACTIVITIES_STATE = INITIAL_STATE.current.activities;

function byIdReducer(state = ACTIVITIES_STATE.byId, action) {
  switch (action.type) {
    case activitiesModule.actionTypes.ADD_ACTIVITIES:
      return [...state, ...Object.keys(action.payload.activities)];

    default:
      return state;
  }
}

const activitiesReducer = combineReducers({
  byId: byIdReducer,
  loading: () => null,
  nextPage: () => null,
});

export default activitiesReducer;
