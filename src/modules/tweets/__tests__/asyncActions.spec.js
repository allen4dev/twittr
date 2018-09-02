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

  it('should pass', () => {
    expect(true).toBeTruthy();
  });
});
