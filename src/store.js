import { createStore, applyMiddleware } from 'redux';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
