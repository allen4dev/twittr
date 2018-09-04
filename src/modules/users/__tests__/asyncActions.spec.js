import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from './../actions';
import * as actionTypes from './../actionTypes';
import { INITIAL_STATE } from './../model';

import axiosInstance from 'utils/axiosInstance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('users module async actions', () => {
  beforeEach(function() {
    moxios.install(axiosInstance);
  });

  afterEach(function() {
    moxios.uninstall(axiosInstance);
  });

  it('creates a SET_TOKEN and a SET_CURRENT_USER actions after a successful registration', async () => {
    const user = {
      email: 'allen@example.test',
      password: 'secret',
      id: '1',
    };

    const token = 'xxx-xxx-xxx';

    const response = {
      data: {
        id: user.id,
        token,
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        response,
        status: 200,
      });
    });

    const store = mockStore(INITIAL_STATE);

    const expectedActions = [
      {
        type: actionTypes.SET_TOKEN,
        payload: { token },
      },
      {
        type: actionTypes.SET_CURRENT_USER,
        payload: { id: user.id },
      },
    ];

    await store.dispatch(
      actions.register({ email: user.email, password: user.password }),
    );

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates a SET_TOKEN and a SET_CURRENT_USER actions after a successful login', async () => {
    const user = {
      email: 'allen@example.test',
      password: 'secret',
      id: '1',
    };

    const token = 'xxx-xxx-xxx';

    const response = {
      data: {
        id: user.id,
        token,
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        response,
        status: 200,
      });
    });

    const store = mockStore(INITIAL_STATE);

    const expectedActions = [
      {
        type: actionTypes.SET_TOKEN,
        payload: { token },
      },
      {
        type: actionTypes.SET_CURRENT_USER,
        payload: { id: user.id },
      },
    ];

    await store.dispatch(
      actions.login({ email: user.email, password: user.password }),
    );

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates a FOLLOW_USER action after a follow async action', async () => {
    const followerId = '1';
    const followingId = '2';

    const response = {
      data: {
        type: 'users',
        id: followingId,
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
      users: { current: { token: 'xxx-xxx-xxx' } },
      ...INITIAL_STATE,
    });

    const expectedActions = [
      {
        type: actionTypes.FOLLOW_USER,
        payload: { followerId, followingId },
      },
    ];

    await store.dispatch(actions.follow({ followerId, followingId }));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
