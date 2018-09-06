import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

import { normalizeResponse } from 'utils/helpers';

import axiosInstance from 'utils/axiosInstance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('tweets module', () => {
  beforeEach(function() {
    moxios.install(axiosInstance);
  });

  afterEach(function() {
    moxios.uninstall(axiosInstance);
  });

  it('creates ADD_NOTIFICATIONS action after fetch the user notifications', async () => {
    const uid = '1';

    const response = {
      data: [
        {
          type: 'notifications',
          id: '10',
        },
        {
          type: 'notifications',
          id: '11',
        },
      ],
    };

    const normalized = normalizeResponse(response);

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
        ...INITIAL_STATE,
      },
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_NOTIFICATIONS,
        payload: { uid, notifications: normalized },
      },
    ];

    await store.dispatch(actions.fetchNotifications(uid));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
