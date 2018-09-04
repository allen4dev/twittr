export const INITIAL_STATE = {
  entities: {},
  replies: {},
  favorited: {},
};

export function addTweetReplies(state, action) {
  const { id, replies } = action.payload;

  const tweetReplies = state[id] ? state[id].byId : [];

  return [...tweetReplies, ...replies];
}

export function addFavoritedTweet(state, action) {
  const { userId, tweetId } = action.payload;
  const favorited = state[tweetId] ? state[userId] : [];

  return [...favorited, userId];
}
