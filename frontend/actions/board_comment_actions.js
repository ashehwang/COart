import * as BoardCommentApiUtil from "../util/board_comment_api_util"

export const RECEIVE_ALL_BOARD_COMMENTS = "RECEIVE_ALL_BOARD_COMMENTS";
export const RECEIVE_BOARD_COMMENT = "RECEIVE_BOARD_COMMENT";
export const REMOVE_BOARD_COMMENT = "REMOVE_BOARD_COMMENT";

// const receiveAllBoardComments = (boardComments) => ({
//   type: RECEIVE_ALL_BOARD_COMMENTS,
//   boardComments,
// });

const receiveBoardComment = (boardComment) => ({
  type: RECEIVE_BOARD_COMMENT,
  boardComment,
});

const removeBoardComment = (boardComment) => ({
  type: REMOVE_BOARD_COMMENT,
  boardComment,
});

// export const fetchBoardPostComments = (boardPostId) => (dispatch) =>
//   BoardCommentApiUtil.fetchBoardPostComments(boardPostId).then((boardComments) =>
//     dispatch(receiveAllBoardComments(boardComments))
//   );

export const createBoardComment = (boardComment) => (dispatch) =>
  BoardCommentApiUtil.createBoardComment(boardComment).then(
    (boardComment) => dispatch(receiveBoardComment(boardComment)),
    (err) => console.log(err)
  );

export const updateBoardComment = (boardComment) => (dispatch) =>
  BoardCommentApiUtil.updateBoardComment(boardComment).then((boardComment) =>
    dispatch(receiveBoardComment(boardComment))
  );

export const deleteBoardComment = (boardCommentId) => (dispatch) =>
  BoardCommentApiUtil.deleteBoardComment(boardCommentId).then((boardComment) =>
    dispatch(removeBoardComment(boardComment))
  );
