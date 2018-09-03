import { combineReducers } from 'redux';

import replies from './replies';
import tweets from './tweets';
import users from './users';

const rootReducer = combineReducers({
  [replies.constants.NAME]: replies.reducer,
  [tweets.constants.NAME]: tweets.reducer,
  [users.constants.NAME]: users.reducer,
});

export default rootReducer;
