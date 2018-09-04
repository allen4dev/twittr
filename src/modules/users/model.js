export const INITIAL_STATE = {
  current: {
    id: null,
    token: null,
  },
  tweets: {},
};

export function addUserTweets(state, action) {
  const { id, tweets } = action.payload;

  const userTweets = state[id] ? state[id].byId : [];

  return [...userTweets, ...tweets];
}
