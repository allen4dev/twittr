import { combineReducers } from 'redux';

import entities from './entities';
import replies from './replies';

const reducer = combineReducers({
  entities,
  replies,
});

export default reducer;
