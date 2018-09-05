import { combineReducers } from 'redux';

import { INITIAL_STATE } from '../model';
import * as actionTypes from '../actionTypes';

import timelineReducer from './timeline';

function idReducer(state = INITIAL_STATE.current.id, action) {
  if (action.type === actionTypes.SET_CURRENT_USER) {
    return action.payload.id;
  }

  return state;
}

function tokenReducer(state = INITIAL_STATE.current.token, action) {
  if (action.type === actionTypes.SET_TOKEN) {
    return action.payload.token;
  }

  return state;
}

const currentReducer = combineReducers({
  id: idReducer,
  token: tokenReducer,
  timeline: timelineReducer,
});

export default currentReducer;
