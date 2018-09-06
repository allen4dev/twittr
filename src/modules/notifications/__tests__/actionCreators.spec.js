import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

describe('notifications - action creators', () => {
  it('should create an action to add a list of notification', () => {
    const uid = '1';

    const notifications = {
      '10': { type: 'notifications', id: '10' },
      '11': { type: 'notifications', id: '11' },
    };

    const expectedAction = {
      type: actionTypes.ADD_NOTIFICATIONS,
      payload: { uid, notifications },
    };

    expect(actions.addNotifications(uid, notifications)).toEqual(
      expectedAction,
    );
  });
});
