import { combineReducers } from 'redux';
import users from './users';

const rootReducer = combineReducers({
  [users.constants.NAME]: users.reducer,
});

export default rootReducer;
