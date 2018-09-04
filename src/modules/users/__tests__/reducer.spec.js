import { INITIAL_STATE } from '../model';
import * as actions from '../actions';

import reducer from '../reducer';
import currentReducer from '../reducer/current';
import tweetsReducer from '../reducer/tweets';
import followersReducer from '../reducer/followers';

describe('users module', () => {
  test('@INIT', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  describe('current', () => {
    const CURRENT_STATE = INITIAL_STATE.current;

    it('should handle SET_TOKEN action', () => {
      const token = 'xxx-xxx-xxx';

      const nextState = currentReducer(CURRENT_STATE, actions.setToken(token));

      expect(nextState).toEqual({
        ...CURRENT_STATE,
        token,
      });
    });

    it('should handle SET_CURRENT_USER action', () => {
      const id = '1';

      const nextState = currentReducer(
        CURRENT_STATE,
        actions.setCurrentUser(id),
      );

      expect(nextState).toEqual({
        ...CURRENT_STATE,
        id,
      });
    });
  });

  describe('tweets', () => {
    const TWEETS_STATE = INITIAL_STATE.tweets;

    it('should handle ADD_TWEETS action', () => {
      const uid1 = '1';
      const user1Tweet = ['1'];

      const nextState = tweetsReducer(
        TWEETS_STATE,
        actions.addTweets(uid1, user1Tweet),
      );

      expect(nextState).toEqual({
        ...nextState,
        [uid1]: {
          byId: user1Tweet,
        },
      });

      const uid2 = '2';
      const user2Tweets = ['2', '3'];

      const newState = tweetsReducer(
        nextState,
        actions.addTweets(uid2, user2Tweets),
      );

      expect(newState).toEqual({
        ...nextState,
        [uid2]: {
          byId: [...user2Tweets],
        },
      });
    });
  });

  describe('followers', () => {
    const FOLLOWERS_STATE = INITIAL_STATE.followers;

    it('should handle FOLLOW_USER action', () => {
      const followerId = '1';
      const followingId = '2';

      const nextState = followersReducer(
        FOLLOWERS_STATE,
        actions.followUser(followerId, followingId),
      );

      expect(nextState).toEqual({
        ...FOLLOWERS_STATE,
        [followerId]: {
          byId: [followingId],
        },
      });

      const newUser = '3';

      const newState = followersReducer(
        nextState,
        actions.followUser(followerId, newUser),
      );

      expect(newState).toEqual({
        ...nextState,
        [followerId]: {
          byId: [followingId, newUser],
        },
      });
    });
  });
});
