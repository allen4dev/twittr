import * as actionTypes from './actionTypes';

import api from 'utils/api';
import { normalizeResponse } from 'utils/helpers';

import tweetsModule from 'modules/tweets';

// Action creators

export function addReplies(replies) {
  return {
    type: actionTypes.ADD_REPLIES,
    payload: { replies },
  };
}

// Async actions

export function replyTweet(details) {
  return async (dispatch, getState) => {
    const { token } = getState().users;

    const { data: results } = await api.replies.replyTweet({ details, token });

    const normalized = normalizeResponse(results);

    dispatch(addReplies(normalized));
    dispatch(
      tweetsModule.actions.addReplies(details.tweetId, Object.keys(normalized)),
    );
  };
}
