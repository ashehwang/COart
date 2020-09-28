import { RECEIVE_ALL_OPEN_COMMUNITIES, RECEIVE_COMMUNITY, REMOVE_COMMUNITY } from '../actions/community_actions';

const communitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_OPEN_COMMUNITIES:
      if (!action.payload.communities) return {};
      return action.payload.communities;
    case RECEIVE_COMMUNITY:
      newState[action.community.id] = action.community;
      return newState;
    case REMOVE_COMMUNITY:
      delete newState[action.communityId];
      return newState;
    default:
      return state;
  }
};

export default communitiesReducer;