export const INITIAL_STATE = {
  current: {
    id: null,
    token: null,
  },
  tweets: {},
  followers: {},
};

export function addUserTweets(state, action) {
  const { id, tweets } = action.payload;

  const userTweets = state[id] ? state[id].byId : [];

  return [...userTweets, ...tweets];
}

export function addFollower(state, action) {
  const { followerId, followingId } = action.payload;

  const followers = state[followerId] ? state[followerId].byId : [];

  return [...followers, followingId];
}
