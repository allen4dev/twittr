import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

describe('tweets module action creators', () => {
  it('should create an action to add a tweet or a list of tweets', () => {
    const tweets = {
      '1': {
        type: 'tweets',
        id: '1',
        attributes: {
          body: 'Tweet body',
          // more fields
        },
      },
    };

    const expectedAction = {
      type: actionTypes.ADD_TWEETS,
      payload: { tweets },
    };

    expect(actions.addTweets(tweets)).toEqual(expectedAction);
  });
});
