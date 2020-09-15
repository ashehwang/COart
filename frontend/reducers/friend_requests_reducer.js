import {
  RECEIVE_FRIEND_REQUEST,
  REMOVE_FRIEND_REQUEST,
} from "../actions/friend_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const friendRequestsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FRIEND_REQUEST:
      newState[action.payload.friendRequest.id] = action.payload.friendRequest;
      return newState;
    case REMOVE_FRIEND_REQUEST:
      delete newState[action.payload.friendRequest.id];
      return newState;
    case RECEIVE_CURRENT_USER:
      if (!action.payload.friendRequests) return {};
      return action.payload.friendRequests;
    case RECEIVE_USER:
      if (!action.payload.friendRequests) return {};
      return action.payload.friendRequests;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default friendRequestsReducer;
