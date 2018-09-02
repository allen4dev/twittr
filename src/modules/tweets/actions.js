import * as actionTypes from './actionTypes';

// Action creators
export function addUsers(users) {
  return {
    type: actionTypes.ADD_USERS,
    payload: { users },
  };
}
