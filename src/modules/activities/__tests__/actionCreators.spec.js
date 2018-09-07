import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

it('should create an action to create add a list of activities', () => {
  const activities = {
    '1': { type: 'activities', id: '1' },
    '2': { type: 'activities', id: '2' },
  };

  const expectedAction = {
    type: actionTypes.ADD_ACTIVITIES,
    payload: { activities },
  };

  expect(actions.addActivities(activities)).toEqual(expectedAction);
});
