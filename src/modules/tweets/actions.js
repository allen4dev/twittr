import * as actionTypes from './actionTypes';

import api from 'utils/api';
import { normalizeResponse } from 'utils/helpers';

import usersModule from 'modules/users';

// Action creators
export function addTweets(tweets) {
  return {
    type: actionTypes.ADD_TWEETS,
    payload: { tweets },
  };
}

export function addReplies(id, replies) {
  return {
    type: actionTypes.ADD_REPLIES,
    payload: { id, replies },
  };
}

export function favoriteTweet(userId, tweetId) {
  return {
    type: actionTypes.FAVORITE_TWEET,
    payload: { userId, tweetId },
  };
}

// Async actions
export function createTweet(id, details) {
  return async (dispatch, getState) => {
    const token = getState().users.current.token;
    const { data: results } = await api.tweets.createTweet({ details, token });

    const tweet = normalizeResponse(results);

    dispatch(addTweets(tweet));
    dispatch(usersModule.actions.addTweets(id, Object.keys(tweet)));
  };
}

export function favorite(userId, tweetId) {
  return async (dispatch, getState) => {
    const { token } = getState().users.current;

    await api.tweets.favorite({ id: tweetId, token });

    dispatch(favoriteTweet(userId, tweetId));
  };
}
