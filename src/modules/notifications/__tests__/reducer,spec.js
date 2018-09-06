import { INITIAL_STATE } from '../model';

import * as actions from '../actions';

import reducer from '../reducer';
import entitiesReducer from '../reducer/entities';

describe('users module - reducer', () => {
  test('@INIT', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  describe('entities', () => {
    const ENTITIES_STATE = INITIAL_STATE.entities;

    it('should handle ADD_NOTIFICATIONS action', () => {
      const uid = '10';

      const notifications = {
        '1': { type: 'notifications', id: '1' },
        '2': { type: 'notifications', id: '2' },
      };

      const nextState = entitiesReducer(
        ENTITIES_STATE,
        actions.addNotifications(uid, notifications),
      );

      expect(nextState).toEqual({
        ...ENTITIES_STATE,
        ...notifications,
      });

      const newNotifications = {
        '3': { type: 'notifications', id: '3' },
        '4': { type: 'notifications', id: '4' },
      };

      const newState = entitiesReducer(
        nextState,
        actions.addNotifications(uid, newNotifications),
      );

      expect(newState).toEqual({
        ...nextState,
        ...newNotifications,
      });
    });
  });
});
