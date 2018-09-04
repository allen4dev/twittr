import { combineReducers } from 'redux';

import current from './current';
import tweets from './tweets';
import followers from './followers';

const reducer = combineReducers({
  current,
  tweets,
  followers,
});

export default reducer;
