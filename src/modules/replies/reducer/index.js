import { combineReducers } from 'redux';

import entities from './entities';
import favorited from './favorited';

const reducer = combineReducers({
  entities,
  favorited,
});

export default reducer;
