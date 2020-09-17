import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER,
  RECEIVE_UPDATED_USER,
} from "../actions/user_actions";
import { RECEIVE_ALL_POSTS } from "../actions/post_actions";
import {
  RECEIVE_FRIEND_REQUEST,
  REMOVE_FRIEND_REQUEST,
  RECEIVE_FRIEND,
  REMOVE_FRIEND,
} from "../actions/friend_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_CHARACTER_POSTS } from '../actions/character_post_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_USER:
      Object.values(action.payload.users).forEach((user) => {
        if (newState[user.id]) {
          newState[user.id] = Object.assign(user, newState[user.id]);
        } else {
          newState[user.id] = user;
        }
      });
      return newState;
    case RECEIVE_UPDATED_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_FRIEND_REQUEST:
      newState[action.payload.user.id] = action.payload.user;
      newState[
        action.payload.friendRequest.requestor_id
      ].sentFriendRequests.push(action.payload.friendRequest.requestee_id);
      return newState;
    case RECEIVE_ALL_POSTS:
      if (!action.payload.users) return state;
      Object.values(action.payload.users).forEach((user) => {
        if (newState[user.id]) {
          newState[user.id] = Object.assign(user, newState[user.id]);
        } else {
          newState[user.id] = user;
        }
      });
      return newState;
    case REMOVE_FRIEND_REQUEST:
      let targetIdx = newState[
        action.payload.friendRequest.requestee_id
      ].receivedFriendRequests.indexOf(action.payload.friendRequest.id);
      newState[
        action.payload.friendRequest.requestee_id
      ].receivedFriendRequests.splice(targetIdx, 1);
      return newState;
    case RECEIVE_FRIEND:
      newState[action.friend.user_id].friendship_ids.push(
        action.friend.friend_id
      );
      return newState;
    case REMOVE_FRIEND:
      let deleteIdx = newState[action.friend.friend_id].friendship_ids.indexOf(
        action.friend.user_id
      );
      newState[action.friend.friend_id].friendship_ids.splice(deleteIdx, 1);
      return newState;
    case RECEIVE_ALL_CHARACTER_POSTS:
      newState[action.payload.user.id] = action.payload.user;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;