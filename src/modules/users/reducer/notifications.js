import { combineReducers } from 'redux';

import { INITIAL_STATE } from '../model';
import * as actionTypes from '../actionTypes';

import notificationsModule from 'modules/notifications';

const NOTIFICATIONS_STATE = INITIAL_STATE.current.notifications;

function byIdReducer(state = NOTIFICATIONS_STATE.byId, action) {
  switch (action.type) {
    case notificationsModule.actionTypes.ADD_NOTIFICATIONS:
      return [...state, ...Object.keys(action.payload.notifications)];
    default:
      return state;
  }
}

const notificationsReducer = combineReducers({
  byId: byIdReducer,
  loading: () => null,
  nextPage: () => null,
});

export default notificationsReducer;
