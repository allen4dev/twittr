import { combineReducers } from 'redux';

import current from './current';

const reducer = combineReducers({
  current,
  tweets: () => ({}),
});

export default reducer;
