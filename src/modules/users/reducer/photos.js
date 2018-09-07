import { INITIAL_STATE, addUserPhotos } from '../model';

import photosModule from 'modules/photos';

function photosReducer(state = INITIAL_STATE.photos, action) {
  switch (action.type) {
    case photosModule.actionTypes.ADD_PHOTOS:
      return {
        ...state,
        [action.payload.id]: { byId: addUserPhotos(state, action) },
      };
    default:
      return state;
  }
}

export default photosReducer;
