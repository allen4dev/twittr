import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

import axiosInstance from 'utils/axiosInstance';

import { normalizeResponse } from 'utils/helpers';

import usersModule from 'modules/users';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('tweets module', () => {
  beforeEach(function() {
    moxios.install(axiosInstance);
  });

  afterEach(function() {
    moxios.uninstall(axiosInstance);
  });

  it('creates ADD_TWEETS and usersModule.actionTypes.ADD_TWEETS actions after a createTweet async action', async () => {
    const uid = '1';
    const body = 'Tweet body';

    const response = {
      data: {
        type: 'tweets',
        id: '1',
        attributes: {
          body,
        },
      },
    };

    const normalizedResponse = normalizeResponse(response);

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
        ...INITIAL_STATE,
      },
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_TWEETS,
        payload: { tweets: normalizedResponse },
      },
      {
        type: usersModule.actionTypes.ADD_TWEETS,
        payload: { id: uid, tweets: Object.keys(normalizedResponse) },
      },
    ];

    await store.dispatch(actions.createTweet(uid, { body }));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates FAVORITE_TWEET action after a favorite async action', async () => {
    const userId = '1';
    const tweetId = '1';

    const response = {
      data: {
        type: 'tweets',
        id: tweetId,
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
          ...INITIAL_STATE.current,
          token: 'xxx-xxx-xxx',
        },
      },
      ...INITIAL_STATE,
    });

    const expectedActions = [
      {
        type: actionTypes.FAVORITE_TWEET,
        payload: { userId, tweetId },
      },
    ];

    await store.dispatch(actions.favorite(userId, tweetId));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates a RETWEET action after a retweet async action', async () => {
    const id = '1';
    const uid = '2';

    const response = {
      data: { id, type: 'tweets' },
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
          ...INITIAL_STATE.current,
          token: 'xxx-xxx-xxx',
        },
      },
      ...INITIAL_STATE,
    });

    const expectedActions = [
      {
        type: actionTypes.RETWEET,
        payload: { id, uid },
      },
    ];

    await store.dispatch(actions.retweet({ id, uid }));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
