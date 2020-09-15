import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";

const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload,
});

const receiveUpdatedUser = (user) => ({
  type: RECEIVE_UPDATED_USER,
  user,
});

export const fetchUser = (userId) => (dispatch) =>
  UserApiUtil.fetchUser(userId).then((user) => dispatch(receiveUser(user)));

export const editUser = (formData, userId) => (dispatch) =>
  UserApiUtil.editUser(formData, userId).then((user) =>
    dispatch(receiveUpdatedUser(user))
  );