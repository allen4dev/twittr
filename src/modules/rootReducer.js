import { combineReducers } from 'redux';

import users from './users';
import tweets from './tweets';

const rootReducer = combineReducers({
  [users.constants.NAME]: users.reducer,
  [tweets.constants.NAME]: tweets.reducer,
});

export default rootReducer;
