import * as actionTypes from './actionTypes';

import api from 'utils/api';
import { normalizeResponse } from 'utils/helpers';

// Action creators
export function addTweets(tweets) {
  return {
    type: actionTypes.ADD_TWEETS,
    payload: { tweets },
  };
}

// Async actions
export function createTweet(details) {
  return async (dispatch, getState) => {
    const token = getState().users.current.token;
    const { data: results } = await api.tweets.createTweet({ details, token });

    const tweet = normalizeResponse(results);

    dispatch(addTweets(tweet));
  };
}
