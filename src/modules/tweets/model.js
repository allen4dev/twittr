export const INITIAL_STATE = {
  entities: {},
  replies: {},
};

export function addTweetReplies(state, action) {
  const { id, replies } = action.payload;

  const tweetReplies = state[id] ? state[id].byId : [];

  return [...tweetReplies, ...replies];
}
