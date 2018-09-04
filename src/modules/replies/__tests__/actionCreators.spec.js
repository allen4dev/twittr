import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

it('should create an action to add a reply or a list of replies', () => {
  const replies = [
    '1': {
      type: 'replies',
      id: '1',
      attributes: {
        body: 'Reply body',
      }
    }
  ]

  const expectedAction = {
    type: actionTypes.ADD_REPLIES,
    payload: { replies },
  };

  expect(actions.addReplies(replies)).toEqual(expectedAction);
});

it('should create an action to favorite a reply', () => {
  const userId = '1';
  const replyId = '1';

  const expectedAction = {
    type: actionTypes.FAVORITE_REPLY,
    payload: { userId, replyId }
  }

  expect(actions.favoriteReply(userId, replyId)).toEqual(expectedAction)
})
