import { RECEIVE_ALL_BOARD_POSTS, RECEIVE_BOARD_POST, REMOVE_BOARD_POST } from '../actions/board_post_actions'

const boardPostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_BOARD_POSTS:
      if (!action.payload.boardPosts) return {};
      return action.payload.boardPosts;
    case RECEIVE_BOARD_POST:
      newState[action.boardPost.id] = action.boardPost;
      return newState;
    case REMOVE_BOARD_POST:
      delete newState[action.boardPostId];
      return newState;
    default:
      return state;
  }
};

export default boardPostsReducer;