import { combineReducers } from 'redux';
import tweets from './tweets';

const rootReducer = combineReducers({
  [tweets.constants.NAME]: tweets.reducer,
});

export default rootReducer;
