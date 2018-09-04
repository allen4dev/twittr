export const INITIAL_STATE = {
  entities: {},
  favorited: {},
};

export function addFavoriteReply(state, action) {
  const { userId, replyId } = action.payload;

  const replyFavorited = state[replyId] ? state[replyId] : [];

  return [...replyFavorited, userId];
}
