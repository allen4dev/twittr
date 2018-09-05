import { combineReducers } from 'redux';

import entities from './entities';
import replies from './replies';
import favorited from './favorited';
import retweeted from './retweeted';

const reducer = combineReducers({
  entities,
  replies,
  favorited,
  retweeted,
});

export default reducer;
