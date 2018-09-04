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

export function addTweets(id, tweets) {
  return {
    type: actionTypes.ADD_TWEETS,
    payload: { id, tweets },
  };
}

export function followUser(followerId, followingId) {
  return {
    type: actionTypes.FOLLOW_USER,
    payload: { followerId, followingId },
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

export function follow({ followerId, followingId }) {
  return async (dispatch, getState) => {
    const { token } = getState().users.current;

    await api.users.follow(followingId, token);

    dispatch(followUser(followerId, followingId));
  };
}
