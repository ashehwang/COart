import * as UserCommentApiUtil from '../util/user_comment_api_util';

export const RECEIVE_USER_COMMENT = "RECEIVE_USER_COMMENT";
export const REMOVE_USER_COMMENT = "REMOVE_USER_COMMENT";

const receiveUserComment = (userComment) => ({
  type: RECEIVE_USER_COMMENT,
  userComment,
});

const removeUserComment = (userComment) => ({
  type: REMOVE_USER_COMMENT,
  userComment,
});

export const createUserComment = (userComment) => (dispatch) =>
  UserCommentApiUtil.createUserComment(userComment).then(
    (userComment) => dispatch(receiveUserComment(userComment)),
    (err) => console.log(err)
  );

export const updateUserComment = (userComment) => (dispatch) =>
  UserCommentApiUtil.updateUserComment(userComment).then((userComment) =>
    dispatch(receiveUserComment(userComment))
  );

export const deleteUserComment = (userCommentId) => (dispatch) =>
  UserCommentApiUtil.deleteUserComment(userCommentId).then((userComment) =>
    dispatch(removeUserComment(userComment))
  );
