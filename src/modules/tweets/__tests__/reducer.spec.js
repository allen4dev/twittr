import { INITIAL_STATE } from '../model';
import * as actions from '../actions';
import reducer from '../reducer';

import entitiesReducer from '../reducer/entities';
import repliesReducer from '../reducer/replies';
import favoritedReducer from '../reducer/favorited';
import retweetedReducer from '../reducer/retweeted';

import usersModule from 'modules/users';

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

    it('should handle usersModule.actionTypes.ADD_TIMELINE_TWEETS action', () => {
      const uid = '1';
      const tweets = {
        '2': { type: 'tweets', id: '2' },
      };

      const nextState = entitiesReducer(
        ENTITIES_STATE,
        usersModule.actions.addTimelineTweets(uid, tweets),
      );

      expect(nextState).toEqual({
        ...ENTITIES_STATE,
        ...tweets,
      });

      const newTweets = {
        '3': { type: 'tweets', id: '3' },
        '4': { type: 'tweets', id: '4' },
      };

      const newState = entitiesReducer(
        nextState,
        usersModule.actions.addTimelineTweets(uid, newTweets),
      );

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

  describe('favorited', () => {
    const FAVORITED_STATE = INITIAL_STATE.favorited;

    it('should handle FAVORITE_TWEET action', () => {
      const uid = '1';
      const tweetId = '1';

      const nextState = favoritedReducer(
        FAVORITED_STATE,
        actions.favoriteTweet(uid, tweetId),
      );

      expect(nextState).toEqual({
        ...FAVORITED_STATE,
        [tweetId]: [uid],
      });

      const uid2 = '2';
      const tweetId2 = '2';

      const newState = favoritedReducer(
        nextState,
        actions.favoriteTweet(uid2, tweetId2),
      );

      expect(newState).toEqual({
        ...nextState,
        [tweetId2]: [uid2],
      });
    });
  });

  describe('retweeted', () => {
    const RETWEETED_STATE = INITIAL_STATE.retweeted;

    it('should handle RETWEET action', () => {
      const id = '1';
      const uid2 = '2';

      const nextState = retweetedReducer(
        RETWEETED_STATE,
        actions.retweetTweet(id, uid2),
      );

      expect(nextState).toEqual({
        ...RETWEETED_STATE,
        [id]: [uid2],
      });

      const uid3 = '3';

      const newState = retweetedReducer(
        nextState,
        actions.retweetTweet(id, uid3),
      );

      expect(newState).toEqual({
        ...nextState,
        [id]: [uid2, uid3],
      });
    });
  });
});
