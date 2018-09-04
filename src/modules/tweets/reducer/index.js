import { combineReducers } from 'redux';

import entities from './entities';
import replies from './replies';
import favorited from './favorited';

const reducer = combineReducers({
  entities,
  replies,
  favorited,
});

export default reducer;
