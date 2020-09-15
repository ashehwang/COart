import {
  RECEIVE_SEARCHED_USERS,
  CLEAR_USER_SEARCH,
} from "../actions/search_actions";

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_USERS:
      return action.users;
    case CLEAR_USER_SEARCH:
      return {};
    default:
      return state;
  }
};

export default searchReducer;