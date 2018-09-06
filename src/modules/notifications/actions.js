import * as actionTypes from './actionTypes';

export function addNotifications(uid, notifications) {
  return {
    type: actionTypes.ADD_NOTIFICATIONS,
    payload: { uid, notifications },
  };
}
