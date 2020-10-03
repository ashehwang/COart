import { RECEIVE_USER_COMMENT, REMOVE_USER_COMMENT } from '../actions/user_comment_actions';
import { RECEIVE_FETCHED_USER } from '../actions/user_actions'; 

const userCommentsReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER_COMMENT:
      newState[action.userComment.id] = action.userComment;
      return newState;
    case REMOVE_USER_COMMENT:
      delete newState[action.userComment.id];
      return newState;
    case RECEIVE_FETCHED_USER:
      if(action.payload.user_comments) return action.payload.user_comments;
      return newState;
    default:
      return state;
  }
};

export default userCommentsReducer;