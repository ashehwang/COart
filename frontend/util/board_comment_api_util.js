export const fetchBoardPostComments = (boardPostId) =>
  $.ajax({
    url: `/api/board_posts/${boardPostId}/board_comments`,
    method: "GET",
  });

export const createBoardComment = (board_comment) =>
  $.ajax({
    method: "POST",
    url: `/api/board_comments`,
    data: { board_comment },
  });

export const deleteBoardComment = (boardCommentId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/board_comments/${boardCommentId}`,
  });

export const updateBoardComment = (boardComment) =>
  $.ajax({
    method: "PATCH",
    url: `/api/comments/${boardComment.id}`,
    data: { boardComment },
  });