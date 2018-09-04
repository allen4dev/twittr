import { INITIAL_STATE } from '../model';
import * as actions from '../actions';
import reducer from '../reducer';

import entitiesReducer from '../reducer/entities';
import repliesReducer from '../reducer/replies';

describe('tweets module', () => {
  test('@INIT', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  describe('entities', () => {
    const ENTITIES_STATE = INITIAL_STATE.entities;

    it('should handle ADD_TWEETS action', () => {
      const tweet = {
        '1': {
          type: 'tweets',
          id: '1',
          attributes: {
            body: 'Tweet 1',
            // more fields
          },
        },
      };

      const nextState = entitiesReducer(
        ENTITIES_STATE,
        actions.addTweets(tweet),
      );

      expect(nextState).toEqual({
        ...ENTITIES_STATE,
        ...tweet,
      });

      const newTweets = {
        '2': {
          type: 'tweets',
          id: '2',
          attributes: {
            body: 'Tweet 2',
            // more fields
          },
        },
        '3': {
          type: 'tweets',
          id: '3',
          attributes: {
            body: 'Tweet 3',
            // more fields
          },
        },
      };

      const newState = entitiesReducer(nextState, actions.addTweets(newTweets));

      expect(newState).toEqual({
        ...nextState,
        ...newTweets,
      });
    });
  });

  describe('replies', () => {
    const REPLIES_STATE = INITIAL_STATE.tweets;

    it('should handle ADD_REPLIES action', () => {
      const tweetId = '1';
      const replies = ['1'];

      const nextState = repliesReducer(
        REPLIES_STATE,
        actions.addReplies(tweetId, replies),
      );

      expect(nextState).toEqual({
        ...REPLIES_STATE,
        [tweetId]: {
          byId: [...replies],
        },
      });

      const newReplies = ['2', '3'];

      const newState = repliesReducer(
        nextState,
        actions.addReplies(tweetId, newReplies),
      );

      expect(newState).toEqual({
        ...nextState,
        [tweetId]: {
          byId: [...replies, ...newReplies],
        },
      });
    });
  });
});
