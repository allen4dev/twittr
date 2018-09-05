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

  it('should create an action with all the required data to favorite a tweet', () => {
    const userId = '1';
    const tweetId = '1';

    const expectedAction = {
      type: actionTypes.FAVORITE_TWEET,
      payload: { userId, tweetId },
    };

    expect(actions.favoriteTweet(userId, tweetId)).toEqual(expectedAction);
  });

  it('should create an action to retweet a tweet', () => {
    const id = '1';
    const uid = '2';

    const expectedAction = {
      type: actionTypes.RETWEET,
      payload: { id, uid },
    };

    expect(actions.retweetTweet(id, uid)).toEqual(expectedAction);
  });
});
