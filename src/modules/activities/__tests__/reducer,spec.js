import { INITIAL_STATE } from '../model';

import * as actions from '../actions';

import reducer from '../reducer';
import entitiesReducer from '../reducer/entities';

describe('activities', () => {
  test('@INIT', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  describe('entities', () => {
    const ENTITIES_STATE = INITIAL_STATE.entities;

    it('should handle ADD_ACTIVITIES action', () => {
      const activities = {
        '1': { type: 'activities', id: '1' },
        '2': { type: 'activities', id: '2' },
      };

      const nextState = entitiesReducer(
        ENTITIES_STATE,
        actions.addActivities(activities),
      );

      expect(nextState).toEqual({
        ...ENTITIES_STATE,
        ...activities,
      });

      const newActivities = {
        '3': { type: 'activities', id: '3' },
        '4': { type: 'activities', id: '4' },
      };

      const newState = entitiesReducer(
        nextState,
        actions.addActivities(newActivities),
      );

      expect(newState).toEqual({
        ...nextState,
        ...newActivities,
      });
    });
  });
});
