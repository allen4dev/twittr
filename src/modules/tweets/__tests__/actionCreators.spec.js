import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

it('should create an action to add a user or a list of users', () => {
  const users = {
    '1': {
      type: 'users',
      id: '1',
      attributes: {
        username: 'Allen',
        // more fields
      },
    },
    // more users
  };

  const expectedAction = {
    type: actionTypes.ADD_USERS,
    payload: { users },
  };

  expect(actions.addUsers(users)).toEqual(expectedAction);
});
