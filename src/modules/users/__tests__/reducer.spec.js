import { INITIAL_STATE } from '../model';
import * as actions from '../actions';

import reducer from '../reducer';
import currentReducer from '../reducer/current';
import tweetsReducer from '../reducer/tweets';
import followersReducer from '../reducer/followers';
import followingsReducer from '../reducer/followings';
import timelineReducer from '../reducer/timeline';
import notificationsReducer from '../reducer/notifications';
import activitiesReducer from '../reducer/activities';

import notificationsModule from 'modules/notifications';
import activitiesModule from 'modules/activities';

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

    describe('timeline', () => {
      const TIMELINE_STATE = CURRENT_STATE.timeline;

      it('should handle ADD_TIMELINE_TWEETS action', () => {
        const uid = '1';

        const tweets = {
          '2': { type: 'tweets', id: '2' },
        };

        const nextState = timelineReducer(
          TIMELINE_STATE,
          actions.addTimelineTweets(uid, tweets),
        );

        expect(nextState).toEqual({
          ...TIMELINE_STATE,
          tweets: Object.keys(tweets),
        });

        const newTweets = {
          '3': { type: 'tweets', id: '3' },
          '4': { type: 'tweets', id: '4' },
        };

        const newState = timelineReducer(
          nextState,
          actions.addTimelineTweets(uid, newTweets),
        );

        expect(newState).toEqual({
          ...nextState,
          tweets: [...nextState.tweets, ...Object.keys(newTweets)],
        });
      });
    });

    describe('notifications', () => {
      const NOTIFICATIONS_STATE = CURRENT_STATE.notifications;

      it('should handle notifications/ADD_NOTIFICATIONS action', () => {
        const uid = '10';
        const notifications = {
          '1': { type: 'notifications', id: '1' },
          '2': { type: 'notifications', id: '2' },
        };

        const nextState = notificationsReducer(
          NOTIFICATIONS_STATE,
          notificationsModule.actions.addNotifications(uid, notifications),
        );

        expect(nextState).toEqual({
          ...NOTIFICATIONS_STATE,
          byId: Object.keys(notifications),
        });

        const newNotifications = {
          '3': { type: 'notifications', id: '3' },
          '4': { type: 'notifications', id: '4' },
        };

        const newState = notificationsReducer(
          nextState,
          notificationsModule.actions.addNotifications(uid, newNotifications),
        );

        expect(newState).toEqual({
          ...nextState,
          byId: [
            ...Object.keys(notifications),
            ...Object.keys(newNotifications),
          ],
        });
      });
    });

    describe('activities', () => {
      const ACTIVITIES_STATE = CURRENT_STATE.activities;

      it('should handle activities/ADD_ACTIVITIES action', () => {
        const activities = {
          '1': { type: 'activities', id: '1' },
          '2': { type: 'activities', id: '2' },
        };

        const nextState = activitiesReducer(
          ACTIVITIES_STATE,
          activitiesModule.actions.addActivities(activities),
        );

        expect(nextState).toEqual({
          ...ACTIVITIES_STATE,
          byId: Object.keys(activities),
        });

        const newActivities = {
          '3': { type: 'activities', id: '3' },
          '4': { type: 'activities', id: '4' },
        };

        const newState = activitiesReducer(
          nextState,
          activitiesModule.actions.addActivities(newActivities),
        );

        expect(newState).toEqual({
          ...nextState,
          byId: [...nextState.byId, ...Object.keys(newActivities)],
        });
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
        [followingId]: {
          byId: [followerId],
        },
      });

      const newUserFollowed = '3';

      const newState = followersReducer(
        nextState,
        actions.followUser(followerId, newUserFollowed),
      );

      expect(newState).toEqual({
        ...nextState,
        [newUserFollowed]: {
          byId: [followerId],
        },
      });
    });
  });

  describe('followings', () => {
    const FOLLOWINGS_STATE = INITIAL_STATE.followings;

    it('should handle FOLLOW_USER action', () => {
      const followerId = '1';
      const followingId = '2';

      const nextState = followingsReducer(
        FOLLOWINGS_STATE,
        actions.followUser(followerId, followingId),
      );

      expect(nextState).toEqual({
        ...FOLLOWINGS_STATE,
        [followerId]: {
          byId: [followingId],
        },
      });

      const newUserFollowed = '3';

      const newState = followingsReducer(
        nextState,
        actions.followUser(followerId, newUserFollowed),
      );

      expect(newState).toEqual({
        ...nextState,
        [followerId]: {
          byId: [followingId, newUserFollowed],
        },
      });
    });
  });
});
