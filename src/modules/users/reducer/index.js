import { combineReducers } from 'redux';

import current from './current';
import tweets from './tweets';

const reducer = combineReducers({
  current,
  tweets,
});

export default reducer;
