import {
  RECEIVE_MEMBERSHIP_REQUEST,
  REMOVE_MEMBERSHIP_REQUEST,
} from "../actions/membership_actions";
// import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
// import { RECEIVE_USER } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_VIEWING_COMMUNITY } from '../actions/community_actions';

const membershipRequestsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_MEMBERSHIP_REQUEST:
      newState[action.payload.id] = action.payload;
      return newState;
    case REMOVE_MEMBERSHIP_REQUEST:
      delete newState[action.membershipRequest.id];
      return newState;
    case RECEIVE_VIEWING_COMMUNITY:
      if (!action.payload.membership_requests) return newState;
      return action.payload.membership_requests;
    // case RECEIVE_CURRENT_USER:
    //   if (!action.payload.friendRequests) return {};
    //   return action.payload.friendRequests;
    // case RECEIVE_USER:
    //   if (!action.payload.friendRequests) return {};
    //   return action.payload.friendRequests;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default membershipRequestsReducer;
