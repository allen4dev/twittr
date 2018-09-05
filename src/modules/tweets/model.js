export const INITIAL_STATE = {
  entities: {},
  replies: {},
  favorited: {},
  retweeted: {},
};

export function addTweetReplies(state, action) {
  const { id, replies } = action.payload;

  const tweetReplies = state[id] ? state[id].byId : [];

  return [...tweetReplies, ...replies];
}

export function addFavoritedTweet(state, action) {
  const { userId, tweetId } = action.payload;
  const favorited = state[tweetId] ? state[tweetId] : [];

  return [...favorited, userId];
}

export function retweetedTweet(state, action) {
  const { id, uid } = action.payload;
  const retweetedBy = state[id] ? state[id] : [];

  return [...retweetedBy, uid];
}
