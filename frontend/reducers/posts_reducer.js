import {
  RECEIVE_ALL_USER_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from "../actions/post_actions";
import { RECEIVE_USER_COMMENT } from '../actions/user_comment_actions';
import { RECEIVE_FETCHED_USER } from '../actions/user_actions';
// import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
// import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    // case RECEIVE_ALL_USER_POSTS:
    //   if (!action.payload.posts) return {};
    //   return action.payload.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    case RECEIVE_FETCHED_USER:
      if (!action.payload.posts) return {};
      return action.payload.posts;
    case RECEIVE_USER_COMMENT:
      if (!newState[action.userComment.post_id].user_comment_ids.includes(action.userComment.id)) {
        newState[action.userComment.post_id].user_comment_ids.push(action.userComment.id);
      }
      return newState;
    // case RECEIVE_COMMENT:
    //   if (
    //     !state[action.comment.post_id].comment_ids.includes(action.comment.id)
    //   ) {
    //     newState[action.comment.post_id].comment_ids.push(action.comment.id);
    //     return newState;
    //   } else {
    //     return state;
    //   }
    // case REMOVE_COMMENT:
    //   let targetIdx = newState[action.comment.post_id].comment_ids.indexOf(
    //     action.comment.id
    //   );
    //   newState[action.comment.post_id].comment_ids.splice(targetIdx, 1);
    //   return newState;
    // case LOGOUT_CURRENT_USER:
    //   return {};
    default:
      return state;
  }
};

export default postsReducer;
