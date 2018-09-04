import { INITIAL_STATE } from '../model';

import * as actions from '../actions';

import reducer from '../reducer';
import entitiesReducer from '../reducer/entities';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('replies module reducer', () => {
  const ENTITIES_STATE = INITIAL_STATE.entities;

  describe('entities', () => {
    it('should handle ADD_REPLIES action', () => {
      const replies = {
        '1': {
          type: 'replies',
          id: '1',
          // more fields
        },
      };

      const nextState = entitiesReducer(
        ENTITIES_STATE,
        actions.addReplies(replies),
      );

      expect(nextState).toEqual({
        ...ENTITIES_STATE,
        ...replies,
      });

      const newReplies = {
        '2': { type: 'replies', id: '2' },
        '3': { type: 'replies', id: '3' },
      };

      const newState = entitiesReducer(
        nextState,
        actions.addReplies(newReplies),
      );

      expect(newState).toEqual({
        ...nextState,
        ...newReplies,
      });
    });
  });
});
