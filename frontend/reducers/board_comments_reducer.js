import {
  RECEIVE_ALL_BOARD_COMMENTS,
  RECEIVE_BOARD_COMMENT,
  REMOVE_BOARD_COMMENT,
} from "../actions/board_comment_actions";

import { RECEIVE_FETCHED_BOARD_POST } from '../actions/board_post_actions';

const boardCommentsReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FETCHED_BOARD_POST:
        return action.payload.boardComments;
    case RECEIVE_ALL_BOARD_COMMENTS:
      return action.boardComments;
    case RECEIVE_BOARD_COMMENT:
      newState[action.boardComment.id] = action.boardComment;
      return newState;
    case REMOVE_BOARD_COMMENT:
      delete newState[action.boardComment.id];
      return newState;

    default:
      return state;
  }
};

export default boardCommentsReducer;
