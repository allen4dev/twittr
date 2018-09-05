export const INITIAL_STATE = {
  current: {
    id: null,
    token: null,
    timeline: {
      tweets: [],
      loading: null,
      nextPage: null,
    },
  },
  tweets: {},
  followers: {},
  followings: {},
};

export function addUserTweets(state, action) {
  const { id, tweets } = action.payload;

  const userTweets = state[id] ? state[id].byId : [];

  return [...userTweets, ...tweets];
}

export function addFollower(state, action) {
  const { followerId, followingId } = action.payload;

  const followers = state[followingId] ? state[followingId].byId : [];

  return [...followers, followerId];
}

export function userFollowed(state, action) {
  const { followerId, followingId } = action.payload;

  const followings = state[followerId] ? state[followerId].byId : [];

  return [...followings, followingId];
}
