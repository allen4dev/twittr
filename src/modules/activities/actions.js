import * as actionTypes from './actionTypes';

export function addActivities(activities) {
  return {
    type: actionTypes.ADD_ACTIVITIES,
    payload: { activities },
  };
}
