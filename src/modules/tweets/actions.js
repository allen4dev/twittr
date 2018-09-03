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

// Async actions
export function createTweet(id, details) {
  return async (dispatch, getState) => {
    const token = getState().users.current.token;
    const { data: results } = await api.tweets.createTweet({ details, token });

    const tweet = normalizeResponse(results);
    console.log(tweet);
    dispatch(addTweets(tweet));
    dispatch(usersModule.actions.addTweets(id, Object.keys(tweet)));
  };
}
