import * as CommentApiUtil from "../util/comment_api_util";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments,
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment,
});

export const fetchPostComments = (postId) => (dispatch) =>
  CommentApiUtil.fetchPostComments(postId).then((comments) =>
    dispatch(receiveAllComments(comments))
  );

export const createComment = (comment) => (dispatch) =>
  CommentApiUtil.createComment(comment).then(
    (comment) => dispatch(receiveComment(comment)),
    (err) => console.log(err)
  );

export const updateComment = (comment) => (dispatch) =>
  CommentApiUtil.updateComment(comment).then((comment) =>
    dispatch(receiveComment(comment))
  );

export const deleteComment = (commentId) => (dispatch) =>
  CommentApiUtil.deleteComment(commentId).then((comment) =>
    dispatch(removeComment(comment))
  );

export const likeComment = (commentLike) => (dispatch) =>
  CommentApiUtil.likeComment(commentLike).then((comment) =>
    dispatch(receiveComment(comment))
  );

export const unlikeComment = (commentLike) => (dispatch) =>
  CommentApiUtil.unlikeComment(commentLike).then((comment) =>
    dispatch(receiveComment(comment))
  );
