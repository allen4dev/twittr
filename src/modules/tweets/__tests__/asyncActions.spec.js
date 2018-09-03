import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from './../actions';
import * as actionTypes from './../actionTypes';
import { INITIAL_STATE } from './../model';

import axiosInstance from 'utils/axiosInstance';
import { normalizeResponse } from 'utils/helpers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('users module', () => {
  beforeEach(function() {
    moxios.install(axiosInstance);
  });

  afterEach(function() {
    moxios.uninstall(axiosInstance);
  });

  it('creates ADD_TWEETS action after a createTweet async action', async () => {
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

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        response,
        status: 201,
      });
    });

    const store = mockStore({
      users: {
        ...INITIAL_STATE,
        current: {
          ...INITIAL_STATE.current,
          token: 'xxx-xxx-xxx',
        },
      },
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_TWEETS,
        payload: { tweets: normalizeResponse(response) },
      },
    ];

    await store.dispatch(actions.createTweet({ body }));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
