import * as actionTypes from './actionTypes';

import api from 'utils/api';
import { normalizeResponse } from 'utils/helpers';

// Action creators

export function addNotifications(uid, notifications) {
  return {
    type: actionTypes.ADD_NOTIFICATIONS,
    payload: { uid, notifications },
  };
}

// Async actions

export function fetchNotifications(id) {
  return async (dispatch, getState) => {
    const { token } = getState().users.current;

    const { data: results } = await api.me.notifications(token);

    const notifications = normalizeResponse(results);

    dispatch(addNotifications(id, notifications));
  };
}
