import * as CharApiUtil from "../util/char_api_util";

export const RECEIVE_ALL_CHARS = "RECEIVE_ALL_CHARS";
export const RECEIVE_CHAR = "RECEIVE_CHAR";
export const REMOVE_CHAR = "REMOVE_CHAR";
export const RECEIVE_CHAR_ERROR = "RECEIVE_CHAR_ERROR";
export const CHANGE_SELECTED_CHAR = "CHANGE_SELECTED_CHAR";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_UNFOLLOW = "RECEIVE_UNFOLLOW";
export const RECEIVE_FEED_UNFOLLOW = "RECEIVE_FEED_UNFOLLOW";

const receiveAllChars = (payload) => ({
  type: RECEIVE_ALL_CHARS,
  payload: payload
});

const receiveChar = (char) => ({
  type: RECEIVE_CHAR,
  char
});

const removeChar = (character) => ({
  type: REMOVE_CHAR,
  character
});

const receiveSelectedChar = (payload) => ({
  type: CHANGE_SELECTED_CHAR,
  payload
});

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const receiveUnfollow = follow => ({
  type: RECEIVE_UNFOLLOW,
  follow
});

const receiveFeedUnfollow = follow => ({
  type: RECEIVE_FEED_UNFOLLOW,
  follow
});

export const fetchChars = () => (dispatch) =>
  CharApiUtil.fetchChars().then((payload) =>
    dispatch(receiveAllChars(payload))
  );

export const fetchChar = (charId) => (dispatch) =>
  CharApiUtil.fetchChar(charId).then((char) => dispatch(receiveChar(char)));

export const updateChar = (formData, id) => (dispatch) =>
  CharApiUtil.updateChar(formData, id).then((updatedChar) =>
    dispatch(receiveChar(updatedChar))
  );

export const deleteChar = (charId) => (dispatch) =>
  CharApiUtil.deleteChar(charId).then((character) => dispatch(removeChar(character)));

export const fetchUserChars = (userId) => (dispatch) =>
  CharApiUtil.fetchUserChars(userId).then((chars) =>
    dispatch(receiveAllChars(chars))
  );

export const createChar = (formData) => (dispatch) =>
  CharApiUtil.createChar(formData).then((char) =>
    dispatch(receiveChar(char))
  );

export const selectChar = (charId) => (dispatch) => (
  CharApiUtil.selectChar(charId).then((payload) => dispatch(receiveSelectedChar(payload)))
);

export const followCharacter = (follow) => (dispatch) =>
  CharApiUtil.followCharacter(follow).then((follow) => dispatch(receiveFollow(follow)));

export const unfollowCharacter = (unfollow) => (dispatch) =>
  CharApiUtil.unfollowCharacter(unfollow).then((follow) => dispatch(receiveUnfollow(follow)));

export const unfollowFeedCharacter = (unfollow) => (dispatch) =>
  CharApiUtil.unfollowCharacter(unfollow).then((follow) => dispatch(receiveFeedUnfollow(follow)));
