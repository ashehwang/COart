import * as BoardPostApiUtil from "../util/board_post_api_util";

export const RECEIVE_ALL_BOARD_POSTS = "RECEIVE_ALL_BOARD_POSTS";
export const RECEIVE_BOARD_POST = "RECEIVE_BOARD_POST";
export const REMOVE_BOARD_POST = "REMOVE_BOARD_POST";

export const RECEIVE_BOARD_POST_ERROR = "RECEIVE_BOARD_POST_ERROR";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveAllBoardPosts = (boardPosts) => ({
  type: RECEIVE_ALL_BOARD_POSTS,
  boardPosts
}); 

const receiveBoardPost = (boardPost) => ({
  type: RECEIVE_BOARD_POST,
  boardPost
});

const removeBoardPost = (boardPostId) => ({
  type: REMOVE_BOARD_POST,
  boardPostId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors,
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});


export const fetchBoardPost = (boardPostId) => (dispatch) =>
  BoardPostApiUtil.fetchBoardPost(
    boardPostId
  ).then((boardPost) => dispatch(receiveBoardPost(boardPost)));

export const updateBoardPost = (formData, id) => (dispatch) =>
  BoardPostApiUtil.updateBoardPost(
    formData,
    id
  ).then((updatedBoardPost) =>
    dispatch(receiveBoardPost(updatedBoardPost))
  );

export const deleteBoardPost = (boardPostId) => (dispatch) =>
  BoardPostApiUtil.deleteBoardPost(boardPostId).then(() =>
    dispatch(removeBoardPost(boardPostId))
  );

export const fetchAllBoardPosts = (tagId) => (dispatch) =>
  BoardPostApiUtil.fetchAllBoardPosts(tagId).then((boardPosts) =>
    dispatch(receiveAllBoardPosts(boardPosts))
  );

export const createBoardPost = (formData) => (dispatch) =>
  BoardPostApiUtil.createBoardPost(formData).then(
    (boardPost) => dispatch(receiveBoardPost(boardPost)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );