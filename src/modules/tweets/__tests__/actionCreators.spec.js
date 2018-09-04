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

  it('should create an action to add a reply or a list of replies of a tweet', () => {
    const id = '1';
    const replies = {
      '1': {
        type: 'replies',
        id: '1',
        attributes: {
          body: 'Reply 1',
        },
      },
    };

    const expectedAction = {
      type: actionTypes.ADD_REPLIES,
      payload: { id, replies },
    };

    expect(actions.addReplies(id, replies)).toEqual(expectedAction);
  });

  it('should create an action to favorite a tweet', () => {
    const id = '1';

    const expectedAction = {
      type: actionTypes.FAVORITE_TWEET,
      payload: { id },
    };

    expect(actions.favoriteTweet(id)).toEqual(expectedAction);
  });
});
