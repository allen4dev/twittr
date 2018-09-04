import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from './../actions';
import * as actionTypes from './../actionTypes';
import { INITIAL_STATE } from './../model';

import axiosInstance from 'utils/axiosInstance';
import { normalizeResponse } from 'utils/helpers';

import tweetsModule from 'modules/tweets';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('replies module async actions', () => {
  beforeEach(function() {
    moxios.install(axiosInstance);
  });

  afterEach(function() {
    moxios.uninstall(axiosInstance);
  });

  it('creates ADD_REPLIES, tweetsModule.actionTypes.ADD_REPLIES after a replyTweet async action', async () => {
    const tweetId = '1';
    const body = 'Reply 1';

    const response = {
      data: {
        type: 'replies',
        id: '1',
        attributes: {
          body,
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        response,
        status: 201,
      });
    });

    const store = mockStore({
      users: {
        current: {
          ...INITIAL_STATE.current,
          token: 'xxx-xxx-xxx',
        },
      },
      ...INITIAL_STATE,
    });

    const normalized = normalizeResponse(response);

    const expectedActions = [
      {
        type: actionTypes.ADD_REPLIES,
        payload: { replies: normalized },
      },
      {
        type: tweetsModule.actionTypes.ADD_REPLIES,
        payload: { id: tweetId, replies: Object.keys(normalized) },
      },
    ];

    await store.dispatch(actions.replyTweet({ tweetId: '1', body }));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates FAVORITE_REPLY after a replyTweet async action', async () => {
    const userId = '1';
    const replyId = '1';

    const response = {
      data: {
        type: 'replies',
        id: replyId,
        // more fields
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        response,
        status: 200,
      });
    });

    const store = mockStore({
      users: {
        current: {
          token: 'xxx-xxx-xxx',
        },
      },
      ...INITIAL_STATE,
    });

    const expectedActions = [
      {
        type: actionTypes.FAVORITE_REPLY,
        payload: { userId, replyId },
      },
    ];

    await store.dispatch(actions.favorite(userId, replyId));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
