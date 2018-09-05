import { combineReducers } from 'redux';

import current from './current';
import tweets from './tweets';
import followers from './followers';
import followings from './followings';

const reducer = combineReducers({
  current,
  tweets,
  followers,
  followings,
});

export default reducer;
