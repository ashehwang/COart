import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";
export const CLEAR_USER_SEARCH = "CLEAR_USER_SEARCH";

const receiveSearchedUsers = (users) => ({
  type: RECEIVE_SEARCHED_USERS,
  users,
});

export const clearUserSearch = () => ({
  type: CLEAR_USER_SEARCH,
});

export const fetchSearchedUsers = (filter) => (dispatch) =>
  SearchApiUtil.fetchSearchedUsers(filter).then((users) =>
    dispatch(receiveSearchedUsers(users))
  );
