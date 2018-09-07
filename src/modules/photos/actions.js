import * as actionTypes from './actionTypes';

import api from 'utils/api';
import { normalizeResponse } from 'utils/helpers';

// Action creators
export function addPhotos(id, photos) {
  return {
    type: actionTypes.ADD_PHOTOS,
    payload: { id, photos },
  };
}

// Async actions
export function fetchPhotos(uid) {
  return async dispatch => {
    const { data: results } = await api.users.photos(uid);

    const photos = normalizeResponse(results);

    dispatch(addPhotos(uid, photos));
  };
}
