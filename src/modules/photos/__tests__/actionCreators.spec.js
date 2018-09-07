import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

it('should create an action to add a list of photos from a user', () => {
  const uid = '10';

  const photos = {
    '1': { type: 'photos', id: '1' },
    '2': { type: 'photos', id: '2' },
  };

  const expectedAction = {
    type: actionTypes.ADD_PHOTOS,
    payload: { id: uid, photos },
  };

  expect(actions.addPhotos(uid, photos)).toEqual(expectedAction);
});
