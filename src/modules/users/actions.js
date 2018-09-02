import * as actionTypes from './actionTypes';

import api from 'utils/api';

// Action creators
export function setCurrentUser(id) {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: { id },
  };
}

export function setToken(token) {
  return {
    type: actionTypes.SET_TOKEN,
    payload: { token },
  };
}

export function addUsers(users) {
  return {
    type: actionTypes.ADD_USERS,
    payload: { users },
  };
}

// Async actions

export function register(credentials) {
  return async dispatch => {
    const { data: results } = await api.auth.register(credentials);

    dispatch(setToken(results.data.token));
    dispatch(setCurrentUser(results.data.id));

    return results.data;
  };
}

export function login(credentials) {
  return async dispatch => {
    const { data: results } = await api.auth.login(credentials);

    dispatch(setToken(results.data.token));
    dispatch(setCurrentUser(results.data.id));

    return results.data;
  };
}
