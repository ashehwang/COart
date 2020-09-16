import * as CharApiUtil from "../util/char_api_util";

export const RECEIVE_ALL_CHARS = "RECEIVE_ALL_CHARS";
export const RECEIVE_CHAR = "RECEIVE_CHAR";
export const REMOVE_CHAR = "REMOVE_CHAR";
export const RECEIVE_CHAR_ERROR = "RECEIVE_CHAR_ERROR";

const receiveAllChars = (payload) => ({
  type: RECEIVE_ALL_CHARS,
  payload: payload
});

const receiveChar = (char) => ({
  type: RECEIVE_CHAR,
  char
});

const removeChar = (charId) => ({
  type: REMOVE_CHAR,
  charId
});

export const fetchChars = () => (dispatch) =>
  CharApiUtil.fetchChars().then((payload) =>
    dispatch(receiveAllChars(payload))
  );

export const fetchChar = (charId) => (dispatch) =>
  CharApiUtil.fetchChar(charId).then((char) => dispatch(receiveChar(char)));

// export const createChar = (char) => (dispatch) =>
//   CharApiUtil.createChar(char).then((char) => dispatch(receiveChar(char)));

export const updateChar = (formData, id) => (dispatch) =>
  CharApiUtil.updateChar(formData, id).then((updatedChar) =>
    dispatch(receiveChar(updatedChar))
  );

export const deleteChar = (charId) => (dispatch) =>
  CharApiUtil.deleteChar(charId).then(() => dispatch(removeChar(charId)));

export const fetchUserChars = (userId) => (dispatch) =>
  CharApiUtil.fetchUserChars(userId).then((chars) =>
    dispatch(receiveAllChars(chars))
  );

export const createChar = (formData) => (dispatch) =>
  CharApiUtil.createChar(formData).then((char) =>
    dispatch(receiveChar(char))
  );

// export const likeChar = (postLike) => (dispatch) =>
//   CharApiUtil.likeChar(postLike).then((post) => dispatch(receiveChar(post)));

// export const unlikeChar = (postLike) => (dispatch) =>
//   CharApiUtil.unlikeChar(postLike).then((post) => dispatch(receiveChar(post)));
