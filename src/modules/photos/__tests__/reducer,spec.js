import { INITIAL_STATE } from '../model';

import * as actions from '../actions';

import reducer from '../reducer';
import entitiesReducer from '../reducer/entities';

describe('photos module - reducer', () => {
  test('@INIT', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  describe('entities', () => {
    const ENTITIES_STATE = INITIAL_STATE.entities;

    it('should handle ADD_PHOTOS action', () => {
      const uid = '10';

      const photos = {
        '1': { type: 'photos', id: '1' },
        '2': { type: 'photos', id: '2' },
      };

      const nextState = entitiesReducer(
        ENTITIES_STATE,
        actions.addPhotos(uid, photos),
      );

      expect(nextState).toEqual({
        ...ENTITIES_STATE,
        ...photos,
      });

      const newPhotos = {
        '3': { type: 'photos', id: '3' },
        '4': { type: 'photos', id: '4' },
      };

      const newState = entitiesReducer(
        nextState,
        actions.addPhotos(uid, newPhotos),
      );

      expect(newState).toEqual({
        ...nextState,
        ...newPhotos,
      });
    });
  });
});
