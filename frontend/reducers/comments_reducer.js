import {  RECEIVE_COMMENT,  REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_FOLLOWING_CHARACTER_POSTS, RECEIVE_PAGE_CHARACTER_POSTS, RECEIVE_ALL_CHARACTER_POSTS, RECEIVE_PUBLIC_CHARACTER_POSTS } from '../actions/character_post_actions';
import { RECEIVE_VIEWING_COMMUNITY } from '../actions/community_actions'; 

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FOLLOWING_CHARACTER_POSTS:
      if(!action.payload.comments) return {};
      return action.payload.comments;
    case RECEIVE_PAGE_CHARACTER_POSTS:
      if(!action.payload.comments) return {};
      return action.payload.comments;
    case RECEIVE_ALL_CHARACTER_POSTS:
      if (!action.payload.comments) return {};
      return action.payload.comments;
    case RECEIVE_PUBLIC_CHARACTER_POSTS:
      return action.payload.comments;
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    case RECEIVE_VIEWING_COMMUNITY:
      if (action.payload.comments) return action.payload.comments;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;