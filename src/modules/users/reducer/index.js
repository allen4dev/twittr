import { combineReducers } from 'redux';

import current from './current';
import tweets from './tweets';
import followers from './followers';
import followings from './followings';
import photos from './photos';

const reducer = combineReducers({
  current,
  tweets,
  followers,
  followings,
  photos,
});

export default reducer;
