import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

import axiosInstance from 'utils/axiosInstance';

import { normalizeResponse } from 'utils/helpers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('tweets module', () => {
  beforeEach(function() {
    moxios.install(axiosInstance);
  });

  afterEach(function() {
    moxios.uninstall(axiosInstance);
  });

  it('creates ADD_PHOTOS action after fetch the user photos', async () => {
    const uid = '10';

    const response = {
      data: [{ type: 'photos', id: '1' }, { type: 'photos', id: '2' }],
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
        type: actionTypes.ADD_PHOTOS,
        payload: { id: uid, photos: normalized },
      },
    ];

    await store.dispatch(actions.fetchPhotos(uid));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
