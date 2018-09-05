import { combineReducers } from 'redux';

import { INITIAL_STATE } from '../model';
import * as actionTypes from '../actionTypes';

const TIMELINE_STATE = INITIAL_STATE.current.timeline;

function tweetsReducer(state = TIMELINE_STATE.tweets, action) {
  switch (action.type) {
    case actionTypes.ADD_TIMELINE_TWEETS:
      const tweets = Object.keys(action.payload.tweets);

      return [...state, ...tweets];

    default:
      return state;
  }
}

const timelineReducer = combineReducers({
  tweets: tweetsReducer,
  loading: () => null,
  nextPage: () => null,
});

export default timelineReducer;
