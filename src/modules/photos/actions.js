import * as actionTypes from './actionTypes';

// Action creators
export function addPhotos(id, photos) {
  return {
    type: actionTypes.ADD_PHOTOS,
    payload: { id, photos },
  };
}
