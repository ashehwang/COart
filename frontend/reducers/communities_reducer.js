import { RECEIVE_VIEWING_COMMUNITY, RECEIVE_ALL_OPEN_COMMUNITIES, RECEIVE_COMMUNITY, REMOVE_COMMUNITY } from '../actions/community_actions';
import { REMOVE_MEMBERSHIP_REQUEST, REMOVE_MEMBERSHIP, RECEIVE_MEMBERSHIP_REQUEST, RECEIVE_MEMBERSHIP } from '../actions/membership_actions';

const communitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_OPEN_COMMUNITIES:
      if (!action.payload) return {};
      return action.payload;
    case RECEIVE_COMMUNITY:
      newState[action.community.id] = action.community;
      return newState;
    case REMOVE_COMMUNITY:
      delete newState[action.communityId];
      return newState;
    case RECEIVE_VIEWING_COMMUNITY:
      newState[action.payload.community.url] = action.payload.community;
      return newState;
    case RECEIVE_MEMBERSHIP_REQUEST:
      newState[action.payload.url].membership_request_ids.push(action.payload.id);
      return newState;
    case REMOVE_MEMBERSHIP_REQUEST:
      let targetIdx = newState[action.membershipRequest.url].membership_request_ids.indexOf(action.membershipRequest.id);
      newState[action.membershipRequest.url].membership_request_ids.splice(targetIdx, 1);
      return newState;
    case RECEIVE_MEMBERSHIP:
      newState[action.membership.url].member_ids.push(action.membership.character_id);
      return newState;
    case REMOVE_MEMBERSHIP:
      let expelledCharIdx = newState[action.membership.url].member_ids.indexOf(action.membership.character_id);
      newState[action.membership.url].member_ids.splice(expelledCharIdx, 1);
      return newState;
    default:
      return state;
  }
};

export default communitiesReducer;