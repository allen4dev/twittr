import * as actionTypes from './actionTypes';

import api from 'utils/api';
import { normalizeResponse } from 'utils/helpers';

// Action creators

export function addActivities(activities) {
  return {
    type: actionTypes.ADD_ACTIVITIES,
    payload: { activities },
  };
}

// Async actions

export function fetchActivities() {
  return async (dispatch, getState) => {
    const { token } = getState().users.current;

    const { data: results } = await api.me.activities(token);

    const activities = normalizeResponse(results);

    dispatch(addActivities(activities));
  };
}
