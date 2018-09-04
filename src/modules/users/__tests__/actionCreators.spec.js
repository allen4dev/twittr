import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

describe('users module action creators', () => {
  it('should create an action to set the current user token', () => {
    const token = 'xxx-xxx-xxx';

    const expectedAction = {
      type: actionTypes.SET_TOKEN,
      payload: { token },
    };

    expect(actions.setToken(token), expectedAction);
  });

  it('should create an action to set the current user id', () => {
    const id = '1';

    const expectedAction = {
      type: actionTypes.SET_CURRENT_USER,
      payload: { id },
    };

    expect(actions.setCurrentUser(id), expectedAction);
  });

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

  it('should create an action to add a user tweet or list of tweet ids', () => {
    // An array of one or multiple tweet ids
    const id = '1';
    const tweetIds = [id];

    const expectedAction = {
      type: actionTypes.ADD_TWEETS,
      payload: { id, tweets: tweetIds },
    };

    expect(actions.addTweets(id, tweetIds)).toEqual(expectedAction);
  });

  it('should create an action to follow a user', () => {
    const followerId = '1';
    const followingId = '2';

    const expectedAction = {
      type: actionTypes.FOLLOW_USER,
      payload: { followerId, followingId },
    };

    expect(actions.followUser(followerId, followingId)).toEqual(expectedAction);
  });
});
